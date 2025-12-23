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

          {/* What Makes It Different */}
          <div className="content-section wow fadeInUp mb-80">
            <h2>What Makes Crypto Lotteries Different?</h2>
            <div className="row mt-40">
              <div className="col-lg-6">
                <div className="feature-box">
                  <h4>✓ Provably Fair Technology</h4>
                  <p>Every game result can be verified on the blockchain. You can check that the Lottery didn't manipulate the outcome.</p>
                </div>
                <div className="feature-box">
                  <h4>✓ No KYC Required</h4>
                  <p>Most Crypto Lottery don't require identity verification. Play anonymously using just your wallet address.</p>
                </div>
                <div className="feature-box">
                  <h4>✓ Lower House Edge</h4>
                  <p>Blockchain Lotterys often have lower overhead costs, resulting in better odds and higher payouts for players.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h4>✓ Instant Withdrawals</h4>
                  <p>Traditional Lotterys take days to process withdrawals. Crypto Lottery send winnings to your wallet instantly.</p>
                </div>
                <div className="feature-box">
                  <h4>✓ Global Access</h4>
                  <p>Play from anywhere in the world. No geographic restrictions or banking limitations.</p>
                </div>
                <div className="feature-box">
                  <h4>✓ Transparent Odds</h4>
                  <p>All game odds and RTP (Return to Player) rates are publicly verifiable on the blockchain.</p>
                </div>
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

