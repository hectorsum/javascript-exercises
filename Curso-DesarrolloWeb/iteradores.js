// const pendientes = ['Tarea','Comer','Proyecto','Estudiar Javascript']

// // Un arreglo con objeto
// const carrito = [
//     {id:1,producto:'Libro'},
//     {id:2,producto:'Camisa'},
//     {id:3,producto:'Disco'}
// ]
// // Un objeto
// let automovil = {
//     modelo:'Camaro',
//     motor:6.0
// }

// // for (let i = 0;i < pendientes.length;i++){
// //     console.log(pendientes[i])
// // }

// // Otra forma de iterar
// // for (pendiente of pendientes){
// //     console.log(pendiente);
// // }
// // for (producto of carrito){
// //     console.log(producto.producto); //Iterando objeto en el arreglo y el key producto
// // }
// // for (info of Object.values(automovil)){ //Iterando objetos directamente
// //     console.log(info)
// // }

// // Acceder a los valores de forma individual
// let nuevoArreglo = pendientes.forEach(tarea => {
//     // console.log(tarea)
// })

// //El map crea una copia del arreglo
// let nuevoArreglo2 = pendientes.map(tarea => tarea)


// // Iterar los values de un objeto
// Object.values(automovil).forEach(tarea => console.log(tarea))
// Object.keys(automovil).forEach(tarea => console.log(tarea))
// // console.log(nuevoArreglo)
// // console.log(nuevoArreglo2)


nuevoArreglo = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
persona = {
    codigo:123,
    nombre: 'Hector',
    apell: 'Herrera',
    dni: '74710901',
    fechNac: '06-06-1999'
}
const carrito = [
    {id:1,producto:'Libro'},
    {id:2,producto:'Camisa'},
    {id:3,producto:'Disco'}
]


// for (elemento of nuevoArreglo){ //Iterando un arreglo
//     console.log(elemento)
// }


// Iterar en una sola linea Objetos
// Object.values(persona).forEach(element => console.log(element))
// Object.keys(persona).forEach(element => console.log(element))

// let valores = Object.values(persona).forEach(element => {
//     console.log(element)
// });

for (values of carrito){
    console.log(values.producto)
}

// for (element of nuevoArreglo){
//     console.log(element)
// }