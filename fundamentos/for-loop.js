var hector = {
    nombre:"Hector",
    apellido:"Herrera",
    edad:20,
    peso:60
}

console.log(`Al inicio del año ${hector.nombre} pesa ${hector.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso+=INCREMENTO_PESO
const adelgazar = persona => persona.peso-=INCREMENTO_PESO

///  Init var, condición, incrementar cont i 
for (var i=1;i<=DIAS_DEL_ANIO;i++){
    var random = Math.random() //Se genera random entre 0 y 1
    if (random<0.25){ //25%
        //Aumenta de peso
        aumentarDePeso(hector)
    }else if (random<0.5){
        //Adelgaza
        adelgazar(hector)
    }
}
/*ToFixed, especifica la cant de decimales a mostrar*/
console.log(`Al final del año ${hector.nombre} pesa ${hector.peso.toFixed(2)}`)




