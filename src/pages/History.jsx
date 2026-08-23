import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ExternalLink, Clock, Film } from 'lucide-react';
import { getHistory, deleteHistory } from '../services/api';
import { useToast } from '../context/ToastContext';
import Loader from '../components/Loader';

export default function History() {
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchHistory = useCallback(
    async (p = 1) => {
      setLoading(true);
      try {
        const res = await getHistory({ page: p, limit: 10 });
        setHistory(res.data);
        setTotalPages(res.meta?.totalPages || 1);
        setPage(p);
      } catch (err) {
        toast.error(err.message || 'Failed to load history');
      } finally {
        setLoading(false);
      }
    },
    [toast]
  );

  useEffect(() => {
    fetchHistory(1);
  }, [fetchHistory]);

  const handleDelete = async (id) => {
    try {
      await deleteHistory(id);
      setHistory((prev) => prev.filter((h) => h._id !== id));
      toast.success('Entry deleted');
    } catch (err) {
      toast.error(err.message || 'Delete failed');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="history-page">
        <div className="container">
          <h1 className="section-title" style={{ fontSize: '2rem', marginTop: 80, marginBottom: 32 }}>
            <span className="gradient-text">Download History</span>
          </h1>

          {loading ? (
            <Loader text="Loading history..." />
          ) : history.length === 0 ? (
            <div className="glass-card empty-state">
              <Film size={48} style={{ color: 'var(--text-muted)', marginBottom: 16 }} />
              <p>No download history yet.</p>
              <Link to="/downloader" className="btn-gradient" style={{ marginTop: 16, display: 'inline-block', textDecoration: 'none', padding: '10px 24px', borderRadius: 50 }}>
                Start Downloading
              </Link>
            </div>
          ) : (
            <>
              <div className="history-list">
                {history.map((item) => (
                  <motion.div
                    key={item._id}
                    className="glass-card history-item"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="history-info">
                      {item.thumbnail ? (
                        <img src={item.thumbnail} alt="" className="history-thumb" />
                      ) : (
                        <div className="history-thumb-placeholder"><Film size={20} /></div>
                      )}
                      <div className="history-details">
                        <h4 className="history-title">{item.title || 'Untitled'}</h4>
                        <p className="history-meta">
                          <span className="history-platform">{item.platform}</span>
                          <Clock size={12} />
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="history-actions">
                      <a href={item.originalUrl} target="_blank" rel="noopener noreferrer" className="history-action-btn">
                        <ExternalLink size={16} />
                      </a>
                      <button className="history-action-btn danger" onClick={() => handleDelete(item._id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button className="page-btn" disabled={page <= 1} onClick={() => fetchHistory(page - 1)}>Prev</button>
                  <span className="page-info">{page} / {totalPages}</span>
                  <button className="page-btn" disabled={page >= totalPages} onClick={() => fetchHistory(page + 1)}>Next</button>
                </div>
              )}
            </>
          )}
        </div>

        <style>{historyStyles}</style>
      </section>
    </motion.div>
  );
}

const historyStyles = `
  .history-page { min-height: 100vh; padding-bottom: 60px; }
  .empty-state {
    text-align: center;
    padding: 60px 24px;
    max-width: 400px;
    margin: 0 auto;
    color: var(--text-muted);
  }
  .history-list {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .history-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    gap: 16px;
  }
  .history-info {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;
    min-width: 0;
  }
  .history-thumb {
    width: 60px;
    height: 42px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .history-thumb-placeholder {
    width: 60px;
    height: 42px;
    background: var(--bg);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    flex-shrink: 0;
  }
  .history-details { min-width: 0; }
  .history-title {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .history-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    font-size: 0.8rem;
    margin: 0;
  }
  .history-platform {
    background: var(--gradient-primary);
    color: #fff;
    padding: 2px 8px;
    border-radius: 50px;
    font-size: 0.7rem;
    font-weight: 600;
  }
  .history-actions { display: flex; gap: 8px; flex-shrink: 0; }
  .history-action-btn {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
  }
  .history-action-btn:hover { border-color: var(--primary); color: var(--primary); }
  .history-action-btn.danger:hover { border-color: #EF4444; color: #EF4444; }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
  }
  .page-btn {
    padding: 8px 20px;
    border-radius: 50px;
    border: 1px solid var(--border);
    background: var(--glass);
    color: var(--text);
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
  }
  .page-btn:hover:not(:disabled) { border-color: var(--primary); }
  .page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .page-info { color: var(--text-muted); font-size: 0.9rem; }
  @media (max-width: 576px) {
    .history-item { flex-direction: column; align-items: flex-start; }
    .history-actions { align-self: flex-end; }
  }
`;
