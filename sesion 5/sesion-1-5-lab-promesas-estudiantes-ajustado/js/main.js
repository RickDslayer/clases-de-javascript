console.log("Inicio del laboratorio Sesion 1.5");
console.log("Abre la consola para revisar la carga de datos JSON.");

async function cargarEmpleados() {
    try {
        const response = await fetch("../data/empleados.json");

        if (!response.ok) {
            throw new Error("No fue posible cargar el archivo empleados.json");
        }

        const data = await response.json();
        const empleados = data.empleados;

        console.log("\nLISTA DE EMPLEADOS");
        console.table(empleados);

        empleados.forEach((empleado) => {
            console.log(
                `Empleado: ${empleado.nombre} ${empleado.apellido} | Cargo: ${empleado.cargo} | Área: ${empleado.area} | Activo: ${empleado.activo ? "Sí" : "No"}`
            );
        });

        return empleados;

    } catch (error) {
        console.error("Error al cargar empleados:", error.message);
        return [];
    }
}

async function cargarProductos() {
    try {
        const response = await fetch("../data/productos.json");

        if (!response.ok) {
            throw new Error("No fue posible cargar el archivo productos.json");
        }

        const data = await response.json();
        const productos = data.productos;

        console.log("\nLISTA DE PRODUCTOS");
        console.table(productos);

        productos.forEach((producto) => {

            console.log(
                `Producto: ${producto.nombre} | Categoría: ${producto.categoria} | Precio: $${producto.precio} | Stock: ${producto.stock}`
            );

            if (producto.stock > 0) {
                console.log("Estado: Disponible");
            } else {
                console.log("Estado: Agotado");
            }
        });

        return productos;

    } catch (error) {
        console.error("Error al cargar productos:", error.message);
        return [];
    }
}

async function cargarTodo() {

    try {

        const [respuestaEmpleados, respuestaProductos] = await Promise.all([
            fetch("../data/empleados.json"),
            fetch("../data/productos.json")
        ]);

        if (!respuestaEmpleados.ok || !respuestaProductos.ok) {
            throw new Error("No fue posible cargar uno o ambos archivos JSON.");
        }

        const [dataEmpleados, dataProductos] = await Promise.all([
            respuestaEmpleados.json(),
            respuestaProductos.json()
        ]);

        const empleados = dataEmpleados.empleados;
        const productos = dataProductos.productos;

        console.log("\n==============================");
        console.log("RESUMEN FINAL");
        console.log("==============================");
        console.log(`Total de empleados cargados: ${empleados.length}`);
        console.log(`Total de productos cargados: ${productos.length}`);

    } catch (error) {
        console.error("Error en la carga general:", error.message);
    }

}

(async () => {

    await cargarEmpleados();

    await cargarProductos();

    await cargarTodo();

})();