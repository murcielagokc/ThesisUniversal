

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Función para cerrar el menú móvil al hacer clic en un enlace
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (document.body.classList.contains("show-mobile-menu")) {
            document.body.classList.remove("show-mobile-menu");
        }
    });
});

// Cerrar submenús al hacer clic fuera de ellos
document.addEventListener("click", function(event) {
    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach(submenu => {
        if (!submenu.contains(event.target) && 
            !event.target.classList.contains("nav-link")) {
            submenu.style.display = "none";
        }
    });
});

// Reactivar submenús después de cerrarlos
const menuItems = document.querySelectorAll(".nav-item");
menuItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
        const submenu = this.querySelector(".submenu");
        if (submenu) {
            submenu.style.display = "block";
        }
    });
    
    item.addEventListener("mouseleave", function() {
        const submenu = this.querySelector(".submenu");
        if (submenu) {
            submenu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".nav-link"); // Selecciona los enlaces del menú

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            const targetId = this.getAttribute("href").substring(1); // Obtiene el ID del destino
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Ajusta el desplazamiento para evitar que quede oculto
                    behavior: "smooth"
                });
            }
        });
    });
});

document.querySelectorAll(".modal").forEach(modal => {
    modal.style.display = "none";
});
new Swiper('.card-wraper-Servicios', {
    
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { 
            slidesPerView: 1
        },
        768: { 
            slidesPerView: 2
        },
        1024: { 
            slidesPerView: 3
        },
    }
  });


  document.body.addEventListener("click", function (e) {
    let trigger = e.target.closest("[data-toggle='modal']"); 
    if (!trigger) return;

    const modalId = trigger.getAttribute("data-target"); 
    const modal = document.querySelector(modalId); 

    if (modal) {
        modal.style.display = "flex";
    }
});

// Cerrar el modal con botones
document.querySelectorAll(".close-button").forEach(button => {
    button.addEventListener("click", function () {
        const modal = this.closest(".modal");
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Restaurar scroll
        }
    });
});

// Cerrar el modal con el botón 'Cerrar'
document.querySelectorAll(".modal-close-btn").forEach(button => {
    button.addEventListener("click", function () {
        const modal = this.closest(".modal");
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Restaurar scroll
        }
    });
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        document.body.style.overflow = ""; // Restaurar scroll
    }
});

// Manejo del scroll suave para los enlaces de navegación
const menuLinks = document.querySelectorAll(".nav-link"); 
menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        // Solo prevenir comportamiento si es un enlace interno
        if (targetId && targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        }
    });
});