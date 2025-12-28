import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPageSubmenuOpen, setIsPageSubmenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsPageSubmenuOpen(false);
    }, [location]);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle PAGE submenu
    const togglePageSubmenu = () => {
        setIsPageSubmenuOpen(!isPageSubmenuOpen);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <header id="header-main" className="header header-fixed style-absolute">
            <div className="header-inner">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-inner-wrap">
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src={require('../assets/images/logo/logo.png')} alt="Logo" width="170" height="60" />

                                    </Link>
                                </div>
                                <nav className="main-menu">
                                    <ul className="navigation">
                                        <li className="current-menu-item">
                                            <Link to="/">HOME</Link>
                                        </li>

                                        <li className="has-child">
                                            <a href="javascript:void(0)">PAGE</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/about-us">About Us</Link>
                                                </li>
                                                <li>
                                                    <Link to="/bitcoin-lotteries">Bitcoin Lotteries</Link>
                                                </li>
                                                <li>
                                                    <Link to="/traditional-online-lottery">Traditional Online Lottery</Link>
                                                </li>
                                                <li>
                                                    <Link to="/firstbtclottery">FIRSTBTCLottery</Link>
                                                </li>
                                                <li>
                                                    <Link to="/terms">Terms & Conditions</Link>
                                                </li>
                                                <li>
                                                    <Link to="/disclaimer">Disclaimer</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">FAQ</Link>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/blog">BLOG</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">CONTACT</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="header-right">
                                    <div className="btn-buy-tickets">
                                        <a className="tf-btn" href="http://firstbtclottery.com/site/referral?code=v6zIr7Yg"><i className="icon-tickets"></i>Play Now</a>
                                    </div>
                                    <button
                                        className="new-mobile-menu-button"
                                        onClick={toggleMobileMenu}
                                        aria-label="Toggle Menu"
                                    >
                                        {isMobileMenuOpen ? (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        ) : (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                                <line x1="3" y1="18" x2="21" y2="18"></line>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* NEW MOBILE MENU */}
                        <div className={`new-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                            <div className="new-mobile-menu-overlay" onClick={toggleMobileMenu}></div>
                            <div className="new-mobile-menu-container">
                                <div className="new-mobile-menu-header">
                                    <Link to="/" onClick={toggleMobileMenu}>
                                        <img src={require('../assets/images/logo/logo.png')} alt="Logo" width="170" height="60" />
                                    </Link>
                                    <button
                                        className="new-mobile-menu-close"
                                        onClick={toggleMobileMenu}
                                        aria-label="Close Menu"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>

                                <nav className="new-mobile-menu-nav">
                                    <Link to="/" className="new-mobile-menu-item" onClick={toggleMobileMenu}>
                                        <span className="menu-icon">🏠</span>
                                        <span className="menu-text">HOME</span>
                                        <span className="menu-arrow">›</span>
                                    </Link>


                                    <div className="new-mobile-menu-item-with-submenu">
                                        <button
                                            className="new-mobile-menu-item"
                                            onClick={togglePageSubmenu}
                                        >
                                            <span className="menu-icon">📄</span>
                                            <span className="menu-text">PAGE</span>
                                            <span className={`menu-arrow-down ${isPageSubmenuOpen ? 'open' : ''}`}>▼</span>
                                        </button>
                                        <div className={`new-mobile-submenu ${isPageSubmenuOpen ? 'open' : ''}`}>
                                            <Link to="/about-us" className="new-mobile-submenu-item" onClick={toggleMobileMenu}>
                                                About Us
                                            </Link>
                                            <Link to="/lottery-results" className="new-mobile-submenu-item" onClick={toggleMobileMenu}>
                                                Lottery Results
                                            </Link>
                                            <Link to="/firstbtclottery" className="new-mobile-submenu-item" onClick={toggleMobileMenu}>
                                                FirstBTCLottery
                                            </Link>
                                            <Link to="/how-to-work" className="new-mobile-submenu-item" onClick={toggleMobileMenu}>
                                                How it works
                                            </Link>
                                            <Link to="/terms" className="new-mobile-submenu-item" onClick={toggleMobileMenu}>
                                                Terms & Conditions
                                            </Link>
                                            <Link to="/disclaimer" className="new-mobile-submenu-item" onClick={toggleMobileMenu}>
                                                Disclaimer
                                            </Link>
                                            <Link to="/faq" className="new-mobile-submenu-item" onClick={toggleMobileMenu}>
                                                FAQ
                                            </Link>

                                        </div>
                                    </div>

                                    <Link to="/blog" className="new-mobile-menu-item" onClick={toggleMobileMenu}>
                                        <span className="menu-icon">📝</span>
                                        <span className="menu-text">BLOG</span>
                                        <span className="menu-arrow">›</span>
                                    </Link>

                                    <Link to="/contact" className="new-mobile-menu-item" onClick={toggleMobileMenu}>
                                        <span className="menu-icon">✉️</span>
                                        <span className="menu-text">CONTACT</span>
                                        <span className="menu-arrow">›</span>
                                    </Link>

                                    <a href="http://firstbtclottery.com/site/referral?code=v6zIr7Yg" className="new-mobile-menu-cta" onClick={toggleMobileMenu}>
                                        <i className="icon-tickets"></i>
                                        Play Now
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

