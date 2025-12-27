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
                  <p className="type-secondary" style={{fontSize: '14px', marginBottom: '24px'}}>Last updated: October 2025</p>

                  <h2 className="mt-4" style={{fontSize: '32px', fontWeight: '700', marginTop: '24px', marginBottom: '20px'}}>Welcome to LotteryCompare.com.</h2>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '32px'}}>By accessing or using this website, you agree to the following Terms and Conditions. Please read them carefully before using our services.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>1. About Lottery Compare</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>LotteryCompare.com is an informational and comparison platform that reviews, ranks, and provides links to online lottery and crypto lottery platforms.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>We do not operate, sell, or manage any lottery or gambling service. All opinions and reviews are for informational purposes only.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>2. Eligibility</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>You must be at least 18 years old (or the legal age for online gaming in your jurisdiction) to use this website.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>By using Lottery Compare, you confirm that you meet all legal requirements in your country or region.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>3. Information Accuracy</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>We strive to provide accurate and up-to-date information about lottery platforms.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>However, we cannot guarantee that all data (such as odds, bonuses, or prizes) are always correct.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>Always verify details directly on the official lottery website before participating.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>4. External Links</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>Our website contains links to third-party websites.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>We are not responsible for the content, privacy practices, or policies of those external sites.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>By clicking external links, you acknowledge that you are leaving LotteryCompare.com and that we are not liable for any actions or losses resulting from those sites.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>5. No Liability</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>Lottery Compare is not responsible for any financial loss, data breach, or outcome resulting from the use of third-party platforms featured on our website.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>Participation in any lottery or gaming activity is entirely at your own risk.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>6. Intellectual Property</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>All content on this website — including text, graphics, and logos — is owned by LotteryCompare.com and protected by copyright laws.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>You may not copy, reproduce, or redistribute our content without written permission.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>7. Privacy</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>Your privacy matters to us.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>Please read our Privacy Policy to understand how we collect and protect your information.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>8. Changes to Terms</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>We may update these Terms and Conditions at any time.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>Any updates will take effect immediately upon being posted on this page.</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}>By continuing to use our site after changes are posted, you accept the revised terms.</p>

                  <h3 style={{fontSize: '24px', fontWeight: '600', marginTop: '32px', marginBottom: '16px'}}>9. Contact</h3>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '12px'}}>If you have questions about these Terms, please contact us at:</p>
                  <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '24px'}}><strong>lottocompare@gmail.com</strong></p>
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


