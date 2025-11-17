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
        title="First BTC Lottery " 
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
                <h1 className="title">First BTC Lottery</h1>
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
                  First BTC Lottery 
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


        <div className="tf-container ">
          <div className="row">
            <div className="col-12">
              <section className="section-dowload-app ">
                <div className="wrapper">
                  <div className="content">
                    <div className="title wow fadeInUp">Play the lottery anytime, <br/> anywhere, even on the
                      go</div>
                  </div>
                  <div className="item-1 wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="4s">
                    <img src={require('../assets/images/item/footer-banner.png')} alt=""/>
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

