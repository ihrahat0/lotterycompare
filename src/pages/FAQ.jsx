import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllPlugins } from '../utils/initScripts';
import SEO from '../components/SEO';

const FAQ = () => {
  useEffect(() => {
    initAllPlugins();
    window.scrollTo(0, 0);
  }, []);

  const faqSections = [
    {
      id: 'about-the-lotter',
      title: 'About the Lotter',
      questions: [
        { q: '1. What can I do if I forgot my password?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '3. Maecenas rhoncus neque eu neque maximus auctor congue sed erat.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '4. Nam vel neque ut eros mollis bibendum vel ac nisl.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.', active: true },
        { q: '5. Duis porttitor eros at quam tincidunt tempus.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' }
      ]
    },
    {
      id: 'top-5-questions',
      title: 'Top 5 Questions',
      active: true,
      questions: [
        { q: '1. Donec tempor nisl commodo erat ullamcorper fringilla.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '2. Suspendisse et sem in quam maximus imperdiet ac nec nunc.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '3. Cras fringilla ante sit amet ullamcorper placerat.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '4. Donec vestibulum leo nec erat congue laoreet.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.', active: true },
        { q: '5. Vestibulum ac elit et ligula tincidunt suscipit finibus vel est.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' }
      ]
    },
    {
      id: 'syndicates',
      title: 'Syndicates',
      questions: [
        { q: '1. Nullam elementum diam vitae posuere dignissim.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '2. Morbi eget justo sit amet lacus scelerisque feugiat.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '3. Praesent auctor erat gravida justo consequat condimentum.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '4. Phasellus et eros quis elit euismod convallis in vel ipsum.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.', active: true },
        { q: '5. Nulla non ex interdum, facilisis nibh in, aliquam nibh.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' }
      ]
    },
    {
      id: 'payments-and-deposits',
      title: 'Payments and Deposits',
      questions: [
        { q: '1. Fusce nec sem vitae mi pharetra placerat a a arcu.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '2. Praesent ut ante id leo lacinia vestibulum.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '3. Mauris vel diam a dui consectetur vehicula.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '4. Pellentesque aliquam leo in justo blandit, quis efficitur nulla facilisis.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.', active: true },
        { q: '5. Ut volutpat justo sed lorem luctus semper.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' }
      ]
    },
    {
      id: 'winning',
      title: 'Winning',
      questions: [
        { q: '1. Cras vel dolor ut leo interdum dapibus.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '2. Quisque bibendum mi non rutrum mollis.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '3. Fusce mattis ipsum elementum ex fringilla lobortis.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '4. Duis vel nunc iaculis, aliquam odio id, vulputate massa.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.', active: true },
        { q: '5. Nunc porta risus nec massa luctus porta.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' }
      ]
    },
    {
      id: 'withdrawals',
      title: 'Withdrawals',
      questions: [
        { q: '1. Mauris dignissim ex at sapien iaculis pharetra.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '2. Nunc iaculis arcu nec quam volutpat, vel sodales nisi dapibus.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '3. Pellentesque quis odio eget orci ornare lobortis.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' },
        { q: '4. Fusce pellentesque elit non tortor facilisis auctor.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.', active: true },
        { q: '5. Curabitur lacinia quam eget tellus auctor tristique.', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt consequat lectus, a pharetra ante semper ac. Fusce non tempus quam. Aenean varius fringilla aliquam. Nam at lacus et diam vestibulum sagittis. Fusce eget luctus risus. Maecenas in dignissim massa.' }
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
                <h1 className="title">Frequently asked questions</h1>
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
                        {section.questions.map((q, index) => (
                          <div key={index} className={`tf-toggle ${q.active ? 'active' : ''}`}>
                            <div className={`toggle-title ${q.active ? 'active' : ''}`}>
                              <div className="title">{q.q}</div>
                              <div className="icon"></div>
                            </div>
                            <div className="toggle-content">
                              <p>{q.a}</p>
                            </div>
                          </div>
                        ))}
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
