// SESIÓN 1.7 - Manipulación Avanzada del DOM
// Proyecto base para estudiantes

const btnCargar = document.querySelector("#btn-cargar");
const btnAgregarFinal = document.querySelector("#btn-agregar-final");
const btnAgregarInicio = document.querySelector("#btn-agregar-inicio");
const btnAviso = document.querySelector("#btn-aviso");
const btnResumen = document.querySelector("#btn-resumen");
const btnReemplazarPrimera = document.querySelector("#btn-reemplazar-primera");

const resumen = document.querySelector("#resumen");
const panelEquipos = document.querySelector("#panel-equipos");
const listaEquipos = document.querySelector("#lista-equipos");

function crearTarjetaEquipo(equipo) {

  // Crear article
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("card-equipo");

  // Agregar clase destacado
  if (equipo.destacado) {
    tarjeta.classList.add("destacado");
  }

  // Crear elementos
  const titulo = document.createElement("h3");
  const codigo = document.createElement("p");
  const grupo = document.createElement("p");
  const continente = document.createElement("p");
  const confederacion = document.createElement("p");

  // Asignar contenido
  titulo.textContent = equipo.nombre;
  codigo.textContent = `Código: ${equipo.codigo}`;
  grupo.textContent = `Grupo: ${equipo.grupo}`;
  continente.textContent = `Continente: ${equipo.continente}`;
  confederacion.textContent = `Confederación: ${equipo.confederacion}`;

  // Crear botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", function () {
    // parentElement -> article
    this.parentElement.remove();
    actualizarResumen();
  });

  // Agregar elementos al article
  tarjeta.append(
    titulo,
    codigo,
    grupo,
    continente,
    confederacion,
    btnEliminar
  );

  return tarjeta;
}

async function cargarEquipos() {
  try {

    const respuesta = await fetch("data/equipos.json");
    const datos = await respuesta.json();

    // Limpiar contenedor
    listaEquipos.replaceChildren();

    // Crear tarjetas
    datos.equipos.forEach(equipo => {
      const tarjeta = crearTarjetaEquipo(equipo);
      listaEquipos.append(tarjeta);
    });

    actualizarResumen();

  } catch (error) {
    console.error("Error al cargar equipos:", error);
  }
}

function agregarEquipoAlFinal() {

  const equipo = {
    nombre: "Francia",
    codigo: "FRA",
    grupo: "G",
    continente: "Europa",
    confederacion: "UEFA",
    destacado: true
  };

  const tarjeta = crearTarjetaEquipo(equipo);
  listaEquipos.append(tarjeta);

  actualizarResumen();
}

function agregarEquipoAlInicio() {

  const equipo = {
    nombre: "Alemania",
    codigo: "GER",
    grupo: "E",
    continente: "Europa",
    confederacion: "UEFA",
    destacado: false
  };

  const tarjeta = crearTarjetaEquipo(equipo);
  listaEquipos.prepend(tarjeta);

  actualizarResumen();
}

function insertarAviso() {

  const aviso = document.createElement("p");
  aviso.className = "aviso";
  aviso.textContent = "⚠️ Se agregaron cambios en la lista de equipos.";

  panelEquipos.before(aviso);
}

function actualizarResumen() {

  const total = listaEquipos.children.length;

  const mensaje = document.createElement("p");
  mensaje.textContent = `Total de equipos: ${total}`;

  resumen.replaceChildren(mensaje);
}

function reemplazarPrimeraTarjeta() {

  const primera = listaEquipos.firstElementChild;

  if (!primera) return;

  const nuevoEquipo = {
    nombre: "Italia",
    codigo: "ITA",
    grupo: "A",
    continente: "Europa",
    confederacion: "UEFA",
    destacado: true
  };

  const nuevaTarjeta = crearTarjetaEquipo(nuevoEquipo);

  primera.replaceWith(nuevaTarjeta);

  actualizarResumen();
}

btnCargar.addEventListener("click", cargarEquipos);
btnAgregarFinal.addEventListener("click", agregarEquipoAlFinal);
btnAgregarInicio.addEventListener("click", agregarEquipoAlInicio);
btnAviso.addEventListener("click", insertarAviso);
btnResumen.addEventListener("click", actualizarResumen);
btnReemplazarPrimera.addEventListener("click", reemplazarPrimeraTarjeta);