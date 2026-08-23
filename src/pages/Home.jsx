import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PlatformCard from '../components/PlatformCard';
import FAQ from '../components/FAQ';
import { FEATURES, PLATFORMS } from '../utils/constants';
import { Zap, Shield, Smartphone, Diamond, Clock, LayoutGrid } from 'lucide-react';

const steps = [
  { num: '01', title: 'Paste URL', desc: 'Copy and paste the media URL from any supported platform.' },
  { num: '02', title: 'Validate URL', desc: 'Our system validates the URL and checks for availability.' },
  { num: '03', title: 'Fetch Metadata', desc: 'We fetch available formats, qualities, and media information.' },
  { num: '04', title: 'Download', desc: 'Choose your preferred format and download where permitted.' },
];

const whyChoose = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized servers ensure blazing fast download speeds.' },
  { icon: Shield, title: 'Secure', desc: 'End-to-end encryption keeps your downloads safe.' },
  { icon: LayoutGrid, title: 'Simple UI', desc: 'Clean, intuitive interface designed for everyone.' },
  { icon: Diamond, title: 'Free to Use', desc: 'All features available without any hidden charges.' },
  { icon: Clock, title: 'No Registration', desc: 'Start downloading instantly - no account required.' },
  { icon: Smartphone, title: 'Cross Platform', desc: 'Works on desktop, tablet, and mobile devices.' },
];

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Hero />

      <section className="section" id="platforms">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Supported <span className="gradient-text">Platforms</span>
            </h2>
            <p className="section-subtitle">
              Download media from your favorite platforms with ease. Fast, secure, and reliable.
            </p>
          </motion.div>
          <div className="row g-4">
            {PLATFORMS.map((p, i) => (
              <PlatformCard key={p.id} platform={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }} id="features">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="section-subtitle">
              Everything you need for a seamless media downloading experience.
            </p>
          </motion.div>
          <div className="row g-4">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.id} icon={f.icon} title={f.title} description={f.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="section-subtitle">
              Four simple steps to download your favorite media content.
            </p>
          </motion.div>
          <div className="steps-timeline">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="step-num gradient-text">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="step-line" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)' }} id="why-choose">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Why Choose <span className="gradient-text">RanaDownloader</span>
            </h2>
            <p className="section-subtitle">
              The best media downloading experience, built with you in mind.
            </p>
          </motion.div>
          <div className="row g-4">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="glass-card why-card">
                  <item.icon size={28} className="gradient-text" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle">
              Got questions? We have answers.
            </p>
          </motion.div>
          <FAQ limit={5} />
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Start Downloading?</h2>
            <p className="cta-desc">Experience the fastest and most secure media downloader available.</p>
            <Link to="/downloader" className="btn-gradient">Get Started Now</Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        .steps-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .step-card {
          text-align: center;
          padding: 32px 20px;
          position: relative;
        }
        .step-num {
          font-size: 3rem;
          font-weight: 900;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 12px;
        }
        .step-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .step-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .step-line {
          display: none;
        }
        .why-card {
          padding: 28px;
          text-align: center;
          height: 100%;
        }
        .why-card svg { margin-bottom: 16px; }
        .why-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .why-card p { color: var(--text-muted); font-size: 0.9rem; margin: 0; line-height: 1.6; }
        .cta-section { padding: 60px 0 100px; }
        .cta-card {
          background: var(--gradient-primary);
          border-radius: var(--radius-lg);
          padding: 60px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cta-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          position: relative;
        }
        .cta-desc {
          color: rgba(255,255,255,0.85);
          font-size: 1.1rem;
          margin-bottom: 28px;
          position: relative;
        }
        .cta-card .btn-gradient {
          position: relative;
          background: #fff;
          color: var(--primary);
          font-weight: 700;
        }
        .cta-card .btn-gradient:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .steps-timeline { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .steps-timeline { grid-template-columns: 1fr; }
          .cta-card { padding: 40px 24px; }
          .cta-title { font-size: 1.6rem; }
        }
      `}</style>
    </motion.div>
  );
}
