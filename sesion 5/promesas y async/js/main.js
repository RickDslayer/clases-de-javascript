const miPromesa = new Promise(
    (resolve, reject) => {
      const exito = true;
  
      if (exito) {
        resolve("Operación exitosa");
      } else {
        reject("Ocurrió un error");
      }
    }
  );

miPromesa
.then((resultado) => {
  console.log("Éxito:", resultado);
})
.catch((error) => {
  console.error("Error:", error);
})
.finally(() => {
  console.log("Proceso finalizado");
});

Promise.all([p1, p2, p3])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error(error);
  });

fetch("data/empleados.json")
.then(r => r.json())
.then(data => {
console.log(data);
})
.catch(err => {
console.error(err);
});

async function cargarEmpleados() {
    const response = await fetch("data/empleados.json");
    const data = await response.json();
    console.log(data);
  }
  
  cargarEmpleados();

async function cargarEmpleados() {
  try {
    const response = await fetch(
      "data/empleados.json"
    );
    const data = await response.json();
    console.log(data.empleados);
  } catch (error) {
    console.error(error);
  }
}

