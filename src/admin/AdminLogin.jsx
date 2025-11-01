import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // Registration removed from frontend

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
      navigate('/secretdoor/dashboard');
    } catch (err) {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };

  // Registration handler removed

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h1 className="admin-login-title">Admin Panel</h1>
          
          {error && <div className="admin-alert admin-alert-danger">{error}</div>}
          
          <form onSubmit={handleLogin}>
            
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
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
