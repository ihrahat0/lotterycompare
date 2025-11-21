import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import BlockStatus from '../components/BlockStatus';
import LotteryCard from '../components/CasinoCard';
import BlockResultCard from '../components/BlockResultCard';
import { Lotterys as fallbackLotterys, bonuses, blogPosts as fallbackBlogPosts } from '../data/casinos';
import '../styles/blog.css';

const stripHtml = (text = '') =>
  text.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

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

const NewHome = () => {
    const [Lotterys, setLotterys] = useState(fallbackLotterys);
    const [blogPosts, setBlogPosts] = useState(fallbackBlogPosts);
    const [pageElements, setPageElements] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch updated Lotterys from API
                const LotterysRes = await fetch('/api/frontend/Lotterys');
                if (LotterysRes.ok) {
                    const data = await LotterysRes.json();
                    if (data && data.length > 0) {
                        setLotterys(data);
                    }
                }
                
                // Fetch real blog posts from API
                const blogRes = await fetch('/api/frontend/blog-posts');
                if (blogRes.ok) {
                    const blogData = await blogRes.json();
                    if (blogData && Array.isArray(blogData) && blogData.length > 0) {
                        // Limit to latest 3 posts for the homepage
                        setBlogPosts(blogData.slice(0, 3));
                    }
                }
                
                // Fetch page elements for this page
                const elementsRes = await fetch('/api/frontend/page-elements/new-home');
                if (elementsRes.ok) {
                    const elements = await elementsRes.json();
                    const elementMap = {};
                    elements.forEach(el => {
                        elementMap[el.element_id] = el;
                    });
                    setPageElements(elementMap);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        initAllPlugins();
    }, []);

    // Helper function to get text with fallback
    const getElementText = (elementId, defaultText) => {
        const element = pageElements[elementId];
        if (element && element.updated_text) {
            return element.updated_text;
        }
        return defaultText;
    };

    // Helper function to get inline styles for element
    const getElementStyle = (elementId) => {
        const element = pageElements[elementId];
        const style = {};
        if (element) {
            if (element.font_size) style.fontSize = element.font_size;
            if (element.font_weight) style.fontWeight = element.font_weight;
        }
        return style;
    };

    const featuredLotterys = Lotterys.filter(c => c.featured).slice(0, 3);
    const topLotterys = Lotterys.slice(0, 5);

    return (
        <>
            <SEO 
                title="LotteryCompare | Find the Best Lottery" 
                description="Compare trusted crypto lotteries and play provably fair games — all verified on the blockchain. Find the best Bitcoin lottery sites with instant payouts."
                keywords="crypto lottery, bitcoin lottery, blockchain Lottery, provably fair, crypto gambling, btc lottery"
            />
            <StructuredData type="Organization" />
            <StructuredData type="WebSite" />
            
            <div className="main-content">
                
                {/* Hero Section */}
                <div className="tf-section">
                    <div className="page-title-home style-2">
                        <div className="tf-container">
                            <div className="col-12">
                                <div className="page-title-home-content">
                                    <div className="content">
                                        <h1 className="title">
                                        🎁 Top Recommended Crypto Lotteries
                                        Lotteries & <br />
                                            <span className="d-block animationtext slide">
                                                <span className="cd-words-wrapper">
                                                    <span className="item-text is-visible">Crypto Lottery</span>
                                                    <span className="item-text is-hidden">of 2025</span>
                                                    <span className="item-text is-hidden">Provably Fair</span>
                                                </span>
                                            </span>
                                        </h1>
                                        <div className="text">
                                            Compare trusted crypto lotteries and play provably fair games<br />
                                            — all verified on the blockchain.
                                        </div>
                                        <div className="button-group" style={{display: 'inline-flex'}}>
                                            <Link to="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="tf-btn">
                                               Play Now <i className="icon-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src={require('../assets/images/icon/page-title-home-2-item-1.png')} alt="" width="180" height="197" loading="eager" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-2 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-2.png')} alt="" />
                        </div>
                        <div className="image-3 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-3.png')} alt="" />
                        </div>
                        <div className="image-4 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-4.png')} alt="" />
                        </div>
                    </div>
                </div>

                {/* Block Status + Comparison Table / Top Picks */}
                <section className="section-online-lottery page-home-1 pt-100">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12 mb-40">
                                <BlockStatus />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <h2 className="title wow fadeInUp" style={getElementStyle('Lottery-section-h2')}>
                                        {getElementText('Lottery-section-h2', '🎁 Top Recommended Crypto Lottery')}
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s" style={getElementStyle('Lottery-section-p')}>
                                        {getElementText('Lottery-section-p', 'Compare the best blockchain lotteries and Crypto Lottery — verified for fairness and instant payouts !')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table - Desktop */}
                        <div className="comparison-table wow fadeInUp mt-40 Lottery-table-desktop">
                            <div className="table-responsive">
                                <table className="table Lottery-comparison-table">
                                    <thead>
                                        <tr>
                                            <th>Lottery</th>
                                            <th>Bonus</th>
                                            <th>Highlights</th>
                                            <th>Rating</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topLotterys.map((Lottery, index) => (
                                            <tr key={Lottery.id} className="wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                                                <td>
                                                    <div className="Lottery-info">
                                                        <img src={Lottery.logo_url || Lottery.logo} alt={Lottery.name} className="Lottery-logo" width="76" height="76" loading="lazy" />
                                                        <div>
                                                            <strong>{Lottery.name}</strong>
                                                            {Lottery.featured && <span className="badge badge-success ml-2">Featured</span>}
                                                            {Lottery.provablyFair && <span className="badge badge-info ml-2">Provably Fair</span>}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="bonus-text">{Lottery.bonus_text || Lottery.bonus || 'N/A'}</span></td>
                                                <td>{Lottery.description || Lottery.highlights || 'Professional Lottery'}</td>
                                                <td>
                                                    <div className="rating-stars">
                                                        <span className="rating-number">{Lottery.rating || 4.5}</span> ⭐
                                                    </div>
                                                </td>
                                                <td>
                                                    <a 
                                                        href={Lottery.link || Lottery.affiliateLink || '#'} 
                                                        className="tf-btn style-3 small"
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                    >
                                                        Play Now
                                                    </a>
                                                    <Link to={`/Lottery/${Lottery.id}`} className="link-review">Review</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Lottery Cards - Mobile */}
                        <div className="Lottery-cards-mobile mt-40">
                            {topLotterys.map((Lottery, index) => (
                                <div key={Lottery.id} className="Lottery-card-mobile wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                                    <div className="card-header">
                                        <img src={Lottery.logo_url || Lottery.logo} alt={Lottery.name} className="Lottery-card-logo" width="76" height="76" loading="lazy" />
                                        <div className="card-title-section">
                                            <h3 className="Lottery-card-name">{Lottery.name}</h3>
                                            {Lottery.featured && <span className="badge badge-success">Featured</span>}
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="card-item">
                                            <span className="label">Bonus</span>
                                            <span className="value bonus-text">{Lottery.bonus_text || Lottery.bonus || 'N/A'}</span>
                                        </div>

                                        <div className="card-item">
                                            <span className="label">Highlights</span>
                                            <span className="value">{Lottery.description || Lottery.highlights || 'Professional Lottery'}</span>
                                        </div>

                                        <div className="card-item">
                                            <span className="label">Rating</span>
                                            <span className="value rating-stars">
                                                <span className="rating-number">{Lottery.rating || 4.5}</span> ⭐
                                            </span>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <a 
                                            href={Lottery.link || Lottery.affiliateLink || '#'} 
                                            className="tf-btn style-3"
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            Play Now
                                        </a>
                                        <Link to={`/Lottery/${Lottery.id}`} className="tf-btn style-outline">
                                            Review
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-40">
                            <Link to="/top-Lotterys" className="tf-btn">
                                View All Lotterys <i className="icon-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* How Crypto lottery’s work? */}
                <section className="section-how-it-works pt-100 pb-100 bg-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section text-center">
                                    <h2 className="title wow fadeInUp">How Crypto lottery’s work?</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                                        Get started with crypto lotteries in 3 simple steps
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-60">
                            <div className="col-lg-4 col-md-6">
                                <div className="how-it-works-card wow fadeInUp">
                                    <div className="step-number">1</div>
                                    <div className="icon">💰</div>
                                    <h4>Play or Deposit</h4>
                                    <p>Choose your favorite crypto lottery or Lottery. Make a deposit using BTC, ETH, or other supported cryptocurrencies.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="how-it-works-card wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="step-number">2</div>
                                    <div className="icon">⛓️</div>
                                    <h4>Blockchain Draw (Provably Fair)</h4>
                                    <p>All draws are verified on the blockchain. You can check the fairness of every single draw using smart contracts.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="how-it-works-card wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="step-number">3</div>
                                    <div className="icon">⚡</div>
                                    <h4>Instant Payout</h4>
                                    <p>Win and get paid instantly to your crypto wallet. No waiting, no delays — your winnings are yours immediately by smart contracts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Reviews */}
                <section className="section-featured-reviews pt-100">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <h2 className="title wow fadeInUp">Featured Lottery Reviews</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                                        In-depth reviews of the top crypto lottery platforms
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-column-3 mt-40">
                            {featuredLotterys.map((Lottery, index) => (
                                <LotteryCard key={Lottery.id} Lottery={Lottery} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Crypto Bonus Highlights */}
                <section className="section-bonuses pt-100 pb-80">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <h2 className="title wow fadeInUp">🎁 Latest Bonuses & Free Spins</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                                        Grab these exclusive crypto Lottery bonuses before they expire. Our site also tracks live crypto lottery results derived from the latest <strong>Bitcoin block number</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Block Result Screenshot + Copy - REDESIGNED */}
                        <div className="on-chain-section">
                            <div className="on-chain-content-wrapper">
                                <div className="on-chain-left wow fadeInLeft" data-wow-delay="0.1s">
                                    <div className="block-result-enhanced">
                                        <BlockResultCard blockData={{
                                            blockNumber: '920768',
                                            status: 'Completed',
                                            drawDate: 'October 25, 2025',
                                            prizePool: '$128K USDT',
                                            totalTickets: '1951',
                                            winningNumber: 'CBAB6C',
                                            totalWinners: '100',
                                            winnerBreakdown: [
                                                { digits: 6, count: 1 },
                                                { digits: 5, count: 1 },
                                                { digits: 4, count: 1 },
                                                { digits: 3, count: 8 },
                                                { digits: 2, count: 89 }
                                            ]
                                        }} />
                                    </div>
                                </div>
                                <div className="on-chain-right wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="on-chain-info-card">
                                        <div className="on-chain-badge">
                                            Blockchain Verified
                                        </div>
                                        <h3>On-Chain, Verifiable Lottery Draws</h3>
                                        <p>
                                        A blockchain lottery is fully transparent because every draw result is recorded on the public blockchain. The winning numbers are generated from real blockchain data—in FirstBTC example, they are the last digits of a Bitcoin block hash—so no one can change or manipulate them. This means every player can independently verify the result, ensuring 100% fairness and trust.
                                        </p>
                                        <ul className="on-chain-features">
                                            <li><span>Live block height with countdown to next draw</span></li>
                                            <li><span>Provably fair — no centralized RNG</span></li>
                                            <li><span>Instant access to winners and prize breakdown</span></li>
                                        </ul>
                                        <Link to="/lottery-results" className="on-chain-cta">
                                            View All Results <i className="icon-right"></i>
                                        </Link>
                                        <div className="trust-indicators">
                                            <div className="trust-item">
                                                <div className="trust-item-icon">⛓️</div>
                                                <div className="trust-item-label">Blockchain</div>
                                                <div className="trust-item-value">100%</div>
                                            </div>
                                            <div className="trust-item">
                                                <div className="trust-item-icon">⚡</div>
                                                <div className="trust-item-label">Instant</div>
                                                <div className="trust-item-value">Fast</div>
                                            </div>
                                            <div className="trust-item">
                                                <div className="trust-item-icon">✓</div>
                                                <div className="trust-item-label">Verified</div>
                                                <div className="trust-item-value">Safe</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-40">
                            {bonuses.map((bonus, index) => (
                                <div key={bonus.id} className="col-lg-4 col-md-6">
                                    <div className="bonus-card wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                                        <div className="bonus-header">
                                            <img src={bonus.logo} alt={bonus.Lottery} className="Lottery-logo-small" />
                                            <span className="badge badge-hot">🔥 Hot</span>
                                        </div>
                                        <h4>{bonus.Lottery}</h4>
                                        <div className="bonus-offer">{bonus.offer}</div>
                                        <div className="bonus-code">
                                            <span>Code:</span> <strong>{bonus.code}</strong>
                                        </div>
                                        <p className="bonus-description">{bonus.description}</p>
                                        <a href="http://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="tf-btn style-3 w-100">
                                            Claim Bonus <i className="icon-right"></i>
                                        </a>
                                        <div className="bonus-expiry">
                                            ⏰ Expires: {new Date(bonus.expiry).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-40">
                            <Link to="/bonuses" className="tf-btn">
                                View All Bonuses <i className="icon-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Educational Section */}
                <section className="section-educational pt-100 pb-100">
                    <div className="tf-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="educational-image-wrapper wow fadeInLeft">
                                    <div className="educational-image-card">
                                        <img src={require('../assets/images/section/our-jackpot-2.png')} alt="Crypto Lottery" width="519" height="568" loading="lazy" />
                                        <div className="floating-badge badge-1">
                                            <div className="badge-icon">⛓️</div>
                                            <div className="badge-text">
                                                <div className="badge-title">Blockchain</div>
                                                <div className="badge-subtitle">Verified</div>
                                            </div>
                                        </div>
                                        <div className="floating-badge badge-2">
                                            <div className="badge-icon">⚡</div>
                                            <div className="badge-text">
                                                <div className="badge-title">Instant</div>
                                                <div className="badge-subtitle">Payouts</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="educational-content-modern wow fadeInRight">
                                    <div className="section-label">
                                        <span className="label-icon">📚</span>
                                        <span className="label-text">Learn About Crypto Lotteries</span>
                                    </div>
                                    <h2 className="educational-title">What Is a Crypto Lottery?</h2>
                                    <p className="educational-description">
                                        A crypto lottery is a blockchain-based gambling game where you can play using 
                                        cryptocurrency like Bitcoin, Ethereum, or other digital assets.
                                    </p>
                                    
                                    <div className="benefits-grid">
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <div className="benefit-content">
                                                <h4>Provably Fair Draws</h4>
                                                <p>A blockchain lottery is fully transparent </p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <div className="benefit-content">
                                                <h4>Instant Payouts</h4>
                                                <p>Winners receive funds immediately to their wallet</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <div className="benefit-content">
                                                <h4>Anonymous Play</h4>
                                                <p>No KYC required on most platforms</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <div className="benefit-content">
                                                <h4>Global Access</h4>
                                                <p>Play from anywhere in the world</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <div className="benefit-content">
                                                <h4>Lower Fees</h4>
                                                <p>No middlemen, lower transaction costs</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Link to="/blog" className="tf-btn mt-40">
                                        Learn More <i className="icon-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="section-blog pt-100 pb-80" style={{ background: '#01011e' }}>
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <h2 className="title wow fadeInUp">Latest Guides & News</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                                        Stay updated with crypto lottery tips, strategies, and industry news
                                    </p>
                                </div>
                            </div>
                        </div>
                        {blogPosts.length > 0 ? (
                            <div className="blog-card-grid mt-40">
                                {blogPosts.map((post, index) => {
                                    const authorLabel = post.author || 'Lotterycompare Editorial';
                                    const formattedDate = formatDate(post.date);
                                    const excerpt = post.excerpt || stripHtml(post.content || '').substring(0, 150);
                                    
                                    return (
                                        <article key={post.id} className="blog-card wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
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
                                                    {authorLabel} • {formattedDate}
                                                </p>
                                                <h4>
                                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                                </h4>
                                                {excerpt && (
                                                    <p className="blog-card-excerpt">{excerpt}</p>
                                                )}
                                                {post.category && (
                                                    <div className="blog-card-tags">
                                                        <span className="blog-card-tag">{post.category}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center mt-40">
                                <p>No blog posts available at the moment. Check back soon!</p>
                            </div>
                        )}
                        {blogPosts.length > 0 && (
                            <div className="text-center mt-40">
                                <Link to="/blog" className="tf-btn">
                                    View All Posts <i className="icon-right"></i>
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* Email Signup / CTA Banner */}
                <section className="section-newsletter pt-100 pb-100">
                    <div className="tf-container">
                        <div className="newsletter-modern-wrapper wow fadeInUp">
                            <div className="newsletter-modern">
                                <div className="newsletter-decoration">
                                    <div className="deco-circle circle-1"></div>
                                    <div className="deco-circle circle-2"></div>
                                    <div className="deco-circle circle-3"></div>
                                </div>
                                
                                <div className="newsletter-header">
                                    <div className="newsletter-icon">🎁</div>
                                    <h2 className="newsletter-title">Get Weekly Crypto Lottery Bonuses</h2>
                                    <p className="newsletter-subtitle">
                                        Join 10,000+ players receiving exclusive deals, new Lottery launches, and winning strategies
                                    </p>
                                </div>
                                
                                <form className="newsletter-form-modern">
                                    <div className="form-group-modern">
                                        <div className="input-icon">📧</div>
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address" 
                                            required 
                                            className="email-input-modern"
                                        />
                                        <button type="submit" className="subscribe-btn-modern">
                                            Subscribe Now <i className="icon-right"></i>
                                    </button>
                                    </div>
                                </form>
                                
                                <div className="newsletter-features">
                                    <div className="feature-item">
                                        <span className="feature-icon">✅</span>
                                        <span className="feature-text">Exclusive Bonuses</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">✅</span>
                                        <span className="feature-text">Weekly Updates</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">✅</span>
                                        <span className="feature-text">No Spam, Unsubscribe Anytime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default NewHome;

