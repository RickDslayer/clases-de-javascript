//ej 1
//const cursoCampus = "JavaScript";
//
//localStorage.setItem("curso", cursoCampus);
//
//const cursoGuardado = localStorage.getItem("curso");
//
//console.log(cursoGuardado);



//ej 2
//const btnGuardar = document.querySelector("#btnGuardar");
//const btnMostrar = document.querySelector("#btnMostrar");
//const btnEliminar = document.querySelector("#btnEliminar");
//const mensaje = document.querySelector("#mensajeAlmacenamiento");
//
//btnGuardar.addEventListener("click", () => {
//    const nombre = inputNombre.value;
//    if (nombre !== "") {
//        localStorage.setItem(
//            "nombreEstudiante", nombre);
//        inputNombre.value = "";
//    }
//});
//
//btnMostrar.addEventListener("click", () => {
//    const n = localStorage.getItem(
//        "nombreEstudiante");
//    if (n === null) {
//        mensaje.textContent =
//            "No hay nombre guardado.";
//    } else {
//        mensaje.textContent =
//            "Nombre: " + n;
//    }
//});
//
//btnEliminar.addEventListener("click", () => {
//    localStorage.removeItem(
//        "nombreEstudiante");
//    mensaje.textContent =
//        "Nombre eliminado.";
//});
//
//
//
//
//const estudiante = {
//    nombre: "Laura",
//    edad: 18,
//    curso: "JavaScript"
//};
//
//localStorage.setItem(
//    "estudiante",
//    JSON.stringify(estudiante)
//);
//
//const guardado = localStorage.getItem("estudiante");
//const convertido = JSON.parse(guardado);
//
//console.log(convertido.nombre); // "Laura"
//console.log(convertido.edad);   // 18
//console.log(convertido.curso);  // "JavaScript"




//ej 3
const inputNombreEstudiante = document.querySelector("#inputNombreEstudiante");
const inputEdadEstudiante = document.querySelector("#inputEdadEstudiante");
const inputCursoEstudiante = document.querySelector("#inputCursoEstudiante");
const btnGuardarEstudiante = document.querySelector("#btnGuardarEstudiante");
const btnLimpiarEstudiante = document.querySelector("#btnLimpiarEstudiante");
const listaEstudiantes = document.querySelector("#listaEstudiantes");

function obtenerEstudiantes() {
    const estudiantesGuardados = localStorage.getItem("estudiantes");

    if (estudiantesGuardados === null) {
        return [];
    }

    return JSON.parse(estudiantesGuardados);
}

function guardarEstudiantes(estudiantes) {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function pintarEstudiantes() {
    const estudiantes = obtenerEstudiantes();

    listaEstudiantes.textContent = "";

    estudiantes.forEach(function (estudiante) {
        const item = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent =
            estudiante.nombre +
            " - " +
            estudiante.edad +
            " años - Curso: " +
            estudiante.curso;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function () {
            eliminarEstudiante(estudiante.id);
        });

        item.append(texto);
        item.append(botonEliminar);

        listaEstudiantes.append(item);
    });
}

btnGuardarEstudiante.addEventListener("click", function () {
    const nombre = inputNombre1.value.trim();
    const edad = inputEdad.value.trim();
    const curso = inputCurso.value.trim();

    if (nombre === "" || edad === "" || curso === "") {
        mensajeEstudiantes.textContent = "Por favor completa todos los campos.";
        return;
    }

    const nuevoEstudiante = {
        id: Date.now(),
        nombre: nombre,
        edad: edad,
        curso: curso
    };

    const estudiantes = obtenerEstudiantes();
    estudiantes.push(nuevoEstudiante); // Agregamos el nuevo estudiante con push().
    guardarEstudiantes(estudiantes);
    pintarEstudiantes();
    mensaje.textContent = "Estudiante guardado correctamente.";
    inputNombre1.value = "";
    inputEdad.value = "";
    inputCurso.value = "";
});

btnLimpiarEstudiante.addEventListener("click", function () {
    localStorage.removeItem("estudiantes");
    pintarEstudiantes();
    mensaje.textContent = "Todos los estudiantes fueron eliminados.";
});

function eliminarEstudiante(id) {
    const estudiantes = obtenerEstudiantes();

    const estudiantesActualizados = estudiantes.filter(function (estudiante) {
        return estudiante.id !== id;
    });

    guardarEstudiantes(estudiantesActualizados);
    pintarEstudiantes();
}

