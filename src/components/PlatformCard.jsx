import { motion } from 'framer-motion';
import { getIcon } from '../utils/icons';
import { Link } from 'react-router-dom';

export default function PlatformCard({ platform, index }) {
  const Icon = getIcon(platform.icon);

  return (
    <motion.div
      className="col-lg-4 col-md-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to="/downloader" className="platform-card-link">
        <div className="platform-card glass-card">
          <div className="platform-icon-wrap" style={{ background: platform.color }}>
            <Icon size={28} color="#fff" />
          </div>
          <h3 className="platform-name">{platform.name}</h3>
          <p className="platform-desc">{platform.description}</p>
          <div className="platform-arrow">→</div>
        </div>
      </Link>

      <style>{`
        .platform-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .platform-card {
          padding: 32px;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .platform-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .platform-card:hover::after {
          transform: scaleX(1);
        }
        .platform-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: var(--transition);
        }
        .platform-card:hover .platform-icon-wrap {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .platform-name {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .platform-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .platform-arrow {
          font-size: 1.2rem;
          color: var(--primary);
          font-weight: 700;
          opacity: 0;
          transform: translateX(-10px);
          transition: var(--transition);
        }
        .platform-card:hover .platform-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </motion.div>
  );
}
