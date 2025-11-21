import React, { useState, useEffect } from 'react';

const ContestManager = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    contestNo: '',
    remaining: '',
    prize: '',
    price: '',
    timer: '290603',
    link: '',
    highlights: '',
    description: ''
  });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/contests', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setContests(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError('Failed to load contests');
    } finally {
      setLoading(false);
    }
  };

  const handleAddClick = () => {
    setFormData({
      img: '',
      title: '',
      contestNo: '',
      remaining: '',
      prize: '',
      price: 'JOIN',
      timer: '290603',
      link: '',
      highlights: '',
      description: ''
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEditClick = (contest) => {
    setFormData({
      img: contest.img || '',
      title: contest.title,
      contestNo: contest.no || '',
      remaining: contest.remaining || '',
      prize: contest.prize || '',
      price: contest.price || 'JOIN',
      timer: contest.timer || '290603',
      link: contest.link || '',
      highlights: Array.isArray(contest.highlights) ? contest.highlights.join(', ') : '',
      description: contest.description || ''
    });
    setEditingId(contest.id);
    setShowForm(true);
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      setError('Contest title is required');
      return;
    }

    try {
      setLoading(true);
      const highlights = formData.highlights.split(',').map(h => h.trim()).filter(h => h);
      const body = {
        img: formData.img,
        title: formData.title,
        no: formData.contestNo,
        remaining: formData.remaining,
        prize: formData.prize,
        price: formData.price,
        timer: formData.timer,
        link: formData.link,
        highlights: highlights.length > 0 ? highlights : undefined,
        description: formData.description
      };

      const url = editingId ? `/api/admin/contests/${editingId}` : '/api/admin/contests';
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
        setSuccess(editingId ? 'Contest updated successfully!' : 'Contest added successfully!');
        setError('');
        setShowForm(false);
        fetchContests();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to save contest');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contest?')) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/admin/contests/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setSuccess('Contest deleted successfully!');
        fetchContests();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError('Failed to delete contest');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Contest Manager</h2>
        <button className="btn-primary" onClick={handleAddClick}>+ Add Contest</button>
      </div>

      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      {showForm && (
        <div className="form-card">
          <h3>{editingId ? 'Edit Contest' : 'Add New Contest'}</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter contest title"
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                value={formData.img}
                onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                placeholder="https://... or local path (contest-1.png)"
              />
              {formData.img && (
                <div className="image-preview">
                  <img src={formData.img} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Contest Number</label>
              <input
                type="text"
                value={formData.contestNo}
                onChange={(e) => setFormData({ ...formData, contestNo: e.target.value })}
                placeholder="Big Win, etc."
              />
            </div>

            <div className="form-group">
              <label>Remaining Tickets</label>
              <input
                type="text"
                value={formData.remaining}
                onChange={(e) => setFormData({ ...formData, remaining: e.target.value })}
                placeholder="Buy Unlimited, 9320, etc."
              />
            </div>

            <div className="form-group">
              <label>Prize *</label>
              <input
                type="text"
                value={formData.prize}
                onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                placeholder="$300,000,000/month"
              />
            </div>

            <div className="form-group">
              <label>Button Text</label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="JOIN"
              />
            </div>

            <div className="form-group">
              <label>Timer</label>
              <input
                type="text"
                value={formData.timer}
                onChange={(e) => setFormData({ ...formData, timer: e.target.value })}
                placeholder="290603"
              />
            </div>

            <div className="form-group">
              <label>Affiliate Link *</label>
              <input
                type="url"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="form-group full-width">
              <label>Highlight Tags (comma-separated)</label>
              <input
                type="text"
                value={formData.highlights}
                onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                placeholder="No KYC, Crypto"
              />
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Odds of winning a jackpot: 1 in 16,777,216"
                rows="3"
              />
            </div>
          </div>

          <div className="form-actions">
            <button className="btn-primary" onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save Contest'}
            </button>
            <button className="btn-secondary" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="table-container">
        {loading && <p>Loading...</p>}
        {!loading && contests.length === 0 && <p>No contests found. Add your first contest!</p>}
        {!loading && contests.length > 0 && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Prize</th>
                <th>Highlights</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contests.map((contest) => (
                <tr key={contest.id}>
                  <td>
                    {contest.img && (
                      <img 
                        src={contest.img} 
                        alt={contest.title}
                        style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    )}
                  </td>
                  <td><strong>{contest.title}</strong></td>
                  <td>{contest.prize}</td>
                  <td>
                    {Array.isArray(contest.highlights) && contest.highlights.map((h, idx) => (
                      <span key={idx} className="tag">{h}</span>
                    ))}
                  </td>
                  <td>
                    <a href={contest.link} target="_blank" rel="noopener noreferrer" className="link-preview">
                      View
                    </a>
                  </td>
                  <td className="actions">
                    <button className="btn-edit" onClick={() => handleEditClick(contest)}>
                      Edit
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(contest.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ContestManager;

