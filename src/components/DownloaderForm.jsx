import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Search, Loader2 } from 'lucide-react';

export default function DownloaderForm({ onAnalyze, loading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onAnalyze(url.trim());
    }
  };

  return (
    <motion.div
      className="downloader-form-wrap"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form className="downloader-form" onSubmit={handleSubmit}>
        <div className="dl-input-wrapper">
          <Link size={20} className="dl-input-icon" />
          <input
            type="text"
            className="dl-input"
            placeholder="Paste video URL here (YouTube, Instagram, Facebook, X, Reddit, TikTok, Pinterest, LinkedIn, Threads, Snapchat, ShareChat)..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
            required
          />
          <button type="submit" className="btn-gradient dl-btn" disabled={loading}>
            {loading ? (
              <Loader2 size={18} className="spin" />
            ) : (
              <>
                <Search size={18} />
                <span>Analyze</span>
              </>
            )}
          </button>
        </div>
      </form>

      <style>{`
        .downloader-form-wrap {
          width: 100%;
          max-width: 750px;
          margin: 0 auto;
        }
        .dl-input-wrapper {
          display: flex;
          align-items: center;
          background: var(--glass);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          padding: 8px 8px 8px 24px;
          transition: var(--transition);
        }
        .dl-input-wrapper:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
        }
        .dl-input-icon { color: var(--text-muted); flex-shrink: 0; }
        .dl-input {
          flex: 1;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1rem;
          padding: 12px 16px;
          outline: none;
          min-width: 0;
        }
        .dl-input::placeholder { color: var(--text-muted); }
        .dl-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px !important;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
          .dl-input-wrapper {
            flex-direction: column;
            border-radius: 20px;
            padding: 12px;
          }
          .dl-input { width: 100%; text-align: center; padding: 12px; }
          .dl-input-icon { display: none; }
          .dl-btn { width: 100%; justify-content: center; border-radius: 14px !important; }
        }
      `}</style>
    </motion.div>
  );
}
