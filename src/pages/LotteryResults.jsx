import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';
import BlockResultCard from '../components/BlockResultCard';

const LotteryResults = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  // FirstBTCLottery Result data based on completed blocks
  const lotteryResults = [
    {
      blockNumber: '920768',
      status: 'Completed',
      drawDate: 'October 25, 2025',
      prizePool: '$128K USDT',
      totalTickets: '1951',
      winningNumber: 'CBAB6C',
      totalWinners: '100',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 1 },
        { digits: 3, count: 8 },
        { digits: 2, count: 89 }
      ]
    },
    {
      blockNumber: '920863',
      status: 'Completed',
      drawDate: 'October 26, 2025',
      prizePool: '$119K USDT',
      totalTickets: '1939',
      winningNumber: '438C83',
      totalWinners: '107',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 1 },
        { digits: 3, count: 8 },
        { digits: 2, count: 96 }
      ]
    },
    {
      blockNumber: '920846',
      status: 'Completed',
      drawDate: 'October 26, 2025',
      prizePool: '$112K USDT',
      totalTickets: '1870',
      winningNumber: 'D4C522',
      totalWinners: '84',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 1 },
        { digits: 3, count: 6 },
        { digits: 2, count: 75 }
      ]
    },
    {
      blockNumber: '920831',
      status: 'Completed',
      drawDate: 'October 26, 2025',
      prizePool: '$115K USDT',
      totalTickets: '1886',
      winningNumber: '3F89CD',
      totalWinners: '102',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 2 },
        { digits: 3, count: 6 },
        { digits: 2, count: 92 }
      ]
    },
    {
      blockNumber: '920800',
      status: 'Completed',
      drawDate: 'October 25, 2025',
      prizePool: '$124K USDT',
      totalTickets: '1966',
      winningNumber: '3F1CB4',
      totalWinners: '103',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 1 },
        { digits: 3, count: 10 },
        { digits: 2, count: 90 }
      ]
    },
    {
      blockNumber: '920894',
      status: 'Completed',
      drawDate: 'October 26, 2025',
      prizePool: '$113K USDT',
      totalTickets: '1939',
      winningNumber: '9DADB6',
      totalWinners: '116',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 1 },
        { digits: 3, count: 13 },
        { digits: 2, count: 100 }
      ]
    },
    {
      blockNumber: '920736',
      status: 'Completed',
      drawDate: 'October 25, 2025',
      prizePool: '$117K USDT',
      totalTickets: '1823',
      winningNumber: 'FFC2F0',
      totalWinners: '105',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 2 },
        { digits: 3, count: 9 },
        { digits: 2, count: 92 }
      ]
    },
    {
      blockNumber: '920705',
      status: 'Completed',
      drawDate: 'October 25, 2025',
      prizePool: '$103K USDT',
      totalTickets: '1852',
      winningNumber: '42E800',
      totalWinners: '84',
      winnerBreakdown: [
        { digits: 6, count: 1 },
        { digits: 5, count: 1 },
        { digits: 4, count: 1 },
        { digits: 3, count: 10 },
        { digits: 2, count: 71 }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="FirstBTCLottery Result"
        description="View some of First BTC Lottery Results, for more updated ones, check their site as there is a winner every 10 minutes."
        keywords="FirstBTCLottery Result, winning numbers, draw results, lottery winners"
      />

      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="title">FirstBTCLottery Result</h1>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li><i className="icon-next"></i></li>
                  <li>Pages</li>
                  <li><i className="icon-next"></i></li>
                  <li>FirstBTCLottery Result</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content page-lottery-result">
        <section className="section-lottery-results-grid tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section mb-40">
                  <h2 className="title mb-6 wow fadeInUp">
                    FirstBTCLottery Result
                  </h2>
                  <p className="sub-title wow fadeInUp fs-14" data-wow-delay="0.1s">
                    View some of First BTC Lottery Results, for more updated ones, check their site as there is a winner every 10 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="lottery-results-grid">
              {lotteryResults.map((result, index) => (
                <div key={index} className="lottery-result-item">
                  <BlockResultCard blockData={result} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LotteryResults;
