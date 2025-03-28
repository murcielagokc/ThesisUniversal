

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

  new Swiper('.card-wraper-Universidades', {
    
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
  new Swiper('.card-wraper-Referencias', {
    
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
            slidesPerView: 3
        },
        1024: { 
            slidesPerView: 4
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

document.body.addEventListener("click", function (e) {
    let trigger = e.target.closest("[data-toggle='modal-img']"); 
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
        const modal = this.closest(".modal-img");
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Restaurar scroll
        }
    });
});

// Cerrar el modal con el botón 'Cerrar'
document.querySelectorAll(".modal-close-btn").forEach(button => {
    button.addEventListener("click", function () {
        const modal = this.closest(".modal-img");
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = ""; // Restaurar scroll
        }
    });
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal-img")) {
        event.target.style.display = "none";
        document.body.style.overflow = ""; // Restaurar scroll
    }
});



// Manejo del scroll suave para los enlaces de navegación
const menuLinks = document.querySelectorAll(".nav-link, .nav-Sublink, .contactanos, .referencias, .btn-floating, .fut-nav"); 

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


document.addEventListener('DOMContentLoaded', function() {
    const menuOpenButton = document.getElementById('menu-open-button');
    const menuCloseButton = document.getElementById('menu-close-button');
    const navMenu = document.querySelector('.nav-menu');
    const universidadesLink = document.querySelector('a[href="#Universidades"]');
    const submenu = document.querySelector('.submenu');
    
    
    function checkScreenSize() {
      if (window.innerWidth <= 900) {
        
        submenu.style.display = 'none';
      } else {
        
        submenu.style.display = '';
      }
    }
    
    // Abrir menú hamburguesa
    menuOpenButton.addEventListener('click', function() {
      navMenu.classList.add('active');
      checkScreenSize();
    });
    
   
    menuCloseButton.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
    universidadesLink.addEventListener('click', function(e) {
      if (window.innerWidth <= 900) {
       
        e.preventDefault();
        submenu.style.display = 'none';
      } else {
        
        e.preventDefault();
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    }); 
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });



const universidades = {
    "Pontificia Universidad Católica del Perú": "PUCP",
    "Universidad Científica del Sur": "Ucsur",
    "Universidad Esan": "Esan",
    "Universidad Señor de Sipán": "Uss",
    "Universidad de Lima": "Ulima",
    "Universidad Peruana de Ciencias Aplicadas": "UPC",
    "Universidad Privada del Norte": "Upn",
    "Universidad César Vallejo": "Ucv",
    "Universidad de Ingeniería y Tecnología": "Utec",
    "Universidad Tecnológica del Perú": "Utp",
    "Universidad de Piura": "Upiura",
    "Universidad de San Martín de Porres": "Usmp",
    "Universidad Nacional Tecnológica de Lima Sur": "Untels",
    "Universidad Nacional Mayor de San Marcos": "UNMSM",
    "Universidad Nacional de Ingeniería": "UNI",
    "Universidad Nacional Agraria la Molina": "UNALM",
    "Universidad Nacional del Callao": "UNAC",
    "Universidad Nacional de Cajamarca": "UNC",
    "Universidad Nacional del Centro del Perú": "UNCP",
    "Universidad Nacional San Agustín de Arequipa": "UNSA",
    "Universidad Nacional de San Cristóbal de Huamanga": "UNSCH",
    "Universidad Nacional San Antonio Abad del Cusco": "UNSAAC",
    "Universidad Nacional Federico Villarreal": "UNFV",
    "Universidad Católica San Pablo": "UCSP"
};

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Elimina tildes
        
        .trim();
}
const universidadesArray = Object.entries(universidades).flatMap(([nombre, abreviatura]) => [
    { nombre: normalizarTexto(nombre), abreviatura, tipo: "nombre" },
    { nombre: normalizarTexto(abreviatura), abreviatura, tipo: "abreviatura" }
]);

// Función para buscar universidades por nombre completo o abreviatura
function buscarUniversidad(input) {
    const terminoBusqueda = input.toLowerCase().trim();
    const resultado = universidadesArray.find(uni => uni.nombre.includes(terminoBusqueda));

    return resultado ? resultado.abreviatura : "No se encontró la universidad";
}
// Función para mostrar sugerencias mientras el usuario escribe
function mostrarSugerencias() {
    const input = document.getElementById("buscadorUniversidad").value;
    const sugerenciasDiv = document.getElementById("sugerencias");

    sugerenciasDiv.innerHTML = ""; // Limpiar
    const inputNormalizado = normalizarTexto(input);

    if (inputNormalizado === "") {
        sugerenciasDiv.style.display = "none";
        return;
    }

    // Buscar coincidencias en nombre o abreviatura
    let coincidencias = Object.entries(universidades).map(([nombre, codigo]) => {
        const nombreNorm = normalizarTexto(nombre);
        const codigoNorm = normalizarTexto(codigo);

        let prioridad = 3;

        if (nombreNorm.startsWith(inputNormalizado) || codigoNorm.startsWith(inputNormalizado)) {
            prioridad = 1; // Alta prioridad si comienza con el término
        } else if (nombreNorm.includes(inputNormalizado) || codigoNorm.includes(inputNormalizado)) {
            prioridad = 2; // Prioridad media si lo contiene
        } else {
            return null; // Sin coincidencia
        }

        return { nombre, codigo, prioridad };
    }).filter(Boolean); // Quitar nulos

    // Ordenar por prioridad
    coincidencias.sort((a, b) => a.prioridad - b.prioridad);

    // Mostrar resultados
    if (coincidencias.length > 0) {
        coincidencias.forEach(uni => {
            const item = document.createElement("div");
            item.className = "list-group-item";
            item.textContent = uni.nombre;
            item.setAttribute("data-toggle", "modal");
            item.setAttribute("data-target", `#${uni.codigo}`);

            item.addEventListener("click", () => {
                document.getElementById("buscadorUniversidad").value = uni.nombre;
                sugerenciasDiv.style.display = "none";

                const modal = document.getElementById(uni.codigo);
                if (modal) {
                    modal.style.display = "flex";
                    document.body.style.overflow = "hidden";
                }
            });

            sugerenciasDiv.appendChild(item);
        });
    } else {
        const noResultados = document.createElement("div");
        noResultados.className = "list-group-item text-muted";
        noResultados.textContent = "No se encontraron resultados";
        sugerenciasDiv.appendChild(noResultados);
    }

    sugerenciasDiv.style.display = "block";
}

// Cerrar sugerencias al hacer clic fuera del buscador
document.addEventListener("click", function(event) {
    const buscador = document.getElementById("buscadorUniversidad");
    const sugerencias = document.getElementById("sugerencias");
    
    if (event.target !== buscador && event.target.closest("#sugerencias") === null) {
        sugerencias.style.display = "none";
    }
});

// Para pruebas: Mostrar todas las universidades al enfocar el campo vacío
document.getElementById("buscadorUniversidad").addEventListener("focus", function() {
    if (this.value.length === 0) {
        this.value = " "; // Espacio para activar la búsqueda
        mostrarSugerencias();
        this.value = ""; // Eliminar el espacio
    }
});

function enviarWhatsApp() {
    // Obtener valores del formulario
    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    // Limpiar mensajes de error anteriores
    document.getElementById("error-nombre").innerText = "";
    document.getElementById("error-telefono").innerText = "";
    document.getElementById("error-email").innerText = "";
    document.getElementById("error-mensaje").innerText = "";

    // Expresiones regulares para validaciones
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefonoRegex = /^[0-9]{9,15}$/;
    let nombreRegex = /^[a-zA-ZÀ-ÿ\s]{3,70}$/;

    let hasError = false; // Variable para saber si hay errores

    // Validar nombre
    if (!nombreRegex.test(nombre)) {
        document.getElementById("error-nombre").innerText = "⚠️ Ingresa un nombre válido (solo letras, mínimo 3 caracteres).";
        hasError = true;
    }

    // Validar teléfono
    if (!telefonoRegex.test(telefono)) {
        document.getElementById("error-telefono").innerText = "⚠️ Ingresa un número válido (solo números, mínimo 9 dígitos).";
        hasError = true;
    }

    // Validar correo
    if (!emailRegex.test(email)) {
        document.getElementById("error-email").innerText = "⚠️ Ingresa un correo electrónico válido.";
        hasError = true;
    }

    // Validar mensaje
    if (mensaje.length < 5) {
        document.getElementById("error-mensaje").innerText = "⚠️ El mensaje debe tener al menos 5 caracteres.";
        hasError = true;
    }

    // Si hay errores, no enviamos el formulario
    if (hasError) {
        return;
    }

    // Número de WhatsApp al que se enviará (incluye código de país, ej: +51 para Perú)
    let numeroWhatsApp = "937122927"; // Cambia esto por el número destino

    // Crear el mensaje con formato
    let textoMensaje = `Hola, me gustaría más información:%0A
Nombre: ${nombre}%0A
Teléfono: ${telefono}%0A
Correo: ${email}%0A
Mensaje: ${mensaje}%0A`;

    // Crear el enlace de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${textoMensaje}`;

    // Abrir WhatsApp Web con el mensaje prellenado
    window.open(url, "_blank");
     // 2. Enviar a FormSubmit con JS (sin recargar)
     const form = document.getElementById("contactForm");
     const formData = new FormData(form);
 
     fetch(form.action, {
         method: "POST",
         body: formData,
         headers: {
             'Accept': 'application/json'
         }
     })
     .then(response => {
         if (response.ok) {
             document.getElementById("successMessage").style.display = "block";
             form.reset();
         } else {
             alert("Error al enviar el formulario. Intente nuevamente.");
         }
     })
     .catch(() => alert("No se pudo enviar el formulario."));
}


