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
                  <li>First BTC Lottery</li>
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
                    Experience the revolutionary Bitcoin-based lottery where winning numbers are determined
                    <br /> by Bitcoin mining block hashes every 10 minutes. Match digits and win big!
                  </p>
                  <div className="text-center mt-30 wow fadeInUp" data-wow-delay="0.2s">
                    <a href="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" target="_blank" rel="noopener noreferrer" className="tf-btn">
                      Play Now <i className="icon-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prize Structure Table */}
              <div className="col-lg-12 mt-60 mb-60">
                <div className="prize-structure-section wow fadeInUp">
                  <div className="prize-structure-header">
                    <h3 className="prize-structure-title">💰 Prize Structure</h3>
                    <div className="jackpot-highlight">
                      <div className="jackpot-icon">🎰</div>
                      <div className="jackpot-info">
                        <div className="jackpot-label">Jackpot</div>
                        <div className="jackpot-amount">$80,000</div>
                        <div className="jackpot-frequency">Every 10 Minutes</div>
                      </div>
                    </div>
                  </div>

                  <div className="prize-table-wrapper">
                    <table className="prize-structure-table">
                      <thead>
                        <tr>
                          <th className="prize-match-col">Match</th>
                          <th className="prize-amount-col">Prize</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="prize-row prize-row-6">
                          <td className="prize-match">
                            <div className="match-badge match-6">6 Digit Match</div>
                          </td>
                          <td className="prize-amount">
                            <span className="prize-value prize-mega">$50,000+</span>
                          </td>
                        </tr>
                        <tr className="prize-row prize-row-5">
                          <td className="prize-match">
                            <div className="match-badge match-5">5 Digit Match</div>
                          </td>
                          <td className="prize-amount">
                            <span className="prize-value prize-large">$20,000</span>
                          </td>
                        </tr>
                        <tr className="prize-row prize-row-4">
                          <td className="prize-match">
                            <div className="match-badge match-4">4 Digit Match</div>
                          </td>
                          <td className="prize-amount">
                            <span className="prize-value prize-medium">$3,000</span>
                          </td>
                        </tr>
                        <tr className="prize-row prize-row-3">
                          <td className="prize-match">
                            <div className="match-badge match-3">3 Digit Match</div>
                          </td>
                          <td className="prize-amount">
                            <span className="prize-value prize-small">$300</span>
                          </td>
                        </tr>
                        <tr className="prize-row prize-row-2">
                          <td className="prize-match">
                            <div className="match-badge match-2">2 Digit Match</div>
                          </td>
                          <td className="prize-amount">
                            <span className="prize-value prize-free">Free Ticket</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="draw-info-banner">
                    <div className="draw-info-icon">⏰</div>
                    <div className="draw-info-content">
                      <div className="draw-info-title">Draws Every 10 Minutes</div>
                      <div className="draw-info-subtitle">New chances to win every 10 minutes based on Bitcoin block hashes</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="grid-column-3">
                  <div className="getstart-item style-2 color-4  wow fadeInUp hover-item">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-4.png')} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">Sign Up</div>
                        <p>Create your account in seconds and join the <span> FirstBTClottery platform</span>.
                          Get started with a simple registration process and begin your journey to winning big prizes!</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4 ">01</p>
                  </div>
                  <div className="getstart-item style-2 color-8 wow fadeInUp hover-item"
                    data-wow-delay="0.2s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-5.png')} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">Deposit</div>
                        <p>Add funds to your account securely and easily. <span> Deposit Bitcoin or other cryptocurrencies</span>
                          to purchase your lottery tickets. Fast, secure, and transparent transactions every time.</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4">02</p>
                  </div>
                  <div className="getstart-item style-2 color-9 wow fadeInUp hover-item"
                    data-wow-delay="0.4s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-6.png')} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">Pick your 6 lucky number</div>
                        <p>Choose your <span> 6 lucky numbers</span> for each lottery ticket. These numbers will be matched
                          against the last 6 digits of the Bitcoin block hash to determine if you're a winner!</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4">03</p>
                  </div>
                  <div className="getstart-item style-2 color-5 wow fadeInUp hover-item"
                    data-wow-delay="0.6s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-7.png')} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">Every 10 minutes draw</div>
                        <p>New draws happen <span> every 10 minutes</span> based on Bitcoin mining blocks. The winning numbers
                          are determined by the last 6 digits of each block's hash, ensuring complete transparency and fairness.</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4">04</p>
                  </div>
                  <div className="getstart-item style-2 color-6 wow fadeInUp hover-item"
                    data-wow-delay="0.8s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-8.png')} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">Wins Come Directly to your wallet</div>
                        <p>All winnings are <span> automatically transferred to your wallet</span> instantly. No waiting,
                          no delays - your prizes are sent directly to you as soon as you win!</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4">05</p>
                  </div>
                  <div className="getstart-item style-2 color-10 wow fadeInUp hover-item"
                    data-wow-delay="1s">
                    <div className="wrapper">
                      <div className="wrap-image">
                        <img src={require('../assets/images/section/getstart-item-9.png')} alt="" />
                      </div>
                      <div className="content">
                        <div className="title">$80,000 Jackpot even 2 match wins</div>
                        <p>Win prizes for matching <span> 2, 3, 4, 5, or all 6 digits</span>! Even matching just 2 numbers
                          can win you up to $80,000. Match all 6 digits for the ultimate jackpot prize!</p>
                      </div>
                    </div>
                    <p className="number text-color-clip style-4">06</p>
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
                    <div className="title wow fadeInUp">Play the lottery anytime, <br /> anywhere, even on the
                      go</div>
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
export default Affiliate;

