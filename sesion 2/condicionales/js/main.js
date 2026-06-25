
//condicional if
const nota = 4.5;

if (nota >= 4.5) {
  console.log("Excelente");
} else if (nota >= 3) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

//switch
const metodoPago = "tarjeta";

switch (metodoPago) {
  case "efectivo":
    console.log("Pago en efectivo");
    break;
  case "tarjeta":
    console.log("Pago con tarjeta");
    break;
  default:
    console.log("Método de pago no válido");
}

//for & arrays con for
const productos = ["Mouse", "Teclado", "Monitor"];

for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}

//while
let contador = 1;

while (contador <= 5) {
  console.log("Contador:", contador);
  contador++;
}

//funciones con parametros y return
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
  }
  
  const total = calcularTotal(50000, 3);
  console.log(total);

function evaluarNota(nota) {
 if (nota >= 3) {
 return "Aprobado";
 } else {
 return "Reprobado";
 }
}
   
console.log(evaluarNota(4.2));