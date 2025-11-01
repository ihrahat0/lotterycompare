import React, { useEffect, useState } from 'react';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';
import CasinoCard from '../components/CasinoCard';
import BlockStatus from '../components/BlockStatus';
import { casinos } from '../data/casinos';

const TopCasinos = () => {
    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    const [filter, setFilter] = useState('all');
    const [filteredCasinos, setFilteredCasinos] = useState(casinos);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredCasinos(casinos);
        } else if (filter === 'featured') {
            setFilteredCasinos(casinos.filter(c => c.featured));
        } else if (filter === 'high-rating') {
            setFilteredCasinos(casinos.filter(c => c.rating >= 4.7));
        } else if (filter === 'instant-payout') {
            setFilteredCasinos(casinos.filter(c => c.withdrawalSpeed === 'Instant'));
        }
    }, [filter]);

    return (
        <>
            <SEO 
                title="Best Crypto Casinos and Lotteries of 2025" 
                description="Compare the top crypto casinos and blockchain lotteries. Find the best Bitcoin lottery sites with instant payouts, provably fair games, and exclusive bonuses."
                keywords="crypto casino comparison, bitcoin lottery sites, blockchain casino, best crypto lottery, btc casino"
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
                                <h1 className="heading text-center">Best Crypto Casinos & Lotteries of 2025</h1>
                                <p className="sub-heading text-center">
                                    Compare trusted blockchain lottery platforms — verified for fairness, instant payouts, and transparency
                                </p>
                                <ul className="breadcrumbs">
                                    <li><a href="/">Home</a></li>
                                    <li>Top Casinos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="section-casinos-list pt-80 pb-100">
                <div className="tf-container">
                    <div className="row mb-40">
                        <div className="col-12">
                            <BlockStatus />
                        </div>
                    </div>
                    
                    {/* Filters */}
                    <div className="casino-filters wow fadeInUp mb-60">
                        <div className="filter-buttons">
                            <button 
                                className={`tf-btn ${filter === 'all' ? 'active' : 'style-outline'}`}
                                onClick={() => setFilter('all')}
                            >
                                All Casinos
                            </button>
                            <button 
                                className={`tf-btn ${filter === 'featured' ? 'active' : 'style-outline'}`}
                                onClick={() => setFilter('featured')}
                            >
                                ⭐ Featured
                            </button>
                            <button 
                                className={`tf-btn ${filter === 'high-rating' ? 'active' : 'style-outline'}`}
                                onClick={() => setFilter('high-rating')}
                            >
                                High Rating
                            </button>
                            <button 
                                className={`tf-btn ${filter === 'instant-payout' ? 'active' : 'style-outline'}`}
                                onClick={() => setFilter('instant-payout')}
                            >
                                ⚡ Instant Payout
                            </button>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="comparison-table-full wow fadeInUp mt-40">
                        <div className="table-responsive">
                            <table className="table casino-comparison-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Casino</th>
                                        <th>Bonus</th>
                                        <th>Min Deposit</th>
                                        <th>Highlights</th>
                                        <th>Rating</th>
                                        <th>Withdrawal</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCasinos.map((casino, index) => (
                                        <tr key={casino.id} className="wow fadeInUp" data-wow-delay={`${index * 0.05}s`}>
                                            <td><strong>#{index + 1}</strong></td>
                                            <td>
                                                <div className="casino-info">
                                                    <img src={casino.logo} alt={casino.name} className="casino-logo" />
                                                    <div>
                                                        <strong>{casino.name}</strong>
                                                        <div className="badges">
                                                            {casino.featured && <span className="badge badge-success">Featured</span>}
                                                            {casino.provablyFair && <span className="badge badge-info">Provably Fair</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="bonus-text">{casino.bonus}</span></td>
                                            <td>{casino.minDeposit}</td>
                                            <td>{casino.highlights}</td>
                                            <td>
                                                <div className="rating-stars">
                                                    <span className="rating-number">{casino.rating}</span> ⭐
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge badge-success">{casino.withdrawalSpeed}</span>
                                            </td>
                                            <td>
                                                <div className="action-buttons">
                                                    <a 
                                                        href={casino.affiliateLink} 
                                                        className="tf-btn style-3 small mb-2"
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                    >
                                                        Play Now
                                                    </a>
                                                    <a href={`/casino/${casino.id}`} className="link-review">Review</a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Casino Cards Grid */}
                    <div className="grid-column-3 mt-80">
                        {filteredCasinos.map((casino, index) => (
                            <CasinoCard key={casino.id} casino={casino} showFullDetails={true} />
                        ))}
                    </div>

                    {/* Why Trust Section */}
                    <div className="trust-section mt-100 wow fadeInUp">
                        <div className="trust-box">
                            <h2>Why Trust LotteryCompare?</h2>
                            <div className="row mt-40">
                                <div className="col-lg-4">
                                    <div className="trust-item">
                                        <div className="icon">✓</div>
                                        <h4>Verified Reviews</h4>
                                        <p>We personally test every casino and lottery platform before recommending it.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="trust-item">
                                        <div className="icon">⛓️</div>
                                        <h4>Blockchain Verified</h4>
                                        <p>All casinos are checked for provably fair technology and blockchain transparency.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="trust-item">
                                        <div className="icon">🔒</div>
                                        <h4>Security First</h4>
                                        <p>We only list licensed casinos with strong security measures and fair terms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default TopCasinos;

