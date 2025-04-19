
document.addEventListener('DOMContentLoaded', function() {
    inicializarSliderReferencias();
    configurarModalesImagenes();
    animarElementosReferencias();
});
function inicializarSliderReferencias() {
    const referenciasSwipers = document.querySelectorAll('.Referencias-section .container-Referencias');
    
    if (referenciasSwipers.length > 0 && window.Swiper) {
        referenciasSwipers.forEach(swiperContainer => {
            new Swiper(swiperContainer, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                centeredSlides: false,
                grabCursor: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: swiperContainer.querySelector('.swiper-pagination'),
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    nextEl: swiperContainer.querySelector('.swiper-button-next'),
                    prevEl: swiperContainer.querySelector('.swiper-button-prev'),
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    }
                }
            });
        });
        
        console.log('Slider de referencias inicializado');
    }
}
function configurarModalesImagenes() {
    const referenciaItems = document.querySelectorAll('.card-item-Referencias');
    
    referenciaItems.forEach(item => {
        item.addEventListener('click', function() {
            const modalId = this.getAttribute('data-target');
            const modal = document.querySelector(modalId);
            
            if (modal) {
                abrirModalImagen(modal);
            }
        });
    });
    
    const closeButtons = document.querySelectorAll('.modal-img .close-button');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-img');
            cerrarModalImagen(modal);
        });
    });
    
    const modalesImagen = document.querySelectorAll('.modal-img');
    
    modalesImagen.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarModalImagen(this);
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modalAbierto = document.querySelector('.modal-img[style*="display: flex"]');
            if (modalAbierto) {
                cerrarModalImagen(modalAbierto);
            }
        }
    });
    
    console.log('Modales de imágenes configurados');
}

function abrirModalImagen(modal) {
    document.body.style.overflow = 'hidden'; 
    modal.style.display = 'flex';
    
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function cerrarModalImagen(modal) {
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; 
    }, 300);
}

function animarElementosReferencias() {
    if (!('IntersectionObserver' in window)) return;
    
    const elementsToAnimate = document.querySelectorAll('.Referencias-section .section-title, .Referencias-section .section-subtitle, .testimonial-counter .counter-item, .referencias-download-btn');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
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
    
    animarContadores();
}
function animarContadores() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; 
    
    counters.forEach(counter => {
        const animate = () => {
            const target = parseInt(counter.innerText);
            if (isNaN(target)) return; 
            
            let count = 0;
            
            const inc = target / speed;
            
            const updateCount = () => {
                if (count < target) {
                    count += inc;
                    
                    counter.innerText = Math.ceil(count);
                    
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                    
                    if (counter.innerText.includes('+')) {
                        counter.innerText = target;
                    } else if (counter.dataset.suffix === '+') {
                        counter.innerText = target + '+';
                    }
                }
            };
            updateCount();
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterObserver.observe(counter);
    });
}

function habilitarNavegacionModal() {
    document.addEventListener('keydown', function(e) {
        const modalAbierto = document.querySelector('.modal-img[style*="display: flex"]');
        if (!modalAbierto) return;
        
        const modalId = modalAbierto.id;
        const currentIndex = parseInt(modalId.replace('Img', ''));
        const totalImages = document.querySelectorAll('.card-item-Referencias').length;
        
        if (e.key === 'ArrowRight') {
            let nextIndex = currentIndex + 1;
            if (nextIndex > totalImages) nextIndex = 1; 
            
            cerrarModalImagen(modalAbierto);
            const nextModal = document.getElementById(`Img${nextIndex}`);
            if (nextModal) setTimeout(() => abrirModalImagen(nextModal), 300);
        }
        
        else if (e.key === 'ArrowLeft') {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 1) prevIndex = totalImages; 
            
            cerrarModalImagen(modalAbierto);
            const prevModal = document.getElementById(`Img${prevIndex}`);
            if (prevModal) setTimeout(() => abrirModalImagen(prevModal), 300);
        }
    });
}

document.addEventListener('DOMContentLoaded', habilitarNavegacionModal);