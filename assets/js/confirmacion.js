let numeroOrden = document.getElementById("numeroOrden");
let botonHome = document.getElementById("botonHome");
numeroOrden.innerHTML = generadorCodigo()

const eventoRedirigir = timer => {
    return new Promise(resolve =>{
        setTimeout(()=>
        resolve(true),
        timer)
    })

}

eventoRedirigir(10000)
.then(()=>
    Swal.fire({
        title: 'Va ser redirigido al home?',
        text:'recuerde que su orden fue enviada a su correo',
        showDenyButton: false,
        showCancelButton: false,
        showConfirmButton:true,
    }).then(() => {
        botonHome.click()
    })
)

function generadorCodigo() {
    const alfabeto = "ABCDFGHJKLMNPQRSTVWYZ"
    let codigo = "";
    do {
        codigo +=alfabeto[Math.floor(Math.random() * alfabeto.length)];
    } while (codigo.length<3);
    codigo+= Math.floor(Math.random() * 1000)
    return codigo
  }


