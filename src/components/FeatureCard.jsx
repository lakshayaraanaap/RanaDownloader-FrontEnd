import { motion } from 'framer-motion';
import { getIcon } from '../utils/icons';

export default function FeatureCard({ icon, title, description, index }) {
  const Icon = getIcon(icon);

  return (
    <motion.div
      className="col-lg-3 col-md-4 col-sm-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="feature-card glass-card">
        <div className="feature-icon-wrap">
          <Icon size={24} />
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>

      <style>{`
        .feature-card {
          padding: 28px;
          height: 100%;
          text-align: center;
        }
        .feature-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin: 0 auto 18px;
          transition: var(--transition);
        }
        .feature-card:hover .feature-icon-wrap {
          transform: scale(1.1) rotate(5deg);
        }
        .feature-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .feature-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </motion.div>
  );
}
