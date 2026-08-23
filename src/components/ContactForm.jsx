import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { submitContact } from '../services/api';
import { useToast } from '../context/ToastContext';

export default function ContactForm() {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(form);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      className="contact-form glass-card"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-group">
        <label htmlFor="name"><User size={16} /> Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email"><Mail size={16} /> Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message"><MessageSquare size={16} /> Message</label>
        <textarea
          id="message"
          name="message"
          className="form-input form-textarea"
          placeholder="Your message..."
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-gradient" disabled={loading} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        {loading ? (
          <span className="loader" style={{ width: 20, height: 20, borderWidth: 2 }} />
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      <style>{`
        .contact-form {
          padding: 36px;
          max-width: 600px;
          margin: 0 auto;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text);
        }
        .form-input {
          width: 100%;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 16px;
          color: var(--text);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition);
          font-family: inherit;
        }
        .form-input::placeholder { color: var(--text-muted); }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
        }
        .form-textarea { resize: vertical; min-height: 120px; }
      `}</style>
    </motion.form>
  );
}
