const botonSw = document.querySelector("#switch");
const descarga = document.querySelector(".boton");
const fotoPersonal = document.querySelector("#foto");

// Funcionalidad para activar el modo nocturno
botonSw.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    botonSw.classList.toggle("active")
} );

// Funcionalidad para cambiar el color del botónd e descarga
descarga.addEventListener('mouseover', () => {
    descarga.classList.toggle("active")
})
descarga.addEventListener('mouseout', () => {
    descarga.classList.toggle("active")
})

// Funcionalidad para cambiar imagen
fotoPersonal.addEventListener('mouseover', () => {
    fotoPersonal.src = "img/foto.jpg";
})
fotoPersonal.addEventListener('mouseout', () => {
    fotoPersonal.src = "img/pexels-athena-2582937.jpg";
})