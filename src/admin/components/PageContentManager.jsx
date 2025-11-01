import React, { useState, useEffect } from 'react';

const PageContentManager = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    pageSlug: '',
    pageTitle: '',
    metaDescription: '',
    metaKeywords: '',
    content: '',
    status: 'published'
  });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/content/pages', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setPages(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError('Failed to load pages');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/content/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchPages();
        setShowForm(false);
        setFormData({
          pageSlug: '',
          pageTitle: '',
          metaDescription: '',
          metaKeywords: '',
          content: '',
          status: 'published'
        });
        setEditingId(null);
      } else {
        setError('Failed to save page');
      }
    } catch (err) {
      setError('Connection error');
    }
  };

  const handleEdit = (page) => {
    setFormData({
      pageSlug: page.page_slug,
      pageTitle: page.page_title,
      metaDescription: page.meta_description || '',
      metaKeywords: page.meta_keywords || '',
      content: page.content ? JSON.stringify(page.content) : '',
      status: page.status
    });
    setEditingId(page.id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      pageSlug: '',
      pageTitle: '',
      metaDescription: '',
      metaKeywords: '',
      content: '',
      status: 'published'
    });
  };

  if (loading) {
    return <div className="admin-loading">Loading pages...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Page Content Manager</h2>
        {!showForm && (
          <button className="admin-btn admin-btn-success" onClick={() => setShowForm(true)}>
            + Add New Page
          </button>
        )}
      </div>

      {error && <div className="admin-alert admin-alert-danger">{error}</div>}

      {showForm && (
        <div className="admin-card" style={{ marginBottom: '30px' }}>
          <h3>Edit Page</h3>
          <form onSubmit={handleSubmit}>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label>Page Slug</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.pageSlug}
                  onChange={(e) => setFormData({ ...formData, pageSlug: e.target.value })}
                  required
                  disabled={!!editingId}
                />
              </div>
              <div className="admin-form-group">
                <label>Page Title</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.pageTitle}
                  onChange={(e) => setFormData({ ...formData, pageTitle: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="admin-form-group admin-form-full">
              <label>Meta Description</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.metaDescription}
                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              />
            </div>

            <div className="admin-form-group admin-form-full">
              <label>Meta Keywords</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.metaKeywords}
                onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
              />
            </div>

            <div className="admin-form-group admin-form-full">
              <label>Content (JSON)</label>
              <textarea
                className="admin-textarea"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </div>

            <div className="admin-form-row">
              <div className="admin-form-group">
                <label>Status</label>
                <select
                  className="admin-form-control"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <div></div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button type="submit" className="admin-btn admin-btn-success">
                Save Page
              </button>
              <button type="button" className="admin-btn admin-btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {pages.length === 0 ? (
        <div className="admin-empty-state">
          <div className="admin-empty-state-icon">📄</div>
          <div className="admin-empty-state-title">No pages yet</div>
          <p>Create your first page to get started</p>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Page Slug</th>
              <th>Title</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td><code>{page.page_slug}</code></td>
                <td>{page.page_title}</td>
                <td>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: page.status === 'published' ? '#dcfce7' : '#fef3c7',
                    color: page.status === 'published' ? '#166534' : '#92400e'
                  }}>
                    {page.status}
                  </span>
                </td>
                <td>{new Date(page.created_at).toLocaleDateString()}</td>
                <td>
                  <button
                    className="admin-btn admin-btn-secondary"
                    onClick={() => handleEdit(page)}
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PageContentManager;
