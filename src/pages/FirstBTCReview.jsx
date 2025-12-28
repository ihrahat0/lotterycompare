import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const FirstBTCReview = () => {
    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="First BTC Lottery Review | Expert Analysis"
                description="Deep dive into the First BTC Lottery."
                keywords="First BTC Lottery review, legit bitcoin lottery"
                canonical="https://lotterycompare.com/firstbtclottery"
            />

            <div className="page-title">
                <div className="tf-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Link to="/bitcoin-lotteries" style={{ color: '#9ca3af', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: '1rem', fontWeight: 500 }}>
                                ← Back to Comparison
                            </Link>
                            <h1 className="premium-title">First BTC Lottery Review</h1>
                            <p className="premium-subtitle" style={{ margin: 0, textAlign: 'left' }}>
                                The pioneering platform for verifiable, blockchain-based gaming.
                            </p>
                        </div>
                        <div className="col-lg-6 text-center mt-5 mt-lg-0">
                            <div className="premium-card" style={{ display: 'inline-flex', flexDirection: 'column', padding: '40px 60px' }}>
                                <span style={{ fontSize: '1rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>Total Score</span>
                                <span style={{ fontSize: '5rem', fontWeight: 800, color: '#fff', lineHeight: 1, margin: '12px 0' }}>9.5</span>
                                <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
                                    {[1, 2, 3, 4, 5].map(i => <span key={i} style={{ color: '#fbbf24', fontSize: '1.25rem' }}>★</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                {/* Verdict */}
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="premium-card text-center" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                            <h3 style={{ marginBottom: 20 }}>The Verdict</h3>
                            <p style={{ maxWidth: 900, margin: '0 auto', fontSize: '1.25rem' }}>
                                First BTC Lottery is the <strong style={{ color: '#a855f7' }}>only</strong> accessible platform that derives winning numbers from live Bitcoin block hashes. For players who value mathematical fairness, this is the gold standard.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="feature-grid">
                            <div className="premium-card">
                                <div style={{ fontSize: 40, marginBottom: 20 }}>🎰</div>
                                <h4>Gameplay</h4>
                                <p>Simple 6-digit match format. Draws happen every 10 minutes, mirroring the Bitcoin block time average. Fast-paced and continuous.</p>
                            </div>
                            <div className="premium-card">
                                <div style={{ fontSize: 40, marginBottom: 20 }}>⛓️</div>
                                <h4>Verification</h4>
                                <p>The defining feature. Winning numbers are the last digits of the block hash. You can check this on any explorer. Zero manipulation possible.</p>
                            </div>
                            <div className="premium-card">
                                <div style={{ fontSize: 40, marginBottom: 20 }}>💸</div>
                                <h4>Payouts</h4>
                                <p>Prizes are paid automatically to your wallet. No KYC hurdles for claiming distinct crypto prizes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pros & Cons */}
                <section className="tf-section">
                    <div className="tf-container">
                        <h3 className="premium-title text-center" style={{ marginBottom: 50 }}>Pros & Cons</h3>
                        <div className="row">
                            <div className="col-md-6 mb-40 mb-md-0">
                                <div className="premium-card h-100" style={{ borderColor: 'rgba(34, 197, 94, 0.15)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                                        <div style={{ width: 40, height: 40, background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700 }}>✓</div>
                                        <h4 style={{ margin: 0 }}>The Good</h4>
                                    </div>
                                    <ul className="premium-list">
                                        <li><span className="list-icon-check">✓</span><span>Verifiable via public blockchain data</span></li>
                                        <li><span className="list-icon-check">✓</span><span>Draws every 10 minutes (no long waits)</span></li>
                                        <li><span className="list-icon-check">✓</span><span>Instant payouts to user wallet</span></li>
                                        <li><span className="list-icon-check">✓</span><span>No obscure "RNG" black box</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="premium-card h-100" style={{ borderColor: 'rgba(239, 68, 68, 0.15)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                                        <div style={{ width: 40, height: 40, background: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700 }}>✕</div>
                                        <h4 style={{ margin: 0 }}>The Bad</h4>
                                    </div>
                                    <ul className="premium-list">
                                        <li><span className="list-icon-check" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>!</span><span>Smaller jackpots vs national lotteries</span></li>
                                        <li><span className="list-icon-check" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>!</span><span>Niche ecosystem (early adoption)</span></li>
                                        <li><span className="list-icon-check" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>!</span><span>Requires crypto wallet to play</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison */}
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-40 mb-lg-0">
                                <h3 style={{ marginBottom: 24, fontSize: '2.5rem' }}>Vs. The Rest</h3>
                                <p style={{ marginBottom: 32 }}>
                                    Most "crypto lotteries" are just traditional websites that take Bitcoin. They still run a private script to pick winners. First BTC Lottery flips this model by outsourcing the "draw" to the Bitcoin network itself.
                                </p>
                                <a href="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="btn-premium">
                                    Play Now →
                                </a>
                            </div>
                            <div className="col-lg-7">
                                <div className="premium-table-container">
                                    <table className="premium-table">
                                        <thead>
                                            <tr>
                                                <th>Feature</th>
                                                <th>First BTC</th>
                                                <th>Others</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Source of Truth</td>
                                                <td style={{ color: '#22c55e', fontWeight: 600 }}>Block Hash</td>
                                                <td style={{ color: '#ef4444' }}>Private RNG</td>
                                            </tr>
                                            <tr>
                                                <td>Verification</td>
                                                <td style={{ color: '#22c55e', fontWeight: 600 }}>Public</td>
                                                <td style={{ color: '#ef4444' }}>Audit Only</td>
                                            </tr>
                                            <tr>
                                                <td>Trust Required</td>
                                                <td style={{ color: '#22c55e', fontWeight: 600 }}>Near Zero</td>
                                                <td style={{ color: '#ef4444' }}>High</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="tf-section pb-5">
                    <div className="tf-container text-center">
                        <div className="premium-card" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                            <h3 style={{ marginBottom: 16 }}>Ready to verify for yourself?</h3>
                            <p style={{ marginBottom: 32 }}>Join the future of transparent gaming.</p>
                            <a href="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="btn-premium">
                                Visit First BTC Lottery →
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FirstBTCReview;
