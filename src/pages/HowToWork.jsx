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

          {/* Premium Comparison Section */}
          <div className="comparison-container">
            <div className="comparison-header wow fadeInUp">
              <h2 className="title">Crypto Lotteries vs Traditional Lotteries</h2>
              <p className="subtitle">
                A comparison <span className="accent">between</span> centralized systems <span className="accent">and</span> Web3
              </p>
            </div>

            <div className="comparison-grid">
              {/* Traditional Lotteries */}
              <div className="comparison-card type-traditional wow fadeInLeft">
                <div className="card-header">
                  <span className="icon">💩</span>
                  <h3>Traditional Lotteries</h3>
                </div>
                <div className="card-description">
                  Traditional lotteries are operated by <span className="highlight">centralized organizations</span> that control the draw process and winning number generation.
                  While they often offer very large jackpots, players must rely on <strong>trust</strong>, as results are <strong>not publicly verifiable</strong> in real time and are subject to geographic and regulatory restrictions.
                </div>
                <ul className="comparison-features">
                  {[
                    'Centralized systems',
                    'Weekly draws',
                    'Trust-based outcomes',
                    'Large jackpots',
                    'KYC required'
                  ].map((feature, i) => (
                    <li key={i} className="feature-pill">
                      <span className="feature-dot"></span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Crypto Lotteries */}
              <div className="comparison-card type-crypto wow fadeInRight">
                <div className="card-header">
                  <span className="icon">⛓️</span>
                  <h3>Crypto Lotteries</h3>
                </div>
                <div className="card-description">
                  Crypto lotteries emerged to solve the <strong>transparency problem</strong> in winning number generation.
                  Winning numbers are derived from <span className="highlight">public blockchain data</span>, allowing anyone to verify results independently <strong>without</strong> relying on an operator or centralized authority.
                </div>
                <ul className="comparison-features">
                  {[
                    'Decentralized systems',
                    'Hourly jackpots',
                    'Publicly verifiable results',
                    'Smaller jackpots',
                    'No KYC required'
                  ].map((feature, i) => (
                    <li key={i} className="feature-pill">
                      <span className="feature-dot"></span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* How to Verify Provably Fair */}
          <div className="content-section wow fadeInUp mb-80 bg-section p-60">
            <h2>How to Verify Provably Fair Games</h2>
            <p className="mb-40">Here's how you can verify that a game was truly fair:</p>
            <div className="steps-list">
              <div className="step-item">
                <span className="step-num">Step 1</span>
                <p><strong>Before playing:</strong> The Lottery generates a server seed (hashed) and shows it to you. They can't change this later.</p>
              </div>
              <div className="step-item">
                <span className="step-num">Step 2</span>
                <p><strong>You play:</strong> You provide a client seed (or the system generates one). This combines with the server seed to determine the outcome.</p>
              </div>
              <div className="step-item">
                <span className="step-num">Step 3</span>
                <p><strong>After the game:</strong> The Lottery reveals the unhashed server seed. You can use a verification tool to check that the result matches.</p>
              </div>
              <div className="step-item">
                <span className="step-num">Step 4</span>
                <p><strong>Verify on blockchain:</strong> Check the transaction on the blockchain explorer to confirm everything is recorded publicly.</p>
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

