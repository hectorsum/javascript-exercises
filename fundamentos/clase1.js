
// var nombre = "Hector";
// var apellido = "Herrera";
// var edad = 28;
// var peso = 75;

// console.log("Hola "+ nombre + ' ' + apellido);
// console.log('Tengo '+edad)
// console.log(peso)

var nombre = "Hector", apellido = "Herrera";
var nombreEnMayusculas = nombre.toUpperCase()
console.log(nombreEnMayusculas)
var apellidoEnMinusculas = apellido.toLocaleLowerCase()
console.log(apellidoEnMinusculas)

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre +''+ apellido
// console.log(nombreCompleto)


var nombreCompleto = `${nombre} ${apellido.toUpperCase}`

//Indice 1 , Indice 2
//var str = nombre.charAt(1) + nombre.charAt(2)

// Agarrar entre rangos de indice
var str = nombre.substr(1,2)

function mostrarUltima(nombre){
    return 'Su ultima letra es: '+nombre.substr(-1)
}

console.log(mostrarUltima('Maria'))




