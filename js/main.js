(function() {
  'use strict';
  const modules = [
  ];
  function initApp() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.body.classList.add('is-mobile-device');
    }
    setupLazyLoading();
    setupScrollAnimations();
  }
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }
  function setupScrollAnimations() {
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  function animateStats() {
    const statItems = document.querySelectorAll('.stat-number');
    const options = {
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const value = element.textContent;
          if (value.endsWith('+')) {
            const numValue = parseInt(value.replace('+', ''));
            animateNumber(element, 0, numValue, 2000, '+');
          } 
          else if (value.includes('.')) {
            const numValue = parseFloat(value);
            animateNumber(element, 0, numValue, 2000, '', 1);
          }
          else {
            const numValue = parseInt(value);
            animateNumber(element, 0, numValue, 2000);
          }
          observer.unobserve(element);
        }
      });
    }, options);
    
    statItems.forEach(item => {
      observer.observe(item);
    });
  }
  
  function animateNumber(element, start, end, duration, suffix = '', decimals = 0) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = progress * (end - start) + start;
      
      element.textContent = currentValue.toFixed(decimals) + suffix;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  animateStats();

  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        this.classList.add('active');
        const target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
      });
    });
  }
  if (document.querySelector('.universities-tabs')) {
    initTabs();
  }
});
new Swiper('.card-wraper-Referencias', {
    
  loop: true,
  spaceBetween: 30,
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
      0: { 
          slidesPerView: 1
      },
      768: { 
          slidesPerView: 3
      },
      1024: { 
          slidesPerView: 4
      },
  }
});


