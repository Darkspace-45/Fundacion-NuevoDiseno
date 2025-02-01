const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    const themeIcon = document.getElementById('themeIcon');

    // Alternar la clase en .section-title h2
    document.querySelectorAll(".section-title h2").forEach(el => {
        el.classList.toggle("dark-mode");
    });

    // Actualizar el icono según el modo actual
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeIcon.textContent = isDarkMode ? '🌙' : '☀️';

    // Guardar la preferencia en localStorage
    localStorage.setItem("darkMode", isDarkMode);
}

// Cargar la preferencia almacenada y establecer el icono inicial
window.addEventListener('load', () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById('themeIcon').textContent = '🌙';

        // Aplicar modo oscuro a .section-title h2
        document.querySelectorAll(".section-title h2").forEach(el => {
            el.classList.add("dark-mode");
        });
    }
});
