var paulo = {
    nombre: "Paulo",
    color: "negro",
    altura: 186,
    datos: {
        distrito: 'Comas'
    }
}
var camilo = {
    nombre: "Camilo",
    color: "amarillo",
    altura: 180,
    datos: {
        distrito: 'Independencia'
    }
}
var laura = {
    nombre: "Laura",
    color: "verde",
    altura: 175,
    datos: {
        distrito: 'Miraflores'
    }
}
var carolina = {
    nombre: "carolina",
    color: "verde",
    altura: 165,
    datos: {
        distrito: 'Comas'
    }
}
var sebastian = {
    nombre: "sebastian",
    color: "verde",
    altura: 162,
    datos: {
        distrito: 'Comas'
    }
}
    
// Object.keys(sebastian).forEach(iter => console.log(iter));
var personas = [paulo,camilo,laura,carolina,sebastian]

// Iterando dentro de objetos en arreglos

personas.forEach(({nombre,color}) => color==="verde"?console.log(`${nombre} le gusta el color ${color}`):console.log(`${nombre} no le gusta el color verde`));

personas.forEach(({nombre,datos:{distrito}})=> (distrito==="Comas"?console.log(`${nombre} vive en ${distrito}`):console.log(`${nombre} no es de Comas`)))



const esAlta = ({altura}) => {
    return altura > 180
}

numeros = [1,2,3,4,5,6]


//var personasAltas = personas.filter(esAlta)
//var personasAltas = personas.reduce(element.altura => element.altura)


// Iterando un arreglo de objetos
// personas.forEach( ({altura}) => console.log(altura));

// array = numeros.forEach(function(num){
//     console.log(num)
// })