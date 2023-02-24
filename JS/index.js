class Mercaderia {
  constructor(mercaderia) {
    this.id = mercaderia.id;
    this.tipo = mercaderia.tipo;
    this.precio = mercaderia.precio;
    this.cantidad = mercaderia.cantidad;
    this.precioTotal = mercaderia.precio;
  }

  agregarUnidad() {
    this.cantidad++;
  }

  quitarUnidad() {
    this.cantidad--;
  }

  actualizarPrecioTotal() {
    this.precioTotal = this.precio * this.cantidad;
  }
}

function imprimirProductosEnHTML(array) {
  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  for (const mercaderia of array) {
    let card = document.createElement("div");
    card.innerHTML = `
        <div class="row justify-content-around">
            <div class="marginPedidos card " style="max-width: 20rem;">
                <img src="${mercaderia.img}" class="imgSize img-fluid rounded-start" alt=" " />
                <div class="card-body">
                    <h5 class="card-title">${mercaderia.tipo}</h5>
                    <p class="card-text">${mercaderia.descripcion}</p>
                    <button id="agregar${mercaderia.tipo}${mercaderia.id}" type="button" class="boton btn btn-primary">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
        `;
    contenedor.appendChild(card);

    let boton = document.getElementById(
      `agregar${mercaderia.tipo}${mercaderia.id}`
    );
    boton.addEventListener("click", () => agregarAlCarrito(mercaderia));
  }
}

function agregarAlCarrito(producto) {
  let index = carrito.findIndex((elemento) => elemento.id === producto.id);
  console.log({ index });

  if (index != -1) {
    carrito[index].agregarUnidad();
    carrito[index].actualizarPrecioTotal();
  } else {
    let mercaderia = new Mercaderia(producto);
    mercaderia.cantidad = 1;
    carrito.push(mercaderia);
  }

  localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  imprimirTabla(carrito);
}

function obtenerPrecioTotal(array) {
  return array.reduce((total, elemento) => total + elemento.precioTotal, 0);
}

function imprimirTabla(array) {
  let contenedor = document.getElementById("tablaCarrito");
  contenedor.innerHTML = "";

  let tabla = document.createElement("div");

  tabla.innerHTML = `
        <div class="contenedor">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Precio Total</th>
                    </tr>
                </thead>

                <tbody id="bodyTabla">

                </tbody>
            </table>
        </div>

    `;

  contenedor.appendChild(tabla);

  let bodyTabla = document.getElementById("bodyTabla");

  for (let mercaderia of array) {
    let datos = document.createElement("tr");
    datos.innerHTML = `
                <td>${mercaderia.cantidad}</td>
                <td>${mercaderia.tipo}</td>
                <td>${mercaderia.precio}</td>
                <td>$${mercaderia.precioTotal}</td>
      `;

    bodyTabla.appendChild(datos);
  }

  let precioTotal = obtenerPrecioTotal(array);
  let accionesCarrito = document.getElementById("accionesCarrito");
  accionesCarrito.innerHTML = `
		<h5 class= "contenedor">Total Compra: $${precioTotal}</h5>
	`;
}

function chequearCarritoEnStorage() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));

  if (contenidoEnStorage) {
    let array = [];

    for (const objeto of contenidoEnStorage) {
      let mercaderia = new Mercaderia(objeto);
      mercaderia.actualizarPrecioTotal();
      array.push(mercaderia);
    }

    imprimirTabla(array);

    return array;
  }

  return [];
}

function limpiarCarrito() {
  let eliminar = document.getElementById("eliminarCarrito");
  eliminar.innerHTML = `<button id="eliminarCarrito" type="button" class= "boton btn btn-primary">
              Eliminar Carrito 
              </button>`;

  eliminar.onclick = () => {
    localStorage.clear();
  };
}
limpiarCarrito();

const productos = [
  {
    id: 0,
    tipo: "Box",
    descripcion: `Tres minicakes a elección, acompañadas de alfajores y bombones surtidos.
      Porciones: 2 
      Precio: $4000`,
    precio: 4000,
    img: "./img/box.jpg",
  },
  {
    id: 1,
    tipo: "Brownie",
    descripcion: `Tarta Brownie de chocolate con toppings de crema y dulce de leche. Decorada con frutos rojos.
      Porciones: 10 
      Precio: $3000`,
    precio: 3000,
    img: "./img/brownie.jpg",
  },
  {
    id: 2,
    tipo: "Cupcakes",
    descripcion: `Cupcakes de vainilla, con topping a elección, decorados con frutas de estación."
      Porciones: 1 
      Precio:$500`,
    precio: 500,
    img: "./img/cupcakes.jpg",
  },
  {
    id: 3,
    tipo: "Mini Red Velvet",
    descripcion: `Bizcochuelo aterciopelado relleno con un glaseado de queso con toques de naranja."
      Porciones: 2 
      Precio: $1500`,
    precio: 1500,
    img: "./img/minicakes.jpg",
  },
];

imprimirProductosEnHTML(productos);

let carrito = chequearCarritoEnStorage();
