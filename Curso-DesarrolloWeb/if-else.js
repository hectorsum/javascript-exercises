const puntaje = 1000;
const logueado = true;
const edad = 18;

if(logueado){
    console.log('Logueado')
}else{
    console.log('No logueado')
}

if(edad){ //Tmb sirve para saber si la variable tiene contenido
    console.log('Eres mayor de edad!')
}else{
    console.log('No eres mayor de edad!')
}

let dinero = 500;
let precioCarrito = 300;
let tarjeta = true;

if (dinero>=precioCarrito){ //Solo va ejecutar la primera condicion que fue true
    console.log('Pago suficiente')
}else if (tarjeta){
    console.log('Pagaste con tarjeta')
}else{
    console.log('Fondos insuficientes')
}