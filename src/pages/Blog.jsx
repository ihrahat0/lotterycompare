import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    window.scrollTo(0, 0);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/frontend/blog-posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error('Failed to load blog posts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <SEO title="Blog & News" />
        <div className="blog-loading-container">
          <div className="blog-loading-spinner"></div>
          <div className="blog-loading-text">Loading amazing content...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Blog & News - Lotterycompare" 
        description="Discover the latest lottery insights, winning strategies, crypto lottery news, and expert tips. Your comprehensive guide to smart lottery playing."
        keywords="lottery blog, lottery news, lottery tips, lottery strategies, crypto lottery, winning strategies"
      />
      
      <div className="blog-grid-container">
        <div className="blog-header">
          <h1>Latest Insights & Stories</h1>
          <p>Discover expert tips, winning strategies, and the latest trends in lottery and crypto gaming</p>
        </div>

        {posts.length === 0 ? (
          <div className="blog-empty-container">
            <svg className="blog-empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <div className="blog-empty-title">No Posts Yet</div>
            <div className="blog-empty-text">Check back soon for exciting content!</div>
          </div>
        ) : (
          <div className="blog-cards-grid">
            {posts.map((post) => (
              <article key={post.id} className="modern-blog-card">
                <div className="modern-blog-image-container">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="modern-blog-image"
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '48px',
                      fontWeight: '700'
                    }}>
                      {post.title.charAt(0)}
                    </div>
                  )}
                  {post.category && (
                    <span className="modern-blog-category-badge">{post.category}</span>
                  )}
                </div>
                
                <div className="modern-blog-content">
                  <div className="modern-blog-meta">
                    {post.author && (
                      <div className="modern-blog-meta-item">
                        <svg className="modern-blog-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{post.author}</span>
                      </div>
                    )}
                    {post.date && (
                      <div className="modern-blog-meta-item">
                        <svg className="modern-blog-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    )}
                  </div>

                  <h2 className="modern-blog-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="modern-blog-excerpt">{post.excerpt}</p>

                  <Link to={`/blog/${post.slug}`} className="modern-blog-read-more">
                    Read Full Article
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;

