import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const Affiliate = () => {
  useEffect(() => { 
    initAllPlugins();
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <>
      <SEO 
        title="Become an affiliate" 
        description="Join our affiliate program and earn commissions by promoting Lotterycompare lottery platform."
        keywords="lottery affiliate, affiliate program, earn commissions, referral program"
      />
      
      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="title">Become an affiliate</h1>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li><i className="icon-next"></i></li>
                  <li>Pages</li>
                  <li><i className="icon-next"></i></li>
                  <li>Affiliate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <section className="s-how-it-work page-affiliate tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section ">
                  <h2 className="title mb-6 wow fadeInUp">
                    How Crypto lottery’s work?
                  </h2>
                  <p className="sub-title wow fadeInUp">
                    Affiliate Program is our special feature for Customers and Partners to earn
                    commission <br/> percentages by inviting new players.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="grid-column-3">
                  <div className="getstart-item style-2 color-4  wow fadeInUp hover-item">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-4.png')} alt=""/>
                      </div>
                      <div className="content">
                        <div className="title"><Link to="/how-to-work">Sign up</Link></div>
                        <p>Yes! You can <span> buy lottery tickets for the biggest international
                            draws </span>from anywhere, anytime. We give you access to exciting
                          daily
                          and
                          weekly draws, all available online! </p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4 ">01</p>
                  </div>
                  <div className="getstart-item style-2 color-8 wow fadeInUp hover-item"
                    data-wow-delay="0.2s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-5.png')} alt=""/>
                      </div>
                      <div className="content">
                        <div className="title"><Link to="/how-to-work">Promote</Link></div>
                        <p>Small prizes will be credited to your account, and when you win big,
                          we'll arrange for you to claim your prize in person. You'll get all your
                          winnings commission-free!</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4">02</p>
                  </div>
                  <div className="getstart-item style-2 color-9 wow fadeInUp hover-item"
                    data-wow-delay="0.4s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-6.png')} alt=""/>
                      </div>
                      <div className="content">
                        <div className="title"><Link to="/how-to-work">Earn</Link></div>
                        <p>Your online play with us is completely safe, as our satisfied customers
                          can confirm. We safeguard your personal details and account
                          transactions, and guarantee your privacy.</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4">03</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="brand tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="title">Trusted by over 150+ major companies</div>
                <div className="swiper-container width-slide" data-swiper='{
                  "spaceBetween": 30,
                  "slidesPerView": "auto",
                  "loop": true,
                  "speed" : 10000,
                  "autoplay": {
                    "delay": 0,
                    "disableOnInteraction": false
                  },
                  "observer": true,
                  "observeParents": true
                }'>
                  <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="swiper-slide">
                        <a href="#">
                          <img src={require(`../assets/images/brand/brand-${i}.png`)} alt=""/>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section-affiliate-partner tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="title mb-6 wow fadeInUp">
                    Become our affiliate partner
                  </h2>
                  <p className="sub-title wow fadeInUp">
                    Create more passive income with our affiliate program
                  </p>
                </div>
                <div className="grid-column-4">
                  <div className="getstart-item style-3 color-10 wow fadeInUp hover-item">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-7.png')} alt=""/>
                      </div>
                      <div className="content">
                        <div className="title"><a href="#">
                          Completely <br/>
                          free</a></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
                  <div className="getstart-item style-3 color-11 wow fadeInUp hover-item"
                    data-wow-delay="0.2s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-8.png')} alt=""/>
                      </div>
                      <div className="content">
                        <div className="title"><a href="#">Flexible payment</a></div>
                        <p>Cras justo sapien, dictum ut nunc laoreet, consectetur vehicula purus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="getstart-item style-3 color-12 wow fadeInUp hover-item"
                    data-wow-delay="0.4s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-9.png')} alt=""/>
                      </div>
                      <div className="content">
                        <div className="title"><a href="#">Easy <br/>
                          to deploy</a></div>
                        <p> Suspendisse suscipit tortor mollis ante porta tristique. Nunc quis
                          tempus mauris.</p>
                      </div>
                    </div>
                  </div>
                  <div className="getstart-item style-3 color-13 wow fadeInUp hover-item"
                    data-wow-delay="0.6s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-10.png')} alt=""/>
                      </div>
                      <div className="content">
                        <div className="title"><a href="#">Online <br/>
                          support</a></div>
                        <p>Morbi laoreet, ipsum in semper porta, urna sapien aliquam magna. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-member-rattings tf-spacing-1 ">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <h2 className="title mb-6 wow fadeInUp">
                    Member ratings
                  </h2>
                  <p className="sub-title wow fadeInUp fs-14">
                    We always update the members who receive the highest monthly income here
                  </p>
                </div>
                <div className="grid-column-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`member-item hover-img wow fadeInUp${i > 1 ? ` data-wow-delay="${(i-1)*0.2}s"` : ''}`}>
                      <div className="image-wrap">
                        <p className="number text-color-clip style-3">0{i}</p>
                        <img className="lazyload" data-src={require(`../assets/images/section/member-${i}.jpg`)}
                          src={require(`../assets/images/section/member-${i}.jpg`)} alt=""/>
                      </div>
                      <div className="content">
                        <div className="name"><a href="#">{i === 1 ? 'Jacob Jones' : i === 2 ? 'Darlene Robertson' : i === 3 ? 'Savannah Nguyen' : 'Devon Lane'}</a></div>
                        <p>{i === 1 ? 'Web Designer' : i === 2 ? 'Nursing Assistant' : i === 3 ? 'President of Sales' : 'Medical Assistant'}</p>
                        <ul className="tf-social">
                          <li><a href="#"><i className="icon-facebook"></i></a></li>
                          <li><a href="#"><i className="icon-twitter"></i></a></li>
                          <li><a href="#"><i className="icon-youtube"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="tf-container ">
          <div className="row">
            <div className="col-12">
              <section className="section-dowload-app ">
                <div className="wrapper">
                  <div className="content">
                    <div className="title wow fadeInUp">Play the lottery anytime, <br/> anywhere, even on the
                      go</div>
                    <p className="wow fadeInUp">Play the lottery anytime, anywhere with our convenient
                      mobile app. <br/>Download
                      now
                      and
                      start winning!</p>
                  </div>
                  <div className="bottom wow fadeInUp">
                    <div className="btn-dowload ">
                      <a href="#"><img src={require('../assets/images/item/Android.jpg')} alt=""/></a>
                    </div>
                    <div className="btn-dowload">
                      <a href="#"><img src={require('../assets/images/item/IOS.jpg')} alt=""/></a>
                    </div>
                  </div>
                  <div className="item-1 wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="4s">
                    <img src={require('../assets/images/item/phone.png')} alt=""/>
                  </div>
                  <div className="item coin-1 wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="3s">
                    <img src={require('../assets/images/item/coin-1.png')} alt=""/>
                  </div>
                  <div className="item coin-2 wow fadeInLeft" data-wow-delay="1s" data-wow-duration="3s">
                    <img src={require('../assets/images/item/coin-2.png')} alt=""/>
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
export default Affiliate;

