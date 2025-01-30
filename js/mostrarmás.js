document.addEventListener('DOMContentLoaded', function () {
    const lastCard = document.querySelector('.last-card');
    const showMoreBtn = document.querySelector('.show-more-btn');
    let isExpanded = false;

    function toggleContent() {
        if (!isExpanded) {
            // Mostrar la tarjeta
            lastCard.style.display = 'block';
            // Forzar un reflow para que la animación funcione
            lastCard.offsetHeight; // Esto fuerza un reflow
            lastCard.classList.add('visible');
            showMoreBtn.innerHTML = 'Mostrar menos <span class="arrow up"></span>';
        } else {
            // Ocultar la tarjeta con animación
            lastCard.classList.add('hiding');
            lastCard.classList.remove('visible');

            // Esperar a que termine la animación antes de ocultar
            setTimeout(() => {
                lastCard.style.display = 'none';
                lastCard.classList.remove('hiding');
            }, 500); // Mismo tiempo que la duración de la animación

            showMoreBtn.innerHTML = 'Mostrar más <span class="arrow"></span>';
        }

        // Agregar animación al botón
        showMoreBtn.classList.add('animate');
        setTimeout(() => {
            showMoreBtn.classList.remove('animate');
        }, 300); // Duración de la animación del botón

        isExpanded = !isExpanded;
    }

    showMoreBtn.addEventListener('click', toggleContent);
});