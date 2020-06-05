function heredadDe(prototipoHijo,prototipoPadre){
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre,apellido,altura,edad){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.edad = edad
};
Persona.prototype.saludar = function(personaObjetivo){
    console.log(`Hola, ${personaObjetivo.nombre}, como estás?`);
} 
Persona.prototype.soyAlto = function(){
    return this.altura > 1.8;  
}
Persona.prototype.soyMayor = function(personaObjetivo){
    return (this.edad>personaObjetivo.edad?`${this.nombre} es mayor que ${personaObjetivo.nombre}`:`${this.nombre} no es mayor`)
}
function Desarrollador(nombre,apellido,altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}
heredadDe(Desarrollador,Persona);

Desarrollador.prototype.saludar = function(){
    console.log('Hola Mundo!')
}

let persona1 = new Desarrollador('Hector','Herrera',1.92,18);
let persona2 = new Persona('Maria','Reyes',1.60,19);
let persona3 = new Persona('Juan','Cabrera',1.70,23);
let persona4 = new Persona('Pablo','Montoya',1.67,30);
