//document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function saludarDesdeHTML() {
    const mensaje = document.querySelector("#mensajeHTML");
    mensaje.textContent = "Hola desde un evento escrito en HTML";
};
// PSe capturan btnPropiedad  y mensajePropiedad 

btnPropiedad.onclick = function () {
    mensajePropiedad.textContent = "Hola desde la propiedad onclick";
};
// PSe capturan btnListener y mensajeListener 

btnListener.addEventListener("click", function () {
    mensajeListener.textContent = "Hola desde addEventListener";
});

//evento personalizado
const listaUsuarios = document.querySelector("#listaUsuarios")
const formulario = document.querySelector("#formulario");

function eventoPersonalizado(newNombre, newEmail) {
    const eventoUsuarioAgregado = new CustomEvent("usuario:agregado", {
        detail: {
            nombre: newNombre,
            email: newEmail
        }
    });
    // Acá se llama el evento
    document.dispatchEvent(eventoUsuarioAgregado);
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("formulario controlado por javascript");
    const dataForm = new FormData(formulario);

    const name = dataForm.get("nombre");
    const email = dataForm.get("email");
    eventoPersonalizado(name,email);
    formulario.reset();
});

document.addEventListener("usuario:agregado", function (event) {
    const usuario = event.detail;

    const item = document.createElement("li");
    item.textContent = usuario.nombre + " - " + usuario.email;
    item.classList.add("usuario-destacado");

    listaUsuarios.append(item);
});