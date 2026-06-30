
const log = document.getElementById("log");

function registrar(texto){

    log.innerHTML += "✔ " + texto + "<br>";
    log.scrollTop = log.scrollHeight;

}

/////////////////////////////////////////////////////////
// CLICK
/////////////////////////////////////////////////////////

const btnClick = document.getElementById("btnClick");

btnClick.addEventListener("click", ()=>{

    document.getElementById("mensajeClick").textContent =
    "Se hizo un CLICK";

    registrar("Evento CLICK");

});

/////////////////////////////////////////////////////////
// DOBLE CLICK
/////////////////////////////////////////////////////////

const btnDoble = document.getElementById("btnDoble");

btnDoble.addEventListener("dblclick", ()=>{

    document.getElementById("mensajeDoble").textContent =
    "Se hizo DOBLE CLICK";

    registrar("Evento DBLCLICK");

});

/////////////////////////////////////////////////////////
// MOUSEOVER
/////////////////////////////////////////////////////////

const caja = document.getElementById("caja");

caja.addEventListener("mouseover", ()=>{

    caja.style.background = "orange";
    caja.textContent = "Mouse Encima";

    registrar("Evento MOUSEOVER");

});

/////////////////////////////////////////////////////////
// MOUSEOUT
/////////////////////////////////////////////////////////

caja.addEventListener("mouseout", ()=>{

    caja.style.background = "#87CEEB";
    caja.textContent = "Pasa el mouse aquí";

    registrar("Evento MOUSEOUT");

});

/////////////////////////////////////////////////////////
// INPUT
/////////////////////////////////////////////////////////

const texto = document.getElementById("texto");

texto.addEventListener("input", ()=>{

    document.getElementById("resultado").textContent =
    "Texto: " + texto.value;

    registrar("Evento INPUT");

});

/////////////////////////////////////////////////////////
// KEYDOWN
/////////////////////////////////////////////////////////

document.addEventListener("keydown",(evento)=>{

    document.getElementById("tecla").textContent =
    "Tecla presionada: " + evento.key;

    registrar("Evento KEYDOWN -> " + evento.key);

});

/////////////////////////////////////////////////////////
// SUBMIT
/////////////////////////////////////////////////////////

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    document.getElementById("respuestaFormulario").textContent =
    "Formulario enviado correctamente (sin recargar la página).";

    registrar("Evento SUBMIT");

});
