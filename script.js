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

// Form validation helper (for contacto.html)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    if (form) {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#C26A4A';
                } else {
                    field.style.borderColor = '#EFE9E3';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Por favor completá todos los campos obligatorios.');
            }
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

    // Actualizar todos los enlaces de WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Detectar qué tipo de mensaje es según el contexto
        let messageKey = 'default';

        if (href.includes('método de trabajo')) {
            messageKey = 'services';
        } else if (link.textContent.includes('1 a 1') || href.includes('1 a 1')) {
            messageKey = 'one2one';
        } else if (link.textContent.includes('grupal') || href.includes('grupo')) {
            messageKey = 'group';
        } else if (href.includes('in-company') || href.includes('empresa')) {
            messageKey = 'company';
        } else if (href.includes('zona')) {
            messageKey = 'zone';
        } else if (href.includes('dudas')) {
            messageKey = 'doubts';
        }

        // Actualizar el href con la URL de WhatsApp correspondiente
        link.setAttribute('href', getWhatsAppURL(messageKey));
    });

    // Actualizar textos que muestran el número de teléfono
    const phoneDisplays = document.querySelectorAll('.contact-detail');
    phoneDisplays.forEach(display => {
        if (display.textContent.includes('+54')) {
            display.textContent = CONFIG.whatsapp.displayNumber;
        }
    });

    // Actualizar enlaces de email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        const currentHref = link.getAttribute('href');

        // Si es solo el mailto simple, actualizarlo
        if (currentHref.includes('augustogarufa@gmail.com')) {
            const newHref = currentHref.replace(/augustogarufa@gmail\.com/g, CONFIG.email);
            link.setAttribute('href', newHref);
        }

        // Actualizar texto visible si muestra el email
        if (link.textContent.includes('@')) {
            link.textContent = CONFIG.email;
        }
    });

    // Actualizar texto del email en contacto
    const emailDisplays = document.querySelectorAll('.contact-detail');
    emailDisplays.forEach(display => {
        if (display.textContent.includes('@gmail.com')) {
            display.textContent = CONFIG.email;
        }
    });

    // Actualizar enlaces de Instagram
    const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
    instagramLinks.forEach(link => {
        link.setAttribute('href', CONFIG.instagram.url);
    });

    // Actualizar username de Instagram
    const instagramDisplays = document.querySelectorAll('.contact-detail');
    instagramDisplays.forEach(display => {
        if (display.textContent.includes('@augustogarufa')) {
            display.textContent = CONFIG.instagram.username;
        }
    });

    console.log('✅ Datos de contacto centralizados aplicados correctamente');
});