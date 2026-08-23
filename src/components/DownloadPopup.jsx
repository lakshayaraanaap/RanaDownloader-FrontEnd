import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { DL_STATUS as STATUS } from '../utils/dlStatus';

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

export default function DownloadPopup({
  open,
  onClose,
  status,
  loaded,
  total,
  fileName,
  errorMessage,
  hintText,
}) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (status === STATUS.DONE) {
      const t = setTimeout(onClose, 2200);
      return () => clearTimeout(t);
    }
  }, [status, onClose]);

  const percent = total > 0 ? Math.min(Math.round((loaded / total) * 100), 100) : 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          className="dl-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === overlayRef.current && status !== STATUS.DOWNLOADING) onClose();
          }}
        >
          <motion.div
            className="dl-popup glass-card"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              className="dl-popup-close"
              onClick={onClose}
              disabled={status === STATUS.DOWNLOADING}
            >
              <X size={18} />
            </button>

            <div className="dl-popup-icon">
              {status === STATUS.PREPARING && <Loader2 size={40} className="spin" />}
              {status === STATUS.DOWNLOADING && <Download size={40} />}
              {status === STATUS.DONE && <CheckCircle size={40} className="text-green" />}
              {status === STATUS.ERROR && <AlertCircle size={40} className="text-red" />}
            </div>

            <h3 className="dl-popup-title">
              {status === STATUS.PREPARING && 'Preparing Download...'}
              {status === STATUS.DOWNLOADING && 'Downloading'}
              {status === STATUS.DONE && 'Download Complete'}
              {status === STATUS.ERROR && 'Download Failed'}
            </h3>

            {fileName && <p className="dl-popup-file">{fileName}</p>}

            {(status === STATUS.DOWNLOADING || status === STATUS.DONE) && total > 0 && (
              <div className="dl-popup-progress-wrap">
                <div className="dl-popup-progress-bar">
                  <motion.div
                    className="dl-popup-progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="dl-popup-progress-info">
                  <span>{formatBytes(loaded)} / {formatBytes(total)}</span>
                  <span>{percent}%</span>
                </div>
              </div>
            )}

            {status === STATUS.DOWNLOADING && total === 0 && (
              <div className="dl-popup-progress-wrap">
                <div className="dl-popup-progress-indeterminate" />
                <div className="dl-popup-progress-info">
                  <span>{formatBytes(loaded)} downloaded</span>
                </div>
              </div>
            )}

            {status === STATUS.PREPARING && (
              <p className="dl-popup-hint">Fetching from server, this may take a moment...</p>
            )}

            {status === STATUS.DONE && (
              <p className="dl-popup-hint text-green">{hintText || 'File saved to your downloads folder'}</p>
            )}

            {status === STATUS.ERROR && (
              <>
                <p className="dl-popup-hint text-red">{errorMessage || 'Something went wrong'}</p>
                <button className="btn-gradient-outline" onClick={onClose} style={{ marginTop: 12 }}>
                  Close
                </button>
              </>
            )}
          </motion.div>

          <style>{`
            .dl-popup-overlay {
              position: fixed; inset: 0; z-index: 9999;
              background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(6px);
              display: flex; align-items: center; justify-content: center;
              padding: 20px;
            }
            .dl-popup {
              width: 100%; max-width: 420px; padding: 32px; text-align: center;
              position: relative; cursor: default;
            }
            .dl-popup:hover { transform: none; box-shadow: var(--shadow-lg); }
            .dl-popup-close {
              position: absolute; top: 12px; right: 12px;
              background: none; border: none; color: var(--text-muted);
              cursor: pointer; padding: 4px; border-radius: 6px; transition: var(--transition);
            }
            .dl-popup-close:hover:not(:disabled) { color: var(--text); background: var(--surface); }
            .dl-popup-close:disabled { opacity: 0.3; cursor: not-allowed; }
            .dl-popup-icon {
              margin-bottom: 16px; color: var(--primary);
              display: flex; justify-content: center;
            }
            .dl-popup-icon .text-green { color: #10b981; }
            .dl-popup-icon .text-red { color: #EF4444; }
            .dl-popup-icon .spin { animation: spin 1s linear infinite; }
            .dl-popup-title {
              font-size: 1.2rem; font-weight: 700; margin-bottom: 6px;
            }
            .dl-popup-file {
              color: var(--text-muted); font-size: 0.85rem;
              word-break: break-all; margin-bottom: 16px; max-height: 40px; overflow: hidden;
            }
            .dl-popup-progress-wrap { margin: 8px 0 4px; }
            .dl-popup-progress-bar {
              width: 100%; height: 8px; background: var(--surface);
              border-radius: 50px; overflow: hidden;
            }
            .dl-popup-progress-fill {
              height: 100%; background: var(--gradient-primary);
              border-radius: 50px;
            }
            .dl-popup-progress-indeterminate {
              width: 100%; height: 8px; background: var(--surface);
              border-radius: 50px; overflow: hidden; position: relative;
            }
            .dl-popup-progress-indeterminate::after {
              content: ''; position: absolute; inset: 0;
              background: var(--gradient-primary);
              animation: indeterminate 1.5s ease-in-out infinite;
              border-radius: 50px;
            }
            @keyframes indeterminate {
              0% { width: 0; left: 0; }
              50% { width: 60%; left: 20%; }
              100% { width: 0; left: 100%; }
            }
            .dl-popup-progress-info {
              display: flex; justify-content: space-between;
              font-size: 0.8rem; color: var(--text-muted); margin-top: 8px;
            }
            .dl-popup-hint {
              color: var(--text-muted); font-size: 0.85rem; margin-top: 8px;
            }
            .dl-popup-hint.text-green { color: #10b981; font-weight: 600; }
            .dl-popup-hint.text-red { color: #EF4444; }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
