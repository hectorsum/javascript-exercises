//Function declaration

// saludar('Hector','Desarrollador Web') //Esto no dará error porque se trata de una declaración de función
// saludar()
// saludar('Maria','Veterinaria')
// saludar('Laura')


// El "No sabemos" aplica para cuando se declara la función pero con un parametro faltante
function saludar(nombre = "Visitante",trabajo = "No sabemos"){ 
    console.log(`Hola ${nombre}, tu eres ${trabajo}`);
}

// const saludar = (nombre,trabajo) => console.log(`Hola ${nombre}, tu eres ${trabajo}`);

//suma(2) //Declarar antes de haber creado la función, dará error, porque está siendo declarada en una variable

// //Function expression
const suma = (a=0,b=0) => a+b; //En caso el user no mande algún parametro, se aplica 0


// IIFIE Funciones que se declaran así mismas, no hay que llamarlas

// (function(tecnologia){
//     console.log("AQUI ESTOY!! aprendiendo"+tecnologia);
// })('Javascript')
// (function(a,b){
//     console.log(`La suma es ${a+b}`)
// }(1,2))
var nombre = "Hector"

const saludar2 = (function(nombre){
    console.log(`Hola ${nombre}`)
}(nombre))


