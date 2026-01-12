# Punto Chikitsa Yoga - Sitio Web

Sitio web estático para **Augusto García**, profesor de Ashtanga Yoga en Córdoba Capital.

## 🧘 Características

- **Mobile-first & Responsive**: Diseño optimizado para dispositivos móviles y tablets
- **Accesible**: Focus visible, semántica HTML correcta, contraste de colores adecuado
- **Performance**: Sin dependencias externas, CSS y JS puros, optimizado para carga rápida
- **SEO**: Meta tags, Open Graph, estructura semántica

## 📁 Estructura de archivos

```
public_html/
├── index.html          # Página principal
├── servicios.html      # Página de servicios
├── contacto.html       # Página de contacto
├── styles.css          # Estilos globales
├── script.js           # JavaScript (menú mobile, animaciones)
├── assets/             # Imágenes
│   ├── profesor-ashtanga-yoga-punto-chikitsa.jpg
│   ├── clase-ashtanga-shala-punto-chikitsa-yoga.jpg
│   ├── alineacion-columna-yoga-punto-chikitsa-yoga.jpg
│   ├── apertura-caderas-shala-punto-chikitsa-yoga.jpg
│   └── equilibrio-antebrazos-ashtanga-punto-chikitsa-yoga.jpg
└── README.md
```

## 🎨 Identidad visual

### Paleta de colores (CSS Variables)

```css
--bg: #F7F5F2          /* Fondo principal (beige claro) */
--surface: #EFE9E3     /* Superficie secundaria (arena) */
--olive: #6E7F63       /* Verde oliva (principal) */
--terracotta: #C26A4A  /* Terracota (acentos/CTAs) */
--ink: #1F2A2E         /* Negro azulado (texto) */
```

### Tipografía

- **Font family**: `system-ui` (fuentes nativas del sistema)
- **Tamaños responsivos**: De 1rem (móvil) a 3rem (desktop) en títulos

## 📄 Páginas

### index.html
- Hero con badge "Ahora en Córdoba Capital"
- Sección "Cómo es una clase a domicilio" (3 pasos)
- Sección "Para quién" (4 perfiles)
- Sección "Qué necesitás" (requisitos básicos)
- Testimonios (3 placeholders)
- FAQ con 6 preguntas frecuentes
- CTA final + Footer

### servicios.html
- Header de página
- 3 cards de servicios:
  - Clase 1 a 1 a domicilio
  - Grupos pequeños (marcada como "Popular")
  - Clases In-Company
- Sección "Zonas de cobertura"
- Políticas de cancelación y reprogramación

### contacto.html
- 3 métodos de contacto: WhatsApp, Email, Instagram
- Sección "Ubicación"
- Formulario de contacto (mailto)

## 🔗 Enlaces de contacto

- **WhatsApp**: +54 9 351 308 1174
- **Email**: augustogarufa@gmail.com
- **Instagram**: [@augustogarufa](https://www.instagram.com/augustogarufa/)

Los enlaces de WhatsApp incluyen mensajes prearmados según contexto.

## ⚡ Funcionalidades JavaScript

- Menú hamburguesa mobile con toggle
- Cerrar menú al hacer clic en enlaces o fuera del menú
- Smooth scroll para enlaces ancla
- Animaciones on scroll (fade-in y slide-up)
- Validación básica de formulario

## 📱 Breakpoints responsive

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🚀 Deployment

Este es un sitio estático que puede ser desplegado en:
- **Netlify** (drag & drop o Git)
- **Vercel**
- **GitHub Pages**
- **Hosting tradicional** (cPanel, FTP)

Simplemente sube todos los archivos de `public_html/` al servidor.

## 🛠️ Personalización

### Cambiar colores

Editar las CSS variables en `styles.css`:

```css
:root {
    --bg: #tuColor;
    --olive: #tuColor;
    /* etc. */
}
```

### Modificar textos

Los textos están directamente en los archivos HTML. Buscar y reemplazar según necesidad.

### Agregar más imágenes

Colocar imágenes en `/assets/` y referenciarlas como:

```html
<img src="assets/tu-imagen.jpg" alt="Descripción">
```

## ✅ Checklist de publicación

- [ ] Reemplazar fotos placeholder con fotos reales de Augusto
- [ ] Verificar enlaces de WhatsApp (número correcto)
- [ ] Revisar testimonios (o reemplazar con testimonios reales)
- [ ] Configurar dominio personalizado (opcional)
- [ ] Configurar Google Analytics (opcional)
- [ ] Testear en dispositivos móviles reales
- [ ] Validar HTML (https://validator.w3.org/)
- [ ] Testear velocidad (https://pagespeed.web.dev/)

## 📝 Notas

- El sitio no usa jQuery, Bootstrap ni otras librerías para maximizar performance
- Todas las animaciones son CSS puras o IntersectionObserver API
- El formulario de contacto usa `mailto:` (se puede reemplazar con un backend real)

---

**Desarrollado para Punto Chikitsa Yoga - 2026**