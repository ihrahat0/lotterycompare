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
                  Everything you need to know about blockchain-based lotteries and casinos
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
          
          {/* 3 Steps */}
          <div className="row mb-80">
            <div className="col-lg-4 col-md-6">
              <div className="how-it-works-card wow fadeInUp">
                <div className="step-number">1</div>
                <div className="icon">💰</div>
                <h4>Play or Deposit</h4>
                <p>Choose your favorite crypto lottery or casino. Make a deposit using BTC, ETH, USDT, or other supported cryptocurrencies. Most platforms accept deposits as low as 0.001 BTC.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="how-it-works-card wow fadeInUp" data-wow-delay="0.1s">
                <div className="step-number">2</div>
                <div className="icon">⛓️</div>
                <h4>Blockchain Draw (Provably Fair)</h4>
                <p>All draws are verified on the blockchain using smart contracts. The results are generated using cryptographic algorithms that can be independently verified — ensuring 100% fairness.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="how-it-works-card wow fadeInUp" data-wow-delay="0.2s">
                <div className="step-number">3</div>
                <div className="icon">⚡</div>
                <h4>Instant Payout</h4>
                <p>When you win, your funds are sent directly to your crypto wallet instantly. No waiting periods, no verification delays — just instant access to your winnings.</p>
              </div>
            </div>
          </div>

          {/* What Makes It Different */}
          <div className="content-section wow fadeInUp mb-80">
            <h2>What Makes Crypto Lotteries Different?</h2>
            <div className="row mt-40">
              <div className="col-lg-6">
                <div className="feature-box">
                  <h4>✓ Provably Fair Technology</h4>
                  <p>Every game result can be verified on the blockchain. You can check that the casino didn't manipulate the outcome.</p>
                </div>
                <div className="feature-box">
                  <h4>✓ No KYC Required</h4>
                  <p>Most crypto casinos don't require identity verification. Play anonymously using just your wallet address.</p>
                </div>
                <div className="feature-box">
                  <h4>✓ Lower House Edge</h4>
                  <p>Blockchain casinos often have lower overhead costs, resulting in better odds and higher payouts for players.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-box">
                  <h4>✓ Instant Withdrawals</h4>
                  <p>Traditional casinos take days to process withdrawals. Crypto casinos send winnings to your wallet instantly.</p>
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
                <p><strong>Before playing:</strong> The casino generates a server seed (hashed) and shows it to you. They can't change this later.</p>
              </div>
              <div className="step-item">
                <span className="step-num">Step 2</span>
                <p><strong>You play:</strong> You provide a client seed (or the system generates one). This combines with the server seed to determine the outcome.</p>
              </div>
              <div className="step-item">
                <span className="step-num">Step 3</span>
                <p><strong>After the game:</strong> The casino reveals the unhashed server seed. You can use a verification tool to check that the result matches.</p>
              </div>
              <div className="step-item">
                <span className="step-num">Step 4</span>
                <p><strong>Verify on blockchain:</strong> Check the transaction on the blockchain explorer to confirm everything is recorded publicly.</p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="content-section wow fadeInUp">
            <h2>Ready to Get Started?</h2>
            <p>Follow these steps to start playing crypto lotteries today:</p>
            <ol className="numbered-list mt-30">
              <li>Browse our list of <Link to="/top-casinos">top-rated crypto casinos</Link></li>
              <li>Choose a platform that suits your needs</li>
              <li>Create a crypto wallet (if you don't have one)</li>
              <li>Buy some cryptocurrency (BTC, ETH, etc.)</li>
              <li>Deposit to your chosen casino</li>
              <li>Start playing and win!</li>
            </ol>
            <div className="text-center mt-40">
              <Link to="/top-casinos" className="tf-btn">
                Play Now<i className="icon-right"></i>
              </Link>
              <Link to="/bonuses" className="tf-btn style-outline ml-20">
                View Bonuses
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
export default HowToWork;

