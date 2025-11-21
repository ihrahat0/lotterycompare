import React from 'react';
import { Link } from 'react-router-dom';

const LotteryCard = ({ Lottery, showFullDetails = false }) => {
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="icon-star-full"></i>);
        }
        if (hasHalfStar) {
            stars.push(<i key="half" className="icon-star-half"></i>);
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="icon-star-empty"></i>);
        }
        return stars;
    };

    return (
        <div className="professional-lottery-card wow fadeInUp">
            <div className="lottery-card-inner">
                <div className="lottery-card-header">
                    <div className="logo-container">
                        <img 
                            src={Lottery.logo || Lottery.logo_url} 
                            alt={Lottery.name} 
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                if (e.target.parentElement) {
                                    e.target.parentElement.innerHTML = `<div class="logo-fallback">${Lottery.name.charAt(0)}</div>`;
                                }
                            }}
                        />
                    </div>
                    <div className="lottery-card-title-section">
                        <h4 className="lottery-name">{Lottery.name}</h4>
                        <div className="lottery-rating">
                            <div className="stars">{renderStars(Lottery.rating)}</div>
                            <span className="rating-value">{Lottery.rating}</span>
                        </div>
                    </div>
                </div>

                <div className="lottery-card-body">
                    <div className="bonus-highlight">
                        <div className="bonus-label">Bonus:</div>
                        <div className="bonus-value">{Lottery.bonus_text || Lottery.bonus || 'Welcome Bonus'}</div>
                    </div>

                    <div className="lottery-features">
                        <div className="feature-item">
                            <i className="icon-check"></i>
                            <span>{Lottery.highlights}</span>
                        </div>
                        {showFullDetails && (
                            <>
                                <div className="feature-item">
                                    <i className="icon-wallet"></i>
                                    <span>Min: {Lottery.minDeposit}</span>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-time"></i>
                                    <span>{Lottery.withdrawalSpeed} withdrawals</span>
                                </div>
                                <div className="feature-item">
                                    <i className="icon-crypto"></i>
                                    <span>{Lottery.currencies.slice(0, 3).join(', ')}</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="lottery-card-footer">
                    <a 
                        href={Lottery.link || Lottery.affiliateLink} 
                        className="play-now-btn"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        <span>Play Now</span>
                        <i className="icon-right"></i>
                    </a>
                    {Lottery.provablyFair && (
                        <span className="provably-fair-badge">✓ Provably Fair</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LotteryCard;

