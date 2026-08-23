import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import DownloaderForm from '../components/DownloaderForm';
import VideoPreview from '../components/VideoPreview';
import DownloadPopup from '../components/DownloadPopup';
import Loader from '../components/Loader';
import { analyzeUrl, downloadMedia, buildDirectDownloadUrl, isStreamableFormat, uploadCookies } from '../services/api';
import { useToast } from '../context/ToastContext';
import { useAuth } from '../context/AuthContext';
import { DL_STATUS } from '../utils/dlStatus';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export default function Downloader() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const toast = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(null);

  const [dlOpen, setDlOpen] = useState(false);
  const [dlStatus, setDlStatus] = useState(DL_STATUS.PREPARING);
  const [dlLoaded, setDlLoaded] = useState(0);
  const [dlTotal, setDlTotal] = useState(0);
  const [dlFileName, setDlFileName] = useState('');
  const [dlError, setDlError] = useState('');
  const [instantHint, setInstantHint] = useState(false);

  const handleAnalyze = useCallback(
    async (url) => {
      if (!url || !url.trim()) return;
      setLoading(true);
      setError(null);
      setVideo(null);
      try {
        const res = await analyzeUrl(url);
        const analysis = res.data.analysis;
        setVideo(analysis);
        toast.success('Media analyzed successfully!');
      } catch (err) {
        setError(err.message || 'Failed to analyze the URL. Please check and try again.');
        toast.error(err.message || 'Analysis failed');
      } finally {
        setLoading(false);
      }
    },
    [toast]
  );

  // Auto-analyze when the page is opened with ?url=... (e.g. shared links).
  useEffect(() => {
    const urlParam = searchParams.get('url');
    if (urlParam) {
      handleAnalyze(urlParam);
    }
  }, [handleAnalyze, searchParams]);

  const handleDownload = async (format, mode = 'video') => {
    const ext = mode === 'image' ? (format.ext || 'jpg') : mode === 'audio' ? (format.ext || 'm4a') : (format.ext || 'mp4');
    const label = mode === 'image' ? (format.label || 'Photo') : mode === 'audio' ? 'Audio' : 'Video';
    const safeQuality = (format.quality || '').replace(/[^a-zA-Z0-9]/g, '-');
    const baseName = `${video.title || 'download'}_${safeQuality || mode}`.replace(/[<>:"/\\|?*]+/g, '_').substring(0, 180);
    const fileName = `${baseName}.${ext}`;

    // INSTANT PATH — the backend pipes the platform's CDN file straight to the
    // browser as an attachment. The user's native download manager takes over
    // immediately: no "Preparing..." wait, no server storage, and multiple
    // downloads can run in parallel (e.g. gallery images).
    if (isStreamableFormat(format)) {
      try {
        const directUrl = buildDirectDownloadUrl({
          url: video.url,
          mediaUrl: format._directUrl,
          ext,
          filename: baseName,
        });
        const a = document.createElement('a');
        a.href = directUrl;
        a.rel = 'noopener';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setDlOpen(true);
        setDlStatus(DL_STATUS.DONE);
        setDlLoaded(0);
        setDlTotal(0);
        setDlFileName(fileName);
        setDlError('');
        setInstantHint(true);
        toast.success(`${label} download started!`);
      } catch (err) {
        toast.error(err.message || 'Could not start download');
      }
      return;
    }

    // FALLBACK PATH — formats that need server-side processing (HLS/DASH
    // merge, audio extraction) stream through the backend with progress.
    setDlOpen(true);
    setDlStatus(DL_STATUS.PREPARING);
    setDlLoaded(0);
    setDlTotal(0);
    setDlFileName(fileName);
    setDlError('');
    setInstantHint(false);
    setDownloading(true);

    try {
      const blob = await downloadMedia(
        { url: video.url, quality: format.quality, mode, mediaUrl: format._directUrl, cookies: video._cookies },
        ({ loaded, total }) => {
          setDlLoaded(loaded);
          if (total) setDlTotal(total);
          setDlStatus(DL_STATUS.DOWNLOADING);
        }
      );

      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);

      setDlStatus(DL_STATUS.DONE);
      toast.success(`${label} downloaded!`);
    } catch (err) {
      setDlStatus(DL_STATUS.ERROR);
      setDlError(err.message || 'Download failed');
      toast.error(err.message || 'Download failed');
    } finally {
      setDownloading(false);
    }
  };

  const closeDlPopup = useCallback(() => setDlOpen(false), []);

  return (
    <motion.div {...pageTransition}>
      <section className="section dl-page">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title" style={{ fontSize: '2.5rem', marginTop: 80 }}>
              <span className="gradient-text">Media Downloader</span>
            </h1>
            <p className="section-subtitle">
              Paste a URL from any supported platform to get started.
            </p>
          </motion.div>

          <DownloaderForm onAnalyze={handleAnalyze} loading={loading} />

          <div style={{ marginTop: 40 }}>
            {loading && <Loader text="Analyzing URL..." />}

            {error && (() => {
              const errLower = error.toLowerCase();
              const needsCookies = errLower.includes('cookies') || errLower.includes('twitter') || errLower.includes('authentication');
              const isFacebook = errLower.includes('facebook') || errLower.includes('fb.com');
              const isInstagram = errLower.includes('instagram') || errLower.includes('instagr');
              const showCookieUI = needsCookies || isFacebook || isInstagram;

              const platformDomain = isFacebook ? 'facebook.com' : isInstagram ? 'instagram.com' : 'x.com';

              return (
                <motion.div
                  className="error-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="error-text">{error}</p>
                  {showCookieUI ? (
                    <div style={{ marginTop: 12 }}>
                      {user ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                          <label className="btn-gradient" style={{ cursor: 'pointer', minWidth: 220 }}>
                            Upload cookies.txt
                            <input
                              type="file"
                              accept=".txt"
                              style={{ display: 'none' }}
                              onChange={async (e) => {
                                const file = e.target.files[0];
                                if (!file) return;
                                try {
                                  const text = await file.text();
                                  await uploadCookies(text);
                                  toast.success('Cookies uploaded! Try the link again.');
                                  setError(null);
                                } catch (err) {
                                  toast.error(err.message || 'Failed to upload cookies');
                                }
                              }}
                            />
                          </label>
                          <p className="dl-hint" style={{ margin: '8px 0 0', fontSize: '0.82rem', lineHeight: 1.5 }}>
                            1. Install{' '}
                            <a href="https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent, #6366f1)' }}>
                              &quot;Get cookies.txt LOCALLY&quot;
                            </a>{' '}
                            Chrome extension<br />
                            2. Log into <strong>{platformDomain}</strong> in Chrome<br />
                            3. Visit <strong>{platformDomain}</strong>, click the extension icon, export<br />
                            4. Upload the exported file above
                          </p>
                        </div>
                      ) : (
                        <p className="dl-hint" style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                          This platform requires login cookies.{' '}
                          <Link to="/login" state={{ from: location.pathname + location.search }} className="auth-link">
                            Log in
                          </Link>{' '}
                          to enable cookie uploads.
                        </p>
                      )}
                    </div>
                  ) : (
                    <button className="btn-gradient-outline" onClick={() => setError(null)} style={{ marginTop: 12 }}>
                      Try Again
                    </button>
                  )}
                </motion.div>
              );
            })()}

            {!loading && video && (
              <VideoPreview video={video} onDownload={handleDownload} downloading={downloading} />
            )}

            {!loading && !video && !error && (
              <motion.div
                className="dl-placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="dl-placeholder-cards row g-3">
                  {['YouTube', 'Facebook', 'X (Twitter)', 'Pinterest', 'Instagram', 'LinkedIn', 'Reddit', 'Snapchat', 'Threads', 'ShareChat', 'TikTok', 'Vimeo', 'Dailymotion', 'Twitch', 'Bilibili', 'VK', 'Rumble', 'Bluesky'].map((p) => (
                    <div key={p} className="col-md-4 col-sm-6">
                      <div className="dl-placeholder-card glass-card">
                        <span>{p}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="dl-hint">Supported platforms — paste a link to begin</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .dl-page { padding-top: 40px; min-height: 100vh; }
        .error-card {
          padding: 28px;
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
          border-color: rgba(239, 68, 68, 0.3) !important;
        }
        .error-text { color: #EF4444; font-weight: 600; font-size: 1.05rem; }
        .dl-placeholder { text-align: center; }
        .dl-placeholder-card {
          padding: 20px;
          text-align: center;
          cursor: default;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .dl-hint {
          margin-top: 20px;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
      `}</style>

      <DownloadPopup
        open={dlOpen}
        onClose={closeDlPopup}
        status={dlStatus}
        loaded={dlLoaded}
        total={dlTotal}
        fileName={dlFileName}
        errorMessage={dlError}
        hintText={instantHint ? 'Download started — check your browser\'s download manager' : undefined}
      />
    </motion.div>
  );
}
