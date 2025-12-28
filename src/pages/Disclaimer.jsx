import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { initAllPlugins } from '../utils/initScripts';

const Disclaimer = () => {
    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title="Disclaimer | LotteryCompare"
                description="Read the disclaimer for LotteryCompare.com."
                keywords="disclaimer, legal, lottery compare"
            />

            <div className="page-title">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="premium-title">Disclaimer</h1>
                            <p className="premium-subtitle">
                                Transparent information to keep your experience safe and informed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <section className="tf-section">
                    <div className="tf-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="premium-card">
                                    <div className="mb-40">
                                        <span className="hero-badge" style={{ marginBottom: 16 }}>Last updated: October 2025</span>
                                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 24, color: '#fff' }}>Read Before You Proceed</h2>
                                    </div>

                                    <div className="content-body" style={{ color: 'var(--p-text-gray)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                                        <p style={{ marginBottom: 32 }}>
                                            The information provided on <strong>LotteryCompare.com</strong> is for general informational and entertainment purposes only. We <strong>do not</strong> operate, sell, or manage any lottery or gambling service. Our role is to review, compare, and share information about online and blockchain-based lottery platforms.
                                        </p>

                                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 24, padding: 40, border: '1px solid rgba(255,255,255,0.05)', marginBottom: 40 }}>
                                            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 20, color: '#fff' }}>Accuracy & Responsibility</h3>
                                            <p>
                                                While we aim to keep all content accurate and up to date, we make no guarantees regarding the completeness, reliability, or accuracy of the information presented. Any action you take based on information from this website is strictly at your own risk. LotteryCompare.com will not be liable for any losses or damages related to your use of third-party sites linked from our platform.
                                            </p>
                                        </div>

                                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 24, color: '#fff' }}>Important Notices</h3>
                                        <ul className="premium-list" style={{ marginBottom: 40 }}>
                                            <li>
                                                <span className="list-icon-check">✓</span>
                                                <span>Lottery and gambling activities are subject to local laws and age restrictions. Ensure participation is legal in your jurisdiction.</span>
                                            </li>
                                            <li>
                                                <span className="list-icon-check">✓</span>
                                                <span>We may receive affiliate commissions when users visit or sign up for third-party platforms. This does not influence our rankings.</span>
                                            </li>
                                            <li>
                                                <span className="list-icon-check" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>!</span>
                                                <span>Always gamble responsibly and never risk more than you can afford to lose.</span>
                                            </li>
                                        </ul>

                                        <p className="text-center" style={{ marginTop: 40, padding: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                            For further questions or concerns, contact us at: <br />
                                            <strong style={{ color: 'var(--p-accent-light)', fontSize: '1.4rem' }}>lottocompare@gmail.com</strong>
                                        </p>
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

export default Disclaimer;
