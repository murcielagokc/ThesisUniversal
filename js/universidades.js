
document.addEventListener('DOMContentLoaded', function() {
    inicializarSliderUniversidades();

    configurarTabsUniversidades();

    configurarBusquedaUniversidades();

    
    configurarModalesUniversidades();

    console.log('Sección de universidades inicializada correctamente');
});


function inicializarSliderUniversidades() {
    const swiperElements = document.querySelectorAll('.card-wraper-Universidades');
    
    if (swiperElements.length > 0 && window.Swiper) {
        swiperElements.forEach(element => {
            new Swiper(element, {
                loop: true,
                spaceBetween: 30,
                centeredSlides: true,
                pagination: {
                    el: element.querySelector('.swiper-pagination'),
                    clickable: true
                },
                navigation: {
                    nextEl: element.querySelector('.swiper-button-next'),
                    prevEl: element.querySelector('.swiper-button-prev')
                },
                breakpoints: {
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });
        console.log('Sliders de universidades inicializados');
    }
}


function configurarTabsUniversidades() {
    const tabButtons = document.querySelectorAll('.university-tabs .tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length === 0) return;
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.add('active');
                
                const swiper = targetContent.querySelector('.swiper');
                if (swiper && swiper.swiper) {
                    swiper.swiper.update();
                }
            }
        });
    });
    
    console.log('Tabs de universidades configurados');
}



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
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
        
        .trim();
}
const universidadesArray = Object.entries(universidades).flatMap(([nombre, abreviatura]) => [
    { nombre: normalizarTexto(nombre), abreviatura, tipo: "nombre" },
    { nombre: normalizarTexto(abreviatura), abreviatura, tipo: "abreviatura" }
]);

function buscarUniversidad(input) {
    const terminoBusqueda = input.toLowerCase().trim();
    const resultado = universidadesArray.find(uni => uni.nombre.includes(terminoBusqueda));

    return resultado ? resultado.abreviatura : "No se encontró la universidad";
}
function mostrarSugerencias() {
    const input = document.getElementById("buscadorUniversidad").value;
    const sugerenciasDiv = document.getElementById("sugerencias");

    sugerenciasDiv.innerHTML = ""; 
    const inputNormalizado = normalizarTexto(input);

    if (inputNormalizado === "") {
        sugerenciasDiv.style.display = "none";
        return;
    }

    let coincidencias = Object.entries(universidades).map(([nombre, codigo]) => {
        const nombreNorm = normalizarTexto(nombre);
        const codigoNorm = normalizarTexto(codigo);

        let prioridad = 3;

        if (nombreNorm.startsWith(inputNormalizado) || codigoNorm.startsWith(inputNormalizado)) {
            prioridad = 1; 
        } else if (nombreNorm.includes(inputNormalizado) || codigoNorm.includes(inputNormalizado)) {
            prioridad = 2; 
        } else {
            return null; 
        }

        return { nombre, codigo, prioridad };
    }).filter(Boolean); 

    coincidencias.sort((a, b) => a.prioridad - b.prioridad);

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

document.addEventListener("click", function(event) {
    const buscador = document.getElementById("buscadorUniversidad");
    const sugerencias = document.getElementById("sugerencias");
    
    if (event.target !== buscador && event.target.closest("#sugerencias") === null) {
        sugerencias.style.display = "none";
    }
});

document.getElementById("buscadorUniversidad").addEventListener("focus", function() {
    if (this.value.length === 0) {
        this.value = " "; 
        mostrarSugerencias();
        this.value = ""; 
    }
});
