//Object literal
const persona = {
    nombre: 'Juan',
    edad: 80,
    anioNacimiento: function(){
        return new Date().getFullYear() - this.edad; //This. hace referencia al mismo objeto, sino dará error
    }
}

console.log(`${persona.nombre} nació en ${persona.anioNacimiento().toString()}`)

// Object constructor
// function Tarea(nombre,urgencia){
//     this.nombre = nombre //Se agrega this. para saber a que instancia pertenece
//     this.urgencia = urgencia
// }

class Tarea{ //Constructor en una clase
    constructor(nombre,urgencia){
    this.nombre = nombre //Se agrega this. para saber a que instancia pertenece
    this.urgencia = urgencia
    }
}

// Crear nuevas tareas 

const tarea1 = new Tarea('Aprender Javascript','Urgente');
const tarea2 = new Tarea('Conocer a mis suegros','0')


console.log(tarea1)
