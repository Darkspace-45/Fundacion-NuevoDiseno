const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    const themeIcon = document.getElementById('themeIcon');

    // Alternar la clase en .section-title h2
    document.querySelectorAll(".section-title h2").forEach(el => {
        el.classList.toggle("dark-mode");
    });

    // Alternar la clase en .about-right h1
    document.querySelectorAll(".about-right h1").forEach(el => {
        el.classList.toggle("dark-mode");
    });

    // Invertir el color de los logos de los testimoniales y servicios
    toggleTestimonialLogos();
    toggleServiceIcons(); // Already applied to the service card icons
    toggleServiceKichwaIcons();
    toggleServiceKichwaBackground();

    // Actualizar el icono según el modo actual
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeIcon.textContent = isDarkMode ? '🌙' : '☀️';

    // Guardar la preferencia en localStorage
    localStorage.setItem("darkMode", isDarkMode);
};

// Función para invertir el color de los logos de los testimoniales
const toggleTestimonialLogos = () => {
    document.querySelectorAll(".testi-item img").forEach(logo => {
        logo.classList.toggle("invert-color");
    });
};

// Función para invertir el color de los iconos en la sección de servicios
const toggleServiceIcons = () => {
    document.querySelectorAll(".service-card .icon-box i").forEach(icon => {
        icon.classList.toggle("invert-color");
    });
};

// Función para invertir el color de los iconos en la sección de servicios Kichwa
const toggleServiceKichwaIcons = () => {
    document.querySelectorAll("#services-kichwa .service-card .icon-box i").forEach(icon => {
        icon.classList.toggle("invert-color");
    });
};

// Función para invertir el fondo de la sección de servicios Kichwa
const toggleServiceKichwaBackground = () => {
    document.querySelector("#services-kichwa").classList.toggle("invert-color");
};

// Cargar la preferencia almacenada y establecer el icono inicial
window.addEventListener('load', () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById('themeIcon').textContent = '🌙';

        // Aplicar modo oscuro a .section-title h2
        document.querySelectorAll(".section-title h2").forEach(el => {
            el.classList.add("dark-mode");
        });

        // Aplicar modo oscuro a .about-right h1
        document.querySelectorAll(".about-right h1").forEach(el => {
            el.classList.add("dark-mode");
        });

        // Aplicar la inversión de color a los logos de los testimoniales y servicios
        toggleTestimonialLogos();
        toggleServiceIcons();
        toggleServiceKichwaIcons();
        toggleServiceKichwaBackground();
    }
});
