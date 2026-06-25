const mensaje = document.querySelector("#mensaje");
const btntextContent = document.querySelector("#btnTextContent");
const btnInnerHTML = document.querySelector("#btnInnerHTML");
const btnLimpiar = document.querySelector("#btnLimpiar");
const btnAlternar = document.querySelector("#btnAlternar");
const btnVerificar = document.querySelector("#btnVerificar");
const btnReemplazarClase = document.querySelector("#btnReemplazarClase");
const enlace = document.querySelector("#enlace");
const btnLeer = document.querySelector("#btnLeer");
const btnCambiar = document.querySelector("#btnCambiar");
const botonEnviar = document.querySelector("#botonEnviar");
const btnHabilitar = document.querySelector("#btnHabilitar");

btntextContent.addEventListener("click", function () {
    mensaje.textContent = "¡Hola estudiantes <strong>DOM</strong> con textContent!";
    mensaje.classList.add("resultado-texto");
    mensaje.classList.remove("resultado-html");
    mensaje.classList.remove("resultado-limpio");
});

btnInnerHTML.addEventListener("click", function () {
    mensaje.innerHTML = "¡Hola estudiantes <strong>DOM<strong> con innerHTML!";
    mensaje.classList.add("resultado-html");
    mensaje.classList.remove("resultado-limpio");
    mensaje.classList.remove("resultado-texto");
});

btnLimpiar.addEventListener("click", function () {
    mensaje.textContent = "";
    mensaje.classList.add("resultado-limpio");
    mensaje.classList.remove("resultado-html");
    mensaje.classList.remove("resultado-texto");
});

function alternarMensaje() {
    mensaje.classList.toggle("oculto");
    mensaje.classList.add("resultado-limpio");
    mensaje.classList.remove("resultado-html");
    mensaje.classList.remove("resultado-texto");
}

btnAlternar.addEventListener("click", alternarMensaje);

function verificarClase() {
    if (mensaje.classList.contains("resultado-html")) {
        console.log("El mensaje tiene estilo de innerHTML");
    } else {
        console.warn("El mensaje NO tiene estilo de innerHTML");
    }
}

btnVerificar.addEventListener("click", verificarClase);

function reemplazarClase() {
    if (mensaje.classList.contains("resultado-texto")) {
        mensaje.classList.replace("resultado-texto", "resultado-html");
        mensaje.innerHTML = "Ahora el mensaje cambió de estilo";
    } else {
        alert("Primero usa el botón textContent para aplicar la clase resultado-texto");
    }
}

btnReemplazarClase.addEventListener("click", reemplazarClase);

btnLeer.addEventListener("click", function () {
    const valorHref = enlace.getAttribute("href");

    console.log("El href del enlace es:", valorHref);
});

btnCambiar.addEventListener("click", function () {
    enlace.setAttribute("href", "https://www.wikipedia.org");
    enlace.textContent = "Ir a Wikipedia";
    console.log("El enlace fue cambiado");
});

btnHabilitar.addEventListener("click", function () {
    botonEnviar.removeAttribute("disabled");
    console.log("El atributo disabled fue eliminado");
});

botonEnviar.addEventListener("click", function () {
    alert("Botón Enviar Habilitado");
});