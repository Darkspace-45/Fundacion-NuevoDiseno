document.addEventListener('DOMContentLoaded', function () {
    const lastCard = document.querySelector('.last-card');
    const showMoreBtn = document.querySelector('.show-more-btn');
    let isExpanded = false;
    let currentLanguage = localStorage.getItem("language") || "es";

    function toggleContent() {
        if (!isExpanded) {
            // Mostrar la tarjeta
            lastCard.style.display = 'block';
            lastCard.offsetHeight; // Esto fuerza un reflow
            lastCard.classList.add('visible');
            showMoreBtn.innerHTML = currentLanguage === 'es' ?
                'Mostrar menos <span class="arrow up"></span>' :
                'Show less <span class="arrow up"></span>';
        } else {
            // Ocultar la tarjeta con animación
            lastCard.classList.add('hiding');
            lastCard.classList.remove('visible');

            // Esperar a que termine la animación antes de ocultar
            setTimeout(() => {
                lastCard.style.display = 'none';
                lastCard.classList.remove('hiding');
            }, 500); // Mismo tiempo que la duración de la animación

            showMoreBtn.innerHTML = currentLanguage === 'es' ?
                'Mostrar más <span class="arrow"></span>' :
                'Show more <span class="arrow"></span>';
        }

        // Agregar animación al botón
        showMoreBtn.classList.add('animate');
        setTimeout(() => {
            showMoreBtn.classList.remove('animate');
        }, 300); // Duración de la animación del botón

        isExpanded = !isExpanded;
    }

    function toggleLanguage() {
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        localStorage.setItem("language", currentLanguage);

        // Actualizar el texto del botón manteniendo el estado actual
        if (isExpanded) {
            showMoreBtn.innerHTML = currentLanguage === 'es' ?
                'Mostrar menos <span class="arrow up"></span>' :
                'Show less <span class="arrow up"></span>';
        } else {
            showMoreBtn.innerHTML = currentLanguage === 'es' ?
                'Mostrar más <span class="arrow"></span>' :
                'Show more <span class="arrow"></span>';
        }
    }

    // Evento para el botón de mostrar más/menos
    showMoreBtn.addEventListener('click', toggleContent);

    // Evento para el botón de cambio de idioma
    const languageBtn = document.querySelector('.language-btn');
    languageBtn.addEventListener('click', toggleLanguage);
});