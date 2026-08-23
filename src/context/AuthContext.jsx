import { createContext, useContext, useState, useEffect } from 'react';
import { login as apiLogin, register as apiRegister, logout as apiLogout, getProfile } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('rana-token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getProfile()
        .then((res) => setUser(res.data))
        .catch(() => {
          localStorage.removeItem('rana-token');
          setToken(null);
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await apiLogin({ email, password });
    const { user: userData, accessToken, refreshToken } = res.data;
    localStorage.setItem('rana-token', accessToken);
    localStorage.setItem('rana-refresh', refreshToken);
    setToken(accessToken);
    setUser(userData);
    return userData;
  };

  const register = async (name, email, password) => {
    const res = await apiRegister({ name, email, password });
    const { user: userData, accessToken, refreshToken } = res.data;
    localStorage.setItem('rana-token', accessToken);
    localStorage.setItem('rana-refresh', refreshToken);
    setToken(accessToken);
    setUser(userData);
    return userData;
  };

  const logout = async () => {
    try {
      await apiLogout();
    } catch {
      // ignore logout errors
    }
    localStorage.removeItem('rana-token');
    localStorage.removeItem('rana-refresh');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
