/**
 * PUNTO CHIKITSA YOGA - SCRIPTS
 * Mobile menu toggle & basic interactions
 */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');

            // Toggle animation for hamburger icon
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
            }
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only prevent default if it's not just "#"
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// FAQ accordion enhancement (for better accessibility)
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const summary = item.querySelector('summary');

        if (summary) {
            summary.addEventListener('click', function() {
                // Optional: Close other open FAQ items (accordion behavior)
                // Uncomment the following lines if you want only one FAQ open at a time
                /*
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.hasAttribute('open')) {
                        otherItem.removeAttribute('open');
                    }
                });
                */
            });
        }
    });
});

// Add animation on scroll (optional enhancement)
function addScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.card, .step, .testimonial, .service-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations if supported
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', addScrollAnimation);
}

// WhatsApp Form Generator (for contacto.html)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsapp-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener valores del formulario
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const zone = document.getElementById('zone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            // Validar campos obligatorios
            if (!name || !email || !zone || !service) {
                alert('Por favor completá todos los campos obligatorios.');
                return;
            }

            // Construir mensaje para WhatsApp
            let whatsappMessage = `Hola Augusto, me contacto desde el formulario web.\n\n`;
            whatsappMessage += `Nombre: ${name}\n`;
            whatsappMessage += `Email: ${email}\n`;
            whatsappMessage += `Zona: ${zone}\n`;
            whatsappMessage += `Servicio de interés: ${service}`;

            if (message) {
                whatsappMessage += `\n\nMensaje:\n${message}`;
            }

            // Obtener número de WhatsApp desde CONFIG o usar el hardcoded
            const whatsappNumber = (typeof CONFIG !== 'undefined') ? CONFIG.whatsapp.number : '+5493513081174';

            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Generar URL de WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Abrir WhatsApp
            window.open(whatsappURL, '_blank');
        });
    }
});

// WhatsApp link tracking (optional - for analytics)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here if needed
            console.log('WhatsApp link clicked:', this.href);
        });
    });
});

// Dynamic footer date (managed by config.js now)
// The updateFooterYear() function in config.js handles this

/**
 * Aplicar datos de contacto centralizados desde config.js
 * Esta función reemplaza todos los enlaces y textos con los valores de CONFIG
 */
document.addEventListener('DOMContentLoaded', function() {
    // Solo ejecutar si CONFIG está disponible
    if (typeof CONFIG === 'undefined') {
        console.warn('CONFIG no está cargado. Asegurate de incluir config.js antes de script.js');
        return;
    }

    console.log('🔧 Aplicando configuración centralizada...');

    // PASO 1: Actualizar TODOS los enlaces de WhatsApp (incluso los hardcodeados)
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    console.log(`📱 Encontrados ${whatsappLinks.length} enlaces de WhatsApp`);

    whatsappLinks.forEach(link => {
        const href = link.getAttribute('href');
        const linkText = link.textContent.toLowerCase();
        const parentText = link.parentElement ? link.parentElement.textContent.toLowerCase() : '';

        // Detectar qué tipo de mensaje es según el contexto
        let messageKey = 'default';

        if (href.includes('método de trabajo') || href.includes('m%C3%A9todo')) {
            messageKey = 'services';
        } else if (linkText.includes('1 a 1') || href.includes('1%20a%201') || parentText.includes('1 a 1')) {
            messageKey = 'one2one';
        } else if (linkText.includes('grupal') || linkText.includes('grupo') || href.includes('grupo') || parentText.includes('grup')) {
            messageKey = 'group';
        } else if (href.includes('in-company') || href.includes('empresa') || linkText.includes('empresa') || linkText.includes('propuesta')) {
            messageKey = 'company';
        } else if (href.includes('[ZONA]') || href.includes('zona')) {
            messageKey = 'zone';
        } else if (href.includes('dudas') || linkText.includes('dudas')) {
            messageKey = 'doubts';
        }

        // Actualizar el href con la URL de WhatsApp correspondiente
        const newURL = getWhatsAppURL(messageKey);
        link.setAttribute('href', newURL);
        console.log(`  ✓ Actualizado: ${messageKey} -> ${newURL.substring(0, 50)}...`);
    });

    // PASO 2: Actualizar TODOS los textos que muestran números de teléfono (sin importar el formato)
    // Buscar en todo el documento cualquier texto que contenga números de teléfono viejos
    const phonePatterns = [
        /\+54\s*9?\s*351\s*308\s*1174/gi,
        /\+5493513081174/gi,
        /351\s*308\s*1174/gi
    ];

    // Actualizar en elementos .contact-detail
    const contactDetails = document.querySelectorAll('.contact-detail');
    contactDetails.forEach(element => {
        let text = element.textContent;
        let wasUpdated = false;

        phonePatterns.forEach(pattern => {
            if (pattern.test(text)) {
                text = CONFIG.whatsapp.displayNumber;
                wasUpdated = true;
            }
        });

        // También verificar emails
        if (text.includes('augustogarufa@gmail.com')) {
            text = CONFIG.email;
            wasUpdated = true;
        }

        // También verificar Instagram
        if (text.includes('@augustogarufa')) {
            text = CONFIG.instagram.username;
            wasUpdated = true;
        }

        if (wasUpdated) {
            element.textContent = text;
            console.log(`  ✓ Actualizado texto de contacto: ${text}`);
        }
    });

    // PASO 3: Actualizar enlaces de email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    console.log(`✉️ Encontrados ${emailLinks.length} enlaces de email`);

    emailLinks.forEach(link => {
        const currentHref = link.getAttribute('href');

        // Actualizar cualquier mención del email viejo
        if (currentHref.includes('augustogarufa@gmail.com')) {
            const newHref = currentHref.replace(/augustogarufa@gmail\.com/g, CONFIG.email);
            link.setAttribute('href', newHref);
            console.log(`  ✓ Email actualizado en href`);
        }

        // Actualizar texto visible si muestra el email
        if (link.textContent.includes('augustogarufa@gmail.com')) {
            link.textContent = CONFIG.email;
        }
    });

    // PASO 4: Actualizar enlaces de Instagram
    const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
    console.log(`📸 Encontrados ${instagramLinks.length} enlaces de Instagram`);

    instagramLinks.forEach(link => {
        const currentHref = link.getAttribute('href');

        // Actualizar URL
        if (currentHref.includes('augustogarufa')) {
            link.setAttribute('href', CONFIG.instagram.url);
            console.log(`  ✓ Instagram URL actualizada`);
        }

        // Actualizar texto visible
        if (link.textContent.includes('@augustogarufa')) {
            link.textContent = CONFIG.instagram.username;
        }
    });

    console.log('✅ Configuración centralizada aplicada correctamente');
    console.log(`📞 WhatsApp: ${CONFIG.whatsapp.displayNumber}`);
    console.log(`✉️ Email: ${CONFIG.email}`);
    console.log(`📸 Instagram: ${CONFIG.instagram.username}`);
});