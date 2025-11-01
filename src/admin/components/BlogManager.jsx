import React, { useState, useEffect } from 'react';

const BlogManager = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    image: '',
    excerpt: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
    content: '',
    status: 'published'
  });

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchPosts();
    fetchImages();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/blog-posts', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/images', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setImages(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to load images:', err);
    }
  };

  const handleAddClick = () => {
    setFormData({
      title: '',
      slug: '',
      image: '',
      excerpt: '',
      author: '',
      date: new Date().toISOString().split('T')[0],
      category: '',
      content: '',
      status: 'published'
    });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEditClick = (post) => {
    setFormData({
      title: post.title || '',
      slug: post.slug || '',
      image: post.image || '',
      excerpt: post.excerpt || '',
      author: post.author || '',
      date: post.date || new Date().toISOString().split('T')[0],
      category: post.category || '',
      content: post.content || '',
      status: post.status || 'published'
    });
    setEditingId(post.id);
    setShowForm(true);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: editingId ? formData.slug : generateSlug(title)
    });
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.slug.trim()) {
      setError('Title and slug are required');
      return;
    }

    try {
      setLoading(true);
      const url = editingId ? `/api/admin/blog-posts/${editingId}` : '/api/admin/blog-posts';
      const method = editingId ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(editingId ? 'Blog post updated!' : 'Blog post added!');
        setTimeout(() => setSuccess(''), 3000);
        fetchPosts();
        setShowForm(false);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to save blog post');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/admin/blog-posts/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        setSuccess('Blog post deleted!');
        setTimeout(() => setSuccess(''), 3000);
        fetchPosts();
      } else {
        setError('Failed to delete blog post');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '30px' }}>Blog Manager</h2>

      {error && <div className="admin-alert admin-alert-danger">{error}</div>}
      {success && <div className="admin-alert admin-alert-success">{success}</div>}

      {/* Image Picker Modal */}
      {showImagePicker && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '30px',
            maxWidth: '900px',
            maxHeight: '80vh',
            overflow: 'auto',
            width: '90%'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Select an Image</h3>
              <button
                onClick={() => setShowImagePicker(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#999'
                }}
              >
                ×
              </button>
            </div>
            
            {images.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
                No images available. Upload images from the Images section.
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: '15px'
              }}>
                {images.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => {
                      setFormData({ ...formData, image: img.public_url });
                      setShowImagePicker(false);
                    }}
                    style={{
                      cursor: 'pointer',
                      border: '2px solid transparent',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 0.2s',
                      backgroundColor: '#f8fafc'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#2563eb';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <img
                      src={img.public_url}
                      alt={img.alt_text || img.image_name}
                      style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      padding: '8px',
                      fontSize: '12px',
                      color: '#64748b',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {img.image_name}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button
                className="admin-btn admin-btn-secondary"
                onClick={() => setShowImagePicker(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {!showForm && (
        <div style={{ marginBottom: '20px' }}>
          <button className="admin-btn admin-btn-success" onClick={handleAddClick} disabled={loading}>
            + Add New Blog Post
          </button>
        </div>
      )}

      {showForm && (
        <div className="admin-card" style={{ marginBottom: '30px' }}>
          <h3>{editingId ? 'Edit Blog Post' : 'Add New Blog Post'}</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Title *</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="e.g., What Is a Crypto Lottery? Complete Guide 2025"
              />
            </div>

            <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Slug *</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g., what-is-crypto-lottery-guide"
              />
              <small style={{ color: '#666', fontSize: '12px' }}>
                URL-friendly version of the title (auto-generated from title)
              </small>
            </div>

            <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Image</label>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <input
                  type="text"
                  className="admin-form-control"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/images/blog/blog-1.jpg or URL"
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  className="admin-btn admin-btn-secondary"
                  onClick={() => setShowImagePicker(true)}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Choose from Storage
                </button>
              </div>
              {formData.image && (
                <div style={{ marginTop: '10px' }}>
                  <img 
                    src={formData.image} 
                    alt="Preview" 
                    style={{ maxWidth: '200px', maxHeight: '150px', borderRadius: '6px', border: '1px solid var(--border-color)' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}
            </div>

            <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Excerpt</label>
              <textarea
                className="admin-textarea"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief description shown on blog listing..."
                style={{ minHeight: '80px' }}
              />
            </div>

            <div className="admin-form-group">
              <label>Author</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="e.g., John Crypto"
              />
            </div>

            <div className="admin-form-group">
              <label>Date</label>
              <input
                type="date"
                className="admin-form-control"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="admin-form-group">
              <label>Category</label>
              <input
                type="text"
                className="admin-form-control"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Guides, Reviews, Tutorials"
              />
            </div>

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

            <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Content (Full Post)</label>
              <textarea
                className="admin-textarea"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Full blog post content... (HTML supported)"
                style={{ minHeight: '200px' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button className="admin-btn admin-btn-success" onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save Post'}
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
            <div className="admin-loading">Loading blog posts...</div>
          ) : posts.length === 0 ? (
            <div className="admin-empty-state">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{marginBottom: '15px', color: '#cbd5e1'}}>
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <div className="admin-empty-state-title">No blog posts yet</div>
              <p>Add your first blog post to get started</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                        />
                      ) : (
                        <span style={{ color: '#999', fontSize: '12px' }}>No image</span>
                      )}
                    </td>
                    <td>
                      <strong style={{ fontSize: '14px' }}>{post.title}</strong>
                      {post.excerpt && (
                        <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                          {post.excerpt.substring(0, 60)}...
                        </div>
                      )}
                    </td>
                    <td>{post.author || <span style={{ color: '#999' }}>-</span>}</td>
                    <td>{post.date}</td>
                    <td>
                      {post.category ? (
                        <span
                          style={{
                            fontSize: '12px',
                            padding: '2px 6px',
                            backgroundColor: '#e0e7ff',
                            borderRadius: '3px',
                            color: '#3730a3'
                          }}
                        >
                          {post.category}
                        </span>
                      ) : (
                        <span style={{ color: '#999' }}>-</span>
                      )}
                    </td>
                    <td>
                      {post.status === 'published' ? (
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>Published</span>
                      ) : (
                        <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Draft</span>
                      )}
                    </td>
                    <td>
                      <button
                        className="admin-btn admin-btn-secondary"
                        onClick={() => handleEditClick(post)}
                        style={{ padding: '6px 12px', fontSize: '12px', marginRight: '5px' }}
                      >
                        Edit
                      </button>
                      <button
                        className="admin-btn admin-btn-danger"
                        onClick={() => handleDelete(post.id)}
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

export default BlogManager;
