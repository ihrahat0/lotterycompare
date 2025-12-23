import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const AboutUs = () => {
    useEffect(() => {
        initAllPlugins();
    }, []);

    return (
        <>
            <SEO
                title="About Us"
                description="Lottery Compare is your trusted guide to the world of online and blockchain-based lotteries. We review and compare the most popular platforms so you can play with confidence."
                keywords="about Lotterycompare, lottery reviews, crypto lottery comparison, blockchain lottery guide, trusted lottery sites"
            />
            {/* page-title */}
            <div className="page-title page-about-us">
                <div className="tf-tsparticles">
                    <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
                </div>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h1 className="title">About Us</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="icon-next"></i></li>
                                    <li>Page</li>
                                    <li><i className="icon-next"></i></li>
                                    <li>About us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                {/* Premium Hero Section */}
                <section className="about-hero-section">
                    <div className="tf-container">
                        <div className="about-hero-wrapper">
                            <div className="about-hero-content wow fadeInUp">
                                <div className="about-badge">
                                    <span className="badge-icon">🏆</span>
                                    <span className="badge-text">Trusted by Thousands</span>
                                </div>
                                <h2 className="about-hero-title">
                                    Your Trusted Guide to <span className="gradient-text">Lottery Gaming</span>
                                </h2>
                                <p className="about-hero-description">
                                    Lottery Compare is your trusted guide to the world of online and blockchain-based lotteries.
                                    We research, review, and compare the most popular crypto and traditional lottery platforms
                                    so you can play with confidence.
                                </p>
                            </div>
                            <div className="about-hero-visual wow fadeInRight" data-wow-delay="0.2s">
                                <div className="floating-logo-container">
                                    <div className="glow-ring"></div>
                                    <img src={require('../assets/images/logo/logo.png')} alt="Lottery Compare" className="floating-logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="about-mission-section">
                    <div className="tf-container">
                        <div className="mission-card wow fadeInUp">
                            <div className="mission-icon">🎯</div>
                            <h3 className="mission-title">Our Mission</h3>
                            <p className="mission-text">
                                To bring <strong>transparency</strong>, <strong>fairness</strong>, and <strong>clarity</strong> to lottery gaming.
                                Whether you're looking for the best odds, biggest jackpots, or provably fair blockchain lotteries,
                                we help you make informed choices before you play.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="about-values-section">
                    <div className="tf-container">
                        <div className="section-header wow fadeInUp">
                            <h2 className="section-title">Why Choose Us</h2>
                            <p className="section-subtitle">What makes Lottery Compare different</p>
                        </div>
                        <div className="values-grid">
                            <div className="value-card wow fadeInUp" data-wow-delay="0s">
                                <div className="value-icon-wrapper">
                                    <span className="value-icon">🔍</span>
                                </div>
                                <h4 className="value-title">In-Depth Research</h4>
                                <p className="value-text">Every platform is thoroughly reviewed for legitimacy, payout rates, and user experience.</p>
                            </div>
                            <div className="value-card wow fadeInUp" data-wow-delay="0.1s">
                                <div className="value-icon-wrapper">
                                    <span className="value-icon">⛓️</span>
                                </div>
                                <h4 className="value-title">Blockchain Focus</h4>
                                <p className="value-text">We specialize in provably fair crypto lotteries with on-chain transparency.</p>
                            </div>
                            <div className="value-card wow fadeInUp" data-wow-delay="0.2s">
                                <div className="value-icon-wrapper">
                                    <span className="value-icon">🛡️</span>
                                </div>
                                <h4 className="value-title">Player Protection</h4>
                                <p className="value-text">Security and fairness reviews ensure you only play on trusted platforms.</p>
                            </div>
                            <div className="value-card wow fadeInUp" data-wow-delay="0.3s">
                                <div className="value-icon-wrapper">
                                    <span className="value-icon">💎</span>
                                </div>
                                <h4 className="value-title">Honest Reviews</h4>
                                <p className="value-text">No paid rankings. Our comparisons are based purely on quality and user value.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="about-cta-section">
                    <div className="tf-container">
                        <div className="cta-card wow fadeInUp">
                            <h3 className="cta-title">Ready to Find the Best Lottery?</h3>
                            <p className="cta-text">Explore our top-rated platforms and start playing with confidence.</p>
                            <Link to="/" className="tf-btn">
                                View Comparisons <i className="icon-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
