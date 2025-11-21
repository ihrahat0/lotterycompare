import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const ResponsibleGaming = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Responsible Gaming & Disclaimer" 
        description="LotteryCompare is an affiliate site promoting responsible gambling. Learn about our commitment to player safety and responsible gaming practices."
        keywords="responsible gaming, gambling disclaimer, player safety, 18+ gambling"
      />

      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="heading text-center">Responsible Gaming & Disclaimer</h1>
                <p className="sub-heading text-center">
                  Play responsibly. Gambling should be fun, not a problem.
                </p>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li>Responsible Gaming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-responsible-gaming pt-80 pb-100">
        <div className="tf-container">
          
          {/* Main Disclaimer */}
          <div className="disclaimer-box wow fadeInUp mb-80">
            <h2>⚠️ Important Disclaimer</h2>
            <div className="disclaimer-content">
              <p><strong>LotteryCompare.com is an affiliate comparison website, not a Lottery operator.</strong></p>
              <p>We provide information, reviews, and comparisons of crypto lottery and Lottery platforms. We earn commissions when you sign up through our affiliate links, but this does not influence our honest reviews.</p>
              <ul>
                <li>✓ We are NOT a gambling operator</li>
                <li>✓ We do NOT accept deposits or handle player funds</li>
                <li>✓ We do NOT operate any lottery draws or Lottery games</li>
                <li>✓ We provide information and referrals only</li>
              </ul>
            </div>
          </div>

          {/* Age Restriction */}
          <div className="content-section wow fadeInUp mb-80">
            <h2>🔞 Age Restriction</h2>
            <div className="age-warning">
              <h3>You must be 19+ to gamble</h3>
              <p>Gambling is restricted to persons aged 19 years or older (or the legal age in your jurisdiction, whichever is higher). By using this website and clicking through to Lottery sites, you confirm that:</p>
              <ul>
                <li>You are of legal gambling age in your jurisdiction</li>
                <li>It is legal for you to gamble online in your country/state</li>
                <li>You understand the risks involved in gambling</li>
              </ul>
            </div>
          </div>

          {/* Responsible Gambling Guidelines */}
          <div className="content-section wow fadeInUp mb-80">
            <h2>Responsible Gambling Guidelines</h2>
            <div className="row mt-40">
              <div className="col-lg-6">
                <div className="guideline-box">
                  <h4>✓ Set Limits</h4>
                  <p>Always set deposit and loss limits before you start gambling. Never chase losses.</p>
                </div>
                <div className="guideline-box">
                  <h4>✓ Gamble for Fun, Not Profit</h4>
                  <p>Treat gambling as entertainment, not as a way to make money. The house always has an edge.</p>
                </div>
                <div className="guideline-box">
                  <h4>✓ Never Gamble Under Influence</h4>
                  <p>Don't gamble when drunk, emotional, or under stress. Make decisions with a clear mind.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="guideline-box">
                  <h4>✓ Track Your Time</h4>
                  <p>Set time limits. Don't let gambling interfere with work, family, or other responsibilities.</p>
                </div>
                <div className="guideline-box">
                  <h4>✓ Don't Borrow to Gamble</h4>
                  <p>Only gamble with money you can afford to lose. Never borrow money to gamble.</p>
                </div>
                <div className="guideline-box">
                  <h4>✓ Take Breaks</h4>
                  <p>Regular breaks help maintain perspective. Use self-exclusion tools if needed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="content-section wow fadeInUp mb-80 bg-section p-60">
            <h2>⚠️ Warning Signs of Problem Gambling</h2>
            <p className="mb-30">If you or someone you know shows these signs, seek help immediately:</p>
            <div className="warning-signs">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="warning-list">
                    <li>Gambling with money meant for bills or essentials</li>
                    <li>Borrowing money to gamble or pay gambling debts</li>
                    <li>Lying to family/friends about gambling activities</li>
                    <li>Feeling restless or irritable when not gambling</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="warning-list">
                    <li>Chasing losses or gambling to win back money</li>
                    <li>Neglecting work, family, or personal hygiene</li>
                    <li>Gambling to escape problems or relieve stress</li>
                    <li>Unable to stop despite wanting to quit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Get Help */}
          <div className="content-section wow fadeInUp mb-80">
            <h2>🆘 Get Help</h2>
            <p>If you think you have a gambling problem, help is available:</p>
            <div className="help-resources mt-40">
              <div className="resource-card">
                <h4>Gamblers Anonymous</h4>
                <p>Free peer support group meetings</p>
                <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer" className="tf-btn style-outline">
                  Visit Website
                </a>
              </div>
              <div className="resource-card">
                <h4>National Council on Problem Gambling</h4>
                <p>24/7 Helpline: 1-800-522-4700</p>
                <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="tf-btn style-outline">
                  Visit Website
                </a>
              </div>
              <div className="resource-card">
                <h4>GamCare</h4>
                <p>UK-based support and counseling</p>
                <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="tf-btn style-outline">
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Self-Exclusion */}
          <div className="content-section wow fadeInUp mb-80">
            <h2>Self-Exclusion Tools</h2>
            <p>Most Lotterys we recommend offer self-exclusion tools that allow you to:</p>
            <ul className="check-list mt-30">
              <li>✓ <strong>Cooling-Off Period:</strong> Take a short break (24 hours to 6 weeks)</li>
              <li>✓ <strong>Self-Exclusion:</strong> Ban yourself for 6 months to permanently</li>
              <li>✓ <strong>Deposit Limits:</strong> Set daily, weekly, or monthly limits</li>
              <li>✓ <strong>Session Limits:</strong> Automatic logout after set time</li>
              <li>✓ <strong>Reality Checks:</strong> Pop-up reminders during play</li>
            </ul>
          </div>

          {/* Legal Compliance */}
          <div className="content-section wow fadeInUp">
            <h2>Legal Compliance</h2>
            <div className="legal-box">
              <p><strong>Check Your Local Laws:</strong> Online gambling laws vary by jurisdiction. It is YOUR responsibility to ensure that online gambling is legal in your country, state, or region before playing.</p>
              <p><strong>Cryptocurrency Regulations:</strong> Using cryptocurrency for gambling may have additional legal implications in your jurisdiction. Consult with legal counsel if uncertain.</p>
              <p><strong>Tax Obligations:</strong> Gambling winnings may be taxable in your jurisdiction. Consult with a tax professional regarding your obligations.</p>
              <p className="mt-30"><strong>By using this website, you acknowledge that:</strong></p>
              <ul>
                <li>You have read and understood this disclaimer</li>
                <li>You are of legal age to gamble in your jurisdiction</li>
                <li>You understand the risks of gambling and cryptocurrency</li>
                <li>You accept full responsibility for your gambling activities</li>
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="responsible-gaming-cta text-center mt-80">
            <h3>Remember: Gamble Responsibly</h3>
            <p>When the fun stops, stop.</p>
            <Link to="/" className="tf-btn">
              Back to Home
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ResponsibleGaming;

