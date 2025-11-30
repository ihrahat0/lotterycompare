import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const Contact = () => {
    useEffect(() => {
        initAllPlugins();
        
        // Initialize map if needed
        if (window.initMap) {
            window.initMap();
        }
    }, []);

    return (
        <>
            <SEO 
                title="Contact Us" 
                description="Get in touch with Lotterycompare support team. We're here to help with any questions about lottery games, tickets, or account issues."
                keywords="contact lottery, lottery support, customer service, lottery help, contact us"
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
                                <h1 className="title">Contact us</h1>
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link></li>
                                    <li><i className="icon-next"></i></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* main-content */}
            <div className="main-content">
                {/* section map */}

                {/* section contact info */}
                <section className="s-contact-infor s-get-started tf-spacing-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section mb-40">
                                    <h1 className="title fw-9 fs-50 mb-8">
                                        Contact info
                                    </h1>
                                    <p className="sub-title fw-4">
                                        Follow these 3 easy steps!
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="getstart-item style-2 color-1 type-1 wow fadeInUp" data-wow-delay="0s">
                                    <div className="wrapper hover-item">
                                        <div className="wrap-image image-item">
                                            <img src={require('../assets/images/item/infor-call.png')} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="title"><a href="#">Phone</a></div>
                                            <p className="text-1">Will be available soon</p>
                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="getstart-item style-2 color-3 type-1 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="wrapper hover-item">
                                        <div className="wrap-image image-item">
                                            <img src={require('../assets/images/item/infor-email.png')} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="title"><a href="#">Email</a></div>
                                            <p className="text-2"><a href="mailto:lottocompare@gmail.com">lottocompare@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="getstart-item style-2 color-3 type-1 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="wrapper hover-item">
                                        <div className="wrap-image image-item">
                                            <img src={require('../assets/images/item/infor-address.png')} alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="title"><a href="#">Location</a></div>
                                            <p className="address">
                                                Street: 55 Cunnery Rd<br />
                                                City: MANCHESTER<br />
                                                Zip Code/Postal code: M2 1EU
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>

                {/* section send message */}
                <section className="s-send-message tf-spacing-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-section">
                                    <h2 className="title">
                                        Send us a message
                                    </h2>
                                    <p className="sub-title">
                                        Our team of lottery experts is prepared to provide a quick and thorough <br />
                                        response to all your questions and concerns via email.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <form action="#" className="form-add-message wow fadeInUp" data-wow-delay="0s">
                                    <div className="cols">
                                        <fieldset className="tf-field">
                                            <label htmlFor="field1">Your name *</label>
                                            <input className="tf-input" type="text" id="field1" placeholder="Your name" required />
                                        </fieldset>
                                    </div>
                                    <div className="cols">
                                        <fieldset>
                                            <label htmlFor="field4">Email address</label>
                                            <input type="email" id="field4" placeholder="Your email" />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="field2">Phone number</label>
                                            <input type="number" id="field2" placeholder="Your phone" />
                                        </fieldset>
                                    </div>
                                    <fieldset className="fieldText mb-30">
                                        <label htmlFor="field3">Your message</label>
                                        <textarea id="field3" placeholder="Your message"></textarea>
                                    </fieldset>
                                    <div className="btn-send-comment flex justify-center">
                                        <button type="submit" className="btn-send tf-btn">
                                            Send message <i className="icon-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-dowload-app */}
                <div className="tf-container">
                    <div className="row">
                        <div className="col-12">
                            <section className="section-dowload-app">
                                <div className="wrapper">
                                    <div className="content">
                                        <div className="title wow fadeInUp">
                                            Play the lottery anytime, <br /> anywhere, even on the go
                                        </div>
                                        
                                    </div>
                             
                                    <div className="item-1 wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="4s">
                                        <img src={require('../assets/images/item/footer-banner.png')} alt="" />
                                    </div>
                                    <div className="item coin-1 wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="3s">
                                        <img src={require('../assets/images/item/coin-1.png')} alt="" />
                                    </div>
                                    <div className="item coin-2 wow fadeInLeft" data-wow-delay="1s" data-wow-duration="3s">
                                        <img src={require('../assets/images/item/coin-2.png')} alt="" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
