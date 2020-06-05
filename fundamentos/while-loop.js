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
const comeMucho = () => Math.random() < 0.3
const realizarDeporte = () => Math.random() < 0.4

const META = hector.peso - 3
var dias = 0

while(hector.peso > META){
    if(comeMucho()){
        aumentarDePeso(hector)
    }
    if(realizarDeporte()){
        adelgazar(hector)
    }
    dias+=1
}


/*ToFixed, especifica la cant de decimales a mostrar*/
console.log(`Pasaron ${dias} hasta que ${hector.nombre} adelgazó 3kg`)




