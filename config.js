/**
 * Configuración centralizada del sitio
 * Punto Chikitsa Yoga - Augusto García
 *
 * IMPORTANTE: Si necesitás cambiar datos de contacto, redes sociales o información del sitio,
 * solo modificá este archivo. Los cambios se aplicarán automáticamente en todo el sitio.
 */

const CONFIG = {
    // Información del sitio
    siteName: "Punto Chikitsa Yoga",
    tagline: "Yoga como práctica, no como pose.",
    professorName: "Augusto García",
    professorTitle: "Profesor de Ashtanga Yoga",

    // Contacto
    whatsapp: {
        number: "+5493513081174",
        displayNumber: "+54 9 351 308 1174",
        // Mensajes predeterminados
        messages: {
            default: "Hola Augusto, quiero consultar por clases de Ashtanga a domicilio.",
            services: "Hola Augusto, quiero consultar sobre el método de trabajo y empezar a practicar.",
            one2one: "Hola Augusto, me interesa la clase 1 a 1 a domicilio. Estoy en [ZONA].",
            group: "Hola Augusto, me interesa la clase grupal a domicilio. Somos [CANT] personas y estamos en [ZONA].",
            company: "Hola Augusto, me interesa una propuesta in-company para nuestra empresa.",
            zone: "Hola Augusto, estoy en [ZONA] y quiero consultar si das clases en mi barrio.",
            doubts: "Hola Augusto, tengo dudas sobre los servicios. ¿Podemos hablar?"
        }
    },

    email: "augustogarufa@gmail.com",

    instagram: {
        url: "https://www.instagram.com/augustogarufa/",
        username: "@augustogarufa"
    },

    // Ubicación
    location: {
        city: "Córdoba Capital",
        country: "Argentina",
        coverageZones: [
            "Nueva Córdoba",
            "Centro",
            "Cerro de las Rosas",
            "Alta Córdoba",
            "Barrio Güemes",
            "Jardín Espinosa",
            "General Paz",
            "Barrio Alberdi"
        ]
    },

    // Desarrollador
    developer: {
        name: "Andrés García",
        url: "https://www.linkedin.com/in/autentoken"
    },

    // Imágenes
    images: {
        professor: "assets/profesor-ashtanga-yoga-punto-chikitsa.jpg",
        professorAlt: "Augusto García - Profesor de Ashtanga Yoga en Córdoba Capital"
    }
};

/**
 * Función helper para generar URLs de WhatsApp
 * @param {string} messageKey - Clave del mensaje en CONFIG.whatsapp.messages
 * @returns {string} URL completa de WhatsApp
 */
function getWhatsAppURL(messageKey = 'default') {
    const message = CONFIG.whatsapp.messages[messageKey] || CONFIG.whatsapp.messages.default;
    return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Función para actualizar el año en el footer automáticamente
 */
function updateFooterYear() {
    const yearElement = document.getElementById('footer-date');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Ejecutar cuando cargue el DOM
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', updateFooterYear);
}
