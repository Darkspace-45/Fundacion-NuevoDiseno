// Selecciona elementos del navbar
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar-brand img');
const links = document.querySelectorAll('.navbar-nav li a');
const searchIcon = document.querySelector('.search');

// Verifica si estás en el index.html
const isIndex = window.location.pathname === '/' || window.location.pathname.includes('index.html');

// Evento de desplazamiento
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        // Fondo negro, letras blancas
        navbar.style.backgroundColor = 'black';
        links.forEach(link => (link.style.color = '#fff'));
        logo.style.filter = 'invert(1)';
        searchIcon.style.color = '#fff';
    } else if (isIndex) {
        // Fondo transparente solo en el index con letras negras
        navbar.style.backgroundColor = 'transparent';
        links.forEach(link => (link.style.color = '#000'));
        logo.style.filter = 'invert(0)';
        searchIcon.style.color = '#000';
    } else {
        // Fondo blanco, letras negras en otras páginas
        navbar.style.backgroundColor = 'white';
        links.forEach(link => (link.style.color = '#000'));
        logo.style.filter = 'invert(0)';
        searchIcon.style.color = '#000';
    }
});
