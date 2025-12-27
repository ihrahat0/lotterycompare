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
                const LotterysRes = await fetch('/api/frontend/casinos');
                if (LotterysRes.ok) {
                    const data = await LotterysRes.json();
                    if (data && data.length > 0) {
                        // Map API data to match component expectations
                        const mappedData = data.map(casino => ({
                            ...casino,
                            logo: casino.logo_url || casino.logo, // Support both field names
                            bonus: casino.bonus_text || casino.bonus,
                            highlights: casino.description || casino.highlights || '',
                            affiliateLink: casino.link || casino.affiliateLink,
                            rating: casino.rating ? parseFloat(casino.rating) : 4.5
                        }));
                        setLotterys(mappedData);
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

    // Show top lotteries for comparison table
    const topLotterys = Lotterys.slice(0, 5);

    // Suppress loading unused warning for now
    // eslint-disable-next-line no-unused-vars
    const _ = loading;

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
                                            🎁 Top Recommended Lotteries of 2025 <br />
                                            <span className="d-block animationtext slide">
                                                <span className="cd-words-wrapper">
                                                    <span className="item-text is-visible">GUESS NUMBERS, WIN JACKPOT</span>
                                                    <span className="item-text is-hidden">of 2025</span>
                                                </span>
                                            </span>
                                        </h1>
                                        <div className="text">
                                            LotteryCompare is an independent website that helps players compare online lotteries, crypto lotteries, and bitcoin lottery platforms in one place. We analyze lottery providers based on fairness, transparency, odds, jackpots, draw frequency, and user experience, so you can make informed decisions before playing. Whether you are looking for a traditional online lottery or a modern crypto lottery powered by blockchain, LotteryCompare provides clear comparisons, up-to-date information, and unbiased insights to help you choose the best lottery for your needs.
                                        </div>
                                        <div className="button-group" style={{ display: 'inline-flex' }}>
                                            <a href="#comparison-table" className="tf-btn">
                                                Compare <i className="icon-right"></i>
                                            </a>
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
                                    <h2 className="title wow fadeInUp">
                                        Compare Online Lottery Vs. Bitcoin Lottery
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                                        See why verified on-chain lottery is the future of gaming
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Comparison Table */}
                        <div id="comparison-table" className="detailed-comparison-section wow fadeInUp mt-40">
                            <div className="table-scroll-container">
                                <table className="detailed-compare-table">
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            <th>First BTC Lottery</th>
                                            <th>UK National Lottery</th>
                                            <th>EuroMillions</th>
                                            <th>Powerball (US)</th>
                                            <th>Mega Millions (US)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Draw Frequency</th>
                                            <td>⏱️ Every <strong>10 minutes</strong></td>
                                            <td>2× per week</td>
                                            <td>2× per week</td>
                                            <td>3× per week</td>
                                            <td>2× per week</td>
                                        </tr>
                                        <tr>
                                            <th>Winning Number Source</th>
                                            <td>🔗 <strong>Bitcoin blockchain</strong><br />(next block hash)</td>
                                            <td>Internal RNG</td>
                                            <td>Internal RNG</td>
                                            <td>Internal RNG</td>
                                            <td>Internal RNG</td>
                                        </tr>
                                        <tr>
                                            <th>Transparency</th>
                                            <td>✅ <strong>Fully verifiable on blockchain</strong></td>
                                            <td>❌ Not publicly verifiable</td>
                                            <td>❌ Not verifiable</td>
                                            <td>❌ Not verifiable</td>
                                            <td>❌ Not verifiable</td>
                                        </tr>
                                        <tr>
                                            <th>Trust Model</th>
                                            <td>🟢 <strong>Trustless</strong> (math & blockchain)</td>
                                            <td>Central authority</td>
                                            <td>Central authority</td>
                                            <td>Central authority</td>
                                            <td>Central authority</td>
                                        </tr>
                                        <tr>
                                            <th>Verification</th>
                                            <td>Anyone can verify on Blockchain.com</td>
                                            <td>Operator-controlled</td>
                                            <td>Operator-controlled</td>
                                            <td>Operator-controlled</td>
                                            <td>Operator-controlled</td>
                                        </tr>
                                        <tr>
                                            <th>Ticket Price</th>
                                            <td>💵 <strong>$5 per ticket</strong></td>
                                            <td>£2–£2.50</td>
                                            <td>€2.50</td>
                                            <td>$2–$3</td>
                                            <td>$2–$3</td>
                                        </tr>
                                        <tr>
                                            <th>Minimum Win</th>
                                            <td>🎉 <strong>Any number matched wins</strong></td>
                                            <td>Must match fixed tiers</td>
                                            <td>Must match fixed tiers</td>
                                            <td>Must match fixed tiers</td>
                                            <td>Must match fixed tiers</td>
                                        </tr>
                                        <tr>
                                            <th>Payout Speed</th>
                                            <td>⚡ <strong>Instant to crypto wallet</strong></td>
                                            <td>Days / weeks</td>
                                            <td>Days / weeks</td>
                                            <td>Days / weeks</td>
                                            <td>Days / weeks</td>
                                        </tr>
                                        <tr>
                                            <th>KYC Requirement</th>
                                            <td>🚫 <strong>No KYC</strong></td>
                                            <td>✅ Required</td>
                                            <td>✅ Required</td>
                                            <td>✅ Required</td>
                                            <td>✅ Required</td>
                                        </tr>
                                        <tr>
                                            <th>Geographic Limits</th>
                                            <td>🌍 <strong>Worldwide</strong></td>
                                            <td>UK only</td>
                                            <td>EU only</td>
                                            <td>US only</td>
                                            <td>US only</td>
                                        </tr>
                                        <tr>
                                            <th>Age Restriction</th>
                                            <td>19+</td>
                                            <td>18+</td>
                                            <td>18+</td>
                                            <td>18+</td>
                                            <td>18+</td>
                                        </tr>
                                        <tr>
                                            <th>Jackpot Size</th>
                                            <td>Dynamic, frequent jackpots</td>
                                            <td>Very large, rare</td>
                                            <td>Very large, rare</td>
                                            <td>Extremely large, rare</td>
                                            <td>Extremely large, rare</td>
                                        </tr>
                                        <tr>
                                            <th>Fairness Perception</th>
                                            <td>⭐⭐⭐⭐⭐</td>
                                            <td>⭐⭐</td>
                                            <td>⭐⭐</td>
                                            <td>⭐⭐</td>
                                            <td>⭐⭐</td>
                                        </tr>
                                        <tr>
                                            <th>Modern UX / Web3</th>
                                            <td>🚀 <strong>Built for Web3</strong></td>
                                            <td>❌ Traditional</td>
                                            <td>❌ Traditional</td>
                                            <td>❌ Traditional</td>
                                            <td>❌ Traditional</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="text-center mt-40">
                            <Link to="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="tf-btn">
                                Play First BTC Lottery <i className="icon-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Crypto vs Traditional Comparison Section */}
                <section className="section-comparison-redesign pt-100 pb-100">
                    <div className="tf-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="heading-section text-center mb-60">
                                    <h2 className="title wow fadeInUp">Crypto Lottery vs Traditional Lottery</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                                        A comparison between centralized systems and Web3
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="comparison-wrapper">
                            <div className="vs-badge">VS</div>

                            {/* Traditional Lottery */}
                            <div className="comparison-card traditional wow fadeInLeft">
                                <div className="card-icon">✏️</div>
                                <h3>Traditional Lottery</h3>
                                <p className="desc">
                                    Traditional lotteries are operated by <span className="highlight-text">centralized organizations</span> that control the draw process and winning number generation.
                                    While they often offer very <span className="highlight-text">large jackpots</span>, players must rely on trust, as results are <span className="highlight-text">not publicly verifiable</span> in real time
                                    and are subject to geographic and regulatory restrictions.
                                </p>
                                <ul className="comparison-features">
                                    <li>Centralized systems</li>
                                    <li>Weekly draws</li>
                                    <li>Trust-based outcomes</li>
                                    <li>Large jackpots</li>
                                    <li>KYC required</li>
                                </ul>
                            </div>

                            {/* Crypto Lottery */}
                            <div className="comparison-card crypto wow fadeInRight">
                                <div className="card-icon">🔗</div>
                                <h3>Crypto Lottery</h3>
                                <p className="desc">
                                    Crypto lotteries emerged to <span className="highlight-text">solve the transparency problem</span> in winning number generation.
                                    Winning numbers are derived from <span className="highlight-text">public blockchain data</span>,
                                    allowing anyone to verify results independently <span className="highlight-text">without relying on an operator</span> or centralized authority.
                                </p>
                                <ul className="comparison-features">
                                    <li>Decentralized systems</li>
                                    <li>Hourly jackpots</li>
                                    <li>Publicly verifiable results</li>
                                    <li>Smaller jackpots</li>
                                    <li>No KYC required</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* VS Lottery Comparison Section */}
                <section className="section-vs-comparison pt-100">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <h2 className="title wow fadeInUp">Featured Lottery Reviews</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                                        Compare the world's biggest lotteries head-to-head
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vs-comparison-grid mt-40">
                            {/* UK National Lottery */}
                            <div className="vs-lottery-card wow fadeInUp">
                                <div className="vs-lottery-header">
                                    <span className="lottery-flag">🇬🇧</span>
                                    <h4 className="lottery-name">UK National Lottery (Lotto)</h4>
                                </div>
                                <div className="vs-lottery-body">
                                    <div className="lottery-stat">
                                        <span className="stat-label">Rating</span>
                                        <span className="stat-value">⭐⭐⭐⭐☆ (4.2 / 5)</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Jackpot Odds</span>
                                        <span className="stat-value">1 in 45,000,000</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Typical Jackpot</span>
                                        <span className="stat-value jackpot">£2M - £15M</span>
                                    </div>
                                    <p className="lottery-description">Government-run UK lottery with twice-weekly draws, centralized number generation, and large rollovers. Proceeds support public projects and charities.</p>
                                </div>
                            </div>

                            {/* EuroMillions */}
                            <div className="vs-lottery-card wow fadeInUp" data-wow-delay="0.1s">
                                <div className="vs-lottery-header">
                                    <span className="lottery-flag">🇪🇺</span>
                                    <h4 className="lottery-name">EuroMillions</h4>
                                </div>
                                <div className="vs-lottery-body">
                                    <div className="lottery-stat">
                                        <span className="stat-label">Rating</span>
                                        <span className="stat-value">⭐⭐⭐⭐☆ (4.1 / 5)</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Jackpot Odds</span>
                                        <span className="stat-value">1 in 139,000,000</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Typical Jackpot</span>
                                        <span className="stat-value jackpot">€17M - €240M</span>
                                    </div>
                                    <p className="lottery-description">Pan-European lottery offering massive rollover jackpots, twice-weekly draws, and centralized systems operated by national lottery organizations.</p>
                                </div>
                            </div>

                            {/* Powerball */}
                            <div className="vs-lottery-card wow fadeInUp" data-wow-delay="0.2s">
                                <div className="vs-lottery-header">
                                    <span className="lottery-flag">🇺🇸</span>
                                    <h4 className="lottery-name">Powerball</h4>
                                </div>
                                <div className="vs-lottery-body">
                                    <div className="lottery-stat">
                                        <span className="stat-label">Rating</span>
                                        <span className="stat-value">⭐⭐⭐⭐☆ (4.0 / 5)</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Jackpot Odds</span>
                                        <span className="stat-value">1 in 292,000,000</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Typical Jackpot</span>
                                        <span className="stat-value jackpot">$20M - $1B+</span>
                                    </div>
                                    <p className="lottery-description">Iconic US lottery famous for record-breaking jackpots, frequent rollovers, three weekly draws, and extremely low odds of winning the top prize.</p>
                                </div>
                            </div>

                            {/* Mega Millions */}
                            <div className="vs-lottery-card wow fadeInUp" data-wow-delay="0.3s">
                                <div className="vs-lottery-header">
                                    <span className="lottery-flag">🇺🇸</span>
                                    <h4 className="lottery-name">Mega Millions</h4>
                                </div>
                                <div className="vs-lottery-body">
                                    <div className="lottery-stat">
                                        <span className="stat-label">Rating</span>
                                        <span className="stat-value">⭐⭐⭐⭐☆ (3.9 / 5)</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Jackpot Odds</span>
                                        <span className="stat-value">1 in 302,000,000</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Typical Jackpot</span>
                                        <span className="stat-value jackpot">$20M - $1B+</span>
                                    </div>
                                    <p className="lottery-description">Major US lottery known for enormous jackpots, twice-weekly draws, centralized number selection, and some of the longest odds in global lottery games.</p>
                                </div>
                            </div>

                            {/* First BTC Lottery - Featured */}
                            <div className="vs-lottery-card vs-featured wow fadeInUp" data-wow-delay="0.4s">
                                <div className="vs-lottery-header">
                                    <span className="lottery-flag">🟣</span>
                                    <h4 className="lottery-name">First BTC Lottery</h4>
                                    <span className="featured-badge">⭐ Top Pick</span>
                                </div>
                                <div className="vs-lottery-body">
                                    <div className="lottery-stat">
                                        <span className="stat-label">Rating</span>
                                        <span className="stat-value">⭐⭐⭐⭐⭐ (4.8 / 5)</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Jackpot Odds</span>
                                        <span className="stat-value highlight">1 in 16,000,000</span>
                                    </div>
                                    <div className="lottery-stat">
                                        <span className="stat-label">Typical Jackpot</span>
                                        <span className="stat-value jackpot">~$80,000 (even 2 digits win!)</span>
                                    </div>
                                    <p className="lottery-description">Blockchain-based lottery with frequent draws, transparent number generation from public Bitcoin data, and instant crypto payouts without traditional lottery restrictions.</p>
                                </div>
                                <div className="vs-lottery-footer">
                                    <a href="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" target="_blank" rel="noopener noreferrer" className="tf-btn play-now-btn">Play Now <i className="icon-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* On-Chain Verification Section */}
                <section className="section-on-chain pt-100 pb-80">
                    <div className="tf-container">
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

