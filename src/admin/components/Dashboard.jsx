import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    pages: 0,
    sections: 0,
    images: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const headers = { 'Authorization': `Bearer ${token}` };

        const [pagesRes, sectionsRes, imagesRes] = await Promise.all([
          fetch('/api/content/pages', { headers }),
          fetch('/api/content/sections', { headers }),
          fetch('/api/images', { headers })
        ]);

        const pages = await pagesRes.json();
        const sections = await sectionsRes.json();
        const images = await imagesRes.json();

        setStats({
          pages: Array.isArray(pages) ? pages.length : 0,
          sections: Array.isArray(sections) ? sections.length : 0,
          images: Array.isArray(images) ? images.length : 0
        });
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="admin-loading">Loading dashboard...</div>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: '30px' }}>Dashboard</h2>
      
      <div className="admin-grid">
        <div style={{ backgroundColor: 'transparent' }} className="admin-stat-card">
          <div className="admin-stat-label">Total Pages</div>
          <div className="admin-stat-value">{stats.pages}</div>
        </div>
        
        <div style={{ backgroundColor: 'transparent' }} className="admin-stat-card">
          <div className="admin-stat-label">Content Sections</div>
          <div className="admin-stat-value">{stats.sections}</div>
        </div>
        
        <div className="admin-sta t-card">
          <div className="admin-stat-label">Media Assets</div>
          <div className="admin-stat-value">{stats.images}</div>
        </div>
      </div>

      <div style={{ backgroundColor: 'transparent' }} className="admin-card">
        <div className="admin-card-title">Quick Guide</div>
        <div className="admin-card-body">
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li><strong>Page Content:</strong> Manage all pages, their titles, descriptions, and meta tags</li>
            <li><strong>Content Sections:</strong> Edit reusable content sections across your site</li>
            <li><strong>Blog Media:</strong> Upload featured images directly inside the Blog Manager while drafting posts</li>
          </ul>
        </div>
      </div>

      <div style={{ backgroundColor: 'transparent' }} className="admin-card">
        <div className="admin-card-title">Latest Updates</div>
        <div className="admin-card-body">
          <p>No recent updates yet. Start by managing your content!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
