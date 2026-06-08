// Esperamos a que el contenido de la página cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos todos los elementos que tienen la clase 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');

    // Creamos el observador para las animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Si el elemento es visible en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Agregamos la clase que lo muestra
            }
        });
    }, {
        threshold: 0.1 // El elemento aparecerá cuando el 10% sea visible
    });

    // Le decimos al observador que vigile cada elemento oculto
    hiddenElements.forEach((el) => observer.observe(el));
    
});
