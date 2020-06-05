//document.write('<h1>Hello World</h1>');

// {
//     "username":'Hector',
//     "score":10.23,
//     "hours":14,
//     "proffesional": true,
//     "friends":['sdasd','asdadsa']
// }

// var name = 'john';
// let last_name = 'carter';
// const PI = 3.1415
// const id = 1
// username1 = "hola"
//console.log(name,last_name)

///////////////////////////
//Objeto Global: windows

// var a = 1;
// var b = "Hector";

// console.log("Fernando")
// console.warn("Hector")
// console.error("Javier")
// console.info("Javier")
//alert("Fernando")


// console.log(a)
// var a = "Fernando";


// Datos primitivos
var num = 10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

bol = 10;
// console.log(bol)

var obj = {
    numero: 10,
    nombre:"hector",
    edad:20,
    objHijo:{
        numero2:20,
        nombre2:"mario"
    }
};
// let persona = {
//     cod: 1,
//     nombre:"Hector",
//     apell:"Herrera",
//     edad:20,
// }


//console.log(persona,obj)

// var a = 10;
// var b = a;
// console.log("a: ",a);
// console.log("b: ",b);
// var b = 20;
// console.log("a: ",a);
// console.log("b: ",b);

// var person = {
//     cod:123,
//     nombre:"Juana",
//     apell: "Perez"
// }
// var backup = person;
// var alumno = {
//     cod:1,    
//     nombre: person.nombre,
//     apell: person.apell
// }
// backup.nombre = "Pedrooooooooo"
// console.log(person.nombre)
// console.log(backup)

// person.nombre = "Hector"
// person.apell = "Herrera"
// console.log(person,backup)

//var backup = person;

// console.log(x);
// var x = 'var';
// console.log(x)

///// Notación Punto /////
// var person = {
//     nombre:"Juana",
//     apell: "Perez",
//     edad:25,
//     direccion: {
//         pais: "Costa Rica",
//         ciudad: "San José",
//         edificio:{
//             nombre:"Edificio principal",
//             telf: "2222-3333"
//         }
//     }
// }
// console.log(person.direccion.pais)
// console.log(person.direccion)

// person.direccion.zipcode = 11101
// console.log(person.direccion.zipcode)

// console.log(person.direccion.edificio.telf)

//Sirve para ahorrar tiempo almacenando en nueva variable
// var edificio = person.direccion.edificio;

//Agregamos nuevo dato al objeto referenciando con la nueva variable creada
// edificio.nopiso  = "8vo piso";
// console.log(persona)

//// Notacion corchete ////

// var campo = "edad2";

// console.log(person[campo]);
// console.log(person);

// worker = {
//     name:"Hector",
//     last_name:"Herrera",
//     address:{
//         zipcode:01,
//         city:"Lima",
//         district:"Comas",
//         local_address:{
//             neighborhood:"Los Pinos",
//             block:"U",
//             lot:"N°50"
//         }
//     },
//     career:{
//         name:"System's Engineering",
//         faculty:"Engineering",
//         graduated:true,
//     }
// }

// worker.career.name = "Medicine"
// worker.career.faculty = "Health"
// var career = worker.career

// if (worker["career"]["graduated"]){
//     console.log("Graduated: ",worker["career"]["graduated"])
// }else{
//     console.log('Not graduated yet')
// }

// function primeraFuncion(){
//     console.log('Invocada')
// }

// var myFunction = primeraFuncion();
// console.log(myFunction)

function obtenerAletorio(){
    return Math.random();
}
function obtenerNombre(){
    return "Juan";
}
function esMayor05(){
    if (obtenerAletorio() > 0.5){
        return true;
    }else{
        return false;
    }
}
function crearPersona(nombre,apellido){
    //var obj = {};
    return { //Objeto anonimo
        nombre : nombre,
        apellido : apellido
    }
}
function creaFuncion(){
    return function(nombre){ //Funcion anónima
        console.log("Nombre: "+nombre);
        return function(apell){
            console.log("Apellido: "+apell)
            return function(edad){
                console.log("Edad:",edad);
            }
        }
    }
}

var primeraFuncion = creaFuncion();
var segundaFuncion = primeraFuncion("Hector");
var terceraFuncion = segundaFuncion("Herrera")
console.log(terceraFuncion(20));

// var persona = crearPersona("Maria","Paz");
// console.log(persona.nombre);
// console.log(persona.apellido)

// if (esMayor05()){
//     console.log("Es mayor a 0.5")
// }else{
//     console.log("Es menor a 0.5")
// }



