import { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
import { resetPassword } from '../services/api';
import { useToast } from '../context/ToastContext';
import authStyles from '../styles/authStyles';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      return toast.error('Passwords do not match');
    }
    if (!token) {
      return toast.error('Invalid or missing reset token');
    }
    setLoading(true);
    try {
      await resetPassword({ token, password });
      setDone(true);
      toast.success('Password reset successful');
    } catch (err) {
      toast.error(err.message || 'Reset failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="auth-page">
        <div className="container">
          <div className="auth-card glass-card">
            <h2 className="auth-title">Reset Password</h2>
            <p className="auth-subtitle">
              {done ? 'Your password has been reset successfully' : 'Enter your new password below'}
            </p>

            {!token && !done && (
              <p style={{ color: '#EF4444', fontWeight: 600, marginBottom: 20 }}>
                No reset token found. Please use the link from your email.
              </p>
            )}

            {!done ? (
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-field">
                  <Lock size={18} className="auth-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New password (min 8 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                  <button type="button" className="auth-eye" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="auth-field">
                  <Lock size={18} className="auth-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm new password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                    minLength={8}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient auth-submit"
                  disabled={loading || !token}
                >
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <CheckCircle size={48} style={{ color: '#22C55E', marginBottom: 16 }} />
                <button className="btn-gradient auth-submit" onClick={() => navigate('/login')}>
                  Go to Sign In
                </button>
              </div>
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