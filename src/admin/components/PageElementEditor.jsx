import React, { useState, useEffect } from 'react';

const PageElementEditor = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [elements, setElements] = useState([]);
  const [editingElement, setEditingElement] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/pages-list');
      const data = await response.json();
      setPages(data.pages || []);
    } catch (err) {
      setError('Failed to load pages list');
    }
  };

  const fetchPageElements = async (pageName) => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`/api/page-elements/${pageName}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setElements(Array.isArray(data) ? data : []);
      setSelectedPage(pageName);
    } catch (err) {
      setError('Failed to load page elements');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (element) => {
    setEditingElement({ ...element });
  };

  const handleSaveElement = async () => {
    if (!editingElement || !editingElement.updated_text.trim()) {
      setError('Text cannot be empty');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/page-elements/${selectedPage}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          elementId: editingElement.element_id,
          elementType: editingElement.element_type,
          originalText: editingElement.original_text,
          updatedText: editingElement.updated_text,
          fontSize: editingElement.font_size,
          fontWeight: editingElement.font_weight
        })
      });

      if (response.ok) {
        setSuccess('Element updated successfully!');
        setTimeout(() => setSuccess(''), 3000);
        fetchPageElements(selectedPage);
        setEditingElement(null);
      } else {
        setError('Failed to save element');
      }
    } catch (err) {
      setError('Error saving element: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '30px' }}>📝 Edit Page Content</h2>

      {error && <div className="admin-alert admin-alert-danger">{error}</div>}
      {success && <div className="admin-alert admin-alert-success">{success}</div>}

      {/* Page Selection */}
      <div className="admin-card" style={{ marginBottom: '30px' }}>
        <h3>Select Page to Edit</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
          {pages.map((page) => (
            <button
              key={page.name}
              className={`admin-btn ${selectedPage === page.name ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
              onClick={() => fetchPageElements(page.name)}
              disabled={loading}
              style={{ cursor: 'pointer' }}
            >
              {page.label}
            </button>
          ))}
        </div>
      </div>

      {/* Elements List and Editor */}
      {selectedPage && !editingElement && (
        <div className="admin-card">
          <h3>Elements on {pages.find(p => p.name === selectedPage)?.label}</h3>
          {loading ? (
            <div className="admin-loading">Loading elements...</div>
          ) : elements.length === 0 ? (
            <div className="admin-empty-state">
              <p>No elements found on this page. Refresh or select another page.</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Current Text</th>
                  <th>Last Updated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {elements.map((element) => (
                  <tr key={element.id}>
                    <td>
                      <span style={{
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: '#e0e7ff',
                        color: '#3730a3'
                      }}>
                        {element.element_type}
                      </span>
                    </td>
                    <td style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {element.updated_text || element.original_text}
                    </td>
                    <td>{new Date(element.updated_at).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="admin-btn admin-btn-secondary"
                        onClick={() => handleEditClick(element)}
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
      )}

      {/* Element Editor */}
      {editingElement && (
        <div className="admin-card">
          <h3>Edit {editingElement.element_type} Element</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Edit Form */}
            <div>
              <div className="admin-form-group">
                <label>Element Type</label>
                <input
                  type="text"
                  className="admin-form-control"
                  value={editingElement.element_type}
                  disabled
                />
              </div>

              <div className="admin-form-group">
                <label>Original Text</label>
                <textarea
                  className="admin-textarea"
                  value={editingElement.original_text || ''}
                  disabled
                  style={{ backgroundColor: '#f3f4f6', minHeight: '80px' }}
                />
              </div>

              <div className="admin-form-group">
                <label>Updated Text</label>
                <textarea
                  className="admin-textarea"
                  value={editingElement.updated_text}
                  onChange={(e) => setEditingElement({
                    ...editingElement,
                    updated_text: e.target.value
                  })}
                  placeholder="Enter the new text..."
                  style={{ minHeight: '120px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="admin-form-group">
                  <label>Font Size</label>
                  <select
                    className="admin-form-control"
                    value={editingElement.font_size || ''}
                    onChange={(e) => setEditingElement({
                      ...editingElement,
                      font_size: e.target.value
                    })}
                  >
                    <option value="">Default</option>
                    <option value="12px">12px (Small)</option>
                    <option value="14px">14px</option>
                    <option value="16px">16px (Normal)</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                    <option value="24px">24px (Large)</option>
                    <option value="28px">28px</option>
                    <option value="32px">32px (X-Large)</option>
                    <option value="36px">36px</option>
                    <option value="40px">40px</option>
                    <option value="48px">48px (XX-Large)</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label>Font Weight</label>
                  <select
                    className="admin-form-control"
                    value={editingElement.font_weight || ''}
                    onChange={(e) => setEditingElement({
                      ...editingElement,
                      font_weight: e.target.value
                    })}
                  >
                    <option value="">Normal</option>
                    <option value="300">Light (300)</option>
                    <option value="400">Normal (400)</option>
                    <option value="500">Medium (500)</option>
                    <option value="600">Semi-Bold (600)</option>
                    <option value="700">Bold (700)</option>
                    <option value="800">Extra Bold (800)</option>
                    <option value="900">Black (900)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button
                  className="admin-btn admin-btn-success"
                  onClick={handleSaveElement}
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  className="admin-btn admin-btn-secondary"
                  onClick={() => setEditingElement(null)}
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Preview */}
            <div>
              <div style={{
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '20px',
                minHeight: '400px'
              }}>
                <h4 style={{ marginBottom: '15px', color: '#666' }}>Preview</h4>
                <div style={{
                  fontSize: editingElement.font_size || '16px',
                  fontWeight: editingElement.font_weight || '400',
                  color: '#333',
                  lineHeight: '1.6',
                  wordWrap: 'break-word'
                }}>
                  {editingElement.updated_text || editingElement.original_text}
                </div>
                
                <div style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
                  <p><strong>Type:</strong> {editingElement.element_type}</p>
                  <p><strong>Size:</strong> {editingElement.font_size || 'Default'}</p>
                  <p><strong>Weight:</strong> {editingElement.font_weight || 'Normal'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageElementEditor;
