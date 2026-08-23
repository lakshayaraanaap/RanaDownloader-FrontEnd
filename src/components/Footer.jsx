import { Link } from 'react-router-dom';
import { Download, Github, Twitter, Facebook, Instagram } from 'lucide-react';
import { APP_NAME, TAGLINE } from '../utils/constants';

const footerLinks = {
  Product: [
    { to: '/downloader', label: 'Downloader' },
    { to: '/faq', label: 'FAQ' },
    { to: '/about', label: 'About' },
  ],
  Legal: [
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms of Service' },
  ],
  Support: [
    { to: '/contact', label: 'Contact Us' },
    { to: '/faq', label: 'Help Center' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Download size={24} />
              <span>{APP_NAME}</span>
            </Link>
            <p className="footer-tagline">{TAGLINE}</p>
            <p className="footer-desc">
              Fast, secure, and easy media downloading experience with a beautiful interface.
            </p>
            <div className="social-links">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="social-link">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h4 className="footer-col-title">{title}</h4>
              <ul className="footer-links">
                {links.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 80px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 60px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text);
          font-size: 1.3rem;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 12px;
        }
        .footer-logo svg { color: var(--primary); }
        .footer-tagline {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }
        .footer-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .social-links {
          display: flex;
          gap: 10px;
        }
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .social-link:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          transform: translateY(-2px);
        }
        .footer-col-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--text);
        }
        .footer-links {
          list-style: none;
          padding: 0;
        }
        .footer-links li { margin-bottom: 10px; }
        .footer-link {
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .footer-link:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 24px 0;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
