import React from 'react';
import { Link } from 'react-router-dom';

const CasinoCard = ({ casino, showFullDetails = false }) => {
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
        <div className="wg-game style-6 wow fadeInUp">
            <div className="wg-game-image">
                <img src={casino.logo} alt={casino.name} width="200" height="200" loading="lazy" />
                {casino.featured && (
                    <span className="badge-featured">⭐ Featured</span>
                )}
                {casino.provablyFair && (
                    <span className="badge-fair">✓ Provably Fair</span>
                )}
            </div>
            <div className="content">
                <h4 className="title fw-9">
                    <Link to={`/casino/${casino.id}`}>{casino.name}</Link>
                </h4>
                <div className="rating">
                    {renderStars(casino.rating)}
                    <span className="rating-number">{casino.rating}</span>
                </div>
                <ul className="sub-title-list">
                    <li className="item">
                        <i className="icon-gift"></i>
                        <p><strong>Bonus:</strong> {casino.bonus}</p>
                    </li>
                    <li className="item">
                        <i className="icon-check"></i>
                        <p>{casino.highlights}</p>
                    </li>
                    {showFullDetails && (
                        <>
                            <li className="item">
                                <i className="icon-wallet"></i>
                                <p><strong>Min Deposit:</strong> {casino.minDeposit}</p>
                            </li>
                            <li className="item">
                                <i className="icon-time"></i>
                                <p><strong>Withdrawals:</strong> {casino.withdrawalSpeed}</p>
                            </li>
                            <li className="item">
                                <i className="icon-crypto"></i>
                                <p><strong>Crypto:</strong> {casino.currencies.join(', ')}</p>
                            </li>
                        </>
                    )}
                </ul>
                <div className="bottom">
                    <div className="button-group">
                        <a 
                            href={casino.affiliateLink} 
                            className="tf-btn style-3"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            Play Now <i className="icon-right"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CasinoCard;

