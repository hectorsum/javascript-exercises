let x = 10;

// // Declarando promesa que recibe 2 funciones como parámetro
// const p = new Promise((resolve,reject)=>{
//     if(x===10){
//         resolve('La variable es igual a 10')
//     }else{
//         reject('La variable no es igual a 10')
//     }
// });

// // then: se ejecuta esto cuando la promesa se cumpla
// p.then(res=>{
//     console.log('success: '+res)
// }) // catch: cuando la promesa no se cumpla
// .catch(error => {
//     console.log('error: '+error)
// })

// console.log('1. Proceso iniciado')
// setTimeout(() => {
//     x = x * 3 + 2;
//     console.log('2. Proceso terminado')
// }, 2000);
// console.log('3. El resultado es: '+x)


// const promesa = new Promise((resolve,reject)=>{ //Esto tercero
//     setTimeout(() => {
//         x = x * 3 + 2;
//         console.log('2. Proceso terminado');
//         resolve(x)
//     }, 2000);
// })
// console.log('1. Proceso iniciado') // Esto se ejecuta primero

// promesa.then(res=>{                 // Esto tercero
//     console.log(`3. El resultado es ${res}`)
// })

// console.log('4. Proceso') // Esto segundo

let usuarios = [
{
    id: 1,
    nombre: 'Marcos'
},
{
    id: 2,
    nombre: 'Lena'
}];

let telefonos = [
{
    id: 3,
    telefono: 12345688
},
{
    id: 2,
    telefono: 84848282
}];

let ciudades = [
    {
        id: 1,
        ciudad: 'Lima'
    },
    {
        id: 2,
        ciudad: null
    }
]

const obtenerUsuario = id =>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario => usuario.id === id)){
            resolve('El usuario existe')                                    
        }else{
            reject('El usuario no existe')
        }
    })
}
const obtenerTelefono = id =>{
    return new Promise((resolve,reject)=>{
        if(telefonos.find(telefono => telefono.id === id)){
            resolve('El telefono existe');
        }else{
            reject('El telefono no existe')
        }
    })
}
const obtenerCiudad = (id) =>{
    return new Promise((resolve,reject)=>{
        if (ciudades.find(element => element.id === id)){
            resolve('Ciudad existe')
        }else{
            reject('Ciudad no existe')
        }
    })
}

obtenerUsuario(1) //Concatenando promesas
.then(res =>{
    console.log(res)
    return obtenerTelefono(1)
})
.then(telf => {
    console.log(telf)
    return obtenerCiudad(1)
})
.then(ciudad => {
    console.log(ciudad)
})
.catch(error =>{
    console.log(error)
})