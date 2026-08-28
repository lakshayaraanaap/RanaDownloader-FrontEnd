import axios from 'axios';
import { API_URL } from '../utils/constants';

const api = axios.create({
  baseURL: API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Bare instance for the refresh call itself — no interceptors, so a failing
// refresh can never recurse.
const rawApi = axios.create({ baseURL: API_URL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('rana-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let refreshInFlight = null;

async function refreshTokens() {
  const refreshToken = localStorage.getItem('rana-refresh');
  if (!refreshToken) throw new Error('no refresh token');
  // Single shared request when several calls 401 at once
  refreshInFlight ||= rawApi
    .post('/auth/refresh', { refreshToken })
    .then((res) => {
      const { accessToken, refreshToken: nextRefresh } = res.data.data;
      localStorage.setItem('rana-token', accessToken);
      localStorage.setItem('rana-refresh', nextRefresh);
      return accessToken;
    })
    .finally(() => {
      refreshInFlight = null;
    });
  return refreshInFlight;
}

function clearAuthStorage() {
  localStorage.removeItem('rana-token');
  localStorage.removeItem('rana-refresh');
}

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const original = error.config;
    const status = error.response?.status;
    const url = original?.url || '';

    // Access token expired — rotate tokens once and replay the request.
    // Auth endpoints themselves are excluded to avoid loops.
    if (
      status === 401 &&
      original &&
      !original._retriedAfterRefresh &&
      !url.startsWith('/auth/') &&
      localStorage.getItem('rana-refresh')
    ) {
      try {
        const newToken = await refreshTokens();
        original._retriedAfterRefresh = true;
        original.headers.Authorization = `Bearer ${newToken}`;
        return api(original);
      } catch {
        clearAuthStorage();
      }
    }

    if (error.config?.responseType === 'blob' && error.response?.data instanceof Blob) {
      return error.response.data.text().then((text) => {
        try { return Promise.reject(fail(JSON.parse(text).message, status)); }
        catch { return Promise.reject(fail(text || 'Download failed', status)); }
      });
    }
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.';
    return Promise.reject(fail(message, status));
  }
);

// Errors carry the HTTP status so callers can distinguish transient
// infrastructure failures (503/504/no response) from permanent ones.
function fail(message, status) {
  const err = new Error(message);
  err.status = status ?? null;
  return err;
}

// Free-hosting reality check: the backend runs on Render's free tier, which
// sleeps when idle and can return generic "Internal server error" while the
// extraction pipeline is overloaded. Those are transient — retrying a couple
// of times with backoff rescues most requests without user intervention.
function isTransient(err) {
  if (err.status === null || err.status === undefined) return true; // network/CORS failure
  if (err.status >= 500) return true;
  return /internal server error/i.test(err.message || '');
}

export async function analyzeUrlWithRetry(url, { retries = 2, baseDelay = 2500, onRetry } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await analyzeUrl(url);
    } catch (err) {
      lastErr = err;
      if (!isTransient(err) || attempt === retries) throw err;
      onRetry?.(attempt + 1);
      await new Promise((r) => setTimeout(r, baseDelay * (attempt + 1)));
    }
  }
  throw lastErr;
}

// Maps raw backend/network errors to messages a real person can act on.
export function friendlyError(err, fallback = 'Something went wrong. Please try again.') {
  const msg = err?.message || '';
  if (/internal server error/i.test(msg))
    return 'The download service is busy or restarting. Please wait ~30 seconds and try again.';
  if (/network error|err_network|failed to fetch/i.test(msg))
    return 'Could not reach the server. Check your internet connection and try again.';
  if (/timeout of|econnaborted/i.test(msg))
    return 'The server took too long to respond (it may be waking up). Please try again.';
  return msg || fallback;
}

// Wakes a sleeping Render free-tier instance before the user submits a link.
// An OPTIONS preflight is handled instantly by the CORS middleware — enough to
// spin the instance up without triggering any heavy extraction work.
let warmedUp = false;
export function warmUpServer() {
  if (warmedUp) return;
  warmedUp = true;
  fetch(`${API_URL}/analyze`, { method: 'OPTIONS', mode: 'cors' }).catch(() => {});
}

// Auth
export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const logout = () => api.post('/auth/logout');
export const forgotPassword = (email) => api.post('/auth/forgot-password', { email });
export const resetPassword = (data) => api.post('/auth/reset-password', data);

// User
export const getProfile = () => api.get('/users/profile');
export const updateProfile = (data) => api.put('/users/profile', data);
export const deleteProfile = () => api.delete('/users/profile');
export const changePassword = (data) => api.put('/users/change-password', data);

// Media
export const analyzeUrl = (url) => api.post('/analyze', { url }, { timeout: 120000 });export const downloadMedia = (data, onProgress) =>
  api.post('/download', data, {
    responseType: 'blob',
    timeout: 600000,
    onDownloadProgress: onProgress
      ? (e) => onProgress({ loaded: e.loaded, total: e.total })
      : undefined,
  });

// Instant direct download URL — the backend pipes the platform CDN file
// straight to the browser (Content-Disposition attachment), so the user's
// native download manager handles it. Nothing is stored server-side.
export const buildDirectDownloadUrl = ({ url, mediaUrl, ext, filename }) => {
  const params = new URLSearchParams();
  if (url) params.set('url', url);
  if (mediaUrl) params.set('mediaUrl', mediaUrl);
  if (ext) params.set('ext', ext);
  if (filename) params.set('filename', filename);
  return `${API_URL}/download/direct?${params.toString()}`;
};

// HLS/DASH manifests can't be piped as a single file — those formats must use
// the server-side processing flow instead. Formats flagged _transcodeHeight
// (Threads "Normal"/"Low") are re-encoded server-side from the original, so
// piping their CDN URL would silently deliver full quality instead.
export const isStreamableFormat = (format) =>
  Boolean(format?._directUrl) &&
  !format._transcodeHeight &&
  !/\.(m3u8|mpd)(\?|$)/i.test(format._directUrl);

// History
export const getHistory = (params) => api.get('/history', { params });
export const deleteHistory = (id) => api.delete(`/history/${id}`);

// Contact
export const submitContact = (data) => api.post('/contact', data);

