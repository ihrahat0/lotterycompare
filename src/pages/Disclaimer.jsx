import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { initAllPlugins } from '../utils/initScripts';

const Disclaimer = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Disclaimer"
        description="Read the disclaimer for LotteryCompare.com."
        keywords="disclaimer, legal"
      />

      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="title">Disclaimer</h1>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li><i className="icon-next"></i></li>
                  <li>Legal</li>
                  <li><i className="icon-next"></i></li>
                  <li>Disclaimer</li>
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

                  <div className="heading-section mb-20">
                    <h2 className="title" style={{marginBottom: '16px', fontSize: '32px', fontWeight: '700'}}>Read Before You Proceed</h2>
                    <p className="sub-title" style={{fontSize: '16px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.7)'}}>Transparent information to keep your experience safe and informed</p>
                  </div>

                  <div className="content-row" style={{lineHeight: '1.8'}}>
                    <p style={{fontSize: '16px', marginBottom: '24px', lineHeight: '1.8'}}>The information provided on <strong>LotteryCompare.com</strong> is for general informational and entertainment purposes only. We <strong>do not</strong> operate, sell, or manage any lottery or gambling service. Our role is to review, compare, and share information about online and blockchain-based lottery platforms.</p>

                    <div className="content-section" style={{marginTop: '32px', marginBottom: '32px'}}>
                      <h3 className="mb-12" style={{fontSize: '24px', fontWeight: '600', marginBottom: '16px'}}>Accuracy & Responsibility</h3>
                      <p style={{fontSize: '16px', lineHeight: '1.8'}}>While we aim to keep all content accurate and up to date, we make no guarantees regarding the completeness, reliability, or accuracy of the information presented. Any action you take based on information from this website is strictly at your own risk. LotteryCompare.com will not be liable for any losses or damages related to your use of third-party sites linked from our platform.</p>
                    </div>

                    <div className="content-section" style={{marginTop: '32px', marginBottom: '32px'}}>
                      <h3 className="mb-12" style={{fontSize: '24px', fontWeight: '600', marginBottom: '16px'}}>Important Notices</h3>
                      <ul style={{fontSize: '16px', lineHeight: '1.8', paddingLeft: '24px'}}>
                        <li style={{marginBottom: '12px'}}>Lottery and gambling activities are subject to local laws and age restrictions. Ensure that participating in such activities is legal in your jurisdiction.</li>
                        <li style={{marginBottom: '12px'}}>We may receive affiliate commissions when users visit or sign up for third-party platforms through our links. This does not influence our reviews or rankings.</li>
                        <li style={{marginBottom: '12px'}}>Always gamble responsibly and never risk more than you can afford to lose.</li>
                      </ul>
                    </div>

                    <p className="mt-20" style={{fontSize: '16px', lineHeight: '1.8', marginTop: '32px'}}>For further questions or concerns, contact us at <strong>lottocompare@gmail.com</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Disclaimer;


