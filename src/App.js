import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import all CSS files first
import './styles/animate.min.css';
import './styles/animation.css';
import './styles/textanimation.css';
import './styles/bootstrap.css';
import './styles/bootstrap-select.min.css';
import './styles/magnific-popup.min.css';
import './styles/swiper-bundle.min.css';
import './styles/styles.css';
import './styles/custom-casino.css';
import './styles/mobile-casino-dark-theme.css';
import './styles/on-chain-redesign.css';
import './styles/new-mobile-menu.css';
import './styles/professional-lottery-card.css';
import './assets/font/fonts.css';
import './assets/icon/icomoon/style.css';
import './styles/premium-redesign.css';

// Critical components - load immediately
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const NewHome = lazy(() => import('./pages/NewHome'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Affiliate = lazy(() => import('./pages/Affiliate'));
const WinnerList = lazy(() => import('./pages/WinnerList'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const TopCasinos = lazy(() => import('./pages/TopCasinos'));
const CasinoReview = lazy(() => import('./pages/CasinoReview'));
const BonusesPage = lazy(() => import('./pages/BonusesPage'));
const ResponsibleGaming = lazy(() => import('./pages/ResponsibleGaming'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const BitcoinLotteries = lazy(() => import('./pages/BitcoinLotteries'));
const FirstBTCReview = lazy(() => import('./pages/FirstBTCReview'));
const TraditionalLottery = lazy(() => import('./pages/TraditionalLottery'));
const AdminLogin = lazy(() => import('./admin/AdminLogin'));
const AdminPanel = lazy(() => import('./admin/AdminPanel'));
const AdminRoute = lazy(() => import('./admin/AdminRoute'));

function App() {
  useEffect(() => {
    // Critical scripts - load immediately (jQuery is needed for many plugins)
    const criticalScripts = [
      '/js/jquery.min.js'
    ];

    // Non-critical scripts - defer loading until after initial render
    const deferredScripts = [
      '/js/bootstrap.min.js',
      '/js/bootstrap-select.min.js',
      '/js/lazysize.min.js',
      '/js/textanimation.js',
      '/js/count-down.js',
      '/js/countto.js',
      '/js/magnific-popup.min.js',
      '/js/swiper-bundle.min.js',
      '/js/swiper.js',
      '/js/wow.min.js',
      '/js/jquery.nice-select.min.js',
      '/js/main.js'
    ];

    const loadScript = (src, defer = false) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.defer = defer;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load critical scripts immediately
    const loadCriticalScripts = async () => {
      for (const src of criticalScripts) {
        try {
          await loadScript(src);
        } catch (error) {
          console.error(`Failed to load critical script: ${src}`, error);
        }
      }
    };

    // Load deferred scripts after page is interactive
    const loadDeferredScripts = () => {
      // Use requestIdleCallback for better performance, fallback to setTimeout
      const loadWhenIdle = (callback) => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(callback, { timeout: 2000 });
        } else {
          setTimeout(callback, 100);
        }
      };

      const loadScripts = () => {
        deferredScripts.forEach(src => {
          loadScript(src, true).catch(error => {
            console.error(`Failed to load deferred script: ${src}`, error);
          });
        });
      };

      if (document.readyState === 'complete') {
        loadWhenIdle(loadScripts);
      } else {
        window.addEventListener('load', () => {
          loadWhenIdle(loadScripts);
        });
      }
    };

    loadCriticalScripts();
    loadDeferredScripts();

    // Add body class
    document.body.classList.add('body', 'counter-scroll');

    return () => {
      // Cleanup
      document.body.classList.remove('body', 'counter-scroll');
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div id="wrapper">
          <Preloader />
          {!window.location.pathname.startsWith('/admin') && !window.location.pathname.startsWith('/secretdoor') && <Header />}
          <Suspense fallback={
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
              background: 'linear-gradient(180deg, #0a0118 0%, #1a0f2e 100%)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '3px solid rgba(255,107,53,0.3)',
                borderTop: '3px solid #FF6B35',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}></div>
            </div>
          }>
            <Routes>
              {/* Admin Routes (hidden) */}
              <Route path="/secretdoor/login" element={<AdminLogin />} />
              <Route path="/secretdoor/*" element={<AdminRoute><AdminPanel /></AdminRoute>} />

              {/* New Crypto Lottery Comparison Site Routes */}
              <Route path="/" element={<NewHome />} />
              <Route path="/top-casinos" element={<TopCasinos />} />
              <Route path="/casino/:id" element={<CasinoReview />} />
              <Route path="/bonuses" element={<BonusesPage />} />
              <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/bitcoin-lotteries" element={<BitcoinLotteries />} />
              <Route path="/traditional-online-lottery" element={<TraditionalLottery />} />


              {/* Keep existing routes */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/firstbtclottery" element={<FirstBTCReview />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/winner-list" element={<WinnerList />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />

              {/* Old home for reference */}
              <Route path="/old-home" element={<Home />} />
            </Routes>
          </Suspense>
          {!window.location.pathname.startsWith('/admin') && !window.location.pathname.startsWith('/secretdoor') && <Footer />}
          <ScrollProgress />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
