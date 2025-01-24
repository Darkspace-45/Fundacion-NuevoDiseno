// Selecciona elementos del navbar
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar-brand img');
const links = document.querySelectorAll('.navbar-nav li a');
const searchIcon = document.querySelector('.search');

// Evento de desplazamiento
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        // Fondo negro, letras blancas
        navbar.style.backgroundColor = 'black';
        logo.style.filter = 'invert(1)';
        links.forEach(link => link.style.color = '#fff');
        searchIcon.style.color = '#fff';
    } else {
        // Fondo transparente, letras negras
        navbar.style.backgroundColor = 'transparent';
        logo.style.filter = 'invert(0)';
        links.forEach(link => link.style.color = '#000');
        searchIcon.style.color = '#000';
    }
});
