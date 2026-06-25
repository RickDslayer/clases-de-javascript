const formulario = document.querySelector("#formularioProducto");
const nombreProducto = document.querySelector("#nombreProducto");
const precioProducto = document.querySelector("#precioProducto");
const categoriaProducto = document.querySelector("#categoriaProducto");

const previewNombre = document.querySelector("#previewNombre");
const previewCategoria = document.querySelector("#previewCategoria");
const mensajeEstado = document.querySelector("#mensajeEstado");
const productosLista = document.querySelector("#productosLista");
const contadorProductos = document.querySelector("#contadorProductos");
const historialEventos = document.querySelector("#historialEventos");


let totalProductos = 0;

nombreProducto.addEventListener("input", (e) => {
  const valor = e.target.value.trim();
  previewNombre.textContent = valor || "Sin nombre";
});

categoriaProducto.addEventListener("change", (e) => {
  const valor = e.target.value;
  previewCategoria.textContent = valor || "Ninguna";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mensajeEstado.textContent = "";
  }
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nombre = nombreProducto.value.trim();
  const precio = precioProducto.value.trim();
  const categoria = categoriaProducto.value;

  if (!nombre || !precio || !categoria) {
    mensajeEstado.textContent = "⚠️ Por favor, completa todos los campos del formulario.";
    mensajeEstado.style.color = "red";
    return;
  }

  const nuevoProducto = { nombre, precio, categoria };

  crearTarjetaProducto(nuevoProducto);

  const eventoProductoAgregado = new CustomEvent("producto:agregado", {
    detail: nuevoProducto
  });
  document.dispatchEvent(eventoProductoAgregado);

  formulario.reset();
  previewNombre.textContent = "Sin nombre";
  previewCategoria.textContent = "Ninguna";
  mensajeEstado.textContent = "✅ ¡Producto agregado con éxito!";
  mensajeEstado.style.color = "green";
});

function crearTarjetaProducto(producto) {
  const article = document.createElement("article");
  article.classList.add("tarjeta-producto"); 

  article.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Categoría:</strong> ${producto.categoria}</p>
    <button class="btn-eliminar">Eliminar</button>
  `;

  const btnEliminar = article.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", () => {
    article.remove();
    totalProductos--;
    contadorProductos.textContent = totalProductos;
  });

  productosLista.appendChild(article);
}

document.addEventListener("producto:agregado", (e) => {
  totalProductos++;
  contadorProductos.textContent = totalProductos;

  const { nombre, precio, categoria } = e.detail;

  const registro = document.createElement("p");
  registro.textContent = `[Nuevo Producto] Nombre: ${nombre} | Cat: ${categoria} | Precio: $${precio}`;
  historialEventos.appendChild(registro);
});