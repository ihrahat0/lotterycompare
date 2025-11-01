import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Login failed');
        setLoading(false);
        return;
      }

      const data = await response.json();
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminUser', JSON.stringify(data.user));
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Registration failed');
        setLoading(false);
        return;
      }

      setError('');
      setShowRegister(false);
      setPassword('');
      alert('Registration successful! Please log in.');
    } catch (err) {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h1 className="admin-login-title">Admin Panel</h1>
          
          {error && <div className="admin-alert admin-alert-danger">{error}</div>}
          
          <form onSubmit={showRegister ? handleRegister : handleLogin}>
            {showRegister && (
              <div className="admin-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
            )}
            
            <div className="admin-form-group">
              <label>Email</label>
              <input
                type="email"
                className="admin-form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="admin-form-group">
              <label>Password</label>
              <input
                type="password"
                className="admin-form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              disabled={loading}
            >
              {loading ? 'Loading...' : showRegister ? 'Register' : 'Login'}
            </button>
          </form>

          <div className="admin-login-footer">
            <button
              type="button"
              className="admin-link-btn"
              onClick={() => {
                setShowRegister(!showRegister);
                setError('');
                setPassword('');
                setName('');
              }}
            >
              {showRegister ? 'Back to Login' : 'Create Admin Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
