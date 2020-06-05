var hector = {
    nombre: "Hector",
    apellido: "Herrera",
    edad: 20,
    ingeniero: false,
    cantante: false
}

function imprimirProfesiones(persona){
    if (persona.ingeniero===true){
        console.log(`${persona.nombre} es: Ingeniero`)
    }else{
        console.log('No es ingeniero')
    }

    if (persona.edad>=18){
        console.log(`${persona.nombre} es mayor de edad`)
    }
}
imprimirProfesiones(hector)
