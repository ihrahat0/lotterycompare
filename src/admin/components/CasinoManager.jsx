import React, { useState, useEffect } from 'react';

const CasinoManager = () => {
  const [casinos, setCasinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    logo_url: '',
    featured: false,
    tags: '',
    description: '',
    rating: '',
    bonus_text: ''
  });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchCasinos();
  }, []);

  const fetchCasinos = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/casinos', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setCasinos(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError('Failed to load casinos');
    } finally {
      setLoading(false);
    }
  };

  const handleAddClick = () => {
    setFormData({
      name: '',
      link: '',
      logo_url: '',
      featured: false,
      tags: '',
      description: '',
      rating: '',
      bonus_text: ''
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEditClick = (casino) => {
    setFormData({
      name: casino.name,
      link: casino.link || '',
      logo_url: casino.logo_url || '',
      featured: casino.featured,
      tags: Array.isArray(casino.tags) ? casino.tags.join(', ') : '',
      description: casino.description || '',
      rating: casino.rating || '',
      bonus_text: casino.bonus_text || ''
    });
    setEditingId(casino.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!formData.name.trim()) {
      setError('Casino name is required');
      return;
    }

    try {
      setLoading(true);
      const tags = formData.tags.split(',').map(t => t.trim()).filter(t => t);
      const body = {
        ...formData,
        tags,
        rating: formData.rating ? parseFloat(formData.rating) : null
      };

      const url = editingId ? `/api/admin/casinos/${editingId}` : '/api/admin/casinos';
      const method = editingId ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        setSuccess(editingId ? 'Casino updated!' : 'Casino added!');
        setTimeout(() => setSuccess(''), 3000);
        fetchCasinos();
        setShowForm(false);
      } else {
        setError('Failed to save casino');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this casino?')) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/admin/casinos/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setSuccess('Casino deleted!');
        setTimeout(() => setSuccess(''), 3000);
        fetchCasinos();
      } else {
        setError('Failed to delete casino');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '30px' }}>Casino Manager</h2>

      {error && <div className="admin-alert admin-alert-danger">{error}</div>}
      {success && <div className="admin-alert admin-alert-success">{success}</div>}

      {!showForm && (
        <div style={{ marginBottom: '20px' }}>
          <button className="admin-btn admin-btn-success" onClick={handleAddClick} disabled={loading}>
            + Add New Casino
          </button>
        </div>
      )}

      {showForm && (
        <div className="admin-card" style={{ marginBottom: '30px' }}>
          <h3>{editingId ? 'Edit Casino' : 'Add New Casino'}</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="admin-form-group">
              <label>Casino Name *</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., BitStarz"
              />
            </div>

            <div className="admin-form-group">
              <label>Website Link</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="admin-form-group">
              <label>Logo URL</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.logo_url}
                onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="admin-form-group">
              <label>Rating (0-5)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                className="admin-form-control"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                placeholder="4.5"
              />
            </div>

            <div className="admin-form-group">
              <label>Tags (comma-separated)</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="Bitcoin, Instant Payout, Fair"
              />
            </div>

            <div className="admin-form-group">
              <label>Bonus Text</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.bonus_text}
                onChange={(e) => setFormData({ ...formData, bonus_text: e.target.value })}
                placeholder="100% Bonus up to 1 BTC"
              />
            </div>

            <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Description</label>
              <textarea
                className="admin-textarea"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Casino description..."
                style={{ minHeight: '100px' }}
              />
            </div>

            <div className="admin-form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                />
                Featured Casino
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button className="admin-btn admin-btn-success" onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save Casino'}
            </button>
            <button
              className="admin-btn admin-btn-secondary"
              onClick={() => setShowForm(false)}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!showForm && (
        <div>
          {loading ? (
            <div className="admin-loading">Loading casinos...</div>
          ) : casinos.length === 0 ? (
            <div className="admin-empty-state">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{marginBottom: '15px', color: '#cbd5e1'}}>
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <div className="admin-empty-state-title">No casinos yet</div>
              <p>Add your first casino to get started</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Featured</th>
                  <th>Tags</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {casinos.map((casino) => (
                  <tr key={casino.id}>
                    <td>
                      {casino.logo_url && (
                        <img
                          src={casino.logo_url}
                          alt={casino.name}
                          style={{ width: '40px', height: '40px', marginRight: '10px' }}
                        />
                      )}
                      <strong>{casino.name}</strong>
                    </td>
                    <td>
                      {casino.rating ? (
                        <span>⭐ {casino.rating}</span>
                      ) : (
                        <span style={{ color: '#999' }}>-</span>
                      )}
                    </td>
                    <td>
                      {casino.featured ? (
                        <span style={{ color: '#10b981' }}>✓ Yes</span>
                      ) : (
                        <span style={{ color: '#999' }}>-</span>
                      )}
                    </td>
                    <td>
                      {Array.isArray(casino.tags) && casino.tags.length > 0 ? (
                        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                          {casino.tags.slice(0, 2).map((tag, idx) => (
                            <span
                              key={idx}
                              style={{
                                fontSize: '12px',
                                padding: '2px 6px',
                                backgroundColor: '#e0e7ff',
                                borderRadius: '3px',
                                color: '#3730a3'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                          {casino.tags.length > 2 && (
                            <span style={{ fontSize: '12px', color: '#999' }}>
                              +{casino.tags.length - 2}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span style={{ color: '#999' }}>-</span>
                      )}
                    </td>
                    <td>
                      <button
                        className="admin-btn admin-btn-secondary"
                        onClick={() => handleEditClick(casino)}
                        style={{ padding: '6px 12px', fontSize: '12px', marginRight: '5px' }}
                      >
                        Edit
                      </button>
                      <button
                        className="admin-btn admin-btn-danger"
                        onClick={() => handleDelete(casino.id)}
                        style={{ padding: '6px 12px', fontSize: '12px' }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default CasinoManager;
