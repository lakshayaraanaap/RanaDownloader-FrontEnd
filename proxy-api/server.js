import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

const CDN = 'https://cdn.jsdelivr.net/gh/proxifly/free-proxy-list@main/proxies';

const listUrl = (type, country) =>
  country
    ? `${CDN}/countries/${country}/data.json`
    : type === 'all'
      ? `${CDN}/all/data.json`
      : `${CDN}/protocols/${type}/data.json`;

let cache = {};
let lastFetch = {};

async function fetchRaw(type = 'all', country = null) {
  const key = country ? `${country}_${type}` : type;
  const now = Date.now();
  if (cache[key] && now - (lastFetch[key] || 0) < 10 * 60 * 1000) {
    return cache[key];
  }

  const url = listUrl(type, country);
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  cache[key] = data;
  lastFetch[key] = now;
  return data;
}

app.get('/api/proxies', async (req, res) => {
  try {
    const { type = 'all', country, limit, anonymity, protocol, https } = req.query;
    let proxies = await fetchRaw(type, country);

    if (protocol) proxies = proxies.filter((p) => p.protocol === protocol);
    if (anonymity) proxies = proxies.filter((p) => p.anonymity === anonymity);
    if (https !== undefined) {
      const val = https === 'true';
      proxies = proxies.filter((p) => p.https === val);
    }
    if (limit) proxies = proxies.slice(0, parseInt(limit));

    res.json({ success: true, source: 'proxifly', count: proxies.length, proxies });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/proxies/random', async (req, res) => {
  try {
    const { type = 'all', country, count = 1, protocol, anonymity } = req.query;
    let proxies = await fetchRaw(type, country);
    if (protocol) proxies = proxies.filter((p) => p.protocol === protocol);
    if (anonymity) proxies = proxies.filter((p) => p.anonymity === anonymity);
    const shuffled = [...proxies].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, parseInt(count));
    res.json({ success: true, source: 'proxifly', count: selected.length, proxies: selected });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/proxies/ip', async (req, res) => {
  try {
    const { type = 'all', country, protocol } = req.query;
    const proxies = await fetchRaw(type, country);
    let filtered = protocol ? proxies.filter((p) => p.protocol === protocol) : proxies;
    res.json({ success: true, source: 'proxifly', count: filtered.length, proxies: filtered.map((p) => `${p.ip}:${p.port}`) });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/countries', async (req, res) => {
  try {
    const proxies = await fetchRaw('all');
    const countries = [...new Set(proxies.map((p) => p.geolocation?.country).filter(Boolean))];
    res.json({ success: true, count: countries.length, countries });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxifly proxy API running on http://localhost:${PORT}`);
});
