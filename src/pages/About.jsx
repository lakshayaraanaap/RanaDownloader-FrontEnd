import { motion } from 'framer-motion';
import { Shield, Zap, Target, Heart, Globe } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const values = [
  { icon: Zap, title: 'Speed', desc: 'We prioritize fast, optimized download experiences.' },
  { icon: Shield, title: 'Security', desc: 'Your privacy and safety are our top concerns.' },
  { icon: Heart, title: 'Simplicity', desc: 'We believe great tools should be easy to use.' },
  { icon: Globe, title: 'Accessibility', desc: 'Available to everyone, on every device.' },
];

export default function About() {
  return (
    <motion.div {...pageTransition}>
      <section className="section about-page">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title" style={{ fontSize: '2.8rem', marginTop: 80 }}>
              About <span className="gradient-text">RanaDownloader</span>
            </h1>
            <p className="section-subtitle">
              Making media downloading fast, secure, and accessible for everyone.
            </p>
          </motion.div>

          <motion.div
            className="about-intro glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>
              RanaDownloader was created with a simple mission: to provide a fast, secure,
              and user-friendly media downloading experience. We believe that accessing
              your favorite content should be simple and straightforward.
            </p>
            <p>
              Built with modern technologies and a focus on user experience, we continuously
              work to improve our platform and add support for more services.
            </p>
          </motion.div>

          <div className="row g-4" style={{ marginTop: 60 }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="glass-card about-value-card">
                  <v.icon size={32} className="gradient-text" />
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="about-mission glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginTop: 60 }}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>Our Mission</h2>
                <p>
                  To empower users with a reliable, fast, and secure tool for downloading
                  media content while respecting platform terms of service and user privacy.
                </p>
                <p>
                  We are committed to transparency, security, and providing the best possible
                  experience for our users across all devices.
                </p>
              </div>
              <div className="col-md-6" style={{ textAlign: 'center' }}>
                <div className="mission-stats">
                  <div className="mission-stat">
                    <Target size={40} className="gradient-text" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .about-page { padding-top: 40px; }
        .about-intro {
          padding: 36px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .about-intro h2 { font-size: 1.6rem; margin-bottom: 16px; }
        .about-intro p { color: var(--text-muted); line-height: 1.8; font-size: 1.05rem; }
        .about-value-card {
          padding: 28px;
          text-align: center;
          height: 100%;
        }
        .about-value-card svg { margin-bottom: 14px; }
        .about-value-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
        .about-value-card p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
        .about-mission { padding: 40px; }
        .about-mission h2 { font-size: 1.6rem; margin-bottom: 16px; }
        .about-mission p { color: var(--text-muted); line-height: 1.8; }
        .mission-stats { padding: 40px; }
        .mission-stat { display: flex; justify-content: center; }
      `}</style>
    </motion.div>
  );
}
