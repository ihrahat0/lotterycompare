import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const BitcoinLotteries = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "What makes a bitcoin lottery different?",
            answer: "Traditional lotteries are 'black boxes'—you trust the machine. Bitcoin lotteries use the blockchain itself (specifically block hashes) to pick numbers. Since the blockchain is public and immutable, nobody can cheat the draw."
        },
        {
            question: "Can I verify results myself?",
            answer: "Yes. On platforms like First BTC Lottery, you can take the draw time's block hash from any public explorer (like Blockchain.com) and verify that it matches the winning numbers."
        }
    ];

    return (
        <>
            <SEO
                title="Bitcoin Lottery Comparison | Best Crypto Lotteries"
                description="The definitive guide to transparent, blockchain-verified lottery platforms."
                keywords="bitcoin lottery, crypto lottery, blockchain lottery"
                canonical="https://lotterycompare.com/bitcoin-lotteries"
            />

            <div className="page-title">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <span className="hero-badge" style={{ marginBottom: 32, display: 'inline-block' }}>🛡️ Blockchain Verified</span>
                            <h1 className="premium-title">Bitcoin Lottery Comparison</h1>
                            <p className="premium-subtitle">
                                A new era of transparent gaming. Discover lotteries where every draw is publicly verifiable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                {/* Intro Section */}
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-6 mb-40">
                                <div className="premium-card h-100">
                                    <h3>What Is a Bitcoin Lottery?</h3>
                                    <p>
                                        A bitcoin lottery uses <strong style={{ color: '#a855f7' }}>Bitcoin blockchain data</strong> as part of its draw verification. Unlike centralized lotteries, true bitcoin lotteries reference publicly verifiable block hashes to determine winners.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-40">
                                <div className="premium-card h-100" style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                                    <h3>⚠️ Reality Check</h3>
                                    <ul className="premium-list">
                                        <li>
                                            <span className="list-icon-check" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>!</span>
                                            <span>Most "crypto lotteries" only accept crypto payments</span>
                                        </li>
                                        <li>
                                            <span className="list-icon-check" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>!</span>
                                            <span>Results are often still centralized</span>
                                        </li>
                                        <li>
                                            <span className="list-icon-check">✓</span>
                                            <span>True blockchain verification is rare but provable</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Evaluation Standards */}
                <section className="tf-section">
                    <div className="tf-container">
                        <h3 className="premium-title text-center" style={{ marginBottom: 50 }}>Evaluation Standards</h3>
                        <div className="feature-grid">
                            <div className="premium-card text-center">
                                <div style={{ fontSize: 40, marginBottom: 20 }}>🛡️</div>
                                <h4>Blockchain Data</h4>
                                <p>Is the draw result derived from public block hashes?</p>
                            </div>
                            <div className="premium-card text-center">
                                <div style={{ fontSize: 40, marginBottom: 20 }}>🔍</div>
                                <h4>User Verification</h4>
                                <p>Can any user independently verify a past draw?</p>
                            </div>
                            <div className="premium-card text-center">
                                <div style={{ fontSize: 40, marginBottom: 20 }}>⚡</div>
                                <h4>Transparency</h4>
                                <p>Are the draw rules mathematical and open?</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Top Platforms Table */}
                <section className="tf-section">
                    <div className="tf-container">
                        <h3 className="premium-title text-center" style={{ marginBottom: 50 }}>Top Platforms</h3>
                        <div className="premium-table-container">
                            <table className="premium-table">
                                <thead>
                                    <tr>
                                        <th>Platform</th>
                                        <th>Classification</th>
                                        <th>Draw Frequency</th>
                                        <th>Verification</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                                <div style={{ width: 40, height: 40, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <img src={require('../assets/images/logo/logo.png')} alt="" width="22" />
                                                </div>
                                                <span style={{ fontWeight: 600, fontSize: '1.2rem', color: '#fff' }}>First BTC Lottery</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '6px 16px', borderRadius: 100, fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
                                                TRUE BITCOIN
                                            </span>
                                        </td>
                                        <td>Every 10 min</td>
                                        <td>Block Hash</td>
                                        <td>
                                            <Link to="/firstbtclottery" className="btn-premium" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                                                Review
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Editor's Choice */}
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="premium-card" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <span style={{ color: '#818cf8', fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.9rem' }}>Editor's Choice</span>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '12px 0 20px', color: '#fff' }}>First BTC Lottery</h2>
                                    <p style={{ marginBottom: 32 }}>
                                        The only platform meeting our strict standards for blockchain-derived draws. With draws every 10 minutes and verify-it-yourself outcomes, it sets the benchmark.
                                    </p>
                                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                                        <Link to="/firstbtclottery" className="btn-premium">Read Review</Link>
                                        <a href="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="btn-premium" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                                            Visit Site →
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0 text-center">
                                    <div style={{ background: '#0d0d12', borderRadius: 24, padding: '40px', display: 'inline-block', border: '1px solid rgba(255,255,255,0.08)' }}>
                                        <div style={{ fontSize: '4.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>9.5</div>
                                        <div style={{ color: '#818cf8', letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.8rem', marginTop: 12, fontWeight: 700 }}>Trust Score</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="tf-section pb-5">
                    <div className="tf-container">
                        <h3 className="premium-title text-center" style={{ marginBottom: 50 }}>Frequently Asked</h3>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="premium-accordion">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                        >
                                            <div className="accordion-header">
                                                <span>{faq.question}</span>
                                                <div className="accordion-icon">
                                                    <i className="icon-arrow-down"></i>
                                                </div>
                                            </div>
                                            {activeIndex === index && (
                                                <div className="accordion-content">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BitcoinLotteries;
