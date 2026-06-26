const mensaje = document.querySelector("#mensaje");
const departamento = document.querySelector("#departamentos");
const contenedorDepartamento = document.querySelector("#contenedorDepartamento");

function escribirDepartamento(departamento){
    const contenedor = document.createElement("ul")
    const listado = document.createElement("il");
    listado.textContent = departamento.name;
    contenedor.append(listado);
    return contenedor;
}

async function fechDepartamentos(){
    mensaje.textContent = "cargando departamentos";
    const respuesta = await fetch("https://api-colombia.com/api/v1/Department");
    const data = await respuesta.json();
    mensaje.textContent = "departamentos cargados";
    data.forEach(departamentos => {
        const nombre = escribirDepartamento(departamentos);
        contenedorDepartamento.append(nombre)
    });
};

departamento.addEventListener("click", fechDepartamentos);

    
