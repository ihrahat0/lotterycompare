import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/blog.css';

const stripHtml = (text = '') =>
  text.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const buildExcerpt = (text = '', limit = 160) => {
  const cleanText = stripHtml(text);
  if (!cleanText) return '';
  if (cleanText.length <= limit) return cleanText;
  return `${cleanText.slice(0, limit).trim()}…`;
};

const formatDate = (date) => {
  if (!date) return '';
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return '';
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

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

  const curatedPosts = useMemo(() => {
    return posts.map((post, index) => ({
      ...post,
      preview: buildExcerpt(post.excerpt || post.content || '', index === 0 ? 140 : 90),
      formattedDate: formatDate(post.date),
      authorLabel: post.author || 'Lotterycompare Editorial',
      categoryLabel: post.category || 'Insights'
    }));
  }, [posts]);

  const featuredPost = curatedPosts[0];
  const supportingPosts = curatedPosts.slice(1);

  const popularTopics = useMemo(() => {
    const unique = new Set();
    posts.forEach((post) => {
      if (post?.category) {
        unique.add(post.category);
      }
    });
    if (unique.size === 0) {
      return ['Guides', 'Strategies', 'Product News'];
    }
    return Array.from(unique).slice(0, 4);
  }, [posts]);

  const latestPublished = useMemo(() => {
    const dates = posts
      .map((post) => new Date(post.date))
      .filter((date) => !Number.isNaN(date.getTime()))
      .sort((a, b) => b - a);
    if (dates.length === 0) return '—';
    return dates[0].toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }, [posts]);

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
      
      <div className="blog-page-shell">
        <div className="blog-grid-container">
          <section className="blog-hero">
            <p className="blog-hero-kicker">Latest Guides & News</p>
            <h1>Smart lottery decisions start with verified insights</h1>
            <p className="blog-hero-text">
              We analyze on-chain data, crypto lottery launches, and player strategies so you can bet with context—not guesswork.
            </p>
            <div className="blog-hero-stats">
              <div className="blog-hero-stat">
                <span>Stories published</span>
                <strong>{posts.length}</strong>
              </div>
              <div className="blog-hero-stat">
                <span>Topics covered</span>
                <strong>{new Set(posts.map((p) => p.category).filter(Boolean)).size || 3}</strong>
              </div>
              <div className="blog-hero-stat">
                <span>Last update</span>
                <strong>{latestPublished}</strong>
              </div>
            </div>

            <div className="blog-topics">
              {popularTopics.map((topic) => (
                <span key={topic} className="blog-topic-pill">
                  {topic}
                </span>
              ))}
            </div>
          </section>

          {posts.length === 0 && (
            <div className="blog-empty-container">
              <svg className="blog-empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <div className="blog-empty-title">No Posts Yet</div>
              <div className="blog-empty-text">Check back soon for exciting content!</div>
            </div>
          )}

          {featuredPost && (
            <section className="blog-featured-section">
              <article className="blog-feature-card">
                <Link to={`/blog/${featuredPost.slug}`} className="blog-feature-media">
                  {featuredPost.image ? (
                    <img src={featuredPost.image} alt={featuredPost.title} />
                  ) : (
                    <div className="blog-feature-placeholder">
                      {featuredPost.title?.charAt(0) || 'LC'}
                    </div>
                  )}
                  <span className="blog-feature-tag">{featuredPost.categoryLabel}</span>
                </Link>

                <div className="blog-feature-copy">
                  <p className="blog-card-meta">
                    {featuredPost.formattedDate} · {featuredPost.authorLabel}
                  </p>
                  <h2>{featuredPost.title}</h2>
                  <p className="blog-feature-excerpt">{featuredPost.preview}</p>
                  <Link to={`/blog/${featuredPost.slug}`} className="blog-feature-link">
                    Dive into the analysis
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>

              <div className="blog-feature-side">
                <div className="blog-feature-side-card">
                  <span className="blog-side-label">Up next</span>
                  <p>Preview upcoming investigations, product launches, and player-tested tactics.</p>
                  <Link to="/contact" className="blog-side-link">Pitch a story</Link>
                </div>
                <div className="blog-feature-side-card">
                  <span className="blog-side-label">Newsletter</span>
                  <p>Weekly breakdowns delivered to your inbox—straight from analysts.</p>
                  <a href="mailto:contact@lotterycompare.com" className="blog-side-link">Join waitlist</a>
                </div>
              </div>
            </section>
          )}

          {supportingPosts.length > 0 && (
            <section className="blog-collection">
              <div className="blog-collection-header">
                <div>
                  <p className="blog-collection-kicker">Latest drops</p>
                  <h3>Fresh stories across the ecosystem</h3>
                </div>
                <Link to="/contact" className="blog-collection-cta">Submit a topic</Link>
              </div>

              <div className="blog-card-grid">
                {supportingPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <Link to={`/blog/${post.slug}`} className="blog-card-image-link">
                      {post.image ? (
                        <img src={post.image} alt={post.title} className="blog-card-image" />
                      ) : (
                        <div className="blog-card-placeholder">
                          <span>{post.title?.charAt(0) || 'LC'}</span>
                        </div>
                      )}
                    </Link>
                    <div className="blog-card-content">
                      <p className="blog-card-meta">
                        {post.authorLabel} • {post.formattedDate}
                      </p>
                      <h4>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <p className="blog-card-excerpt">{post.excerpt || stripHtml(post.content || '').substring(0, 150)}</p>
                      {post.categoryLabel && (
                        <div className="blog-card-tags">
                          <span className="blog-card-tag">{post.categoryLabel}</span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;

