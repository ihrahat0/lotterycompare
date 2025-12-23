import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const HowToWork = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="How Crypto Lotteries Work"
        description="Learn how blockchain lotteries work, why they're provably fair, and how to get started with crypto gambling. Complete guide for beginners."
        keywords="how crypto lottery works, blockchain lottery guide, provably fair lottery, crypto gambling"
      />

      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="heading text-center">How Crypto Lotteries Work</h1>
                <p className="sub-heading text-center">
                  Everything you need to know about blockchain-based lotteries and Lotterys
                </p>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li>How Crypto lottery’s work?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-how-it-works pt-80 pb-100">
        <div className="tf-container">

          {/* 6 Steps - Redesigned */}
          <div className="row mb-80">
            {[
              {
                num: '01',
                icon: '📝',
                title: 'Signup for free',
                text: 'Create your account in minutes. No credit card required, just an email address to get started.'
              },
              {
                num: '02',
                icon: '🎲',
                title: 'Choose a lottery',
                text: 'Browse our selection of crypto lotteries and pick the one that suits you best.'
              },
              {
                num: '03',
                icon: '💰',
                title: 'Deposit crypto',
                text: 'Make a minimum deposit of $5 using your preferred cryptocurrency to purchase lottery tickets.'
              },
              {
                num: '04',
                icon: '🎫',
                title: 'Buy Ticket',
                text: 'Purchase your lottery ticket and enter the draw. Your ticket is securely recorded on the blockchain.'
              },
              {
                num: '05',
                icon: '🔍',
                title: 'Check Results',
                text: "After the draw, check the results to see if you've won. All results are verifiable on the blockchain."
              },
              {
                num: '06',
                icon: '💸',
                title: 'Instant Payout',
                text: 'If you win, your winnings are automatically sent to your crypto wallet. No delays, no fees.'
              }
            ].map((step, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="modern-step-card wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                  <div className="step-number-bg">{step.num}</div>
                  <div className="icon-wrapper">
                    <span className="icon">{step.icon}</span>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Crypto vs Traditional Comparison Redesign */}
          <div className="comparison-section-premium mb-80 wow fadeInUp">
            <div className="comparison-header">
              <h2>Crypto vs Traditional <span className="highlight-text">Lotteries</span></h2>
              <p>A comparison between centralized systems and Web3</p>
            </div>

            <div className="comparison-wrapper">
              {/* Traditional Lotteries Card */}
              <div className="comparison-card type-traditional">
                <div className="card-header">
                  <div className="card-icon">💩</div>
                  <h3>Traditional Lotteries</h3>
                </div>
                <div className="card-body">
                  <p>
                    Traditional lotteries are operated by <span className="accent-text">centralized organizations</span> that
                    control the draw process and winning number generation. While they often offer very <span className="accent-text">large jackpots</span>,
                    players must rely on <span className="accent-text">trust</span>, as results are <span className="accent-text">not publicly verifiable</span> in
                    real time and are subject to geographic and regulatory restrictions.
                  </p>
                  <ul className="benefit-list">
                    <li className="benefit-item"><span className="dot"></span> Centralized systems</li>
                    <li className="benefit-item"><span className="dot"></span> Weekly draws</li>
                    <li className="benefit-item"><span className="dot"></span> Trust-based outcomes</li>
                    <li className="benefit-item"><span className="dot"></span> Large jackpots</li>
                    <li className="benefit-item"><span className="dot"></span> KYC required</li>
                  </ul>
                </div>
              </div>

              {/* Crypto Lotteries Card */}
              <div className="comparison-card type-crypto">
                <div className="card-header">
                  <div className="card-icon">🔗</div>
                  <h3>Crypto Lotteries</h3>
                </div>
                <div className="card-body">
                  <p>
                    Crypto lotteries emerged to solve the <span className="accent-text">transparency problem</span> in
                    winning number generation. Winning numbers are derived from <span className="accent-text">public blockchain data</span>,
                    allowing anyone to <span className="accent-text">verify results independently</span> without
                    relying on an operator or centralized authority.
                  </p>
                  <ul className="benefit-list">
                    <li className="benefit-item"><span className="dot"></span> Decentralized systems</li>
                    <li className="benefit-item"><span className="dot"></span> Hourly jackpots</li>
                    <li className="benefit-item"><span className="dot"></span> Publicly verifiable results</li>
                    <li className="benefit-item"><span className="dot"></span> Smaller jackpots</li>
                    <li className="benefit-item"><span className="dot"></span> <strong>No KYC required</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Getting Started Section */}
          <div className="getting-started-premium wow fadeInUp">
            <div className="floating-decor decor-1">🪙</div>
            <div className="floating-decor decor-2">✨</div>
            <div className="floating-decor decor-3">🎟️</div>

            <div className="cta-content-wrapper">
              <span className="cta-tagline">Ready to win?</span>
              <h2 className="cta-main-title">
                Your Journey to <span className="gradient-span">Big Jackpots</span> Starts Here
              </h2>
              <p className="sub-description color-secondary">
                Follow these simple steps and join thousands of winners in the most transparent crypto lottery system.
              </p>

              <div className="premium-steps-list">
                {[
                  { id: '1', title: 'Sign Up', desc: 'Quick registration with email' },
                  { id: '2', title: 'Pick Lottery', desc: 'Choose your favorite game' },
                  { id: '3', title: 'Deposit', desc: 'Min $5 in your preferred crypto' },
                  { id: '4', title: 'Get Ticket', desc: 'Securely recorded on blockchain' },
                  { id: '5', title: 'Check Results', desc: 'Verifiable 24/7 draws' },
                  { id: '6', title: 'Win Payout', desc: 'Instant transfer to your wallet' }
                ].map((step) => (
                  <div key={step.id} className="premium-step-item">
                    <div className="step-circle">{step.id}</div>
                    <div className="step-details">
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cta-actions">
                <a href="https://firstbtclottery.com/site/referral?code=v6zIr7Yg" target="_blank" rel="noopener noreferrer" className="cta-primary-btn">
                  Play Now <i className="icon-right ml-10"></i>
                </a>
                <Link to="/bonuses" className="cta-secondary-btn">
                  View Bonuses
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
export default HowToWork;

