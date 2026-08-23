import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { forgotPassword } from '../services/api';
import { useToast } from '../context/ToastContext';
import authStyles from '../styles/authStyles';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword(email);
      setSent(true);
      toast.success('Reset link sent to your email');
    } catch (err) {
      toast.error(err.message || 'Failed to send reset link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="auth-page">
        <div className="container">
          <div className="auth-card glass-card">
            <h2 className="auth-title">Forgot Password</h2>
            <p className="auth-subtitle">
              {sent
                ? `If an account exists for ${email}, a reset link has been sent.`
                : 'Enter your email to receive a reset link'}
            </p>

            {!sent ? (
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-field">
                  <Mail size={18} className="auth-icon" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-gradient auth-submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            ) : (
              <button className="btn-gradient auth-submit" onClick={() => setSent(false)}>
                Send Again
              </button>
            )}

            <p className="auth-footer-text">
              <Link to="/login" className="auth-link"><ArrowLeft size={14} /> Back to Sign In</Link>
            </p>
          </div>
        </div>

        <style>{authStyles}</style>
      </section>
    </motion.div>
  );
}