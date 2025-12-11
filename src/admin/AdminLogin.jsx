import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('login'); // 'login' | 'forgot'
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
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

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, role: 'admin' })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send OTP');
      }

      setOtpSent(true);
      setSuccess('OTP sent to your admin email. Please check your inbox.');
    } catch (err) {
      setError(err.message || 'Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!otp) {
      setError('Enter the OTP sent to your email.');
      return;
    }

    if (!newPassword || newPassword.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp, newPassword, role: 'admin' })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to reset password');
      }

      setSuccess('Password updated. You can log in with your new password.');
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
      setOtpSent(false);
      setMode('login');
    } catch (err) {
      setError(err.message || 'Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <div className="admin-login-box">
          <div className="admin-login-header">
            <div>
              <p className="admin-badge">Secure Access</p>
              <h1 className="admin-login-title">Admin Panel</h1>
              <p className="admin-login-subtitle">
                Sign in to manage content and settings. Use your admin email only.
              </p>
            </div>
          </div>
          
          {error && <div className="admin-alert admin-alert-danger">{error}</div>}
          {success && <div className="admin-alert admin-alert-success">{success}</div>}
          
          {mode === 'login' ? (
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
                  placeholder="admin@domain.com"
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
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Login'}
              </button>

              <div className="admin-form-footer">
                <button
                  type="button"
                  className="admin-link-button"
                  onClick={() => {
                    setMode('forgot');
                    setError('');
                    setSuccess('');
                  }}
                  disabled={loading}
                >
                  Forgot password?
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={otpSent ? handleResetPassword : handleRequestReset}>
              <div className="admin-form-group">
                <label>Admin Email</label>
                <input
                  type="email"
                  className="admin-form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading || otpSent}
                  placeholder="admin@domain.com"
                />
                <p className="admin-helper-text">We will send an OTP to this admin email.</p>
              </div>

              {otpSent && (
                <>
                  <div className="admin-form-group">
                    <label>OTP</label>
                    <input
                      type="text"
                      className="admin-form-control"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      disabled={loading}
                      placeholder="6-digit code"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="admin-form-control"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      disabled={loading}
                      placeholder="At least 8 characters"
                    />
                  </div>

                  <div className="admin-form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="admin-form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                      placeholder="Repeat password"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={loading}
              >
                {loading ? 'Working...' : otpSent ? 'Set new password' : 'Send OTP'}
              </button>

              <div className="admin-form-footer spaced">
                <button
                  type="button"
                  className="admin-link-button"
                  onClick={() => {
                    setMode('login');
                    setOtpSent(false);
                    setOtp('');
                    setNewPassword('');
                    setConfirmPassword('');
                    setError('');
                    setSuccess('');
                  }}
                  disabled={loading}
                >
                  Back to login
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
