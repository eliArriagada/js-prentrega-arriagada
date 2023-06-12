let listaProductos = document.getElementById("listaProductos")
let temporadas = document.getElementById("temporadas")
let testimonio = document.getElementById("testimonio")
let details = document.getElementById("details")
let carroCompra = JSON.parse(localStorage.getItem("carroCompra"))

if (!carroCompra) {
  carroCompra = []
}


productos.forEach(producto => {
  listaProductos.innerHTML += crearHtmlProducto(producto)
})

campanias.filter(campania => campania.activo)
  .forEach(
    campania => {
      temporadas.innerHTML += crearHtmlTemporada(campania)
    })

testimonios.forEach(testimonioData => {
  testimonio.innerHTML += crearHtmlTestimonio(testimonioData)
})


let productosHtml = document.getElementsByClassName("producto");

for (let index = 0; index < productosHtml.length; index++) {
  let producto = productosHtml[index]
  producto.addEventListener("click", respuestaClick)

  function respuestaClick() {
    localStorage.setItem("productoSeleccionado", producto.classList[2])
    details.click()
  }

}

actualizarCarro()

function crearHtmlProducto(producto) {
  return `<div class="col producto ${producto.id}">
                <div class="card">
                <img
                    src="${producto.urlImagen}"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <h5 class="card-text precio">$${producto.precio}</h5>
                </div>
                </div>
            </div>`
}


function crearHtmlTemporada(campania) {
  const productos = campania.productos.map(producto => {
    return crearHtmlProducto(producto)
  }).join("")

  return `<div class="row text-center align-items-center py-5">
    <div class="col">
      <hr class="border border-primary border-3 opacity-75" />
    </div>
    <div class="col">
      <h2 class="">${campania.nombre}</h2>
    </div>
    <div class="col">
      <hr class="border border-primary border-3 opacity-75" />
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
${productos}
  </div>`
}


function crearHtmlTestimonio(testimonio) {
  return `
   <div class="col-md-4 mb-0 d-flex align-items-stretch">
              <div class="card testimonial-card">
                <div class="card-up ${testimonio.fondo}"></div>
                <div class="avatar mx-auto bg-white">
                  <img
                    src="${testimonio.avatar}"
                    class="rounded-circle img-fluid"
                  />
                </div>
                <div class="card-body">
                  <h4 class="mb-4">${testimonio.nombre}</h4>
                  <hr />
                  <p class="dark-grey-text mt-4">
                    <i class="fas fa-quote-left pe-2"></i>${testimonio.descripcion}
                  </p>
                </div>
              </div>
            </div>`
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