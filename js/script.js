const nuevoTitulo = "Aprendiendo Git con JavaScript";

const tituloElement = document.querySelector('.page-title');

tituloElement.textContent = nuevoTitulo;

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("show-video-btn");
    const videoContainer = document.getElementById("video-container");

    button.addEventListener("click", function() {
        // Crear el iframe del video
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = "https://www.youtube.com/embed/DdpyIit7d18?si=prHFqttiYzE6Oylp";
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;

        // Insertar el iframe en el contenedor de video
        videoContainer.appendChild(iframe);

        // Mostrar el contenedor de video
        videoContainer.style.display = "block";
    });
});