import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { initAllPlugins } from '../utils/initScripts';

const TermsAndConditions = () => {
    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: "1. About Lottery Compare",
            content: "LotteryCompare.com is an informational and comparison platform that reviews, ranks, and provides links to online lottery and crypto lottery platforms. We do not operate, sell, or manage any lottery or gambling service. All opinions and reviews are for informational purposes only."
        },
        {
            title: "2. Eligibility",
            content: "You must be at least 18 years old (or the legal age for online gaming in your jurisdiction) to use this website. By using Lottery Compare, you confirm that you meet all legal requirements in your country or region."
        },
        {
            title: "3. Information Accuracy",
            content: "We strive to provide accurate and up-to-date information about lottery platforms. However, we cannot guarantee that all data (such as odds, bonuses, or prizes) are always correct. Always verify details directly on the official lottery website before participating."
        },
        {
            title: "4. External Links",
            content: "Our website contains links to third-party websites. We are not responsible for the content, privacy practices, or policies of those external sites. By clicking external links, you acknowledge that you are leaving LotteryCompare.com and that we are not liable for any actions or losses resulting from those sites."
        },
        {
            title: "5. No Liability",
            content: "Lottery Compare is not responsible for any financial loss, data breach, or outcome resulting from the use of third-party platforms featured on our website. Participation in any lottery or gaming activity is entirely at your own risk."
        },
        {
            title: "6. Intellectual Property",
            content: "All content on this website — including text, graphics, and logos — is owned by LotteryCompare.com and protected by copyright laws. You may not copy, reproduce, or redistribute our content without written permission."
        },
        {
            title: "7. Privacy",
            content: "Your privacy matters to us. Please read our Privacy Policy to understand how we collect and protect your information."
        },
        {
            title: "8. Changes to Terms",
            content: "We may update these Terms and Conditions at any time. Any updates will take effect immediately upon being posted on this page. By continuing to use our site after changes are posted, you accept the revised terms."
        }
    ];

    return (
        <>
            <SEO
                title="Terms and Conditions | LotteryCompare"
                description="Read the Terms and Conditions for LotteryCompare.com."
                keywords="terms, terms and conditions, legal, lottery compare"
            />

            <div className="page-title">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="premium-title">Terms & Conditions</h1>
                            <p className="premium-subtitle">
                                The rules and guidelines for using our comparison platform.
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
                                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 24, color: '#fff' }}>Welcome to LotteryCompare</h2>
                                        <p style={{ fontSize: '1.25rem', color: 'var(--p-text-gray)' }}>
                                            By accessing or using this website, you agree to the following Terms and Conditions. Please read them carefully.
                                        </p>
                                    </div>

                                    <div className="terms-grid" style={{ display: 'grid', gap: 32 }}>
                                        {sections.map((section, index) => (
                                            <div key={index} style={{ padding: 32, background: 'rgba(255,255,255,0.02)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
                                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16, color: '#fff' }}>{section.title}</h3>
                                                <p style={{ fontSize: '1.1rem', color: 'var(--p-text-gray)', lineHeight: 1.7 }}>{section.content}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center" style={{ marginTop: 60, padding: 40, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                        <h3 style={{ marginBottom: 16 }}>Questions?</h3>
                                        <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>If you have questions about these Terms, please contact us at:</p>
                                        <strong style={{ color: 'var(--p-accent-light)', fontSize: '1.4rem' }}>lottocompare@gmail.com</strong>
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

export default TermsAndConditions;
