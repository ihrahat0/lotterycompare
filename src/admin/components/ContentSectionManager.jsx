import React, { useState, useEffect } from 'react';

const ContentSectionManager = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    sectionKey: '',
    sectionName: '',
    content: '',
    description: ''
  });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/content/sections', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setSections(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError('Failed to load sections');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/content/sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchSections();
        setShowForm(false);
        setFormData({
          sectionKey: '',
          sectionName: '',
          content: '',
          description: ''
        });
      } else {
        setError('Failed to save section');
      }
    } catch (err) {
      setError('Connection error');
    }
  };

  const handleEdit = (section) => {
    setFormData({
      sectionKey: section.section_key,
      sectionName: section.section_name,
      content: section.content || '',
      description: section.description || ''
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      sectionKey: '',
      sectionName: '',
      content: '',
      description: ''
    });
  };

  if (loading) {
    return <div className="admin-loading">Loading sections...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Content Sections Manager</h2>
        {!showForm && (
          <button className="admin-btn admin-btn-success" onClick={() => setShowForm(true)}>
            + Add New Section
          </button>
        )}
      </div>

      {error && <div className="admin-alert admin-alert-danger">{error}</div>}

      {showForm && (
        <div className="admin-card" style={{ marginBottom: '30px' }}>
          <h3>Edit Section</h3>
          <form onSubmit={handleSubmit}>
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label>Section Key</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.sectionKey}
                  onChange={(e) => setFormData({ ...formData, sectionKey: e.target.value })}
                  placeholder="e.g., hero_section, footer_text"
                  required
                />
              </div>
              <div className="admin-form-group">
                <label>Section Name</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.sectionName}
                  onChange={(e) => setFormData({ ...formData, sectionName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="admin-form-group admin-form-full">
              <label>Description</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="What is this section for?"
              />
            </div>

            <div className="admin-form-group admin-form-full">
              <label>Content</label>
              <textarea
                className="admin-textarea"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Enter section content (HTML or text)"
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button type="submit" className="admin-btn admin-btn-success">
                Save Section
              </button>
              <button type="button" className="admin-btn admin-btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {sections.length === 0 ? (
        <div className="admin-empty-state">
          <div className="admin-empty-state-icon">✂️</div>
          <div className="admin-empty-state-title">No sections yet</div>
          <p>Create your first content section to get started</p>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Name</th>
              <th>Description</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <tr key={section.id}>
                <td><code>{section.section_key}</code></td>
                <td>{section.section_name}</td>
                <td>{section.description || '-'}</td>
                <td>{new Date(section.updated_at).toLocaleDateString()}</td>
                <td>
                  <button
                    className="admin-btn admin-btn-secondary"
                    onClick={() => handleEdit(section)}
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

export default ContentSectionManager;
