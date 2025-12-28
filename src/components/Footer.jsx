import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-about">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-menu">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <img src={require('../assets/images/logo/logo.png')} alt="Logo" width="170" height="60" loading="lazy" />
                                    </Link>
                                </div>
                                <ul className="menu overflow-x-auto">
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/terms">Terms & Conditions</Link></li>
                                    <li><Link to="/disclaimer">Disclaimer</Link></li>
                                    <li><Link to="/firstbtclottery">FirstBTCLottery</Link></li>

                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="content">
                                <div className="note"><i className="icon-infor"></i>Gambling can be harmful if not controlled.
                                    Please play responsibly.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Simplified footer main removed menus as requested */}
            <div className="footer-bottom">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper">
                                <div className="left">
                                    <div className="icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 17.5C11.6625 17.4999 13.2779 16.9477 14.5925 15.93C15.9072 14.9124 16.8466 13.4869 17.2633 11.8775M10 17.5C8.33751 17.4999 6.72212 16.9477 5.40748 15.93C4.09284 14.9124 3.1534 13.4869 2.73667 11.8775M10 17.5C12.0708 17.5 13.75 14.1417 13.75 10C13.75 5.85833 12.0708 2.5 10 2.5M10 17.5C7.92917 17.5 6.25 14.1417 6.25 10C6.25 5.85833 7.92917 2.5 10 2.5M17.2633 11.8775C17.4175 11.2775 17.5 10.6483 17.5 10C17.5021 8.71009 17.1699 7.44166 16.5358 6.31833M17.2633 11.8775C15.041 13.1095 12.541 13.754 10 13.75C7.365 13.75 4.88917 13.0708 2.73667 11.8775M2.73667 11.8775C2.57896 11.2641 2.49944 10.6333 2.5 10C2.5 8.6625 2.85 7.40583 3.46417 6.31833M10 2.5C11.3302 2.49945 12.6366 2.8528 13.7852 3.5238C14.9337 4.19481 15.8831 5.15931 16.5358 6.31833M10 2.5C8.6698 2.49945 7.3634 2.8528 6.21484 3.5238C5.06628 4.19481 4.11692 5.15931 3.46417 6.31833M16.5358 6.31833C14.7214 7.88994 12.4004 8.75345 10 8.75C7.50167 8.75 5.21667 7.83333 3.46417 6.31833"
                                                stroke="#7791BA" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="tf-dropdown-sort tf-languages" data-bs-toggle="dropdown">
                                        <div className="btn-select">
                                            <span className="text-sort-value">English</span>
                                        </div>
                                        <div className="dropdown-menu">
                                            <div className="select-item active">
                                                <span className="text-value-item">English</span>
                                            </div>
                                            <div className="select-item">
                                                <span className="text-value-item">Spain</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <ul>
                                        <li><Link to="/terms">Terms & Conditions</Link></li>
                                        <li><Link to="/disclaimer">Disclaimer</Link></li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <span>©2025 Lotterycompare</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

