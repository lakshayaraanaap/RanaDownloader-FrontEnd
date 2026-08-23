import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Save, Trash2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { updateProfile, changePassword, deleteProfile } from '../services/api';

export default function Profile() {
  const { user, setUser, logout } = useAuth();
  const toast = useToast();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [saving, setSaving] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [changingPw, setChangingPw] = useState(false);

  const [deleting, setDeleting] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await updateProfile({ name, email });
      setUser(res.data);
      toast.success('Profile updated');
    } catch (err) {
      toast.error(err.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setChangingPw(true);
    try {
      await changePassword({ currentPassword, newPassword });
      toast.success('Password changed');
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      toast.error(err.message || 'Change failed');
    } finally {
      setChangingPw(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete your account? This cannot be undone.')) return;
    setDeleting(true);
    try {
      await deleteProfile();
      toast.success('Account deleted');
      logout();
    } catch (err) {
      toast.error(err.message || 'Delete failed');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="profile-page">
        <div className="container">
          <h1 className="section-title" style={{ fontSize: '2rem', marginTop: 80, marginBottom: 32 }}>
            <span className="gradient-text">My Profile</span>
          </h1>

          <div className="profile-grid">
            <div className="glass-card profile-card">
              <h3 className="profile-card-title"><User size={20} /> Personal Info</h3>
              <form onSubmit={handleUpdate} className="profile-form">
                <div className="auth-field">
                  <User size={18} className="auth-icon" />
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
                </div>
                <div className="auth-field">
                  <Mail size={18} className="auth-icon" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="btn-gradient profile-btn" disabled={saving}>
                  <Save size={16} /> {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </div>

            <div className="glass-card profile-card">
              <h3 className="profile-card-title"><Lock size={20} /> Change Password</h3>
              <form onSubmit={handleChangePassword} className="profile-form">
                <div className="auth-field">
                  <Lock size={18} className="auth-icon" />
                  <input
                    type={showPw ? 'text' : 'password'}
                    placeholder="Current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-field">
                  <Lock size={18} className="auth-icon" />
                  <input
                    type={showPw ? 'text' : 'password'}
                    placeholder="New password (min 8 characters)"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                  <button type="button" className="auth-eye" onClick={() => setShowPw(!showPw)}>
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <button type="submit" className="btn-gradient profile-btn" disabled={changingPw}>
                  <Lock size={16} /> {changingPw ? 'Changing...' : 'Change Password'}
                </button>
              </form>
            </div>

            <div className="glass-card profile-card danger-card">
              <h3 className="profile-card-title" style={{ color: '#EF4444' }}><Trash2 size={20} /> Danger Zone</h3>
              <p className="danger-text">Permanently delete your account and all associated data.</p>
              <button className="btn-danger" onClick={handleDelete} disabled={deleting}>
                <Trash2 size={16} /> {deleting ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>

        <style>{profileStyles}</style>
      </section>
    </motion.div>
  );
}

const profileStyles = `
  .profile-page { min-height: 100vh; padding-bottom: 60px; }
  .profile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
  }
  .profile-card { padding: 28px; }
  .profile-card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .profile-form { display: flex; flex-direction: column; gap: 14px; }
  .profile-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    font-weight: 600;
    border-radius: 12px;
    margin-top: 4px;
  }
  .profile-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .danger-card { border-color: rgba(239, 68, 68, 0.3) !important; }
  .danger-text { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px; }
  .btn-danger {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px;
    background: #EF4444;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-danger:hover { background: #DC2626; }
  .btn-danger:disabled { opacity: 0.6; cursor: not-allowed; }
  .auth-field {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0 16px;
    transition: border-color 0.2s;
  }
  .auth-field:focus-within { border-color: var(--primary); }
  .auth-icon { color: var(--text-muted); flex-shrink: 0; }
  .auth-field input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    padding: 14px 12px;
    color: var(--text);
    font-size: 0.95rem;
    width: 100%;
  }
  .auth-field input::placeholder { color: var(--text-muted); }
  .auth-eye {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
  }
  @media (max-width: 576px) {
    .profile-grid { grid-template-columns: 1fr; }
  }
`;
