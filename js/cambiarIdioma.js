const flagImage = document.getElementById('flag-image');
let currentLanguage = localStorage.getItem("language") || "es"; // Cargar idioma almacenado o español por defecto

function updateLanguage() {
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });

    // Actualizar imagen de la bandera
    flagImage.src = currentLanguage === "es" ? "img/spain-flag.png" : "img/us-flag.png";
    flagImage.alt = currentLanguage === "es" ? "English" : "Español";
}

flagImage.addEventListener('click', () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es"; // Cambiar idioma
    localStorage.setItem("language", currentLanguage); // Guardar preferencia en localStorage
    updateLanguage(); // Aplicar cambios
});

// Cargar el idioma guardado al iniciar
updateLanguage();