// Shared stylesheet for the auth pages (Login, Register, ForgotPassword,
// ResetPassword). Single source of truth — import and inject via
// <style>{authStyles}</style> in each page.
const authStyles = `
  .auth-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 16px 40px;
  }
  .auth-card {
    width: 100%;
    max-width: 440px;
    padding: 40px 32px;
    text-align: center;
  }
  .auth-title {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 8px;
  }
  .auth-subtitle {
    color: var(--text-muted);
    margin-bottom: 32px;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .auth-form { display: flex; flex-direction: column; gap: 16px; }
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
  .auth-options {
    display: flex;
    justify-content: flex-end;
  }
  .auth-link {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .auth-link:hover { text-decoration: underline; }
  .auth-submit {
    width: 100%;
    padding: 14px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 12px;
    margin-top: 8px;
  }
  .auth-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  .auth-footer-text {
    margin-top: 24px;
    color: var(--text-muted);
    font-size: 0.9rem;
  }
`;

export default authStyles;
