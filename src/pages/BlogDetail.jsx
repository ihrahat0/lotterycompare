import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/blog.css';

const stripHtml = (html = '') =>
  html
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const slugifyHeading = (text = '') =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const getOffsetTop = (element) => {
  let offset = 0;
  let el = element;
  while (el) {
    offset += el.offsetTop;
    el = el.offsetParent;
  }
  return offset;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [tocItems, setTocItems] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copyState, setCopyState] = useState('Copy link');

  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
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

  const readingStats = useMemo(() => {
    if (!post?.content) {
      return { words: 0, minutes: 0 };
    }
    const words = stripHtml(post.content).split(' ').filter(Boolean).length;
    return {
      words,
      minutes: words ? Math.max(1, Math.ceil(words / 220)) : 0
    };
  }, [post?.content]);

  const formattedDate = useMemo(() => {
    if (!post?.date) return '';
    try {
      return new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (err) {
      return post.date;
    }
  }, [post?.date]);

  const tagList = useMemo(() => {
    if (!post) return [];
    if (Array.isArray(post.tags)) {
      return post.tags.filter(Boolean);
    }
    if (typeof post.tags === 'string') {
      return post.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);
    }
    return post.category ? [post.category] : [];
  }, [post]);

  const shareLink = useMemo(() => {
    if (shareUrl) return shareUrl;
    if (typeof window !== 'undefined' && post?.slug) {
      return `${window.location.origin}/blog/${post.slug}`;
    }
    return '';
  }, [shareUrl, post?.slug]);

  useEffect(() => {
    if (!post?.content) {
      setTocItems([]);
      return;
    }

    const updateToc = () => {
      if (!contentRef.current) return;
      const headings = contentRef.current.querySelectorAll('h1, h2, h3');
      const headingItems = Array.from(headings)
        .map((heading, index) => {
          const text = heading.textContent?.trim();
          if (!text) return null;
          const level = parseInt(heading.tagName.replace('H', ''), 10);
          const id = heading.id || `${slugifyHeading(text)}-${index}`;
          heading.id = id;
          return { id, text, level };
        })
        .filter(Boolean);
      setTocItems(headingItems);
    };

    const raf = window.requestAnimationFrame(updateToc);
    return () => window.cancelAnimationFrame(raf);
  }, [post?.content]);

  useEffect(() => {
    if (!post?.content) {
      setScrollProgress(0);
      return;
    }

    const handleProgress = () => {
      if (!contentRef.current) return;
      const element = contentRef.current;
      const start = getOffsetTop(element);
      const height = element.scrollHeight;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const end = start + Math.max(height - viewportHeight, 1);
      if (height <= viewportHeight) {
        setScrollProgress(window.scrollY >= start ? 100 : 0);
        return;
      }
      const current = window.scrollY - start;
      const total = end - start;
      const progress = Math.min(100, Math.max(0, (current / total) * 100));
      setScrollProgress(Number.isFinite(progress) ? progress : 0);
    };

    handleProgress();
    window.addEventListener('scroll', handleProgress, { passive: true });
    window.addEventListener('resize', handleProgress);
    return () => {
      window.removeEventListener('scroll', handleProgress);
      window.removeEventListener('resize', handleProgress);
    };
  }, [post?.content]);

  const handleShare = (platform) => {
    if (!shareLink || typeof window === 'undefined') return;
    const encodedUrl = encodeURIComponent(shareLink);
    const encodedTitle = encodeURIComponent(post?.title || 'Check this article');
    const map = {
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
    };

    const target = map[platform];
    if (!target) return;

    if (platform === 'email') {
      window.location.href = target;
    } else {
      window.open(target, '_blank', 'noopener,noreferrer,width=600,height=600');
    }
  };

  const handleCopyLink = async () => {
    if (!shareLink || typeof window === 'undefined') return;
    try {
      await navigator?.clipboard?.writeText(shareLink);
      setCopyState('Copied!');
    } catch (err) {
      const textarea = document.createElement('textarea');
      textarea.value = shareLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopyState('Copied!');
    } finally {
      setTimeout(() => setCopyState('Copy link'), 2500);
    }
  };

  const scrollToHeading = (id) => {
    if (typeof window === 'undefined') return;
    const target = document.getElementById(id);
    if (!target) return;
    const topOffset = getOffsetTop(target) - 120;
    window.scrollTo({
      top: topOffset > 0 ? topOffset : 0,
      behavior: 'smooth'
    });
  };

  const renderShareButtons = () => {
    const buttonConfigs = [
      {
        id: 'copy',
        label: copyState,
        onClick: handleCopyLink,
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        )
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        onClick: () => handleShare('linkedin'),
        variant: 'primary',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h3.96V21H3zM9.5 8.98H13v1.65h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.67V21h-3.95v-5.46c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21H9.5z" />
          </svg>
        )
      },
      {
        id: 'twitter',
        label: 'Share on X',
        onClick: () => handleShare('twitter'),
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.91 3h-3.62l-3.18 4.12L9.07 3H2l7.25 9.5L2.33 21h3.62l3.53-4.57L15.22 21H22l-7.54-9.88L19.91 3z" />
          </svg>
        )
      },
      {
        id: 'facebook',
        label: 'Facebook',
        onClick: () => handleShare('facebook'),
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.92 3.6 9 8.31 9.93v-7.02H7.9v-2.91h2.27V9.41c0-2.25 1.34-3.49 3.39-3.49.98 0 2 .17 2 .17v2.2h-1.13c-1.11 0-1.46.69-1.46 1.4v1.69h2.49l-.4 2.91h-2.09V22c4.71-.93 8.31-5.01 8.31-9.93z" />
          </svg>
        )
      },
      {
        id: 'email',
        label: 'Email',
        onClick: () => handleShare('email'),
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        )
      }
    ];

    return buttonConfigs.map((btn) => (
      <button
        key={btn.id}
        type="button"
        className={`blog-detail-share-button ${btn.variant ? `blog-detail-share-button-${btn.variant}` : ''}`}
        onClick={btn.onClick}
      >
        <span className="blog-detail-share-icon" aria-hidden="true">
          {btn.icon}
        </span>
        {btn.label}
      </button>
    ));
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
      
      <div className="blog-detail-page">
        <div className="blog-detail-container">
          <Link to="/blog" className="blog-detail-back">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all articles
          </Link>

          <header className="blog-detail-hero">
            <div className="blog-detail-hero-content">
              <div className="blog-detail-hero-eyebrow">
                {post.category || 'Lottery & Crypto Insights'}
              </div>
              <h1 className="blog-detail-title">{post.title}</h1>
              <p className="blog-detail-hero-subtitle">
                {post.excerpt ||
                  'Expert commentary, transparent reviews, and data-backed insights for smarter lottery play.'}
              </p>
              <div className="blog-detail-meta-grid">
                <div className="blog-detail-meta-card">
                  <span className="blog-detail-meta-label">Author</span>
                  <strong>{post.author || 'Lotterycompare Editorial Team'}</strong>
                </div>
                <div className="blog-detail-meta-card">
                  <span className="blog-detail-meta-label">Published</span>
                  <strong>{formattedDate || '—'}</strong>
                </div>
                <div className="blog-detail-meta-card">
                  <span className="blog-detail-meta-label">Reading time</span>
                  <strong>{readingStats.minutes || 0} min</strong>
                </div>
                <div className="blog-detail-meta-card">
                  <span className="blog-detail-meta-label">Words</span>
                  <strong>{readingStats.words}</strong>
                </div>
              </div>

              {tagList.length > 0 && (
                <div className="blog-detail-tags">
                  {tagList.map((tag) => (
                    <span key={tag} className="blog-detail-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="blog-detail-hero-media">
              {post.image ? (
                <div className="blog-detail-hero-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-detail-featured-image" />
                  <div className="blog-detail-hero-overlay" />
                </div>
              ) : (
                <div className="blog-detail-hero-placeholder">
                  <span>{post.title?.charAt(0) || 'LC'}</span>
                </div>
              )}
            </div>
          </header>

          <div className="blog-detail-layout">
            <div className="blog-detail-main">
              {post.excerpt && (
                <blockquote className="blog-detail-standfirst">
                  {post.excerpt}
                </blockquote>
              )}

              <div className="blog-detail-progress-card">
                <div className="blog-detail-progress-label">
                  <span>Reading progress</span>
                  <strong>{Math.round(scrollProgress)}%</strong>
                </div>
                <div className="blog-detail-progress-track">
                  <div className="blog-detail-progress-bar" style={{ width: `${scrollProgress}%` }} />
                </div>
              </div>

              <article className="blog-detail-content">
                <div ref={contentRef}>
                  {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  ) : (
                    <p>No content available.</p>
                  )}
                </div>
              </article>

              <div className="blog-detail-share-mobile">
                <h4>Share this article</h4>
                <div className="blog-detail-share-buttons">{renderShareButtons()}</div>
              </div>

              <div className="blog-detail-footer-card">
                <div>
                  <p className="blog-detail-footer-eyebrow">Keep exploring</p>
                  <h4>Looking for more expert breakdowns?</h4>
                  <p>Dive into more data-rich lottery comparisons, crypto draws, and strategy explainers.</p>
                </div>
                <Link to="/blog" className="blog-detail-cta-button">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Browse all posts
                </Link>
              </div>
            </div>

            <aside className="blog-detail-sidebar">
              {tocItems.length > 0 && (
                <div className="blog-detail-card blog-detail-toc">
                  <div className="blog-card-title">On this page</div>
                  <ul className="blog-detail-toc-list">
                    {tocItems.map((item) => (
                      <li key={item.id} className={`toc-level-${item.level}`}>
                        <button type="button" onClick={() => scrollToHeading(item.id)}>
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="blog-detail-card">
                <div className="blog-card-title">Article stats</div>
                <ul className="blog-detail-stat-list">
                  <li>
                    <span>Reading time</span>
                    <strong>{readingStats.minutes || 0} min</strong>
                  </li>
                  <li>
                    <span>Word count</span>
                    <strong>{readingStats.words}</strong>
                  </li>
                  <li>
                    <span>Published</span>
                    <strong>{formattedDate || '—'}</strong>
                  </li>
                  {post.category && (
                    <li>
                      <span>Category</span>
                      <strong>{post.category}</strong>
                    </li>
                  )}
                </ul>
              </div>

              <div className="blog-detail-card blog-detail-share">
                <div className="blog-card-title">Share article</div>
                <div className="blog-detail-share-buttons">{renderShareButtons()}</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

