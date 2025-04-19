
document.addEventListener('DOMContentLoaded', function() {
    initServicesTabs();
    initServiceModals();
    animateServicesOnScroll();
  });
  
  function initServicesTabs() {
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceCategories = document.querySelectorAll('.service-category');
    
    if (!serviceTabs.length) return;
    function changeCategory(categoryId) {
      serviceCategories.forEach(category => {
        category.classList.remove('active');
      });
      
      serviceTabs.forEach(tab => {
        tab.classList.remove('active');
      });
      
      const categoryElement = document.getElementById(`category-${categoryId}`);
      const tabElement = document.querySelector(`.service-tab[data-category="${categoryId}"]`);
      
      if (categoryElement) categoryElement.classList.add('active');
      if (tabElement) tabElement.classList.add('active');
      const activeCards = document.querySelectorAll(`#category-${categoryId} .service-card`);
      activeCards.forEach((card, index) => {
        card.classList.add('animate-slideInUp');
        card.style.animationDelay = `${0.1 + (index * 0.1)}s`;
        
        setTimeout(() => {
          card.classList.remove('animate-slideInUp');
          card.style.animationDelay = '';
        }, 1000);
      });
    }
    serviceTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        changeCategory(category);
      });
    });
    
    const firstTab = serviceTabs[0];
    if (firstTab) {
      const firstCategory = firstTab.getAttribute('data-category');
      changeCategory(firstCategory);
    }
  }
  
  function initServiceModals() {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceModals = document.querySelectorAll('.service-modal');
    const closeButtons = document.querySelectorAll('.service-modal .close-button, .service-modal .modal-close-btn');
    
    if (!serviceCards.length) return;
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      
      document.body.style.overflow = 'hidden'; 
      modal.classList.add('active');
      function closeOnEscape(e) {
        if (e.key === 'Escape') {
          closeModal(modal);
          document.removeEventListener('keydown', closeOnEscape);
        }
      }
      
      function closeOnOutsideClick(e) {
        if (e.target === modal) {
          closeModal(modal);
          modal.removeEventListener('click', closeOnOutsideClick);
        }
      }
      
      document.addEventListener('keydown', closeOnEscape);
      modal.addEventListener('click', closeOnOutsideClick);
    }
    
    function closeModal(modal) {
      if (!modal) return;
      
      modal.classList.remove('active');
      document.body.style.overflow = ''; 
    }
    
    serviceCards.forEach(card => {
      card.addEventListener('click', function(e) {
        if (e.target.closest('.btn-whatsapp')) {
          return;
        }
        
        const modalId = this.getAttribute('data-modal');
        if (modalId) {
          openModal(modalId);
        }
      });
      const moreButton = card.querySelector('.btn-more');
      if (moreButton) {
        moreButton.addEventListener('click', function(e) {
          e.stopPropagation(); 
          
          const modalId = card.getAttribute('data-modal');
          if (modalId) {
            openModal(modalId);
          }
        });
      }
    });
    
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.service-modal');
        closeModal(modal);
      });
    });
    
    initExistingModals();
  }
 
  function initExistingModals() {
    const oldModalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    const oldModals = document.querySelectorAll('.modal');
    const oldCloseButtons = document.querySelectorAll('.modal .close-button, .modal .modal-close-btn');
    
    oldModalTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        const modalId = this.getAttribute('data-target');
        const modal = document.querySelector(modalId);
        
        if (modal) {
          document.body.style.overflow = 'hidden';
          modal.style.display = 'block';
          setTimeout(() => {
            modal.style.opacity = '1';
          }, 10);
        }
      });
    });
    
    oldCloseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
          modal.style.opacity = '0';
          setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
          }, 300);
        }
      });
    });
    
    oldModals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          modal.style.opacity = '0';
          setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
          }, 300);
        }
      });
    });
  }
  
  
  function animateServicesOnScroll() {
    if (!('IntersectionObserver' in window)) return;
    
    const elementsToAnimate = document.querySelectorAll('.servicios-section .section-title, .servicios-section .section-subtitle, .service-card, .service-tabs');
    
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          animationObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elementsToAnimate.forEach(element => {
      animationObserver.observe(element);
    });
  }
  
  if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

function corregirModalesUniversidades() {
    const botonesModalUniversidad = document.querySelectorAll('.modal .close-button, .modal .modal-close-btn');
    
    botonesModalUniversidad.forEach(boton => {
      const nuevoBoton = boton.cloneNode(true);
      boton.parentNode.replaceChild(nuevoBoton, boton);
      
      nuevoBoton.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
          document.body.style.overflow = ''; 
          console.log('Modal cerrado correctamente');
        }
      });
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = ''; 
      }
    });
    
    console.log('Controladores de modales de universidades corregidos');
  }
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(corregirModalesUniversidades, 500);
  });
document.addEventListener('DOMContentLoaded', function() {
    configurarModalesUniversidades();
});


function configurarModalesUniversidades() {
    const universidadCards = document.querySelectorAll('.card-link-Universidades');
    
    universidadCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.whatsapp-btn')) return;
            
            const modalId = this.getAttribute('data-target').substring(1); 
            const modal = document.getElementById(modalId);
            
            if (modal) {
                abrirModal(modal);
            }
        });
        
        // Configurar botón "Ver cursos" si existe
        const verCursosBtn = card.querySelector('.university-more-btn');
        if (verCursosBtn) {
            verCursosBtn.addEventListener('click', function(e) {
                e.stopPropagation(); 
                
                const modalId = card.getAttribute('data-target').substring(1); 
                const modal = document.getElementById(modalId);
                
                if (modal) {
                    abrirModal(modal);
                }
            });
        }
    });
    const modales = document.querySelectorAll('.university-modal');
    
    modales.forEach(modal => {
        const closeButtons = modal.querySelectorAll('.close-button, .modal-close, .modal-close-btn');
        
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                cerrarModal(modal);
            });
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarModal(modal);
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modalAbierto = document.querySelector('.university-modal[style*="display: flex"]');
            if (modalAbierto) {
                cerrarModal(modalAbierto);
            }
        }
    });
    
    console.log('Modales de universidades configurados');
}
function abrirModal(modal) {
    document.body.style.overflow = 'hidden';
    modal.style.display = 'flex';
    
    console.log('Modal abierto:', modal.id);
}
function cerrarModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    console.log('Modal cerrado:', modal.id);
}
function resaltarUniversidad(id) {
    const universidadCard = document.querySelector(`[data-target="#${id}"]`);
    
    if (!universidadCard) return;
    universidadCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    universidadCard.classList.add('universidad-resaltada');
    setTimeout(() => {
        universidadCard.classList.remove('universidad-resaltada');
    }, 2000);
}
document.addEventListener('DOMContentLoaded', function() {
    inicializarSwiper();
    configurarModales();
});

function inicializarSwiper() {
    const referenciaSlider = document.querySelector('.referencias-slider');
    
    if (referenciaSlider && typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.referencias-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            
            navigation: {
                nextEl: '.referencias-slider .swiper-button-next',
                prevEl: '.referencias-slider .swiper-button-prev',
            },
            
            pagination: {
                el: '.referencias-slider .swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            },
            
            a11y: {
                prevSlideMessage: 'Testimonio anterior',
                nextSlideMessage: 'Testimonio siguiente',
                firstSlideMessage: 'Este es el primer testimonio',
                lastSlideMessage: 'Este es el último testimonio',
                paginationBulletMessage: 'Ir al testimonio {{index}}'
            }
        });
        
        console.log('Swiper de Referencias inicializado correctamente');
        
        referenciaSlider.addEventListener('mouseenter', function() {
            swiper.autoplay.stop();
        });
        
        referenciaSlider.addEventListener('mouseleave', function() {
            swiper.autoplay.start();
        });
    } else {
        console.warn('No se pudo inicializar el Swiper de Referencias');
    }
}

function configurarModales() {
    const testimonioCards = document.querySelectorAll('.testimonio-card');
    
    testimonioCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.querySelector('.testimonio-img').src;
            mostrarImagenModal(imgSrc);
        });
    });
}


function mostrarImagenModal(imgSrc) {
    const modal = document.createElement('div');
    modal.className = 'testimonio-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'testimonio-modal-content';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'testimonio-modal-close';
    closeBtn.innerHTML = '&times;';
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Testimonio de cliente';
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    closeBtn.addEventListener('click', cerrarModal);
    modal.addEventListener('click', function(e) {
        if (e.target === this) cerrarModal();
    });
    
    const cerrarConEscape = function(e) {
        if (e.key === 'Escape') {
            cerrarModal();
            document.removeEventListener('keydown', cerrarConEscape);
        }
    };
    
    document.addEventListener('keydown', cerrarConEscape);
    
    function cerrarModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }, 300);
    }
}

function agregarEstilosModal() {
    if (!document.getElementById('testimonio-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'testimonio-modal-styles';
        style.textContent = `
            .testimonio-modal {
                position: fixed;
                z-index: 1100;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .testimonio-modal-content {
                max-width: 90%;
                max-height: 90vh;
                position: relative;
                animation: zoom 0.4s ease;
            }
            
            @keyframes zoom {
                from {transform: scale(0.8); opacity: 0;}
                to {transform: scale(1); opacity: 1;}
            }
            
            .testimonio-modal-content img {
                max-width: 100%;
                max-height: 90vh;
                display: block;
                object-fit: contain;
            }
            
            .testimonio-modal-close {
                position: absolute;
                top: -40px;
                right: -40px;
                color: white;
                font-size: 35px;
                font-weight: bold;
                cursor: pointer;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .testimonio-modal-close:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(90deg);
            }
            
            @media (max-width: 768px) {
                .testimonio-modal-close {
                    top: -30px;
                    right: -10px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

document.addEventListener('DOMContentLoaded', agregarEstilosModal);