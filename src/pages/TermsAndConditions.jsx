import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { initAllPlugins } from '../utils/initScripts';

const TermsAndConditions = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Terms and Conditions"
        description="Read the Terms and Conditions for LotteryCompare.com."
        keywords="terms, terms and conditions, legal"
      />

      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="title">Terms and Conditions</h1>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li><i className="icon-next"></i></li>
                  <li>Legal</li>
                  <li><i className="icon-next"></i></li>
                  <li>Terms and Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <section className="tf-spacing-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="content-section">
                  <p className="type-secondary">Last updated: October 2025</p>

                  <h2 className="mt-4">Welcome to LotteryCompare.com.</h2>
                  <p>By accessing or using this website, you agree to the following Terms and Conditions. Please read them carefully before using our services.</p>

                  <h3>1. About Lottery Compare</h3>
                  <p>LotteryCompare.com is an informational and comparison platform that reviews, ranks, and provides links to online lottery and crypto lottery platforms.</p>
                  <p>We do not operate, sell, or manage any lottery or gambling service. All opinions and reviews are for informational purposes only.</p>

                  <h3>2. Eligibility</h3>
                  <p>You must be at least 18 years old (or the legal age for online gaming in your jurisdiction) to use this website.</p>
                  <p>By using Lottery Compare, you confirm that you meet all legal requirements in your country or region.</p>

                  <h3>3. Information Accuracy</h3>
                  <p>We strive to provide accurate and up-to-date information about lottery platforms.</p>
                  <p>However, we cannot guarantee that all data (such as odds, bonuses, or prizes) are always correct.</p>
                  <p>Always verify details directly on the official lottery website before participating.</p>

                  <h3>4. External Links</h3>
                  <p>Our website contains links to third-party websites.</p>
                  <p>We are not responsible for the content, privacy practices, or policies of those external sites.</p>
                  <p>By clicking external links, you acknowledge that you are leaving LotteryCompare.com and that we are not liable for any actions or losses resulting from those sites.</p>

                  <h3>5. No Liability</h3>
                  <p>Lottery Compare is not responsible for any financial loss, data breach, or outcome resulting from the use of third-party platforms featured on our website.</p>
                  <p>Participation in any lottery or gaming activity is entirely at your own risk.</p>

                  <h3>6. Intellectual Property</h3>
                  <p>All content on this website — including text, graphics, and logos — is owned by LotteryCompare.com and protected by copyright laws.</p>
                  <p>You may not copy, reproduce, or redistribute our content without written permission.</p>

                  <h3>7. Privacy</h3>
                  <p>Your privacy matters to us.</p>
                  <p>Please read our Privacy Policy to understand how we collect and protect your information.</p>

                  <h3>8. Changes to Terms</h3>
                  <p>We may update these Terms and Conditions at any time.</p>
                  <p>Any updates will take effect immediately upon being posted on this page.</p>
                  <p>By continuing to use our site after changes are posted, you accept the revised terms.</p>

                  <h3>9. Contact</h3>
                  <p>If you have questions about these Terms, please contact us at:</p>
                  <p><strong>lottocompare@gmail.com</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;


