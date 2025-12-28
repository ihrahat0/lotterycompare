import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const TraditionalLottery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "Are these lotteries legal?",
            answer: "Yes, they are the most legal form of gambling. They are typically established by state or national legislation and operated by government agencies."
        },
        {
            question: "Can I verify the draw myself?",
            answer: "Generally, no. You rely on independent auditors (like KPMG or Deloitte) that oversee the draw."
        }
    ];

    return (
        <>
            <SEO
                title="Traditional Online Lottery | Verified Listings"
                description="Explore government-regulated online lotteries with big jackpots."
                keywords="online lottery, powerball, mega millions, uk national lottery"
                canonical="https://lotterycompare.com/traditional-online-lottery"
            />

            <div className="page-title">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <span className="hero-badge" style={{ marginBottom: 32, display: 'inline-block', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.2)' }}>🏛️ Established Gaming</span>
                            <h1 className="premium-title">Traditional Online Lotteries</h1>
                            <p className="premium-subtitle">
                                Government-regulated, massive jackpots, and centuries of history digitized.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                {/* Intro Cards */}
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-6 mb-40">
                                <div className="premium-card h-100">
                                    <h3>The Gold Standard</h3>
                                    <p>
                                        Traditional online lotteries are the digital evolution of state and national draws. They offer <strong style={{ color: '#38bdf8' }}>regulatory security</strong> recognized globally, with the same pools that generate billion-dollar jackpots.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-40">
                                <div className="premium-card h-100" style={{ borderColor: 'rgba(56, 189, 248, 0.15)' }}>
                                    <h3>Key Mechanisms</h3>
                                    <ul className="premium-list">
                                        <li>
                                            <span className="list-icon-check" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>⚙️</span>
                                            <span><strong>Centralized Draws:</strong> Air-mix machines or certified RNG</span>
                                        </li>
                                        <li>
                                            <span className="list-icon-check" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>📅</span>
                                            <span><strong>Fixed Schedule:</strong> Weekly or bi-weekly draws</span>
                                        </li>
                                        <li>
                                            <span className="list-icon-check" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>👤</span>
                                            <span><strong>KYC Required:</strong> Identity verification for claims</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Giants */}
                <section className="tf-section">
                    <div className="tf-container">
                        <h3 className="premium-title text-center" style={{ marginBottom: 50 }}>Global Giants</h3>
                        <div className="feature-grid">
                            <div className="premium-card text-center">
                                <div style={{ width: 80, height: 80, background: '#fff', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                                    <span style={{ fontSize: 40 }}>🇬🇧</span>
                                </div>
                                <h4>UK National Lottery</h4>
                                <p>Government-regulated. Funds public initiatives.</p>
                            </div>
                            <div className="premium-card text-center">
                                <div style={{ width: 80, height: 80, background: '#fff', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                                    <span style={{ fontSize: 40 }}>🇪🇺</span>
                                </div>
                                <h4>EuroMillions</h4>
                                <p>Multinational. Tax-free lump sums.</p>
                            </div>
                            <div className="premium-card text-center">
                                <div style={{ width: 80, height: 80, background: '#fff', borderRadius: '50%', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                                    <span style={{ fontSize: 40 }}>🇺🇸</span>
                                </div>
                                <h4>Powerball</h4>
                                <p>Billion-dollar prizes possible.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison */}
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-40 mb-lg-0">
                                <h3 style={{ marginBottom: 24, fontSize: '2.5rem' }}>Tradition vs Blockchain</h3>
                                <p style={{ marginBottom: 20 }}>
                                    Why choose traditional? It comes down to <strong style={{ color: '#38bdf8' }}>trust model</strong> and <strong style={{ color: '#38bdf8' }}>prize potential</strong>.
                                </p>
                                <p style={{ marginBottom: 32 }}>
                                    Traditional lotteries offer government backing and life-changing scale.
                                </p>
                                <Link to="/bitcoin-lotteries" className="btn-premium" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
                                    Compare with Bitcoin Lotteries →
                                </Link>
                            </div>
                            <div className="col-lg-7">
                                <div className="premium-table-container">
                                    <table className="premium-table">
                                        <thead>
                                            <tr>
                                                <th>Aspect</th>
                                                <th>Traditional</th>
                                                <th>Blockchain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jackpots</td>
                                                <td style={{ color: '#38bdf8', fontWeight: 600 }}>$$$ Huge</td>
                                                <td>$ Moderate</td>
                                            </tr>
                                            <tr>
                                                <td>Regulation</td>
                                                <td style={{ color: '#38bdf8', fontWeight: 600 }}>Govt Audited</td>
                                                <td>Self-Regulated</td>
                                            </tr>
                                            <tr>
                                                <td>Anonymity</td>
                                                <td>Low (KYC)</td>
                                                <td style={{ color: '#38bdf8', fontWeight: 600 }}>High</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="tf-section pb-5">
                    <div className="tf-container">
                        <h3 className="premium-title text-center" style={{ marginBottom: 50 }}>Common Questions</h3>
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

export default TraditionalLottery;
