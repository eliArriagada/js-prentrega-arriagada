let carroCompra = JSON.parse(localStorage.getItem("carroCompra"));

let carroVacio = document.getElementById("carroVacio");
let carroProductos = document.getElementsByClassName("carro-productos");
let tablaDatos = document.getElementById("tablaDatos");
let valorEnvio = document.getElementById("valorEnvio");
let valorTotalPedido = document.getElementById("valorTotalPedido");

const envio = 5000;
valorEnvio.innerHTML = envio;


poblarTabla();
actualizarCarro()

function poblarTabla() {
    let totalPedido = 0;
    tablaDatos.innerHTML = ""


    for (let index = 0; index < carroCompra.length; index++) {
        const carroProducto = carroCompra[index];
        const producto = productos.find(producto => producto.id == carroProducto.id)
        let totalProducto = producto.precio * carroProducto.cantidad
        totalPedido += totalProducto;
        tablaDatos.innerHTML += crearHtmlLista(producto, carroProducto, totalProducto, index)
    }

    totalPedido += envio;
    valorTotalPedido.innerHTML = totalPedido;

    let quitarProducto = document.getElementsByClassName("quitar-producto")

    for (let index = 0; index < quitarProducto.length; index++) {
        const elemento = quitarProducto[index];
        elemento.addEventListener("click", respuestaClick)

        function respuestaClick() {
            let indexEliminar = elemento.classList[0];
            carroCompra.splice(indexEliminar, 1);
            poblarTabla();

            localStorage.setItem("carroCompra", JSON.stringify(carroCompra));
            actualizarCarro();
        }
    }

}

function crearHtmlLista(producto, carroProducto, totalProducto, indexProducto) {

    return `<tr>
    <td class = "align-baseline">
      <div class="row text-center align-items-center">
        <div class="col">
          <h4 class="titulo-producto my-0">${producto.nombre}</h4>
          <p>${carroProducto.personalizacion}</p>
        </div>
      </div>
    </td>
    <td>$${producto.precio}</td>
    <td>${carroProducto.cantidad}</td>
    <td>$${totalProducto}</td>
    <td><i class="${indexProducto} fas fa-minus-circle quitar-producto"></i></td>
  </tr>`
}

function actualizarCarro() {

    if (!carroCompra || carroCompra.length == 0) {
        for (let index = 0; index < carroProductos.length; index++) {
            const elementoCarro = carroProductos[index];
            elementoCarro.classList.add("d-none");

        }
        carroCompra = [];
        carroVacio.classList.remove("d-none");
    } else {
        carroVacio.classList.add("d-none");
    }

    let carro = document.getElementsByClassName("carro")

    let totalCarro = 0
    if (carroCompra.length > 0) {
        totalCarro = carroCompra
            .map(producto => producto.cantidad * 1)
            .reduce((total, item) => total + item)
    }
    for (let index = 0; index < carro.length; index++) {
        const element = carro[index];
        element.innerHTML = `(${totalCarro})`
    }
}