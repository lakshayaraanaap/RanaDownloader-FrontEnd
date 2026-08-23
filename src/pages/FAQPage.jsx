import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

export default function FAQPage() {
  return (
    <motion.div {...pageTransition}>
      <section className="section faq-page">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title" style={{ fontSize: '2.5rem', marginTop: 80 }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="section-subtitle">
              Everything you need to know about RanaDownloader.
            </p>
          </motion.div>
          <FAQ />
        </div>
      </section>

      <style>{`
        .faq-page { padding-top: 40px; min-height: 100vh; }
      `}</style>
    </motion.div>
  );
}
