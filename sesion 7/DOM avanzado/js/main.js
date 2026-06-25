const contendorProductos = document.querySelector("#contenedor-productos");
const titulo = document.querySelector("#titulo");
const btnPrepend = document.querySelector("#btnPrepend");
const btnAppend = document.querySelector("#btnAppend");
const btnBefore = document.querySelector("#btnBefore");
const btnAfter = document.querySelector("#btnAfter");

// Event Listener para btnAppend
btnAppend.addEventListener("click", function () {
  const producto = document.createElement("article");
  producto.textContent = "Producto agregado al final: Mouse";
  producto.classList.add("producto");
  contendorProductos.append(producto);
});

// Event Listener para btnPrepend
btnPrepend.addEventListener("click",function(){
    const producto = document.createElement("article");
    producto.textContent = "Producto agregado al inicio: Mouse";
    producto.classList.add("producto");
    contendorProductos.prepend(producto);
});

// Event Listener para btnBefore
btnBefore.addEventListener("click", function () {
  const mensaje = document.createElement("p");
  mensaje.textContent = "Mensaje insertado antes del título";
  mensaje.classList.add("mensaje");
  titulo.before(mensaje);
});

// Event Listener para btnAfter
btnAfter.addEventListener("click",function(){
    const mensaje = document.createElement("p");
    mensaje.textContent = "Mensaje insertado despues del título";
    mensaje.classList.add("mensaje");
    titulo.after(mensaje);
})

const btnRemove = document.querySelector("#btnRemove");
const btnReplaceChildren = document.querySelector("#btnReplaceChildren")
const btnReplaceWith = document.querySelector("#btnReplaceWith")

btnRemove.addEventListener("click", function () {
  const primerProducto = document.querySelector(".producto");

  if (primerProducto) {
    primerProducto.remove();
  } else {
    alert("No hay productos para eliminar");
  }
});

btnReplaceChildren.addEventListener("click", function () {
  const nuevoProducto1 = document.createElement("article");
  nuevoProducto1.textContent = "Nuevo producto: Monitor";
  nuevoProducto1.classList.add("producto-destacado");

  const nuevoProducto2 = document.createElement("article");
  nuevoProducto2.textContent = "Nuevo producto: Monitor";
  nuevoProducto2.classList.add("producto-destacado");
  contendorProductos.replaceChildren(nuevoProducto1, nuevoProducto2);
});

btnReplaceWith.addEventListener("click", function () {
  const primeraTarjeta = contendorProductos.firstElementChild;

  if (primeraTarjeta) {
    const nuevaTarjeta = document.createElement("article");
    nuevaTarjeta.textContent = "Tarjeta reemplazada: Producto Premium";
    nuevaTarjeta.classList.add("producto-destacado");

    primeraTarjeta.replaceWith(nuevaTarjeta);
  } else {
    console.warn("No hay tarjeta para reemplazar");
  }
});

const botonesEliminarInternos = document.querySelectorAll(".btn-eliminar-interno"); 
const contendorProductos1 = document.querySelector("#contenedor-productos1");
const btnContarHijos = document.querySelector("#btnContarHijos");
const btnHermanoAnterior = document.querySelector("#btnHermanoAnterior");
const btnHermanoSiguiente = document.querySelector("#btnHermanoSiguiente");


// parentElement. Sirve para subir desde el botón hasta su tarjeta padre.
botonesEliminarInternos.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const tarjetaPadre = boton.parentElement;
    console.log("Elemento padre encontrado:");
    console.log(tarjetaPadre);
    tarjetaPadre.remove();
  });
});

// children. Permite obtener todos los hijos directos del contenedor.
btnContarHijos.addEventListener("click", function () {
  const hijos = contendorProductos1.children;
  console.log("Hijos directos del contenedor:");
  console.log(hijos);
  console.log("Cantidad de tarjetas:", hijos.length);
});

// previousElementSibling. Permite ir al hermano anterior de una tarjeta.
btnHermanoAnterior.addEventListener("click", function () {
  const segundaTarjeta = contendorProductos1.children[1];

  if (segundaTarjeta) {
    const hermanoAnterior = segundaTarjeta.previousElementSibling;

    console.log("Tarjeta actual:");
    console.log(segundaTarjeta);

    console.log("Hermano anterior:");
    console.log(hermanoAnterior);

    if (hermanoAnterior) {
      hermanoAnterior.classList.add("seleccionado");
    }
  }
});

// nextElementSibling. Permite ir al hermano siguiente de una tarjeta.
