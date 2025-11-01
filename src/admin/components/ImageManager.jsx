import React, { useState, useEffect } from 'react';

const ImageManager = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    imageKey: '',
    imageName: '',
    category: '',
    altText: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/images', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setImages(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError('Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setUploadForm({
        ...uploadForm,
        imageName: file.name,
        imageKey: file.name.split('.')[0]
      });
      setError('');
    } else {
      setError('Please select a valid image file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select an image');
      return;
    }

    setError('');
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('imageName', uploadForm.imageName);
      formData.append('imageKey', uploadForm.imageKey);
      formData.append('category', uploadForm.category);
      formData.append('altText', uploadForm.altText);

      const response = await fetch('/api/images/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        fetchImages();
        setSelectedFile(null);
        setUploadForm({
          imageKey: '',
          imageName: '',
          category: '',
          altText: ''
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Upload failed');
      }
    } catch (err) {
      setError('Connection error: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (imageId) => {
    if (!window.confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        fetchImages();
      } else {
        setError('Failed to delete image');
      }
    } catch (err) {
      setError('Connection error');
    }
  };

  if (loading && images.length === 0) {
    return <div className="admin-loading">Loading images...</div>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: '30px' }}>Image Manager</h2>

      {error && <div className="admin-alert admin-alert-danger">{error}</div>}

      {/* Upload Section */}
      <div className="admin-card" style={{ marginBottom: '30px' }}>
        <h3>Upload New Image</h3>
        
        <form onSubmit={handleUpload}>
          <div
            className={`admin-image-upload-area ${dragOver ? 'dragover' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  handleFileSelect(e.target.files[0]);
                }
              }}
              className="admin-image-upload-input"
            />
            {selectedFile ? (
              <div>
                <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                  ✓ {selectedFile.name} selected
                </p>
                <p style={{ fontSize: '12px', color: '#666' }}>
                  Click or drag to change
                </p>
              </div>
            ) : (
              <div>
                <p style={{ fontSize: '16px', marginBottom: '10px' }}>
                  🖼️ Drag and drop your image here
                </p>
                <p style={{ fontSize: '12px', color: '#666' }}>
                  or click to browse
                </p>
              </div>
            )}
          </div>

          <div className="admin-form-row" style={{ marginTop: '20px' }}>
            <div className="admin-form-group">
              <label>Image Key</label>
              <input
                type="text"
                className="admin-form-control"
                value={uploadForm.imageKey}
                onChange={(e) => setUploadForm({ ...uploadForm, imageKey: e.target.value })}
                placeholder="e.g., hero-banner"
                required
              />
            </div>
            <div className="admin-form-group">
              <label>Category</label>
              <input
                type="text"
                className="admin-form-control"
                value={uploadForm.category}
                onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                placeholder="e.g., hero, footer, blog"
              />
            </div>
          </div>

          <div className="admin-form-group admin-form-full">
            <label>Alt Text</label>
            <input
              type="text"
              className="admin-form-control"
              value={uploadForm.altText}
              onChange={(e) => setUploadForm({ ...uploadForm, altText: e.target.value })}
              placeholder="Describe the image for accessibility"
            />
          </div>

          <button
            type="submit"
            className="admin-btn admin-btn-success"
            disabled={uploading || !selectedFile}
            style={{ marginTop: '15px' }}
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>

      {/* Gallery Section */}
      <div className="admin-card">
        <h3>Gallery ({images.length} images)</h3>
        
        {images.length === 0 ? (
          <div className="admin-empty-state">
            <div className="admin-empty-state-icon">🖼️</div>
            <div className="admin-empty-state-title">No images yet</div>
            <p>Upload your first image to get started</p>
          </div>
        ) : (
          <div className="admin-image-gallery">
            {images.map((image) => (
              <div key={image.id} className="admin-image-item">
                <img
                  src={image.url}
                  alt={image.alt_text || image.image_name}
                  className="admin-image-preview"
                />
                <div className="admin-image-item-actions">
                  <button
                    className="admin-image-item-btn admin-image-item-btn-delete"
                    onClick={() => handleDeleteImage(image.id)}
                  >
                    Delete
                  </button>
                </div>
                <div style={{ padding: '8px', fontSize: '12px', backgroundColor: '#f8fafc' }}>
                  <div style={{ fontWeight: '500', marginBottom: '4px' }}>
                    {image.image_key}
                  </div>
                  {image.category && (
                    <div style={{ color: '#64748b', fontSize: '11px' }}>
                      {image.category}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageManager;
