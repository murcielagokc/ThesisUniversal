

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



