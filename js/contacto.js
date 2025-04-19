document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const whatsappButton = document.getElementById('whatsappButton');
    const emailButton = document.getElementById('emailButton');
    const validationConfig = {
        name: {
            pattern: /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]{3,50}$/,
            errorMessage: 'Ingrese un nombre válido (3-50 caracteres)'
        },
        email: {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            errorMessage: 'Ingrese un correo electrónico válido'
        },
        phone: {
            pattern: /^(9\d{8}|[2-8]\d{6})$/,
            errorMessage: 'Ingrese un número de teléfono válido (9 dígitos)'
        },
        message: {
            minLength: 10,
            maxLength: 500,
            errorMessage: 'El mensaje debe tener entre 10 y 500 caracteres'
        }
    };
    function validateField(field) {
        const fieldName = field.id;
        const errorElement = document.getElementById(`${fieldName}-error`);
        const config = validationConfig[fieldName];
        let isValid = true;
        if (config.pattern) {
            isValid = config.pattern.test(field.value.trim());
        } else {
            const length = field.value.trim().length;
            isValid = length >= config.minLength && length <= config.maxLength;
        }
        if (!isValid) {
            field.parentElement.classList.add('error');
            errorElement.textContent = config.errorMessage;
        } else {
            field.parentElement.classList.remove('error');
            errorElement.textContent = '';
        }

        return isValid;
    }

    function validateForm() {
        let isFormValid = true;
        Object.keys(validationConfig).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (!validateField(field)) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }

    function sendEmail(button) {
        event.preventDefault();
        if (!validateForm()) return;
        const formData = new FormData(form);
        button.classList.add('submitting');
        button.innerHTML = '<i class="fas fa-spinner"></i> Enviando...';
        fetch('https://formsubmit.co/ajax/thesis.universall@gmail.com', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                button.innerHTML = '<i class="fas fa-check"></i> Enviado';
                form.reset();
                alert('¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto pronto.');
                setTimeout(() => {
                    button.classList.remove('submitting');
                    button.innerHTML = '<i class="fas fa-envelope"></i> Enviar por Correo';
                }, 2000);
            })
            .catch(error => {
                console.error('Error:', error);
                button.classList.remove('submitting');
                button.innerHTML = '<i class="fas fa-envelope"></i> Enviar por Correo';
                alert('Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.');
            });
    }

    function sendWhatsApp(button) {
        if (!validateForm()) return;
        const formData = Object.fromEntries(new FormData(form));
        const whatsappMessage = `Hola, mi nombre es ${formData.name}. 
Mi correo es ${formData.email} y mi teléfono ${formData.phone}. 
Mensaje: ${formData.message}`;
        const whatsappLink = `https://wa.me/902421502?text=${encodeURIComponent(whatsappMessage)}`;
        button.classList.add('submitting');
        button.innerHTML = '<i class="fas fa-spinner"></i> Abriendo WhatsApp...';

        setTimeout(() => {
            window.open(whatsappLink, '_blank');
            button.classList.remove('submitting');
            button.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar por WhatsApp';
        }, 1000);
    }

    emailButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        sendEmail(emailButton);
    });

    whatsappButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        sendWhatsApp(whatsappButton);
    });
});