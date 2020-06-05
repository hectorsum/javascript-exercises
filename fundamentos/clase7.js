var hector = {
    nombre: "Hector",
    apellido: "Herrera",
    edad: 20,
    direccion: {
        calle: 13,
        manzana: "U",
        condominio: "Los Pinos"
    }
}
function imprimirNombreEnMayuscula(persona){
    // var nombre = persona.nombre
    var {nombre} = persona
    var {edad} = persona
    console.log(nombre.toUpperCase())
    console.log(edad)
}
function imprimirNombreyEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    //var direccion = persona['direccion']['condominio']
    var direccion = persona['direccion']['condominio']
    //console.log(`Hola me llamo ${nombre} y tengo ${edad}`)
    console.log(`Hola me llamo ${nombre} y vivo en ${direccion}`)
}
//imprimirNombreEnMayuscula(hector)
//imprimirNombreyEdad(hector)

function cumpleanos(persona){
    //return persona.edad+=1
    return { //Creando nuevo Objeto a partir de uno original y modificando los datos
        ...hector,
        nombre: "Hector Jr",
        edad: hector.edad+1
    }
}
cumpleanos(hector)