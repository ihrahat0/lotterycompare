
var sliderinit = function() {

    // basic options for all sliders
    let defaults = {
        spaceBetween: 0,
        slidesPerView: 1
    };
    // call init function
    initSwipers(defaults);
    function initSwipers(defaults = {}, selector = ".swiper-container") {
    let swipers = document.querySelectorAll(selector);
    swipers.forEach((swiper) => {
        // get options
        let optionsData = swiper.dataset.swiper
        ? JSON.parse(swiper.dataset.swiper)
        : {};
        // combine defaults and custom options
        let options = {
        ...defaults,
        ...optionsData
        };
        // init
        new Swiper(swiper, options);
    });
    }
}
sliderinit();

if ($(".shop-item-swiper").length > 0) {
    var swiper = new Swiper('.shop-item-swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      
      navigation: {
        nextEl: ".slider-perview-3-next",
        prevEl: ".slider-perview-3-prev",
      },
      pagination: {
        el: ".testimonials-pagination",
        clickable: true,
      },
      breakpoints: {
        300:{
          slidesPerView: 1.2,
        },
        400:{
          slidesPerView: 2.2,
        },
        767: {
          slidesPerView: 2.2,
        },
        991: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  }