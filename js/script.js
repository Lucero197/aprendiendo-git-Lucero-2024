const nuevoTitulo = "Aprendiendo Git con JavaScript";

const tituloElement = document.querySelector('.page-title');

tituloElement.textContent = nuevoTitulo;

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById("chile-garnacho");
    let position = 0;
    let direction = 1;

    function animate() {
        position += direction * 2; // Cambia el valor 2 para ajustar la velocidad
        img.style.left = position + "px";

        // Cambiar dirección cuando alcanza los bordes de la ventana
        if (position > window.innerWidth - img.width || position < 0) {
            direction *= -1;
        }

        requestAnimationFrame(animate);
    }

    animate();
});