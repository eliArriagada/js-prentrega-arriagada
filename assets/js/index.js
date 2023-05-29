class Product {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    imprimir() {
        return this.nombre + ": " + this.descripcion + " - $" + this.precio + "\n \n";
    }
    imprimirSimple() {
        return this.nombre + " - $" + this.precio + "\n";
    }
}

const productos = []
let carro = []

cargaInicial();
opcionInicial()

function cargaInicial() {
    productos.push(new Product("Alfajores 6 unidades", "Alfajores de chocolate rellenos de dulce de leche.", 1800));
    productos.push(new Product("Bomba de chocolate 6 unidades", "Bomba de chocolates que se disuelve en leche caliente y libera una bomba de sabor.", 12000));
    productos.push(new Product("Cono Rellenos 12 unidades", "Conos de helado relleno de chocolate y malvaviscos.", 15000));
    productos.push(new Product("Barras de chocolate 180g", "Barra de chocolate con leche, 180g.", 2500));
    productos.push(new Product("Monedas de chocolates 12 unidades", "Monedas de chocolate.", 1200));
}


function opcionInicial() {
    let opcion = parseInt(prompt("Bienvenido a la chocolateria Vany Ventas. \n" +
        "Ingrese que desea hacer: \n" +
        "1. Ver Productos. \n" +
        "2. Ver Carro. \n" +
        "3. Comprar."))
    switch (opcion) {
        case 1:
            desplegarProductos()
            break;
        case 2:
            verCarro();
            opcionInicial();
            break;
        case 3:
            if (sePuedeComprar()) {
                comprar()
            } else {
                alert("Primero debe seleccionar algn producto.")
                opcionInicial();
            }
            break;
        default:
            alert("Opcion ingresada no es valida.");
            opcionInicial();
            break;
    }
}

function desplegarProductos() {
    let productosImprimir = imprimirProductos(productos);
    productosImprimir += "0. Volver. \n"
    productosImprimir += "10. Ver Carro. \n"
    productosImprimir += "99. Comprar. \n"

    let opcion = 0
    let repetirPregunta = false;
    do {
        let opcion = parseInt(prompt(
            "Productos disponibles para agregar: \n" +
            productosImprimir))
        debugger

        if (isNaN(opcion)) {
            alert("Operacion Cancelada.")
            break;
        }


        if (opcion > 0 && opcion < 10) {
            const indexSeleccionado = opcion - 1;

            const productoSeleccionado = productos[indexSeleccionado];

            let cantidad = parseInt(prompt(`¿Cuántos ${productoSeleccionado.nombre} desea agregar?`))

            if (isNaN(cantidad)) {
                alert("Operacion Cancelada.")
                break;
            }
            for (let index = 0; index < cantidad; index++) {
                carro.push(productoSeleccionado)
            }

            alert(`El producto ${productoSeleccionado.nombre} se ha agregado ${cantidad} veces exitosamente.`);
        }

        if (opcion == 10) {
            verCarro();
        }

        if (opcion == 99) {
            if (sePuedeComprar()) {
                comprar()
            } else {
                alert("Primero debe seleccionar algún producto.")
                opcion = 98
            }
        }

        repetirPregunta = opcion != 0 && opcion != 99



    } while (repetirPregunta)
    debugger

    opcionInicial();
}


function verCarro() {
    if (carro.length > 0) {
        alert("Productos agregados al carro: \n" +
            imprimirProductosSimple(carro))
    } else {
        alert("No hay productos agregados al carro.")
    }
}

function imprimirProductos(lista) {
    let productosImprimir = ""
    for (let index = 0; index < lista.length; index++) {
        const producto = lista[index];
        const numero = index + 1
        productosImprimir += numero + ". " + producto.imprimir()
    }
    return productosImprimir
}

function imprimirProductosSimple(lista) {
    let productosImprimir = ""
    lista.forEach(producto => {
        productosImprimir += producto.imprimirSimple();
    });
    return productosImprimir
}


function sePuedeComprar() {
    return carro.length > 0;
}

function comprar() {

    alert(`Productos a pagar: \n ${imprimirProductosSimple(carro)} Total a pagar: ${sumarProducto(carro)}.`);
    alert(`Su numero de pedido es "${generadorCodigo()}" acercese a caja paga pagar los ${sumarProducto(carro) }.`);
    carro = []
    alert("El carro se ha limpiado.");
}


function sumarProducto(lista) {

    return lista.map(producto => producto.precio).reduce((total, precio) => total + precio, 0);
}

function generadorCodigo() {
    const alfabeto = "ABCDFGHJKLMNPQRSTVWYZ"

  return alfabeto[Math.floor(Math.random() * alfabeto.length)] +  Math.floor(Math.random() * 100);
  }