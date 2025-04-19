
document.addEventListener('DOMContentLoaded', function() {
    function animateHero() {
      const heroText = document.querySelector('.hero-text');
      const heroImage = document.querySelector('.hero-image');
      const floatingCard = document.querySelector('.floating-card');
      
      if (heroText) heroText.classList.add('animate-left');
      if (heroImage) heroImage.classList.add('animate-right');
      if (floatingCard) {
        setTimeout(() => {
          floatingCard.classList.add('animate-bounce');
        }, 500);
      }
    }
    
    function setupScrollAnimations() {
      const animationItems = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target); 
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      animationItems.forEach(item => {
        observer.observe(item);
      });
    }
    
    function setupElements() {
      const aboutTitle = document.querySelector('#nosotros .section-title');
      const aboutText = document.querySelector('.about-description');
      const aboutImage = document.querySelector('.about-image-wrapper');
      const statCards = document.querySelectorAll('.stat-card');
      
      if (aboutTitle) aboutTitle.classList.add('animate-on-scroll');
      if (aboutText) aboutText.classList.add('animate-on-scroll');
      if (aboutImage) aboutImage.classList.add('animate-on-scroll');
      
      statCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.1}s`;
      });
    }
    
    animateHero();
    setupElements();
    setupScrollAnimations();
  });