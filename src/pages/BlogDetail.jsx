import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/blog.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`/api/frontend/blog-posts/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Failed to load blog post:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <SEO title="Loading..." />
        <div className="blog-loading-container">
          <div className="blog-loading-spinner"></div>
          <div className="blog-loading-text">Loading article...</div>
        </div>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <SEO title="Post Not Found" />
        <div className="blog-empty-container">
          <svg className="blog-empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="blog-empty-title">Article Not Found</div>
          <div className="blog-empty-text">Sorry, the blog post you're looking for doesn't exist.</div>
          <div style={{ marginTop: '24px' }}>
            <Link to="/blog" className="blog-detail-cta-button">
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} - Lotterycompare Blog`}
        description={post.excerpt || post.title}
        keywords={post.category || 'blog, lottery, crypto'}
      />
      
      <div className="blog-detail-container">
        <Link to="/blog" className="blog-detail-back">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Articles
        </Link>

        <header className="blog-detail-header">
          <h1 className="blog-detail-title">{post.title}</h1>
          
          <div className="blog-detail-meta-bar">
            {post.author && (
              <div className="blog-detail-meta-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="blog-detail-author">{post.author}</span>
              </div>
            )}
            {post.date && (
              <div className="blog-detail-meta-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            )}
            {post.category && (
              <span className="blog-detail-category-tag">{post.category}</span>
            )}
          </div>
        </header>

        {post.image && (
          <img 
            src={post.image} 
            alt={post.title}
            className="blog-detail-featured-image"
          />
        )}
        
        {post.excerpt && (
          <div className="blog-detail-excerpt">
            {post.excerpt}
          </div>
        )}

        <article className="blog-detail-content">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p>No content available.</p>
          )}
        </article>

        <footer className="blog-detail-footer">
          <Link to="/blog" className="blog-detail-cta-button">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Explore More Articles
          </Link>
        </footer>
      </div>
    </>
  );
};

export default BlogDetail;

