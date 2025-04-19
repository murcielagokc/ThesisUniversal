document.addEventListener('DOMContentLoaded', function() {
    const servicesSlider = new Swiper('.servicios-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2
      }
    });
    const universitiesSlider = new Swiper('.universidades-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2
      }
    });
    const testimonialsSlider = new Swiper('.testimonios-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      }
    });
  });