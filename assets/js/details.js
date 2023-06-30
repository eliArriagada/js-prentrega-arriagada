
let home = document.getElementById("home")
let idSeleccionado = localStorage.getItem("productoSeleccionado")
let carroCompra = JSON.parse(localStorage.getItem("carroCompra"))
if (!carroCompra) {
    carroCompra = []
}
let titulo = document.getElementById("titulo")
let precio = document.getElementById("precio")
let descripcion = document.getElementById("descripcion")
let imagen = document.getElementById("imagenProducto")

let botonMenos = document.getElementById("botonMenos")
let botonMas = document.getElementById("botonMas")
let botonAgregar = document.getElementById("botonAgregar")

let cantidad = document.getElementById("cantidad")
let pedidoEspecial = document.getElementById("pedidoEspecial")
let contenedorPedidoEspecial = document.getElementById("contenedorPedidoEspecial")
let alertPlaceholder = document.getElementById('liveAlertPlaceholder')

if (!idSeleccionado) {
    home.click()
}
const producto = productos.find(producto => producto.id == idSeleccionado)

titulo.innerHTML = producto.nombre
precio.innerHTML += producto.precio
descripcion.innerHTML = producto.descripcion
imagen.innerHTML = imagenHtmlProducto(producto.urlImagen)
cantidad.innerHTML = 1

if (!producto.permitePersonalizacion) {
    contenedorPedidoEspecial.className = "d-none"
}

actualizarCarro()


botonMas.addEventListener("click", funcionBotonMas)

function funcionBotonMas() {
    let cantidadActual = parseInt(cantidad.innerHTML)
    cantidadActual++
    if (cantidadActual > 12) {
        return
    }
    cantidad.innerHTML = cantidadActual

}
botonMenos.addEventListener("click", funcionBotonMenos)

function funcionBotonMenos() {
    let cantidadActual = parseInt(cantidad.innerHTML)
    cantidadActual--
    if (cantidadActual < 1) {
        return
    }
    cantidad.innerHTML = cantidadActual

}


botonAgregar.addEventListener("click", funcionAgregar)

function funcionAgregar() {
    carroCompra.push(new ProductoCarro(idSeleccionado, cantidad.innerHTML, pedidoEspecial.value))
    localStorage.setItem("carroCompra", JSON.stringify(carroCompra))
    actualizarCarro()
    Swal.fire(
        'Se ha agregado exitosamente',
        `El producto <b>${producto.nombre}</b> se ha agregado exitosamente al carro.`,
        'success'
      )
    cantidad.innerHTML = 1
    pedidoEspecial.value = ""

}



function imagenHtmlProducto(url) {
    return ` <img
    src="../${url}"
    class="details-image rounded mx-auto d-block"
    alt="..."
  />`
}


function actualizarCarro() {
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