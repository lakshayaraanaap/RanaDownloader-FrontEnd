import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, User, LogOut, History } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/downloader', label: 'Downloader' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    navigate('/');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            <Download size={28} className="brand-icon" />
            <span className="brand-text">
              Rana<span className="gradient-text">Downloader</span>
            </span>
          </Link>

          <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="nav-actions">
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {user ? (
                <>
                  <NavLink to="/history" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                    <History size={16} /> History
                  </NavLink>
                  <NavLink to="/profile" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                    <User size={16} /> {user.name?.split(' ')[0] || 'Profile'}
                  </NavLink>
                  <button className="btn-nav-logout" onClick={handleLogout}>
                    <LogOut size={16} /> Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                    Sign In
                  </NavLink>
                  <Link
                    to="/register"
                    className="btn-gradient nav-cta"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.3s ease;
        }
        .navbar-wrapper.scrolled {
          background: var(--glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          padding: 10px 0;
          box-shadow: var(--shadow-lg);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text) !important;
          font-size: 1.4rem;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
        }
        .brand-icon { color: var(--primary); }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 50px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition);
          text-decoration: none;
        }
        .nav-link-item:hover, .nav-link-item.active {
          color: var(--text);
          background: rgba(79, 70, 229, 0.1);
        }
        .nav-link-item.active { color: var(--primary); }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 8px;
        }
        .theme-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: var(--glass);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        .theme-toggle-btn:hover {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }
        .nav-cta {
          padding: 10px 24px !important;
          font-size: 0.9rem !important;
        }
        .btn-nav-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-nav-logout:hover {
          border-color: #EF4444;
          color: #EF4444;
        }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 8px;
        }
        .mobile-overlay {
          display: none;
        }
        @media (max-width: 991px) {
          .navbar-toggle { display: block; }
          .navbar-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: var(--surface);
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 24px 24px;
            gap: 4px;
            transition: right 0.3s ease;
            z-index: 1001;
            border-left: 1px solid var(--border);
          }
          .navbar-links.open { right: 0; }
          .nav-link-item { width: 100%; text-align: left; padding: 12px 16px; border-radius: 12px; }
          .nav-actions { flex-direction: column; width: 100%; margin-left: 0; margin-top: 16px; }
          .nav-cta { width: 100%; text-align: center; }
          .btn-nav-logout { width: 100%; justify-content: center; }
          .mobile-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
          }
        }
      `}</style>
    </motion.nav>
  );
}
