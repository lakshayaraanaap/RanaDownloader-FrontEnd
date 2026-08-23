import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { STATS } from '../utils/constants';

export default function Hero() {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      navigate(`/downloader?url=${encodeURIComponent(url.trim())}`);
    }
  };

  return (
    <section className="hero-section">
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} />
            <span>Trusted by 500K+ users worldwide</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Download Media{' '}
            <span className="gradient-text">in Seconds</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fast, Secure and Easy Media Downloader with a beautiful interface.
          </motion.p>

          <motion.form
            className="hero-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="hero-input-wrapper">
              <Download size={20} className="input-icon" />
              <input
                type="url"
                className="hero-input"
                placeholder="Paste your URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <button type="submit" className="btn-gradient hero-btn">
                <span>Download</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.form>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--gradient-hero);
          overflow: hidden;
          padding-top: 80px;
        }
        .shape-1 { width: 400px; height: 400px; background: var(--primary); top: -100px; left: -100px; animation: float1 8s ease-in-out infinite; }
        .shape-2 { width: 300px; height: 300px; background: var(--secondary); top: 50%; right: -80px; animation: float2 10s ease-in-out infinite; }
        .shape-3 { width: 200px; height: 200px; background: var(--accent); bottom: -50px; left: 30%; animation: float1 12s ease-in-out infinite; }
        .shape-4 { width: 150px; height: 150px; background: var(--primary); top: 30%; left: 50%; animation: float2 9s ease-in-out infinite; }
        .shape-5 { width: 250px; height: 250px; background: var(--accent); top: 10%; right: 20%; animation: float1 11s ease-in-out infinite; }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(5deg); }
          66% { transform: translate(-15px, 20px) rotate(-3deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 20px) rotate(-5deg); }
          66% { transform: translate(15px, -25px) rotate(3deg); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: var(--glass);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 28px;
        }
        .hero-title {
          font-size: 3.8rem;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        .hero-form {
          margin-bottom: 60px;
        }
        .hero-input-wrapper {
          display: flex;
          align-items: center;
          background: var(--glass);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          padding: 8px 8px 8px 24px;
          max-width: 640px;
          margin: 0 auto;
          transition: var(--transition);
        }
        .hero-input-wrapper:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
        }
        .input-icon { color: var(--text-muted); flex-shrink: 0; }
        .hero-input {
          flex: 1;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1rem;
          padding: 12px 16px;
          outline: none;
          min-width: 0;
        }
        .hero-input::placeholder { color: var(--text-muted); }
        .hero-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px !important;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        .stat-card {
          text-align: center;
        }
        .stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
        }
        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem; }
          .hero-subtitle { font-size: 1rem; }
          .hero-input-wrapper { flex-direction: column; border-radius: 20px; padding: 12px; }
          .hero-input { width: 100%; text-align: center; padding: 12px; }
          .input-icon { display: none; }
          .hero-btn { width: 100%; justify-content: center; border-radius: 14px !important; }
          .hero-stats { gap: 24px; }
          .stat-value { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
