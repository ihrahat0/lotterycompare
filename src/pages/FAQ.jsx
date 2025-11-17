import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const FAQ = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  const [openBySection, setOpenBySection] = useState({});

  const toggleQuestion = (sectionId, index) => {
    setOpenBySection(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === index ? null : index
    }));
  };

  const faqSections = [
    {
      id: 'crypto-lottery',
      title: 'Crypto Lottery FAQ',
      active: true,
      questions: [
        {
          q: 'What is a crypto lottery site?',
          a: 'A crypto lottery is an online lottery that uses cryptocurrency for buying tickets, receiving prizes, and ensuring transparency. Instead of traditional systems that rely on centralized operators, crypto lotteries run on blockchain technology—meaning every draw, transaction, and payout is recorded publicly. This makes the process faster, borderless, and verifiable by anyone.'
        },
        {
          q: 'How are prizes paid out at crypto lottery sites?',
          a: 'Prizes are usually paid directly to the player’s account or crypto wallet after the winning draw. On blockchain-based lottery sites, payouts happen automatically through smart contracts—meaning your winnings are sent instantly and securely to your crypto wallet with no manual processing or middlemen.'
        },
        {
          q: 'Can I buy lottery tickets anonymously?',
          a: 'On most traditional lottery sites, you need to provide personal information for verification and withdrawals. However, in blockchain-based lotteries, you can usually play without sharing personal details—your crypto wallet address acts as your identity. This means you can buy tickets and receive winnings without creating an account or providing KYC, while still keeping everything transparent and verifiable on the blockchain.'
        },
        {
          q: 'How do crypto lotteries prove they’re fair?',
          a: 'Provably fair crypto lotteries use blockchain technology to guarantee fairness in every draw. The winning numbers are generated from publicly available blockchain data—like a Bitcoin block hash—so the outcome can’t be changed or manipulated. Because the results are recorded on the blockchain, anyone can verify that each draw was random and honest.'
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently asked questions" 
        description="Find answers to frequently asked questions about our lottery platform. Get help and support."
        keywords="FAQ, help, support, lottery questions, customer service"
      />
      
      <div className="page-title">
        <div className="tf-tsparticles">
          <div id="tsparticles1" data-color="#fff" data-line="#fff"></div>
        </div>
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h1 className="title">Frequently Asked Questions</h1>
                <ul className="breadcrumbs">
                  <li><Link to="/">Home</Link></li>
                  <li><i className="icon-next"></i></li>
                  <li>Page</li>
                  <li><i className="icon-next"></i></li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <section className="section-search tf-spacing-1">
          <div className="tf-container">
            <div className="col-12">
              <div className="row">
                <div className="form-help bg-multi-color">
                  <div className="wrap-form">
                    <div className="heading-section">
                      <div className="title">
                        Hi we're here to help you
                      </div>
                      <p>Please check this FAQ first before contacting us.</p>
                    </div>
                    <form action="#" className="form-search">
                      <fieldset>
                        <input type="text" placeholder="Enter your question or keyword" required/>
                      </fieldset>
                      <button className="button-submit" type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-faq">
          <div className="tf-container">
            <div className="row">
              <div className="col-xl-3">
                <div className="faq-wrap">
                  <div className="top">
                    <div className="faq-wrap-title">
                      Category FAQ
                    </div>
                    <div className="line"></div>
                  </div>
                  <div className="faq-wrap-tabs">
                    <ul className="faq-wrap-menu">
                      {faqSections.map((section, index) => (
                        <li key={section.id} className={`item-title ${section.active ? 'active' : ''}`} data-target={`#${section.id}`}>
                          <a href={`#${section.id}`}>{section.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="faq-content">
                  {faqSections.map((section, sectionIndex) => (
                    <div key={section.id} className={`faq-wrap-content-tab ${section.active ? '' : ''}`} id={section.id}>
                      <div className={`tf-accordion ${sectionIndex < faqSections.length - 1 ? 'pb-18' : ''}`}>
                        <h3 className="title-accordion wow fadeInUp" data-wow-delay="0s">{section.title}</h3>
                        {section.questions.map((q, index) => {
                          const isActive = openBySection[section.id] === index;
                          return (
                          <div key={index} className={`tf-toggle ${isActive ? 'active' : ''}`}>
                            <div className={`toggle-title ${isActive ? 'active' : ''}`} onClick={() => toggleQuestion(section.id, index)} style={{cursor:'pointer'}}>
                              <div className="title">{q.q}</div>
                              <div className="icon"></div>
                            </div>
                            <div className="toggle-content">
                              {isActive && <p>{q.a}</p>}
                            </div>
                          </div>
                        );})}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
