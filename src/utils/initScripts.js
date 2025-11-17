// Utility functions to initialize various plugins and animations

export const initAccordion = () => {
    const accordions = document.querySelectorAll('.tf-toggle1');
    accordions.forEach(accordion => {
        const title = accordion.querySelector('.toggle-title');
        if (title) {
            title.addEventListener('click', () => {
                // Close all other accordions
                accordions.forEach(item => {
                    if (item !== accordion) {
                        item.classList.remove('active');
                        const itemTitle = item.querySelector('.toggle-title');
                        if (itemTitle) itemTitle.classList.remove('active');
                    }
                });
                // Toggle current accordion
                accordion.classList.toggle('active');
                title.classList.toggle('active');
            });
        }
    });
};

export const initNiceSelect = () => {
    if (window.$ && window.$.fn.niceSelect) {
        window.$('.nice-select').niceSelect();
    }
};

export const initCountdown = () => {
    const countdownElements = document.querySelectorAll('.js-countdown');
    countdownElements.forEach(element => {
        const timer = element.getAttribute('data-timer');
        if (timer && window.countdown) {
            window.countdown(element, timer);
        }
    });
};

export const initCounters = () => {
    if (window.$ && window.countTo) {
        window.$('.number').each(function() {
            window.$(this).countTo({
                speed: window.$(this).data('speed'),
                refreshInterval: 50
            });
        });
    }
};

export const initSwiper = () => {
    if (window.Swiper) {
        const swiperContainers = document.querySelectorAll('[data-swiper]');
        swiperContainers.forEach(container => {
            try {
                const config = JSON.parse(container.getAttribute('data-swiper'));
                new window.Swiper(container, config);
            } catch (error) {
                console.error('Error initializing Swiper:', error);
            }
        });
    }
};

export const initMagnificPopup = () => {
    if (window.$ && window.$.fn.magnificPopup) {
        window.$('.popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
};

export const initWOW = () => {
    if (window.WOW) {
        new window.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();
    }
};

export const initAllPlugins = () => {
    // Wait for all scripts to load
    setTimeout(() => {
        initWOW();
        initNiceSelect();
        initCountdown();
        initCounters();
        initSwiper();
        initMagnificPopup();
        initAccordion();
    }, 500);
};

