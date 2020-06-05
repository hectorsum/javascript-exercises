var nombre = 'Hector'
var otroNombre = 'Maria'

var persona = {
    nombre: "Hector",
    apellido: "Herrera",
    dni: "74710901",
    direccion:{
        calle:13,
        manzana:"U",
        condominio: "Los Pinos"
    }
}
if (persona.manzana==null){
    console.log('Not Found')
}else{
    console.log(persona.direccion.manzana)
}



/*Obtener atributo nombre de un objeto*/
// function imprimirNombreEnMayusculas({nombre}) { 
//     //nombre = nombre.toUpperCase()
//     //console.log(persona.nombre.toUpperCase()
//     console.log(persona.nombre.toUpperCase())
// }
// //imprimirNombreEnMayusculas(persona)
// imprimirNombreEnMayusculas({nombre:'Pepito'})
// //Va dar error porque el atributo tiene que ser nombre
// imprimirNombreEnMayusculas({nombre:'Pepito'})
