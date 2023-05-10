alert("existe una operacion matematica que dice que todos numero si es PAR se multiplica por 3+1 (3n+1) y si es IMPAR se divide por 2(/2) siempre va a tender al 1")
let numeroIngresado = prompt("ingresa un numero entero positivo para verificar");
let contadorIntento = 0;
while(numeroIngresado!= 1){
    numeroIngresado = calculadoraCollatz(numeroIngresado);
    contadorIntento++;
    console.log("numero: "+ numeroIngresado);
}

alert("El numero llego a 1 en "+contadorIntento+ " intentos");


function calculadoraCollatz(numero){
    let resultado = 0;
    if(numero%2==0){
        //Es par
        resultado = numero/2;
    }else {
        //Es impar
        resultado = (numero*3)+1;
    }
    return resultado
}