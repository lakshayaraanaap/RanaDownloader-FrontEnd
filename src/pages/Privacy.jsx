import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const sections = [
  { title: 'Information We Collect', content: 'We do not collect personal information. RanaDownloader processes URLs in real-time and does not store user data, download history, or personal identifiers on our servers.' },
  { title: 'How We Use Information', content: 'Any temporary data processed during downloads is immediately discarded after the operation is complete. We do not sell, share, or monetize any user data.' },
  { title: 'Cookies', content: 'We may use essential cookies to maintain theme preferences and basic site functionality. These cookies do not track user behavior or collect personal data.' },
  { title: 'Third-Party Services', content: 'Our service may interact with third-party platforms to fetch media metadata. These interactions are governed by the respective platform terms of service.' },
  { title: 'Data Security', content: 'We implement industry-standard security measures to protect any data processed through our service. All connections are encrypted using TLS.' },
  { title: 'Changes to This Policy', content: 'We may update this privacy policy from time to time. Changes will be reflected on this page with an updated revision date.' },
];

export default function Privacy() {
  return (
    <motion.div {...pageTransition}>
      <section className="section privacy-page">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="privacy-icon">
              <Shield size={40} />
            </div>
            <h1 className="section-title" style={{ fontSize: '2.5rem', marginTop: 20 }}>
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="section-subtitle">
              Your privacy is important to us. Last updated: {new Date().toLocaleDateString()}.
            </p>
          </motion.div>

          <div className="privacy-content">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                className="privacy-section glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .privacy-page { padding-top: 40px; min-height: 100vh; }
        .privacy-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          margin: 80px auto 20px;
        }
        .privacy-content {
          max-width: 800px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .privacy-section {
          padding: 28px;
        }
        .privacy-section h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .privacy-section p {
          color: var(--text-muted);
          line-height: 1.8;
          margin: 0;
          font-size: 0.95rem;
        }
      `}</style>
    </motion.div>
  );
}
