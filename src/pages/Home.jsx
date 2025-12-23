import React, { useEffect } from 'react';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const Home = () => {
    useEffect(() => {
        // Initialize all plugins and animations
        initAllPlugins();
    }, []);

    return (
        <>
            <SEO
                title="Home - Online Lottery Platform"
                description="Play online lottery games and win big prizes. Secure, fair, and exciting lottery experience with official tickets. Join thousands of winners today!"
                keywords="online lottery, lottery games, lottery tickets, win prizes, online gaming, lottery platform"
            />
            <StructuredData type="Organization" />
            <StructuredData type="WebSite" />
            <div className="main-content">
                {/* page-title-home-2 */}
                <div className="tf-section">
                    <div className="page-title-home style-2">
                        <div className="tf-container">
                            <div className="col-12">
                                <div className="page-title-home-content">
                                    <div className="content">
                                        <h1 className="title">
                                            Play the Lottery <br /> Online with <br />
                                            <span className="d-block animationtext slide">
                                                <span className="cd-words-wrapper">
                                                    <span className="item-text is-visible">Official Tickets</span>
                                                    <span className="item-text is-hidden">Official Tickets</span>
                                                    <span className="item-text is-hidden">Official Tickets</span>
                                                </span>
                                            </span>
                                        </h1>
                                        <div className="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                            <br />sit amet cursus
                                            velit. Suspendisse sed tristique mi
                                        </div>
                                        <a href="#" className="tf-btn">Play form $25 <i className="icon-right"></i></a>
                                    </div>
                                    <div className="image">
                                        <img src={require('../assets/images/icon/page-title-home-2-item-1.png')}
                                            alt="" className="lazyload" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-2 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-2.png')}
                                alt="" className="lazyload" />
                        </div>
                        <div className="image-3 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-3.png')}
                                alt="" className="lazyload" />
                        </div>
                        <div className="image-4 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-4.png')}
                                alt="" className="lazyload" />
                        </div>
                        <div className="image-5 in">
                            <img src={require('../assets/images/icon/page-title-home-2-item-5.png')}
                                alt="" className="lazyload" />
                        </div>
                        <div className="image-6 in">
                            <img src={require('../assets/images/icon/page-title-home-2-item-6.png')}
                                alt="" className="lazyload" />
                        </div>
                        <div className="image-7 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-6.png')}
                                alt="" className="lazyload" />
                        </div>
                        <div className="image-8 out">
                            <img src={require('../assets/images/icon/page-title-home-2-item-7.png')}
                                alt="" className="lazyload" />
                        </div>
                    </div>
                </div>

                {/* section-online-lottery */}
                <section className="section-online-lottery page-home-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <div className="title wow fadeInUp">
                                        Online Lottery
                                    </div>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit donec lectus arcu</p>
                                </div>
                            </div>
                            <div className="wrap-our-jackpot">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="wg-our-jackpot wow fadeInLeft">
                                            <div className="content">
                                                <div className="title">
                                                    <h2 className="title"><a href="#">Our Biggest Jackpot</a></h2>
                                                </div>
                                                <div className="price">
                                                    <p className="sub">PRIZE POOL</p>
                                                    <p className="text-color-clip fs-70">
                                                        $140
                                                        <span className="fs-40">million</span>
                                                    </p>
                                                </div>
                                                <div className="time">
                                                    <p>Draw closes in 2 days</p>
                                                    <span className="js-countdown" data-timer="290603"></span>
                                                </div>
                                            </div>
                                            <div className="wrap-image">
                                                <img src={require('../assets/images/section/our-jackpot-2.png')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="wg-get-ticket wow fadeInRight">
                                            <h5 className="title">Could you be the</h5>
                                            <p className="text-color-clip style-2">
                                                next winner?
                                            </p>
                                            <div className="wrap-image">
                                                <img src={require('../assets/images/section/get-ticket.png')} alt="" />
                                            </div>
                                            <a href="#" className="tf-btn">Get your ticket<i className="icon-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-column-4">
                                {[1, 2, 3, 4].map((item, index) => (
                                    <div key={index} className="wg-game style-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                                        <div className="wg-game-image">
                                            <img src={require(`../assets/images/${index === 0 ? 'component/wg-game-5.png' : `section/wg-game-${index + 1}.png`}`)} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title fw-9">
                                                <a href="#">90 Bingo</a>
                                            </h4>
                                            <ul className="sub-title-list">
                                                <li className="item"><i className="icon-remaining"></i>
                                                    <p>Contest No: Lo43</p>
                                                </li>
                                                <li className="item"><i className="icon-ticket"></i>
                                                    <p> <span>9320</span> Remaining</p>
                                                </li>
                                            </ul>
                                            <p className="text fs-14 fw-9">
                                                Win up to
                                            </p>
                                            <p className="money text-color-clip fs-50">
                                                $120
                                            </p>
                                            <p className="million fs-14 fw-9">Million</p>
                                            <div className="wg-countdown">
                                                <span className="js-countdown" data-timer="290603"></span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-scratchcards */}
                <section className="section-scratchcards">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <div className="title wow fadeInUp">
                                        Scratchcards
                                    </div>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit donec lectus arcu</p>
                                </div>
                                <div className="tf-wrap-sort">
                                    <div className="nice-select">
                                        <div className="icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.125 5.625H16.875M3.125 10H16.875M3.125 14.375H10" stroke="white"
                                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span> Sort by:</span><span className="current">Latest contest</span>
                                        <ul className="list">

                                            <li className="option">
                                                <div className="content">
                                                    <span>Recently added</span>
                                                </div>
                                            </li>
                                            <li className="option">
                                                <div className="content">
                                                    <span>Price: Low to High</span>
                                                </div>
                                            </li>
                                            <li className="option">
                                                <div className="content">
                                                    <span>Price: High to Low</span>
                                                </div>
                                            </li>
                                            <li className="option">
                                                <div className="content">
                                                    <span>Auction ending soon</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nice-select">
                                        <div className="icon">
                                            <i className="icon-setting"></i>
                                        </div>
                                        <span className="current">Status</span>
                                        <ul className="list">
                                            <li className="option">
                                                <div className="content">
                                                    <span>All</span>
                                                </div>
                                            </li>
                                            <li className="option">
                                                <div className="content">
                                                    <span>Art</span>
                                                </div>
                                            </li>
                                            <li className="option">
                                                <div className="content">
                                                    <span>Photography</span>
                                                </div>
                                            </li>
                                            <li className="option">
                                                <div className="content">
                                                    <span>Music</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="nice-select">
                                        <div className="icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                                    stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="current">Price range</span>
                                        <ul className="list">
                                            <li className="option">
                                                <div className="content">
                                                    <span>Price: Low to High</span>
                                                </div>
                                            </li>
                                            <li className="option">
                                                <div className="content">
                                                    <span>Price: High to Low</span>
                                                </div>
                                            </li>
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
                                <div className="grid-column-3">
                                    {[1, 2, 3].map((item, index) => (
                                        <div key={index} className="wg-game style-4 hover-img wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                                            <div className="wg-game-image">
                                                <img className="lazyload" src={require(`../assets/images/section/scratchcards-${item}.jpg`)} alt="" />
                                            </div>
                                            <div className="content">
                                                <p className="text fs-14 fw-9">
                                                    Win up to
                                                </p>
                                                <p className="money text-color-clip style-6">
                                                    $150.000<span className="fs-20">Jackpot</span>
                                                </p>
                                                <a href="#" className="tf-btn">
                                                    $25 To play <i className="icon-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-raffles */}
                <section className="section-raffles tf-spacing-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <div className="title wow fadeInUp">
                                        Raffles
                                    </div>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit donec lectus arcu</p>
                                </div>
                                <div className="grid-column-3">
                                    {[1, 2, 4].map((item, index) => (
                                        <div key={index} className="wg-game style-7 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                                            <div className="wg-game-image">
                                                <img src={require(`../assets/images/section/wg-game-${item}.png`)} alt="" />
                                            </div>
                                            <div className="content">
                                                <div className="money-wrap mb-16">
                                                    <p className="money text-color-clip fs-50">
                                                        $120
                                                    </p>
                                                    <span className="fs-14 fw-9">Million <br />
                                                        in prizes!</span>
                                                </div>
                                                <div className="wg-countdown">
                                                    <p className="title fs-14 fw-4">
                                                        Draw closes in 2 days
                                                    </p>
                                                    <span className="js-countdown" data-timer="290603"></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="start-now">
                            Become the next winner with just $25, <a href="#">Start Now!</a>
                        </div>
                    </div>
                </section>

                {/* section-lottery-results */}
                <section className="section-lottery-results tf-spacing-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading-section">
                                    <div className="title wow fadeInUp">
                                        Online lottery results
                                    </div>
                                    <p className="wow fadeInUp" data-wow-delay="0.1s">Check your ticket number's to see if you
                                        are a Winner in the Dream Lottery.</p>
                                </div>
                                <div className="table-lottery-results">
                                    <div className="title">
                                        <div>Lottery</div>
                                        <div>Winners</div>
                                        <div>Time</div>
                                        <div>Winning numbers</div>
                                    </div>
                                    {[...Array(10)].map((_, index) => (
                                        <div key={index} className="item-table">
                                            <div><a href="#">Australia - Monday Lotto</a></div>
                                            <div><a href="#">Eleanor Pena</a></div>
                                            <div>01 Jan 17:30</div>
                                            <div>
                                                <ul className="number-list">
                                                    <li>12</li>
                                                    <li>88</li>
                                                    <li>26</li>
                                                    <li>95</li>
                                                    <li>47</li>
                                                    <li className="active">17</li>
                                                    <li className="active">34</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <ul className="wg-pagination">
                                    <li><a href="#"><i className="icon-back"></i></a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li className="active"><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">...</a></li>
                                    <li><a href="#"><i className="icon-next"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* wrap-section */}
                <div className="wrap-section-home-2 tf-spacing-1">
                    {/* section-getstarted */}
                    <section className="section-getstarted tf-spacing-1">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section">
                                        <div className="title wow fadeInUp">
                                            How to get started
                                        </div>
                                        <p className="wow fadeInUp" data-wow-delay="0.1s">Follow these 3 easy steps!</p>
                                    </div>
                                </div>
                                <div className="grid-column-3">
                                    {[
                                        { num: '01', title: 'Choose contest', text: 'Register to LODE. & Choose your contest', color: 'color-1' },
                                        { num: '02', title: 'Buy lucky numbers', text: 'Pick Your Numbers & Complete your Purchase', color: 'color-2' },
                                        { num: '03', title: 'Take your victory', text: 'Dream big, you are about to reach success.', color: 'color-3' }
                                    ].map((item, index) => (
                                        <div key={index} className="wrap-getstarted">
                                            <div className="guide-number">
                                                <span>{item.num}</span>
                                            </div>
                                            <div className={`getstart-item style-1 ${item.color} hover-item`}>
                                                <div className="wrap-image">
                                                    <img src={require(`../assets/images/section/getstart-item-${index + 1}.png`)} alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="title"><a href="#">{item.title}</a></div>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="item arow-1">
                                        <img src={require('../assets/images/icon/curved-arrow.png')} alt="" />
                                    </div>
                                    <div className="item arow-2">
                                        <img src={require('../assets/images/icon/curved-arrow.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* section-video */}
                    <div className="section-video">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading-section">
                                        <div className="title wow fadeInUp">
                                            What a short video!
                                        </div>
                                        <p className="wow fadeInUp" data-wow-delay="0.1s">Follow these 3 easy steps!</p>
                                    </div>
                                    <div className="widget-video">
                                        <img className="lazyload" src={require('../assets/images/section/wg-video.png')} alt="" />
                                        <a href="https://www.youtube.com/watch?v=MLpWrANjFbI" className="popup-youtube">
                                            <div className="icon">
                                                <i className="icon-play"></i>
                                                <div className="wave"></div>
                                                <div className="wave-1"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section success story */}
                <section className="s-succes-story tf-spacing-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section mb-40 wow fadeInUp">
                                    <h2 className="title mb-6">
                                        Success story
                                    </h2>
                                    <p className="sub-title fs-14 wow fadeInUp" data-wow-delay="0.1s">
                                        Our success stories - What we have achieved
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="wg-counter">
                                    <div className="counter-item type-left">
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed="2500" data-to="125"
                                                    data-inviewport="yes">125
                                                </span>
                                                <span className="plus">
                                                    M
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text">$125 million in bonuses were awarded.</p>
                                    </div>
                                    <div className="counter-item type-center">
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed="2500" data-to="8"
                                                    data-inviewport="yes">8</span>
                                                <span className="plus">
                                                    M
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text">Over 8 million winning tickets were sold worldwide.</p>
                                    </div>
                                    <div className="counter-item type-right">
                                        <div className="counter">
                                            <div className="number-counter">
                                                <span className="number" data-speed="2500" data-to="1"
                                                    data-inviewport="yes">1</span>
                                                <span className="plus">
                                                    M
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text">More than 1 million people take part on a daily basis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-testimonial-home-2 */}
                <section className="section-testimonial-home-2 tf-spacing-1">
                    <div className="heading-section">
                        <div className="title wow fadeInUp">
                            What Our Customers Say</div>
                        <p className="wow fadeInUp" data-wow-delay="0.1s">Follow these 3 easy steps!</p>
                    </div>
                    <div className="wrap-testimonial">
                        <div className="swiper-container" data-swiper='{
                                    "spaceBetween": 0,
                                    "slidesPerView": 1,
                                    "observer": true,
                                    "observeParents": true,
                                    "navigation": {
                                        "nextEl": ".testimonial-next",
                                        "prevEl": ".testimonial-prev"
                                    }
                                }'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item style-full wow fadeInUp">
                                        <div className="avatar">
                                            <img src={require('../assets/images/avatar/testimonials-2.jpg')} alt="" />
                                        </div>
                                        <p className="desc">
                                            " The website is user-friendly to use and they explain everything.
                                            Also if any questions
                                            <br /> you
                                            get the help needed as soon as possible. Awesome. "
                                        </p>
                                        <div className="trust">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                            </div>
                                            <p className="verified">
                                                <i className="icon-check-1"></i>
                                                Verified
                                            </p>
                                        </div>
                                        <div className="content">
                                            <div className="name"><a href="#">Eliza Porter</a>
                                            </div>
                                            <p><span>Clients</span>, 25 November</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item style-full">
                                        <div className="avatar">
                                            <img src={require('../assets/images/avatar/testimonials-1.jpg')} alt="" />
                                        </div>
                                        <p className="desc">
                                            " The website is user-friendly to use and they explain everything.
                                            Also if any questions
                                            <br /> you
                                            get the help needed as soon as possible. Awesome. "
                                        </p>
                                        <div className="trust">
                                            <div className="icon">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                            </div>
                                            <p className="verified">
                                                <i className="icon-check-1"></i>
                                                Verified
                                            </p>
                                        </div>
                                        <div className="content">
                                            <div className="name"><a href="#">Robert Fox</a>
                                            </div>
                                            <p><span>Clients</span>, 25 November</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-next button testimonial-next">
                                <i className="icon-next"></i>
                            </div>
                            <div className="swiper-button-prev button testimonial-prev">
                                <i className="icon-back"></i>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-faq */}
                <section className="section-faq tf-spacing-3">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content">
                                    <div className="title wow fadeInUp">
                                        Frequently asked questions
                                    </div>
                                    <p className="desc wow fadeInUp">
                                        We're here to help! If you can't find the answer you're looking for, please contact
                                        us via email at <a href="#">lode@support.com</a> or by phone at
                                        <span>0123456789</span>
                                    </p>
                                </div>
                                <div className="wrap-image wow fadeInUp">
                                    <img className="lazyload" src={require('../assets/images/section/section-faq.png')} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tf-accordion1 has-bg">
                                    {[
                                        { title: 'Registration & Account', active: false },
                                        { title: 'How do I play the lottery online?', active: true },
                                        { title: 'Responsible Gaming', active: false },
                                        { title: 'Lottery Scams', active: false },
                                        { title: 'Troubleshooting', active: false },
                                        { title: 'Quick Draws', active: false },
                                        { title: 'Scratchcards', active: false },
                                        { title: 'Promotions', active: false }
                                    ].map((item, index) => (
                                        <div key={index} className={`tf-toggle1 ${item.active ? 'active' : ''}`}>
                                            <div className={`toggle-title ${item.active ? 'active' : ''}`}>
                                                <div className="title"><i className="icon-question"></i>{item.title}</div>
                                                <div className="icon"></div>
                                            </div>
                                            <div className="toggle-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt
                                                    consequat
                                                    lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius
                                                    fringilla
                                                    aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus.
                                                    Maecenas
                                                    in dignissim massa.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-support */}
                <section className="section-support">
                    <div className="tf-container">
                        <div className="row">
                            <div className="heading-section">
                                <div className="title wow fadeInUp">
                                    Customers Support
                                </div>
                                <p className="wow fadeInUp" data-wow-delay="0.1s">Have a question or need help? Contact our
                                    friendly support team.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="customer-support-item wow fadeInUp">
                                    <div className="icon">
                                        <img src={require('../assets/images/icon/customer-support-item-icon-1.png')} alt="" className="lazyload" />
                                    </div>
                                    <div className="customer-support-item-content">
                                        <h4 className="title">
                                            <a href="#">Talk to our support team</a>
                                        </h4>
                                        <div className="customer-support-item-text">
                                            Got a question about Lotteries? Get in touch with our friendly staff.
                                        </div>
                                        <div className="btn-customer-support-item">
                                            <a href="/contact" className="tf-btn">Contact us <i className="icon-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="customer-support-item wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <img src={require('../assets/images/icon/customer-support-item-icon-2.png')} alt="" className="lazyload" />
                                    </div>
                                    <div className="customer-support-item-content">
                                        <h4 className="title">
                                            Our Guide to Lode.
                                        </h4>
                                        <div className="customer-support-item-text">
                                            Check out our FAQ section to see if we can provide the information you need.
                                        </div>
                                        <div className="btn-customer-support-item">
                                            <a href="/faq" className="tf-btn">Help center<i className="icon-right"></i></a>
                                        </div>
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

export default Home;

