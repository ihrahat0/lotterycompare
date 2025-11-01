import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';
import { casinos } from '../data/casinos';

const CasinoReview = () => {
    const { id } = useParams();
    const casino = casinos.find(c => c.id === parseInt(id));

    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, [id]);

    if (!casino) {
        return <div>Casino not found</div>;
    }

    const renderStars = (rating) => {
        return '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
    };

    return (
        <>
            <SEO 
                title={`${casino.name} Review 2025 - Honest Casino Review`} 
                description={`${casino.name} review: ${casino.bonus}. Read our in-depth review covering games, bonuses, payment methods, and withdrawal speed.`}
                keywords={`${casino.name} review, ${casino.name} bonus, crypto casino review, bitcoin lottery review`}
            />

            {/* Page Title */}
            <div className="page-title">
                <div className="tf-tsparticles">
                    <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
                </div>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <div className="casino-review-header">
                                    <img src={casino.logo} alt={casino.name} className="casino-logo-large" />
                                    <div>
                                        <h1 className="heading">{casino.name} Review</h1>
                                        <div className="rating-large">
                                            {renderStars(casino.rating)} <span>{casino.rating}/5.0</span>
                                        </div>
                                        <a 
                                            href={casino.affiliateLink} 
                                            className="tf-btn mt-20"
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            Play Now <i className="icon-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <ul className="breadcrumbs mt-20">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/top-casinos">Top Casinos</Link></li>
                                    <li>{casino.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Review Content */}
            <section className="casino-review-content pt-80 pb-100">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-8">
                            
                            {/* Quick Facts Table */}
                            <div className="quick-facts wow fadeInUp mb-60">
                                <h3>Quick Facts</h3>
                                <table className="facts-table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Founded</strong></td>
                                            <td>{casino.founded}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>License</strong></td>
                                            <td>{casino.license}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Currencies</strong></td>
                                            <td>{casino.currencies.join(', ')}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Min Deposit</strong></td>
                                            <td>{casino.minDeposit}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Bonus</strong></td>
                                            <td className="bonus-text">{casino.bonus}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Withdrawal Speed</strong></td>
                                            <td><span className="badge badge-success">{casino.withdrawalSpeed}</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Provably Fair</strong></td>
                                            <td>{casino.provablyFair ? '✓ Yes' : '✗ No'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Overview */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Overview</h2>
                                <p>
                                    {casino.name} is a {casino.provablyFair ? 'provably fair' : 'trusted'} crypto lottery and casino platform that launched in {casino.founded}. 
                                    With a {casino.rating}/5.0 rating, it stands out for its {casino.highlights.toLowerCase()}.
                                </p>
                                <p>
                                    The platform offers an attractive welcome bonus of <strong>{casino.bonus}</strong>, making it an excellent choice for new players. 
                                    With support for multiple cryptocurrencies including {casino.currencies.slice(0, 3).join(', ')}, players have flexibility in their payment options.
                                </p>
                            </div>

                            {/* Games & Lotteries */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Games & Lotteries Offered</h2>
                                <p>
                                    {casino.name} offers a diverse selection of gaming options:
                                </p>
                                <div className="games-grid">
                                    {casino.games.map((game, index) => (
                                        <div key={index} className="game-tag">{game}</div>
                                    ))}
                                </div>
                                <p className="mt-20">
                                    Whether you're interested in traditional lottery draws, instant win games, or casino classics, 
                                    {casino.name} provides a comprehensive gaming experience powered by blockchain technology.
                                </p>
                            </div>

                            {/* Blockchain Fairness */}
                            {casino.provablyFair && (
                                <div className="review-section wow fadeInUp mb-60">
                                    <h2>Blockchain Fairness / Provably Fair Details</h2>
                                    <p>
                                        {casino.name} uses provably fair technology, allowing players to verify the fairness of each game round. 
                                        Every lottery draw and game outcome is recorded on the blockchain, ensuring complete transparency.
                                    </p>
                                    <div className="highlight-box">
                                        <h4>✓ How to Verify Fairness:</h4>
                                        <ol>
                                            <li>After each game round, you'll receive a unique hash</li>
                                            <li>Use the casino's verification tool to check the hash against blockchain records</li>
                                            <li>Confirm that the outcome was truly random and not manipulated</li>
                                        </ol>
                                    </div>
                                </div>
                            )}

                            {/* Payment Methods */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Payment Methods</h2>
                                <p>
                                    {casino.name} supports the following cryptocurrencies:
                                </p>
                                <div className="crypto-list">
                                    {casino.currencies.map((currency, index) => (
                                        <span key={index} className="crypto-badge">{currency}</span>
                                    ))}
                                </div>
                                <p className="mt-20">
                                    The minimum deposit is <strong>{casino.minDeposit}</strong>, making it accessible for players with different budgets.
                                </p>
                            </div>

                            {/* Withdrawals */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Withdrawal Speed</h2>
                                <p>
                                    One of the standout features of {casino.name} is its <strong>{casino.withdrawalSpeed}</strong> withdrawal processing. 
                                    {casino.withdrawalSpeed === 'Instant' ? 
                                        ' Your winnings are sent directly to your crypto wallet as soon as you request a withdrawal.' :
                                        ' Withdrawals are processed quickly, ensuring you can access your winnings without unnecessary delays.'
                                    }
                                </p>
                                <div className="pros-cons">
                                    <div className="pros">
                                        <h4>✓ Withdrawal Pros:</h4>
                                        <ul>
                                            <li>Fast processing times</li>
                                            <li>No hidden fees</li>
                                            <li>Direct to wallet</li>
                                            <li>No withdrawal limits for crypto</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Security & Licensing */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Security & Licensing</h2>
                                <p>
                                    {casino.name} operates under a <strong>{casino.license}</strong> license, ensuring regulatory compliance and player protection. 
                                    The platform implements industry-standard security measures including:
                                </p>
                                <ul>
                                    <li>SSL encryption for all transactions</li>
                                    <li>Two-factor authentication (2FA)</li>
                                    <li>Cold storage for player funds</li>
                                    <li>Regular security audits</li>
                                    <li>Responsible gaming tools</li>
                                </ul>
                            </div>

                            {/* Customer Support */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Customer Support Experience</h2>
                                <p>
                                    {casino.name} offers multiple channels for customer support:
                                </p>
                                <ul>
                                    <li>24/7 Live Chat</li>
                                    <li>Email Support</li>
                                    <li>FAQ Section</li>
                                    <li>Telegram Community</li>
                                </ul>
                                <p>
                                    Response times are generally fast, with live chat inquiries typically answered within minutes.
                                </p>
                            </div>

                            {/* Final Verdict */}
                            <div className="review-section final-verdict wow fadeInUp">
                                <h2>Final Verdict</h2>
                                <div className="verdict-box">
                                    <div className="verdict-rating">
                                        <span className="rating-large">{casino.rating}/5.0</span>
                                        <span>{renderStars(casino.rating)}</span>
                                    </div>
                                    <p>
                                        For players who want {casino.provablyFair ? 'transparent draws and' : ''} instant payouts, 
                                        <strong> {casino.name}</strong> is one of the best crypto lotteries to try. 
                                        With its {casino.highlights.toLowerCase()}, competitive bonus of {casino.bonus}, 
                                        and {casino.withdrawalSpeed.toLowerCase()} withdrawals, it offers an excellent gambling experience.
                                    </p>
                                    <div className="final-scores mt-40">
                                        <div className="score-item">
                                            <span>Games Selection</span>
                                            <strong>{casino.rating}/5.0</strong>
                                        </div>
                                        <div className="score-item">
                                            <span>Bonuses</span>
                                            <strong>{(casino.rating - 0.1).toFixed(1)}/5.0</strong>
                                        </div>
                                        <div className="score-item">
                                            <span>Payment Speed</span>
                                            <strong>{casino.withdrawalSpeed === 'Instant' ? '5.0' : '4.5'}/5.0</strong>
                                        </div>
                                        <div className="score-item">
                                            <span>Customer Support</span>
                                            <strong>{(casino.rating - 0.2).toFixed(1)}/5.0</strong>
                                        </div>
                                    </div>
                                    <a 
                                        href={casino.affiliateLink} 
                                        className="tf-btn w-100 mt-40"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                    >
                                        Play Now at {casino.name} <i className="icon-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                
                                {/* Quick Action */}
                                <div className="sidebar-widget wow fadeInRight">
                                    <div className="widget-casino-cta">
                                        <img src={casino.logo} alt={casino.name} />
                                        <h4>{casino.name}</h4>
                                        <div className="rating">{renderStars(casino.rating)} {casino.rating}</div>
                                        <div className="bonus-highlight">{casino.bonus}</div>
                                        <a 
                                            href={casino.affiliateLink} 
                                            className="tf-btn w-100 mt-20"
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            Play Now <i className="icon-right"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* Top Casinos This Week */}
                                <div className="sidebar-widget wow fadeInRight" data-wow-delay="0.1s">
                                    <h4>Top Casinos This Week</h4>
                                    {casinos.filter(c => c.featured).map((c, index) => (
                                        <div key={c.id} className="mini-casino-card">
                                            <img src={c.logo} alt={c.name} />
                                            <div>
                                                <Link to={`/casino/${c.id}`}>{c.name}</Link>
                                                <div className="rating">{renderStars(c.rating)}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Newsletter */}
                                <div className="sidebar-widget wow fadeInRight" data-wow-delay="0.2s">
                                    <h4>Get Weekly Bonuses</h4>
                                    <p>Subscribe for exclusive deals</p>
                                    <form className="sidebar-newsletter">
                                        <input type="email" placeholder="Your email" required />
                                        <button type="submit" className="tf-btn w-100">Subscribe</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CasinoReview;

