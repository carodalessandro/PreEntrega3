function inicio() {
  let inicio = prompt(
    "Indique que acción desea realizar: comprar(1) o conocer productos(2)"
  );
  if (inicio == "1") {
    function carritoDeCompras() {
      let entrada = prompt(
        "Ingrese un producto (Cupcakes, Brownie, Box, Minicakes) para agregar al carrito"
      );

      let totalCompra = parseInt(0);
      let cupcakes = " ";
      let brownie = " ";
      let box = " ";
      let minicakes = " ";
      let sumaBrownie = parseInt(0);
      let sumaBox = parseInt(0);
      let sumaCupcakes = parseInt(0);
      let sumaMinicakes = parseInt(0);
      let productosAgregados;

      function total(n) {
        totalCompra += parseInt(n);
        return totalCompra;
      }

      function agregarProductos() {
        productosAgregados =
          cupcakes + " " + brownie + " " + box + " " + minicakes;
        return productosAgregados;
      }

      function mensaje() {
        return (
          "Productos Agregados: " +
          agregarProductos() +
          " Total de la compra: $" +
          totalCompra
        );
      }

      while (entrada != "finalizar") {
        switch (entrada) {
          case "Cupcakes":
            total(500);
            sumaCupcakes = sumaCupcakes + parseInt(1);
            cupcakes = "Cupcakes " + sumaCupcakes + " unidad/es. ";
            agregarProductos();
            alert("Cupcakes $500. " + mensaje());
            break;

          case "Brownie":
            total(3000);
            sumaBrownie = sumaBrownie + parseInt(1);
            brownie = "Brownie " + sumaBrownie + " unidad/es. ";
            agregarProductos();
            alert("Brownie $3000. " + mensaje());
            break;

          case "Box":
            total(4000);
            sumaBox = sumaBox + parseInt(1);
            box = "Box " + sumaBox + " unidad/es. ";
            agregarProductos();
            alert("Box $4000. " + mensaje());
            break;

          case "Minicakes":
            total(1500);
            sumaMinicakes = sumaMinicakes + parseInt(1);
            minicakes = "Minicakes " + sumaMinicakes + " unidad/es. ";
            agregarProductos();
            alert("Minicakes $1500. " + mensaje());
            break;

          default:
            alert("Por favor, ingrese un producto de la lista. Muchas gracias");
            break;
        }
        entrada = prompt(
          "Ingrese un producto (Cupcakes, Brownie, Box, Minicakes) o finalizar para terminar"
        );
      }
    }
    carritoDeCompras();
  } else if (inicio == "2") {
    function conocerProductos() {
      let descripcionProductos = prompt(
        "Indique que producto desea conocer (Cupcakes, Brownie, Box, Minicakes) o si desea conocer el Stock disponible(Stock)"
      );

      class Producto {
        constructor(producto, porciones, precio, stock) {
          this.producto = producto;
          this.porciones = parseInt(porciones);
          this.precio = parseInt(precio);
          this.stock = parseInt(stock);
        }
      }

      const productos = [];
      productos.push(new Producto("Cupcakes", 1, 500, 24));
      productos.push(new Producto("Brownie", 10, 3000, 5));
      productos.push(new Producto("Box", 2, 4000, 0));
      productos.push(new Producto("Minicakes", 4, 1500, 10));

      const listaCupcakes = productos.find((el) => el.producto == "Cupcakes");
      const listaBrownie = productos.find((el) => el.producto == "Brownie");
      const listaBox = productos.find((el) => el.producto == "Box");
      const listaMinicakes = productos.find((el) => el.producto == "Minicakes");
      const disponibilidadStock = productos.filter((el) => el.stock != 0);

      while (descripcionProductos != "finalizar") {
        switch (descripcionProductos) {
          case "Cupcakes":
            console.log(listaCupcakes);
            break;

          case "Brownie":
            console.log(listaBrownie);
            break;

          case "Box":
            console.log(listaBox);
            break;

          case "Minicakes":
            console.log(listaMinicakes);
            break;

          case "Stock":
            console.log(disponibilidadStock);
            break;

          default:
            alert("Por favor, ingrese una opción válida. Muchas gracias");
            break;
        }
        descripcionProductos = prompt(
          "¿Desea conocer otro producto o el Stock disponible? (Cupcakes, Brownie, Box, Minicakes, Stock) o coloque finalizar para terminar"
        );
      }
    }
    conocerProductos();
  }
}
inicio();

{
  /* <div class="contenedor">
<div class="tarjetas card" style="width: 18rem">
  <img src="box.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Box</h5>
    <p class="card-text">
      Tres minicakes a elección, acompañadas de alfajores y bombones
      surtidos. Porciones: 2 $4000
    </p>
    <a href="#" class="boton btn btn-primary">Agregar al carrito</a>
  </div>
</div>
</div>


<div class="contenedor">
<table class="table">
  <thead>
    <tr>
      <th scope="col">cantidad</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cantidad</td>
      <td>Producto</td>
      <td>precio</td>
    </tr>
    <td>Total compra: $</td>
  </tbody>
</table>
</div> */
}
