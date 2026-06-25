const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
    titulo.textContent = "¡JavaScript cambió el contenido!";
});

//----------------------------------------------------------------
const inputNombre = document.querySelector("#nombre");
const botonSaludar = document.querySelector("#saludar");
const mensaje = document.querySelector("#mensaje");

botonSaludar.addEventListener("click", function () {
    const nombre = inputNombre.value;

    mensaje.textContent = "Hola " + nombre + ", bienvenido a JavaScript.";
});