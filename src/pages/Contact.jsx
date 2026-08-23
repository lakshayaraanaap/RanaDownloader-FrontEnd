import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'support@ranadownloader.com' },
  { icon: MapPin, label: 'Location', value: 'Available Worldwide' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
];

export default function Contact() {
  return (
    <motion.div {...pageTransition}>
      <section className="section contact-page">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="section-title" style={{ fontSize: '2.5rem', marginTop: 80 }}>
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="section-subtitle">
              Have a question or feedback? We would love to hear from you.
            </p>
          </motion.div>

          <div className="row g-4 align-items-start" style={{ marginTop: 40 }}>
            <div className="col-lg-4">
              <div className="contact-info-list">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    className="contact-info-item glass-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="contact-info-icon">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4>{info.label}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page { padding-top: 40px; min-height: 100vh; }
        .contact-info-list { display: flex; flex-direction: column; gap: 16px; }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
        }
        .contact-info-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }
        .contact-info-item h4 { font-size: 1rem; font-weight: 700; margin-bottom: 2px; }
        .contact-info-item p { color: var(--text-muted); font-size: 0.9rem; margin: 0; }
      `}</style>
    </motion.div>
  );
}
