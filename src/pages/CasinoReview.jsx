import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';
import { Lotterys } from '../data/casinos';

const LotteryReview = () => {
    const { id } = useParams();
    const Lottery = Lotterys.find(c => c.id === parseInt(id));

    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, [id]);

    if (!Lottery) {
        return <div>Lottery not found</div>;
    }

    const renderStars = (rating) => {
        return '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
    };

    return (
        <>
            <SEO 
                title={`${Lottery.name} Review 2025 - Honest Lottery Review`} 
                description={`${Lottery.name} review: ${Lottery.bonus}. Read our in-depth review covering games, bonuses, payment methods, and withdrawal speed.`}
                keywords={`${Lottery.name} review, ${Lottery.name} bonus, crypto Lottery review, bitcoin lottery review`}
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
                                <div className="Lottery-review-header">
                                    <img src={Lottery.logo} alt={Lottery.name} className="Lottery-logo-large" />
                                    <div>
                                        <h1 className="heading">{Lottery.name} Review</h1>
                                        <div className="rating-large">
                                            {renderStars(Lottery.rating)} <span>{Lottery.rating}/5.0</span>
                                        </div>
                                        <a 
                                            href={Lottery.affiliateLink} 
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
                                    <li><Link to="/top-Lotterys">Top Lotterys</Link></li>
                                    <li>{Lottery.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Review Content */}
            <section className="Lottery-review-content pt-80 pb-100">
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
                                            <td>{Lottery.founded}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>License</strong></td>
                                            <td>{Lottery.license}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Currencies</strong></td>
                                            <td>{Lottery.currencies.join(', ')}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Min Deposit</strong></td>
                                            <td>{Lottery.minDeposit}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Bonus</strong></td>
                                            <td className="bonus-text">{Lottery.bonus}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Withdrawal Speed</strong></td>
                                            <td><span className="badge badge-success">{Lottery.withdrawalSpeed}</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>Provably Fair</strong></td>
                                            <td>{Lottery.provablyFair ? '✓ Yes' : '✗ No'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Overview */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Overview</h2>
                                <p>
                                    {Lottery.name} is a {Lottery.provablyFair ? 'provably fair' : 'trusted'} crypto lottery and Lottery platform that launched in {Lottery.founded}. 
                                    With a {Lottery.rating}/5.0 rating, it stands out for its {Lottery.highlights.toLowerCase()}.
                                </p>
                                <p>
                                    The platform offers an attractive welcome bonus of <strong>{Lottery.bonus}</strong>, making it an excellent choice for new players. 
                                    With support for multiple cryptocurrencies including {Lottery.currencies.slice(0, 3).join(', ')}, players have flexibility in their payment options.
                                </p>
                            </div>

                            {/* Games & Lotteries */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Games & Lotteries Offered</h2>
                                <p>
                                    {Lottery.name} offers a diverse selection of gaming options:
                                </p>
                                <div className="games-grid">
                                    {Lottery.games.map((game, index) => (
                                        <div key={index} className="game-tag">{game}</div>
                                    ))}
                                </div>
                                <p className="mt-20">
                                    Whether you're interested in traditional lottery draws, instant win games, or Lottery classics, 
                                    {Lottery.name} provides a comprehensive gaming experience powered by blockchain technology.
                                </p>
                            </div>

                            {/* Blockchain Fairness */}
                            {Lottery.provablyFair && (
                                <div className="review-section wow fadeInUp mb-60">
                                    <h2>Blockchain Fairness / Provably Fair Details</h2>
                                    <p>
                                        {Lottery.name} uses provably fair technology, allowing players to verify the fairness of each game round. 
                                        Every lottery draw and game outcome is recorded on the blockchain, ensuring complete transparency.
                                    </p>
                                    <div className="highlight-box">
                                        <h4>✓ How to Verify Fairness:</h4>
                                        <ol>
                                            <li>After each game round, you'll receive a unique hash</li>
                                            <li>Use the Lottery's verification tool to check the hash against blockchain records</li>
                                            <li>Confirm that the outcome was truly random and not manipulated</li>
                                        </ol>
                                    </div>
                                </div>
                            )}

                            {/* Payment Methods */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Payment Methods</h2>
                                <p>
                                    {Lottery.name} supports the following cryptocurrencies:
                                </p>
                                <div className="crypto-list">
                                    {Lottery.currencies.map((currency, index) => (
                                        <span key={index} className="crypto-badge">{currency}</span>
                                    ))}
                                </div>
                                <p className="mt-20">
                                    The minimum deposit is <strong>{Lottery.minDeposit}</strong>, making it accessible for players with different budgets.
                                </p>
                            </div>

                            {/* Withdrawals */}
                            <div className="review-section wow fadeInUp mb-60">
                                <h2>Withdrawal Speed</h2>
                                <p>
                                    One of the standout features of {Lottery.name} is its <strong>{Lottery.withdrawalSpeed}</strong> withdrawal processing. 
                                    {Lottery.withdrawalSpeed === 'Instant' ? 
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
                                    {Lottery.name} operates under a <strong>{Lottery.license}</strong> license, ensuring regulatory compliance and player protection. 
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
                                    {Lottery.name} offers multiple channels for customer support:
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
                                        <span className="rating-large">{Lottery.rating}/5.0</span>
                                        <span>{renderStars(Lottery.rating)}</span>
                                    </div>
                                    <p>
                                        For players who want {Lottery.provablyFair ? 'transparent draws and' : ''} instant payouts, 
                                        <strong> {Lottery.name}</strong> is one of the best crypto lotteries to try. 
                                        With its {Lottery.highlights.toLowerCase()}, competitive bonus of {Lottery.bonus}, 
                                        and {Lottery.withdrawalSpeed.toLowerCase()} withdrawals, it offers an excellent gambling experience.
                                    </p>
                                    <div className="final-scores mt-40">
                                        <div className="score-item">
                                            <span>Games Selection</span>
                                            <strong>{Lottery.rating}/5.0</strong>
                                        </div>
                                        <div className="score-item">
                                            <span>Bonuses</span>
                                            <strong>{(Lottery.rating - 0.1).toFixed(1)}/5.0</strong>
                                        </div>
                                        <div className="score-item">
                                            <span>Payment Speed</span>
                                            <strong>{Lottery.withdrawalSpeed === 'Instant' ? '5.0' : '4.5'}/5.0</strong>
                                        </div>
                                        <div className="score-item">
                                            <span>Customer Support</span>
                                            <strong>{(Lottery.rating - 0.2).toFixed(1)}/5.0</strong>
                                        </div>
                                    </div>
                                    <a 
                                        href={Lottery.affiliateLink} 
                                        className="tf-btn w-100 mt-40"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                    >
                                        Play Now at {Lottery.name} <i className="icon-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                
                                {/* Quick Action */}
                                <div className="sidebar-widget wow fadeInRight">
                                    <div className="widget-Lottery-cta">
                                        <img src={Lottery.logo} alt={Lottery.name} />
                                        <h4>{Lottery.name}</h4>
                                        <div className="rating">{renderStars(Lottery.rating)} {Lottery.rating}</div>
                                        <div className="bonus-highlight">{Lottery.bonus}</div>
                                        <a 
                                            href={Lottery.affiliateLink} 
                                            className="tf-btn w-100 mt-20"
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            Play Now <i className="icon-right"></i>
                                        </a>
                                    </div>
                                </div>

                                {/* Top Lotterys This Week */}
                                <div className="sidebar-widget wow fadeInRight" data-wow-delay="0.1s">
                                    <h4>Top Lotterys This Week</h4>
                                    {Lotterys.filter(c => c.featured).map((c, index) => (
                                        <div key={c.id} className="mini-Lottery-card">
                                            <img src={c.logo} alt={c.name} />
                                            <div>
                                                <Link to={`/Lottery/${c.id}`}>{c.name}</Link>
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

export default LotteryReview;

