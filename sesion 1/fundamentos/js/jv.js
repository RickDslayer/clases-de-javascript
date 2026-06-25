const valor = 1;

let edad = 24;
edad = 28;

console.log(valor)
console.log(edad)
console.log("-----------------")

const producto = "  teclado gamer  ";

//metodos de cadenas
console.log("metodos de cadenas")
console.log(producto.trim())// "teclado gamer"
console.log(producto.toUpperCase()) // "  TECLADO GAMER  "
console.log(producto.includes("gamer")) // true
console.log(producto.trim().slice(0, 7)) // "teclado"
console.log("-----------------")

//arrays listas ordenadas
console.log("arrays listas ordenadas")
const tecnologias = ["HTML", "CSS", "JavaScript"];

console.log(tecnologias[0]);    // HTML
console.log(tecnologias.length); // 3
console.log(tecnologias.includes("JavaScript")); // true
console.log("-----------------")

//objetos literales
console.log("objetos literales")
const producto1 = {
    nombre: "Teclado",
    precio: 120000,
    disponible: true
  };
  
  console.log(producto1.nombre);
  console.log(producto1.precio);
  console.log(producto1.disponible);
  console.log("-----------------")

//funciones reutilizables
console.log("funciones reutilizables")
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
  }
  
  const totalCalculado = calcularTotal(50000, 2);
  console.log(totalCalculado); // 100000
  console.log("-----------------")

//numeros y operadores
console.log("numeros y operadores")
const precio = 50000;
const cantidad = 2;
const subtotal = precio * cantidad;
const aplicaDescuento = subtotal >= 100000;

console.log(subtotal); // 100000
console.log(aplicaDescuento); // true
console.log("-----------------")

const precioTexto = "15000";
const total = Number(precioTexto) * 3;
console.log(total); // 45000
console.log(Number("hola")); // NaN
console.log("-----------------")