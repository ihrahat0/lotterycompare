import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const FAQ = () => {
    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const faqs = [
        { question: "How do we review crypto casinos?", answer: "We use a rigorous 50-point inspection process covering security, licensing, payout speed, bonus fairness, and game variety." },
        { question: "Are Bitcoin lotteries safe?", answer: "True Bitcoin lotteries that use blockchain data for draws are verifiable and generally safer from manipulation." },
        { question: "What is the difference between a crypto casino and a blockchain lottery?", answer: "A crypto casino is a standard gambling site that accepts crypto. A blockchain lottery uses the blockchain technology itself to determine winners, offering public verification." },
        { question: "Do I need KYC to play?", answer: "Most crypto-first platforms allow you to play with just an email and wallet address. However, regulated traditional lotteries always require identity verification." },
        { question: "How fast are withdrawals?", answer: "On top-rated crypto sites we list, withdrawals are typically automated and instant, taking only as long as the blockchain network confirmation (minutes)." },
        { question: "Is LotteryCompare a gambling operator?", answer: "No. We are an independent review and comparison portal. We do not accept bets or issue payouts. We provide information to help you make safe choices." },
        { question: "What cryptocurrencies can I use?", answer: "Bitcoin, Ethereum, Litecoin, and Tether are most common. Some sites support hundreds of altcoins." },
        { question: "Can I play on mobile?", answer: "Yes, 100% of the sites we recommend are fully mobile-responsive. Some also offer dedicated Android or iOS apps." },
        { question: "What is a 'provably fair' game?", answer: "Provably fair means the game uses an algorithmic system (usually involving server and client seeds) that allows you to mathematically verify that the result wasn't rigged after the round ends." },
        { question: "Are the bonuses real money?", answer: "Bonuses are play credits that become withdrawable real money only after you meet 'wagering requirements' (e.g., betting the amount 30x)." },
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    return (
        <>
            <SEO
                title="FAQ | Crypto Gambling Guide"
                description="Answers to common questions about crypto casinos and bitcoin lotteries."
                keywords="crypto casino faq, bitcoin lottery questions"
                canonical="https://lotterycompare.com/faq"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            <div className="page-title">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="premium-title" style={{ marginBottom: 24 }}>How can we help?</h1>
                            <p className="premium-subtitle" style={{ marginBottom: 50 }}>
                                Browse our knowledge base or search for specific topics.
                            </p>

                            <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
                                <input
                                    type="text"
                                    placeholder="Search for answers..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '20px 24px 20px 60px',
                                        borderRadius: 100,
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#fff',
                                        fontSize: '1.2rem',
                                        outline: 'none',
                                        height: '64px'
                                    }}
                                />
                                <span style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', color: '#6366f1', fontSize: 24 }}>🔍</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <section className="tf-section pb-5">
                    <div className="tf-container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="premium-accordion">
                                    {filteredFaqs.length > 0 ? (
                                        filteredFaqs.map((faq, index) => (
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
                                        ))
                                    ) : (
                                        <div className="premium-card text-center">
                                            <div style={{ fontSize: 48, marginBottom: 16 }}>🤔</div>
                                            <h4 style={{ marginBottom: 8 }}>No results for "{searchTerm}"</h4>
                                            <p>Try "bonus", "withdraw", or "safety".</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center" style={{ marginTop: 60 }}>
                            <div className="col-lg-8 text-center">
                                <div className="premium-card" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                                    <h3 style={{ marginBottom: 16 }}>Still have questions?</h3>
                                    <p style={{ marginBottom: 32 }}>We're here to help you navigate the crypto gaming world.</p>
                                    <Link to="/contact" className="btn-premium">Contact Support</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FAQ;
