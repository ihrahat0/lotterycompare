import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const WinnerList = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  const winnerData = Array(10).fill(null).map(() => ({
    contestNo: 'Lo43',
    winner: 'Eleanor Pena',
    numbers: [12, 88, 26, 95, 47, 17, 34],
    activeNumbers: [5, 6],
    time: '15 May 2020 8:30 Am',
    reward: ''
  }));

  return (
    <>
      <SEO
        title="Winner List"
        description="View some of First BTC Lottery Results, for more updated ones, check their site as there is a winner every 10 minutes."
        keywords="lottery winners, winning numbers, prize winners, lottery results"
      />

      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="title">Winner list</h1>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li><i className="icon-next"></i></li>
                  <li>Pages</li>
                  <li><i className="icon-next"></i></li>
                  <li>Winner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <section className="winning-number tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="winning-number bg-multi-color">
                  <div className="heading-section">
                    <div className="title wow fadeInUp">
                      The Breeze Zodiac IX
                    </div>
                    <p className="wow fadeInUp" data-wow-delay="0.1s">Draw took place on : <span>Saturday May 20, 2023</span></p>
                  </div>
                  <div className="content">
                    <div className="title">
                      Latest bigest Winning Numbers:
                    </div>
                    <ul className="list-number">
                      <li>54</li>
                      <li>06</li>
                      <li>19</li>
                      <li>32</li>
                      <li>81</li>
                      <li>42</li>
                      <li>10</li>
                    </ul>
                    <div className="button">
                      <a className="tf-btn" href="#">Alerts</a>
                      <Link className="tf-btn style-3" to="/faq">How to claim </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="s-lastest-winner page-winner-list tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section mb-40">
                  <h2 className="title mb-6 wow fadeInUp">
                    Latest Winners
                  </h2>
                  <p className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                    Check your ticket number's to see if you are a Winner in the Dream Lottery.
                  </p>
                </div>
              </div>
              <div className="widget-tabs">
                <ul className="widget-menu-tab overflow-x-auto">
                  <li className="item-title active">Dream car</li>
                  <li className="item-title">Smart phone</li>
                  <li className="item-title">Watch</li>
                  <li className="item-title">Laptop</li>
                  <li className="item-title">Money</li>
                </ul>
                <div className="widget-content-tab">
                  {[...Array(5)].map((_, tabIndex) => (
                    <div key={tabIndex} className={`widget-content-inner ${tabIndex === 0 ? 'active' : ''}`}>
                      <div className="table-latest-winners">
                        <div className="title">
                          <div>Contest No</div>
                          <div>Winners</div>
                          <div>Winning numbers</div>
                          <div>Time</div>
                          <div>reward</div>
                        </div>
                        {winnerData.map((winner, index) => (
                          <div key={index} className="item-table">
                            <div>{winner.contestNo}</div>
                            <div><a href="#">{winner.winner}</a></div>
                            <div>
                              <ul className="number-list">
                                {winner.numbers.map((num, i) => (
                                  <li key={i} className={winner.activeNumbers.includes(i) ? 'active' : ''}>{num}</li>
                                ))}
                              </ul>
                            </div>
                            <div>{winner.time}</div>
                            <div className="img">
                              <img src={require(`../assets/images/item/item-table-${(index % 8) + 1}.png`)} alt="" />
                            </div>
                          </div>
                        ))}
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
                    <div className="title wow fadeInUp">Play the lottery anytime, <br /> anywhere, even on the go</div>
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

export default WinnerList;
