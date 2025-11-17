import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './admin.css';
import PageContentManager from './components/PageContentManager';
import ContentSectionManager from './components/ContentSectionManager';
import PageElementEditor from './components/PageElementEditor';
import CasinoManager from './components/CasinoManager';
import BlogManager from './components/BlogManager';
import Dashboard from './components/Dashboard';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/secretdoor/login');
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
          <button
            className="admin-sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>

        <nav className="admin-nav">
          <Link to="/secretdoor/dashboard" className="admin-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>Dashboard</span>
          </Link>
          <Link to="/secretdoor/edit-content" className="admin-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            <span>Edit Content</span>
          </Link>
          <Link to="/secretdoor/casinos" className="admin-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            <span>Casinos</span>
          </Link>
          <Link to="/secretdoor/blog" className="admin-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
            <span>Blog Posts</span>
          </Link>
          <Link to="/secretdoor/pages" className="admin-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <span>Pages</span>
          </Link>
          <Link to="/secretdoor/sections" className="admin-nav-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <span>Sections</span>
          </Link>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-info">
            <p className="admin-user-name">{user?.name || 'Admin'}</p>
            <p className="admin-user-email">{user?.email}</p>
          </div>
          <button className="admin-btn admin-btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <div className="admin-header">
          <h1>Content Management System</h1>
          <div className="admin-header-info">
            <span>Welcome, {user?.name || 'Admin'}</span>
          </div>
        </div>

        <div className="admin-content-area">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-content" element={<PageElementEditor />} />
            <Route path="/casinos" element={<CasinoManager />} />
            <Route path="/blog" element={<BlogManager />} />
            <Route path="/pages" element={<PageContentManager />} />
            <Route path="/sections" element={<ContentSectionManager />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
