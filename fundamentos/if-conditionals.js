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

function esMayorDeEdad(persona){
    return persona.edad>=MAYORIA_DE_EDAD
}
function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(juan)