var hector = {
    nombre:"Hector",
    edad: 20
}
var juan = {
    nombre: "Juan",
    apellido: "Gomez",
    edad :13
}
// Las const ponerlo en mayuscula
const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function(persona){
//     return persona.edad>=MAYORIA_DE_EDAD
// }

/*Cuando es solo 1 parametro, se puede quitar los parentesis*/ 
/*Solo funciona cuando retorna algo especifico, así como lambda*/

//const esMayorDeEdad = persona => persona.edad>=MAYORIA_DE_EDAD
const esMayorDeEdad = ( {edad} ) => edad >=MAYORIA_DE_EDAD

const esMenorDeEdad = (persona) => {
    if (!esMayorDeEdad()){
        console.log(`${persona.nombre} es menor de edad`)
    }else{
        console.log(`${persona.nombre} es mayor de edad`)
    }
}
var a=0, b=0
const calcularSuma = (a,b) => a+b
const calcularResta = (a,b) => a-b
const calcularProducto = (a,b) => a*b
const calcularDivision = (a,b) => a/b
const calcularPow = (a,b) => Math.pow(a,b)

console.log(`Suma: ${calcularSuma(10,5)}`,
`\nResta: ${calcularResta(10,5)}`,
`\nProducto: ${calcularProducto(10,5)}`,
`\nDivisión: ${calcularDivision(10,5)}`,
`\nPow: ${calcularPow(10,5)}`)


function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(juan)