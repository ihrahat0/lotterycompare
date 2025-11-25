import React, { useEffect, useState } from 'react';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';
import { bonuses } from '../data/casinos';

const BonusesPage = () => {
    useEffect(() => {
        initAllPlugins();
        window.scrollTo(0, 0);
    }, []);

    const [filter, setFilter] = useState('all');
    const [filteredBonuses, setFilteredBonuses] = useState(bonuses);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredBonuses(bonuses);
        } else if (filter === 'deposit') {
            setFilteredBonuses(bonuses.filter(b => b.type.includes('Deposit')));
        } else if (filter === 'welcome') {
            setFilteredBonuses(bonuses.filter(b => b.type.includes('Welcome')));
        }
    }, [filter]);

    const calculateTimeLeft = (expiry) => {
        const difference = +new Date(expiry) - +new Date();
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            return `${days} days left`;
        }
        return 'Expired';
    };

    return (
        <>
            <SEO 
                title="Latest Crypto Lottery Bonuses & Free Spins 2025" 
                description="Find the best crypto Lottery bonuses, welcome packages, and free spins. Exclusive bonus codes for Bitcoin lottery sites and blockchain Lotterys."
                keywords="crypto Lottery bonus, bitcoin Lottery bonus, free spins, welcome bonus, no deposit bonus"
            />

            <div className="page-title">
                <div className="tf-tsparticles">
                    <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
                </div>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h1 className="heading text-center">🎁 Latest Crypto Lottery Bonuses</h1>
                                <p className="sub-heading text-center">
                                    Exclusive bonus codes and welcome packages — grab them before they expire!
                                </p>
                                <ul className="breadcrumbs">
                                    <li><a href="/">Home</a></li>
                                    <li>Bonuses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-bonuses pt-80 pb-100">
                <div className="tf-container">
                    
                    {/* Filter Bar */}
                    <div className="bonus-filters wow fadeInUp mb-60">
                        <div className="filter-buttons">
                            <button 
                                className={`tf-btn ${filter === 'all' ? 'active' : 'style-outline'}`}
                                onClick={() => setFilter('all')}
                            >
                                All Bonuses
                            </button>
                            <button 
                                className={`tf-btn ${filter === 'deposit' ? 'active' : 'style-outline'}`}
                                onClick={() => setFilter('deposit')}
                            >
                                Deposit Bonus
                            </button>
                            <button 
                                className={`tf-btn ${filter === 'welcome' ? 'active' : 'style-outline'}`}
                                onClick={() => setFilter('welcome')}
                            >
                                Welcome Package
                            </button>
                        </div>
                    </div>

                    {/* Bonus List */}
                    <div className="row">
                        {filteredBonuses.map((bonus, index) => (
                            <div key={bonus.id} className="col-lg-4 col-md-6 mb-40">
                                <div className="bonus-card-full wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                                    <div className="bonus-card-header">
                                        <img src={bonus.logo} alt={bonus.Lottery} className="Lottery-logo-medium" />
                                        <div className="badges">
                                            <span className="badge badge-hot">🔥 Hot</span>
                                            <span className="badge badge-exclusive">Exclusive</span>
                                        </div>
                                    </div>
                                    <h3>{bonus.Lottery}</h3>
                                    <div className="bonus-offer-large">{bonus.offer}</div>
                                    <div className="bonus-type-badge">{bonus.type}</div>
                                    <p className="bonus-description">{bonus.description}</p>
                                    <div className="bonus-code-box">
                                        <label>Bonus Code:</label>
                                        <div className="code-display">
                                            <strong>{bonus.code}</strong>
                                            <button className="copy-btn" onClick={() => navigator.clipboard.writeText(bonus.code)}>
                                                Copy
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Additional Bonuses for FBL */}
                                    {bonus.additionalBonuses && bonus.additionalBonuses.length > 0 && (
                                        <div className="additional-bonuses">
                                            {bonus.additionalBonuses.map((addBonus, idx) => (
                                                <div key={idx} className="additional-bonus-item">
                                                    <div className="additional-bonus-title">
                                                        <span className="bonus-icon">🎁</span>
                                                        <strong>{addBonus.title}</strong>
                                                    </div>
                                                    {addBonus.code && (
                                                        <div className="additional-bonus-code">
                                                            <span className="code-label">Code:</span>
                                                            <span className="code-value">{addBonus.code}</span>
                                                            <button 
                                                                className="copy-btn-small" 
                                                                onClick={() => navigator.clipboard.writeText(addBonus.code)}
                                                                title="Copy code"
                                                            >
                                                                📋
                                                            </button>
                                                        </div>
                                                    )}
                                                    {addBonus.description && (
                                                        <p className="additional-bonus-desc">{addBonus.description}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    
                                    <a href="http://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="tf-btn style-3 w-100 mt-20">
                                        Claim Bonus <i className="icon-right"></i>
                                    </a>
                                    <div className="bonus-timer">
                                        ⏰ {calculateTimeLeft(bonus.expiry)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Banner */}
                    <div className="bonus-cta-banner wow fadeInUp mt-60">
                        <div className="banner-content">
                            <h2>Join FirstBTC Lottery – Draws Every 10 Minutes</h2>
                            <a href="http://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="tf-btn">
                                Join Now <i className="icon-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default BonusesPage;

