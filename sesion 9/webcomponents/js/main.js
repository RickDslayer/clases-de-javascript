//custom element
class TarjetaPerfil extends HTMLElement {
    constructor() {
        super(); // Llama al constructor de HTMLElement
        this.innerHTML = `
            <div class="card">
                <img src="img/messi.jpg" alt="Messi">
                <h3>Messi</h3>
                <p>Ha ganado todo con su selección y equipos.</p>
            </div>
        `;
    }   
}
customElements.define("tarjeta-perfil", TarjetaPerfil);

//shadowDom
class MiTarjetaShadow extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      // Inyectamos estilos y estructura directamente en el Shadow DOM
      this.shadowRoot.innerHTML = `
        <style>
          p { /* Este estilo solo afecta a los <p> dentro de este Shadow DOM */
            color: blue;
            font-weight: bold;
          }
          .card {
            width: 30%;
            padding: 20px;
            border-radius: 10px;
            background-color: #e0f2fe;
            border: 2px solid #0284c7;
            font-family: Arial, sans-serif;
          }
        </style>
  
        <div class="card">
          <h2>Hola desde mi Web Component</h2>
          <p>Este párrafo está dentro del Shadow DOM.</p>
        </div>
      `;
    }
  }
  customElements.define("shadow-tarjeta", MiTarjetaShadow);

//template
const template = document.querySelector("#template-producto");
const contenedorProductos = document.querySelector("#contenedor-productos");

const clone = document.importNode(template.content, true); 

clone.querySelector(".nombre").textContent = "Mouse Gamer";
clone.querySelector(".precio").textContent = "Precio: $85.000";

contenedorProductos.append(clone);