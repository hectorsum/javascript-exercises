// class Persona{
//     constructor(nombre,apellido,altura,edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.altura = altura
//         this.edad = edad
//     }

//     saludar(personaObjetivo){
//         console.log(`Hola, ${personaObjetivo.nombre}, como estás?`);
//     }
//     soyAlto(){
//         return this.altura > 1.8;  
//     }
//     soyMayor(personaObjetivo){
//         return (this.edad>personaObjetivo.edad?`${this.nombre} es mayor que ${personaObjetivo.nombre}`:`${this.nombre} no es mayor`)
//     }
// }

// class Desarrollador extends Persona{
//     constructor(nombre,apellido,altura){ //Se va heredad el parametro de edad
//         super(nombre,apellido,altura)
//     }
//     saludar(){
//         console.log('Hola Mundo!')
//     }
// }


class Persona{
    constructor(nombre,apellido,dni){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y mi dni es ${this.dni}`)
    }
}

class Estudiante extends Persona{ // Herencia !
    constructor(codigo,carrera,cursos,nombre,apellido,dni){ //Atributos propios + que heredan
        super(nombre,apellido,dni) //Atributos que hereda
        this.codigo = codigo;
        this.carrera = carrera
        this.cursos = cursos
    }
    
    indentificarse(){
        console.log(`Mi apellido es ${this.apellido} y estudio ${this.carrera}`)
    }
    estudiar(){
        console.log(`Soy ${this.nombre} y llevo los cursos de ${this.cursos}`)
    }
}

class Profesor extends Persona{
    constructor(codigo,especialidad,maestria,nombre,apellido,dni){
        super(nombre,apellido,dni)
        this.codigo = codigo;
        this.especialidad = especialidad;
        this.maestria = maestria;
    }
    tieneMaestria(){
        return this.maestria;
    }
}











