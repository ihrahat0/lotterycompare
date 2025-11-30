import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const Contest = () => {
    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initAllPlugins();
        fetchContests();
    }, []);

    const fetchContests = async () => {
        try {
            const response = await fetch('/api/frontend/contests');
            if (response.ok) {
                const data = await response.json();
                setContests(Array.isArray(data) && data.length > 0 ? data : getDefaultContests());
            } else {
                setContests(getDefaultContests());
            }
        } catch (error) {
            console.error('Failed to fetch contests:', error);
            setContests(getDefaultContests());
        } finally {
            setLoading(false);
        }
    };

    const getDefaultContests = () => [
        { 
            img: 'contest-1.png', 
            title: 'First BTC Lottery', 
            no: 'Big Win', 
            remaining: 'Buy Unimited', 
            prize: '$300,000,000/month', 
            price: 'JOIN', 
            timer: '290603',
            link: 'https://firstbtclottery.com/site/referral?code=v6zIr7Yg',
            highlights: ['No KYC', 'Crypto'],
            description: 'Odds of winning a jackpot: 1 in 16,777,216'
        },
        { 
            img: 'https://watcher.guru/news/wp-content/uploads/2023/09/a2-4.png', 
            title: 'Stake', 
            no: '10% Rakeback — Lifetime duration', 
            remaining: '--', 
            prize: '$50,000.000', 
            price: 'Join', 
            timer: '290603',
            link: 'https://stake.com/Lottery/home/?c=AA0NC0iw&clickId=fdc-0a53cb9b-bffc-438e-97c1-335fd7e5dfa4'
        },
        { 
            img: 'https://cdn.prod.website-files.com/6659430ddebf16a696c96358/66b566c96d71c360fdc5d7b8_Home%20Opengraph.jpg', 
            title: 'CloudBet', 
            no: 'Up to 30% Rakeback - All Cash, No Rollover', 
            remaining: 'Get up to 2500 USDT + 200 FS', 
            prize: '$2500.000', 
            price: 'Join', 
            timer: '290603',
            link: 'https://www.cloudbet.com/en/landing/cryptomaniaks/?af_token=97ab6f554e12167d3dd796c1487c78b4'
        },
        { 
            img: 'https://chainwire.org/wp-content/uploads/2025/05/181954_17470999743XF4Qp2OEG.jpeg', 
            title: 'BC.GAME', 
            no: 'Welcome Bonus Up to $20,000', 
            remaining: '9320', 
            prize: '$20,000.000', 
            price: 'Join', 
            timer: '290603',
            link: 'https://partnerbcgame.com/vace0219c?subid=fdc-b85cb01f-ace6-4d90-80db-dda6ffe8066a'
        },
        { 
            img: 'https://www.thespike.gg/reviews/images/2025/09/thrill-Lottery-i-gaming-games-promotion-en-glo.jpg.webp', 
            title: 'Thrill', 
            no: 'Instant Rakeback.', 
            remaining: 'Tiered Rewards Program', 
            prize: '$10,000.000', 
            price: 'Join', 
            timer: '290603',
            link: 'https://thrillLottery.io/ta1aa7a5a'
        },
        { 
            img: 'https://www.ccn.com/wp-content/uploads/2025/07/motherland-Lottery-review-homepage.webp', 
            title: 'Motherland Lottery', 
            no: 'Up to $10,000 Bonus Matched', 
            remaining: '*', 
            prize: '$10,000.000', 
            price: 'Join', 
            timer: '290603',
            link: 'https://record.motherlandpartners.com/_3zudlUxeY0vlD9UB4eAeYmNd7ZgqdRLk/1/?payload=fdc-b85cb01f-ace6-4d90-80db-dda6ffe8066a'
        }
    ];

    if (loading) {
        return (
            <>
                <SEO 
                    title="Lottery Contests" 
                    description="Browse available lottery contests and games. Choose from various prize pools and ticket prices. Play now and win big!"
                    keywords="lottery contests, lottery games, bingo, scratch cards, lottery prizes, online contests"
                />
                <div className="page-title">
                    <div className="tf-tsparticles">
                        <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
                    </div>
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h1 className="title">Contest</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(255, 255, 255, 0.7)' }}>
                                    <div className="blog-loading-spinner"></div>
                                    <p style={{ marginTop: '20px' }}>Loading contests...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }


    return (
        <>
            <SEO 
                title="Lottery Contests" 
                description="Browse available lottery contests and games. Choose from various prize pools and ticket prices. Play now and win big!"
                keywords="lottery contests, lottery games, bingo, scratch cards, lottery prizes, online contests"
            />
            {/* page-title */}
            <div className="page-title">
                <div className="tf-tsparticles">
                    <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
                </div>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h1 className="title">Contest</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="icon-next"></i></li>
                                    <li>Contest</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* main-content */}
            <div className="main-content">
                {/* section-categories */}
                <div className="section-list-game tf-spacing-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                {/* Removed empty swiper container - not needed for this page */}

                                {/* Sort and filter */}
                                <div className="tf-wrap-sort">
                                    <div className="nice-select">
                                        <div className="icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.125 5.625H16.875M3.125 10H16.875M3.125 14.375H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span> Sort by:</span><span className="current">Latest contest</span>
                                        <ul className="list">
                                            <li className="option selected"><div className="content"><span>Latest contest</span></div></li>
                                            <li className="option"><div className="content"><span>Recently added</span></div></li>
                                            <li className="option"><div className="content"><span>Price: Low to High</span></div></li>
                                            <li className="option"><div className="content"><span>Price: High to Low</span></div></li>
                                            <li className="option"><div className="content"><span>Auction ending soon</span></div></li>
                                        </ul>
                                    </div>
                                    <div className="nice-select">
                                        <div className="icon"><i className="icon-setting"></i></div>
                                        <span className="current">Status</span>
                                        <ul className="list">
                                            <li className="option"><div className="content"><span>All</span></div></li>
                                            <li className="option"><div className="content"><span>Art</span></div></li>
                                            <li className="option"><div className="content"><span>Photography</span></div></li>
                                            <li className="option"><div className="content"><span>Music</span></div></li>
                                        </ul>
                                    </div>
                                    <div className="nice-select">
                                        <div className="icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="current">Price range</span>
                                        <ul className="list">
                                            <li className="option"><div className="content"><span>Price: Low to High</span></div></li>
                                            <li className="option"><div className="content"><span>Price: High to Low</span></div></li>
                                        </ul>
                                    </div>
                                    <form action="#" className="form-search">
                                        <fieldset>
                                            <input type="text" placeholder="Search..." required />
                                        </fieldset>
                                        <button className="button-submit" type="submit">
                                            <i className="icon-search"></i>
                                        </button>
                                    </form>
                                </div>

                                {/* Contest grid */}
                                <div className="grid-column-3">
                                    {contests.map((contest, index) => {
                                        // Check if image is a URL or local file
                                        const isExternalUrl = contest.img.startsWith('http://') || contest.img.startsWith('https://');
                                        const imageSrc = isExternalUrl 
                                            ? contest.img 
                                            : require(`../assets/images/${contest.img.includes('contest') ? 'component' : 'section'}/${contest.img}`);
                                        
                                        return (
                                            <div key={index} className="wg-game style-5 hover-img wow fadeInUp" data-wow-delay={`${(index % 3) * 0.2}s`}>
                                                <div className="wg-game-image">
                                                    {contest.highlights && (
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: '12px',
                                                            left: '12px',
                                                            display: 'flex',
                                                            gap: '8px',
                                                            zIndex: 10
                                                        }}>
                                                            {contest.highlights.map((highlight, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    style={{
                                                                        background: idx === 0 ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f093fb, #f5576c)',
                                                                        color: '#fff',
                                                                        padding: '6px 14px',
                                                                        borderRadius: '20px',
                                                                        fontSize: '11px',
                                                                        fontWeight: '700',
                                                                        letterSpacing: '0.5px',
                                                                        textTransform: 'uppercase',
                                                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                                        display: 'inline-block'
                                                                    }}
                                                                >
                                                                    {highlight}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                    <img 
                                                        src={imageSrc} 
                                                        alt={contest.title} 
                                                        className="lazyload" 
                                                        style={{
                                                            width: '100%',
                                                            height: '220px',
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                    />
                                                    <span className="js-countdown" data-timer={contest.timer}></span>
                                                </div>
                                                <div className="content">
                                                    <div className="heading">
                                                        <h4 className="title fw-9">
                                                            <a href="#">{contest.title}</a>
                                                        </h4>
                                                        <ul className="sub-title-list">
                                                            <li className="item">
                                                                <i className="icon-remaining"></i>
                                                                <p>Contest No: {contest.no}</p>
                                                            </li>
                                                            <li className="item">
                                                                <i className="icon-ticket"></i>
                                                                <p> <span>{contest.remaining}</span> Remaining</p>
                                                            </li>
                                                        </ul>
                                                    {contest.description && (
                                                        <p style={{
                                                            fontSize: '13px',
                                                            color: 'rgba(255, 255, 255, 0.75)',
                                                            marginBottom: '12px',
                                                            fontStyle: 'italic'
                                                        }}>
                                                            {contest.description}
                                                        </p>
                                                    )}
                                                    <p className="text fs-14 fw-9">Win up to</p>
                                                    <p className="money text-color-clip style-6">{contest.prize}</p>
                                                    <a 
                                                        href={contest.link} 
                                                        className="tf-btn"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {contest.price} Now <i className="icon-right"></i>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Pagination */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contest;
