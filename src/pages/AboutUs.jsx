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
                description="Learn about Lotterycompare, the trusted online lottery platform. Discover our mission, values, and commitment to fair gaming and big prizes."
                keywords="about Lotterycompare, lottery company, online lottery platform, lottery mission, trusted lottery"
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

            {/* main content */}
            <div className="main-content">
                {/* section about */}
                <section className="s-about tf-spacing-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wrap-about-us">
                                    <p className="text">Lottery Compare is your trusted guide to the world of online and blockchain-based lotteries. We research, review, and compare the most popular crypto and traditional lottery platforms so you can play with confidence.</p>
                                    <p className="text">Our mission is simple — to bring transparency, fairness, and clarity to lottery gaming. Whether you’re looking for the best odds, biggest jackpots, or provably fair blockchain lotteries, we help you make informed choices before you play.</p>
                                    <p className="text">At Lottery Compare, we believe players deserve honesty. That’s why every platform we feature is reviewed for payout reliability, security, and fairness — so you can focus on what matters most: enjoying the game and winning safely.</p>
                                    <div className="wrap-image">
                                        <img className="lazyload" src={require('../assets/images/section/about-1.jpg')} alt="" />
                                    </div>
                                    
                                    <div className="item-1">
                                        <img src={require('../assets/images/item/about-1.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section how it work */}
                <section className="s-how-it-work">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section mb-40">
                                    <h2 className="title mb-6">How Crypto lottery’s work?</h2>
                                    <p className="sub-title fs-14">Follow these 3 easy steps!</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="wg-how-it-work grid-column-3 style-2">
                                    {[
                                        { img: 'how-it-work-1.png', title: 'Sign-up for a free account', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla sit' },
                                        { img: 'how-it-work-2.png', title: 'Choose a lottery to play', text: 'Choose a lottery to play, pick your numbers, and order your tickets.' },
                                        { img: 'how-it-work-3.png', title: 'Buy official tickets', text: 'Our representatives will purchase official tickets on your behalf.' },
                                        { img: 'how-it-work-4.png', title: 'Lottery courier service', text: 'Our lottery courier service lets you view your scanned tickets online.' },
                                        { img: 'how-it-work-5.png', title: 'Receive our notifications', text: 'We will notify you by email or SMS when you win.' },
                                        { img: 'how-it-work-6.png', title: 'Receive the winner\'s reward', text: 'Receive your full winnings, paid out 100% commission-free.' }
                                    ].map((item, index) => (
                                        <div key={index} className="how-it-item hover-item">
                                            <div className="image-item">
                                                <img src={require(`../assets/images/item/${item.img}`)} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title fw-9"><a href="#">{item.title}</a></h4>
                                                <p className="text type-secondary fs-14">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section success story */}
                <section className="s-succes-story tf-spacing-2">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section mb-40">
                                    <h2 className="title mb-6">Success story</h2>
                                    <p className="sub-title fs-14">Our success stories - What we have achieved</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="wg-counter">
                                    <div className="counter-item type-left">
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed="2500" data-to="125" data-inviewport="yes">125</span>
                                                <span className="plus">M</span>
                                            </div>
                                        </div>
                                        <p className="text">$125 million in bonuses were awarded.</p>
                                    </div>
                                    <div className="counter-item type-center">
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed="2500" data-to="8" data-inviewport="yes">8</span>
                                                <span className="plus">M</span>
                                            </div>
                                        </div>
                                        <p className="text">Over 8 million winning tickets were sold worldwide.</p>
                                    </div>
                                    <div className="counter-item type-right">
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed="2500" data-to="1" data-inviewport="yes">1</span>
                                                <span className="plus">M</span>
                                            </div>
                                        </div>
                                        <p className="text">More than 1 million people take part on a daily basis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section play the biggest */}
                <section className="s-play-the-biggest tf-spacing-2">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-left">
                                    <div className="heading-section mb-40 text-left">
                                        <h2 className="title mb-6">Play the Biggest Lotteries</h2>
                                        <p className="sub-title fs-14">We offer customers the opportunity to play to win the world's most popular lotteries. Our services provide:</p>
                                    </div>
                                    <ul className="list">
                                        <li className="item wow hover-item fadeInUp" data-wow-delay="0s">
                                            <div className="image-item">
                                                <img src={require('../assets/images/item/play-biggest-1.png')} alt="" />
                                            </div>
                                            <div className="text-details">
                                                <h4 className="mb-16 fw-9"><a href="#">Popular draws</a></h4>
                                                <p className="text fs-14 type-secondary">
                                                    We offer a wide variety of American and European lotteries including
                                                    <span> EuroMillions, SuperEnalotto, and EuroJackpot</span>.
                                                    We provide you with the latest draw results, lottery information, and lotto news.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item wow hover-item fadeInUp" data-wow-delay="0s">
                                            <div className="image-item">
                                                <img src={require('../assets/images/item/play-biggest-2.png')} alt="" />
                                            </div>
                                            <div className="text-details">
                                                <h4 className="mb-16 fw-9"><a href="#">Courier service</a></h4>
                                                <p className="text fs-14 type-secondary">
                                                    We launched our <span>purchasing services</span> in 2002 and have led the online lotto industry ever since.
                                                    Our <span>lottery courier service</span> buys, scans, and uploads official tickets into your account before the draw.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="item wow hover-item fadeInUp" data-wow-delay="0s">
                                            <div className="image-item">
                                                <img src={require('../assets/images/item/play-biggest-3.png')} alt="" />
                                            </div>
                                            <div className="text-details">
                                                <h4 className="mb-16 fw-9"><a href="#">Record jackpots</a></h4>
                                                <p className="text fs-14 type-secondary">
                                                    <span>US Powerball's</span> $2.04 billion jackpot from November 2022 is the world record.
                                                    Rival American lottery <span>Mega Millions</span> awarded a $1.602 billion prize in August 2023.
                                                    Maybe you'll be the next big winner!
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="image wow fadeInRight" data-wow-delay="0s">
                                    <img className="lazyload" src={require('../assets/images/item/play-the-biggest.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section our mission */}
                <section className="s-our-mission s-get-started tf-spacing-2">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section mb-40">
                                    <h1 className="title fw-9 fs-50 mb-8">Our mission</h1>
                                    <p className="sub-title fw-4 fs-14">Lode lottery cornerstones</p>
                                </div>
                            </div>
                            {[
                                { img: 'our-mission-1.png', title: 'Education', text: 'The Lottery exists to contribute to the success of education in Florida.', num: '01', color: 'color-4' },
                                { img: 'our-mission-2.png', title: 'Responsible gaming', text: 'We\'re committed to facilitating knowledgeable, empowered players.', num: '02', color: 'color-3' },
                                { img: 'our-mission-3.png', title: 'Game play', text: 'The Lottery offers the most exciting and engaging games in the industry.', num: '03', color: 'color-7' }
                            ].map((item, index) => (
                                <div key={index} className="col-md-4">
                                    <div className={`getstart-item style-2 ${item.color} fs-16 type-1 wow fadeInUp`} data-wow-delay={`${index * 0.1}s`}>
                                        <div className="wrapper hover-item">
                                            <div className="wrap-image image-item mb-30">
                                                <img src={require(`../assets/images/section/${item.img}`)} alt="" />
                                            </div>
                                            <div className="content">
                                                <div className="title"><a href="#">{item.title}</a></div>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                        <p className="number text-color-clip style-4">{item.num}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
