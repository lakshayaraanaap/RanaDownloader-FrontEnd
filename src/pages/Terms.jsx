import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing or using RanaDownloader, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.' },
  { title: 'Service Description', content: 'RanaDownloader provides a web-based tool for downloading media content from supported platforms. Our service is provided "as is" and may be modified or discontinued at any time.' },
  { title: 'User Responsibilities', content: 'Users are responsible for ensuring they have the legal right to download any content. RanaDownloader does not condone copyright infringement. Always respect content creators and platform terms of service.' },
  { title: 'Prohibited Activities', content: 'Users may not use RanaDownloader for illegal purposes, to distribute copyrighted material without authorization, or to attempt to bypass platform security measures.' },
  { title: 'Intellectual Property', content: 'RanaDownloader and its original content, features, and functionality are owned by RanaDownloader and are protected by international copyright, trademark, and other intellectual property laws.' },
  { title: 'Limitation of Liability', content: 'RanaDownloader shall not be liable for any damages arising from the use or inability to use our service. Users download content at their own risk and discretion.' },
  { title: 'Termination', content: 'We reserve the right to terminate or restrict access to our service at our sole discretion, without notice, for any reason.' },
];

export default function Terms() {
  return (
    <motion.div {...pageTransition}>
      <section className="section terms-page">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="terms-icon">
              <FileText size={40} />
            </div>
            <h1 className="section-title" style={{ fontSize: '2.5rem', marginTop: 20 }}>
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="section-subtitle">
              Please read these terms carefully before using RanaDownloader.
            </p>
          </motion.div>

          <div className="terms-content">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                className="terms-section glass-card"
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
        .terms-page { padding-top: 40px; min-height: 100vh; }
        .terms-icon {
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
        .terms-content {
          max-width: 800px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .terms-section { padding: 28px; }
        .terms-section h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 10px; }
        .terms-section p { color: var(--text-muted); line-height: 1.8; margin: 0; font-size: 0.95rem; }
      `}</style>
    </motion.div>
  );
}
