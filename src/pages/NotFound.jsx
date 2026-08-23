import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export default function NotFound() {
  return (
    <motion.div {...pageTransition}>
      <section className="section not-found-page">
        <div className="container">
          <div className="not-found-content">
            <motion.h1
              className="not-found-code gradient-text"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              404
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Page Not Found
            </motion.h2>
            <motion.p
              className="not-found-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              The page you are looking for does not exist or has been moved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}
            >
              <Link to="/" className="btn-gradient">
                <Home size={18} style={{ marginRight: 8 }} />
                Go Home
              </Link>
              <button className="btn-gradient-outline" onClick={() => window.history.back()}>
                <ArrowLeft size={18} style={{ marginRight: 8 }} />
                Go Back
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .not-found-content { text-align: center; }
        .not-found-code {
          font-size: 8rem;
          font-weight: 900;
          font-family: 'Poppins', sans-serif;
          line-height: 1;
          margin-bottom: 16px;
        }
        .not-found-content h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .not-found-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          max-width: 400px;
        }
        @media (max-width: 576px) {
          .not-found-code { font-size: 5rem; }
        }
      `}</style>
    </motion.div>
  );
}
