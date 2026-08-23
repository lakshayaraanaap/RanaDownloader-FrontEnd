import { motion, AnimatePresence } from 'framer-motion';
import { Download, Clock, Film, ExternalLink, AlertCircle, Video, Music, Image, ImageDown } from 'lucide-react';

function getQualityBadge(quality) {
  const q = (quality || '').toLowerCase();
  if (q.includes('original')) return { text: 'MAX', color: '#8b5cf6' };
  if (q.includes('normal')) return { text: 'Med', color: '#3b82f6' };
  if (q.includes('low')) return { text: 'Low', color: '#9ca3af' };
  if (q.includes('4k') || q.includes('2160')) return { text: '4K', color: '#f59e0b' };
  if (q.includes('2k') || q.includes('1440')) return { text: '2K', color: '#10b981' };
  if (q.includes('1080')) return { text: 'FHD', color: '#6366f1' };
  if (q.includes('720')) return { text: 'HD', color: '#3b82f6' };
  if (q.includes('480')) return { text: 'SD', color: '#6b7280' };
  if (q.includes('360')) return { text: '360p', color: '#9ca3af' };
  if (q.includes('240') || q.includes('144')) return { text: 'Low', color: '#9ca3af' };
  const h = parseInt(quality) || 0;
  if (h >= 2160) return { text: '4K', color: '#f59e0b' };
  if (h >= 1440) return { text: '2K', color: '#10b981' };
  if (h >= 1080) return { text: 'FHD', color: '#6366f1' };
  if (h >= 720) return { text: 'HD', color: '#3b82f6' };
  if (h >= 480) return { text: 'SD', color: '#6b7280' };
  return { text: 'Best', color: '#8b5cf6' };
}

function getAudioBadge(fmt) {
  const label = (fmt.label || '').toLowerCase();
  if (label.includes('embedded')) return { text: 'AAC', color: '#6366f1' };
  const k = parseInt(fmt.abr || fmt.quality) || 0;
  if (k >= 256) return { text: 'High', color: '#10b981' };
  if (k >= 128) return { text: 'Med', color: '#3b82f6' };
  if (k >= 64) return { text: 'Low', color: '#9ca3af' };
  return { text: 'Med', color: '#3b82f6' };
}

export default function VideoPreview({ video, onDownload, downloading }) {
  if (!video) return null;

  const hasVideo = video.formats && video.formats.length > 0;
  const hasAudio = video.audioFormats && video.audioFormats.length > 0;
  const hasImages = video.images && video.images.length > 0;
  const hasNothing = !hasVideo && !hasImages && !hasAudio;

  return (
    <motion.div
      className="video-preview glass-card"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="vp-grid">
        <div className="vp-thumbnail-wrap">
          {video.thumbnail ? (
            <>
              <img src={video.thumbnail} alt={video.title} className="vp-thumbnail" />
              <a
                className="vp-thumb-download"
                href={video.thumbnail}
                download
                target="_blank"
                rel="noopener noreferrer"
                title="Download thumbnail"
              >
                <ImageDown size={18} />
              </a>
            </>
          ) : (
            <div className="vp-thumbnail-placeholder">
              <Film size={48} />
            </div>
          )}
          {video.duration && (
            <span className="vp-duration">
              <Clock size={12} /> {video.duration}
            </span>
          )}
        </div>

        <div className="vp-info">
          <h3 className="vp-title">{video.title || 'Untitled'}</h3>
          {video.platform && (
            <span className="vp-platform">{video.platform}</span>
          )}
          {video.author && (
            <p className="vp-author">By {video.author}</p>
          )}
        </div>
      </div>

      {hasVideo && (
        <div className="vp-section">
          <div className="vp-section-header">
            <Video size={18} />
            <h4>Video Quality</h4>
            <span className="vp-count">{video.formats.length}</span>
          </div>
          <div className="vp-format-list">
            <AnimatePresence mode="popLayout">
              {video.formats.map((fmt, i) => {
                const badge = getQualityBadge(fmt.quality);
                return (
                  <motion.button
                    key={`vid-${fmt.itag || i}`}
                    className="vp-format-btn"
                    onClick={() => onDownload(fmt, 'video')}
                    disabled={downloading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <div className="vp-format-left">
                      <span className="vp-quality-badge" style={{ background: badge.color }}>{badge.text}</span>
                      <div className="vp-format-details">
                        <span className="vp-format-quality">{fmt.label || fmt.quality}</span>
                        <span className="vp-format-meta">
                          {fmt.ext?.toUpperCase()}
                          {fmt.fps && ` • ${fmt.fps}fps`}
                          {fmt.type && ` • ${fmt.type}`}
                        </span>
                      </div>
                    </div>
                    <div className="vp-format-right">
                      {fmt.size && <span className="vp-format-size">{fmt.size}</span>}
                      <Download size={16} className="vp-download-icon" />
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      )}

      {hasAudio && (
        <div className="vp-section">
          <div className="vp-section-header">
            <Music size={18} />
            <h4>Audio</h4>
            <span className="vp-count">{video.audioFormats.length}</span>
          </div>
          <div className="vp-format-list">
            <AnimatePresence mode="popLayout">
              {video.audioFormats.map((fmt, i) => {
                const badge = getAudioBadge(fmt);
                return (
                  <motion.button
                    key={`aud-${fmt.itag || i}`}
                    className="vp-format-btn"
                    onClick={() => onDownload(fmt, 'audio')}
                    disabled={downloading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <div className="vp-format-left">
                      <span className="vp-quality-badge" style={{ background: badge.color }}>{badge.text}</span>
                      <div className="vp-format-details">
                        <span className="vp-format-quality">{fmt.label || fmt.quality}</span>
                        <span className="vp-format-meta">
                          {fmt.ext?.toUpperCase()}
                          {fmt.type && ` • ${fmt.type}`}
                        </span>
                      </div>
                    </div>
                    <div className="vp-format-right">
                      {fmt.size && <span className="vp-format-size">{fmt.size}</span>}
                      <Download size={16} className="vp-download-icon" />
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      )}

      {hasImages && (
        <div className="vp-section">
          <div className="vp-section-header">
            <Image size={18} />
            <h4>Images</h4>
            <span className="vp-count">{video.images.length}</span>
          </div>
          <div className="vp-images-grid">
            {video.images.map((img, i) => (
              <motion.div
                key={img.itag || i}
                className="vp-image-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <img
                  src={img.thumbnail || img._largeUrl || img.url || img._directUrl}
                  alt={img.label}
                  className="vp-image-thumb"
                  loading="lazy"
                  onError={(e) => {
                    const fallback = img._directUrl || img.url;
                    if (fallback && e.target.src !== fallback) e.target.src = fallback;
                  }}
                />
                <div className="vp-image-overlay">
                  <button
                    className="vp-image-download-btn"
                    onClick={() => onDownload(img, 'image')}
                    disabled={downloading}
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                </div>
                <span className="vp-image-label">{img.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {hasNothing && (
        <div className="vp-no-formats">
          <AlertCircle size={20} />
          <span>No media found for this post.</span>
        </div>
      )}

      {video.url && (
        <a href={video.url} target="_blank" rel="noopener noreferrer" className="vp-original-link">
          <ExternalLink size={14} />
          View Original
        </a>
      )}

      <style>{`
        .video-preview { padding: 28px; max-width: 750px; margin: 0 auto; }
        .vp-grid { display: flex; gap: 20px; margin-bottom: 20px; }
        .vp-thumbnail-wrap { position: relative; flex-shrink: 0; width: 200px; border-radius: 12px; overflow: hidden; }
        .vp-thumbnail { width: 100%; height: 130px; object-fit: cover; display: block; }
        .vp-thumb-download {
          position: absolute; top: 6px; right: 6px;
          background: rgba(0,0,0,0.7); color: #fff;
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s, transform 0.2s;
          text-decoration: none; cursor: pointer;
        }
        .vp-thumbnail-wrap:hover .vp-thumb-download { opacity: 1; }
        .vp-thumb-download:hover { background: var(--primary); transform: scale(1.1); }
        .vp-thumbnail-placeholder { width: 100%; height: 130px; background: var(--bg); display: flex; align-items: center; justify-content: center; color: var(--text-muted); }
        .vp-duration { position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.8); color: #fff; padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; display: flex; align-items: center; gap: 4px; }
        .vp-info { flex: 1; }
        .vp-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; line-height: 1.4; }
        .vp-platform { display: inline-block; padding: 4px 12px; background: var(--gradient-primary); color: #fff; border-radius: 50px; font-size: 0.8rem; font-weight: 600; margin-bottom: 8px; }
        .vp-author { color: var(--text-muted); font-size: 0.9rem; margin: 0; }

        .vp-section {
          border-top: 1px solid var(--border); padding-top: 20px; margin-top: 20px;
        }
        .vp-section-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
        }
        .vp-section-header h4 {
          font-size: 1.05rem; font-weight: 700; margin: 0; flex: 1;
        }
        .vp-count {
          background: var(--bg); border: 1px solid var(--border); padding: 2px 10px;
          border-radius: 50px; font-size: 0.75rem; font-weight: 600; color: var(--text-muted);
        }

        .vp-format-list { display: flex; flex-direction: column; gap: 8px; }
        .vp-format-btn {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px; background: var(--bg); border: 1px solid var(--border);
          border-radius: 12px; color: var(--text); cursor: pointer; transition: var(--transition); text-align: left;
        }
        .vp-format-btn:hover:not(:disabled) { border-color: var(--primary); background: rgba(79,70,229,0.05); }
        .vp-format-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .vp-format-left { display: flex; align-items: center; gap: 12px; }
        .vp-quality-badge { padding: 4px 10px; border-radius: 8px; color: #fff; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; min-width: 50px; text-align: center; }
        .vp-format-details { display: flex; flex-direction: column; gap: 2px; }
        .vp-format-quality { font-weight: 700; font-size: 0.95rem; }
        .vp-format-meta { font-size: 0.8rem; color: var(--text-muted); }
        .vp-format-right { display: flex; align-items: center; gap: 10px; }
        .vp-format-size { color: var(--text-muted); font-size: 0.85rem; font-weight: 500; }
        .vp-download-icon { color: var(--primary); }

        .vp-images-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
        .vp-image-card {
          position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 1;
          border: 1px solid var(--border); cursor: pointer; transition: var(--transition);
        }
        .vp-image-card:hover { border-color: var(--primary); transform: translateY(-2px); }
        .vp-image-thumb { width: 100%; height: 100%; object-fit: cover; display: block; }
        .vp-image-overlay {
          position: absolute; inset: 0; background: rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .vp-image-card:hover .vp-image-overlay { opacity: 1; }
        .vp-image-download-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 10px 20px; background: var(--gradient-primary); color: #fff;
          border: none; border-radius: 8px; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: var(--transition);
        }
        .vp-image-download-btn:hover { transform: scale(1.05); }
        .vp-image-download-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .vp-image-label {
          position: absolute; bottom: 6px; left: 6px;
          background: rgba(0,0,0,0.7); color: #fff; padding: 3px 8px;
          border-radius: 6px; font-size: 0.7rem; font-weight: 600;
        }

        .vp-no-formats { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 24px; text-align: center; color: var(--text-muted); border-top: 1px solid var(--border); }
        .vp-original-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; font-size: 0.9rem; font-weight: 500; }

        @media (max-width: 576px) {
          .vp-grid { flex-direction: column; }
          .vp-thumbnail-wrap { width: 100%; }
          .vp-thumbnail { height: 200px; }
          .vp-images-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </motion.div>
  );
}
