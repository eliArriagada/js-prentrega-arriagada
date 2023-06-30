let carroCompra = JSON.parse(localStorage.getItem("carroCompra"));

let carroVacio = document.getElementById("carroVacio");
let carroProductos = document.getElementsByClassName("carro-productos");
let tablaDatos = document.getElementById("tablaDatos");
let valorEnvio = document.getElementById("valorEnvio");
let valorTotalPedido = document.getElementById("valorTotalPedido");
let botonPagar = document.getElementById("botonPagar");
let confirmacion = document.getElementById("confirmacion");
let region = document.getElementById("region");
let comuna = document.getElementById("comuna");
let direccion = document.getElementById("direccion");
let numeracion = document.getElementById("numeracion");
let infoAdicional = document.getElementById("info-adicional");
let botonConfirmarDireccion = document.getElementById("botonConfirmarDireccion");


let envio = 0;
valorEnvio.innerHTML = envio;

 fetch('https://api.pktuno.cl/Api/Cobertura/Regiones')
.then(response=>response.json())
.then(response=>poblarRegion(response))


function poblarRegion(regiones){
    regiones.forEach(r => {
        region.innerHTML += `<option value="${r.clave}">${r.region}</option>`

    });

}
const actualizarComuna = async () => {
    await fetch(`https://api.pktuno.cl/Api/Cobertura/Comunas/${region.value}`)
    .then(response=>response.json())
    .then(response=>poblarComunas(response))
  }
region.addEventListener('change',actualizarComuna)


function poblarComunas(comunas){

    comuna.innerHTML = `<option value="">Seleccionar</option>`
    comunas.forEach(c => {
        comuna.innerHTML += `<option value="${c.clave}">${c.comuna}</option>`

    });

}

botonConfirmarDireccion.addEventListener('click',confirmarDireccion)
function confirmarDireccion(){
    
   if(comuna.value==''){
    Swal.fire({
        title: 'Error al guardar la direccion',
        text: `No ha seleccionado una comuna.`,
        icon: 'error',
      })
    return;
   }
    envio = Math.floor(parseInt(comuna.value)/10)
500,8

    if(region.value=='RM'){
        envio = Math.floor(envio)
    }else{
        envio = Math.floor(envio*10)
    }

    Swal.fire({
        title: 'Se ha agregado la direccion',
        text: `El envio calculado es de $${envio}.`,
        icon: 'success',
      })

    valorEnvio.innerHTML = envio
    poblarTabla()
}



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


botonPagar.addEventListener("click", respuestaBotonPagar)

function respuestaBotonPagar() {
    if(direccion.value==''){
        Swal.fire({
            title: 'Debe agregar una direccion',
            text: `Se debe hacer el calculo de envio.`,
            icon: 'error',
          })
        return;
       }

    Swal.fire({
        title: 'Esta seguro que desea pagar?',
        text: `Se generara una orden de compra por el monto ${valorTotalPedido.innerHTML}.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si deseo comprar!'
      }).then((result) => {
        if (result.isConfirmed) {
            confirmacion.click()
            limpiarCarro()
        }
      })
}

function limpiarCarro(){
    carroCompra = [];
    localStorage.setItem("carroCompra", JSON.stringify(carroCompra));
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