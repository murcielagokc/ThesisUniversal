document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.site-header');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    
    let lastScrollTop = 0;
    let isMobile = window.innerWidth <= 992;
    
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
    
    function openMenu() {
      navMenu.classList.add('active');
      menuOverlay.classList.add('active');
      document.body.classList.add('menu-open');
    }
    
    function closeMenu() {
      navMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
      hasSubmenuItems.forEach(item => item.classList.remove('submenu-open'));
    }
    
    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    document.addEventListener('click', function(e) {
      const isNavLink = e.target.closest('.nav-link, .submenu-link');
      
      if (isNavLink && isMobile) {
        if (!e.target.parentElement.classList.contains('has-submenu') || e.target.closest('.submenu')) {
          closeMenu();
        }
      }
    });
    
    hasSubmenuItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      
      link.addEventListener('click', function(e) {
        if (isMobile) {
          e.preventDefault();
          this.parentElement.classList.toggle('submenu-open');
          
          hasSubmenuItems.forEach(otherItem => {
            if (otherItem !== this.parentElement) {
              otherItem.classList.remove('submenu-open');
            }
          });
        }
      });
    });
    
    window.addEventListener('scroll', function() {
      if (navMenu.classList.contains('active')) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        if (scrollTop > lastScrollTop) {
          header.classList.add('header-hidden');
        } 
        else {
          header.classList.remove('header-hidden');
        }
      }
      
      lastScrollTop = scrollTop;
    });
    
    window.addEventListener('resize', function() {
      const wasDesktop = !isMobile;
      isMobile = window.innerWidth <= 992;
      
      if (wasDesktop !== !isMobile) {
        closeMenu();
      }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId !== '#' && !this.parentElement.classList.contains('has-submenu')) {
          e.preventDefault();
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + 
                                  window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });