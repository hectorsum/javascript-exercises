var deportes = ['golf','boxeo','ciclismo','hockey']
var n = deportes.includes('golf'); //Verifica si el argumento se encuentra en el array
console.log(n); // true  

var index = deportes.indexOf('golf');//Consulta en que index se encuentra el argumento
console.log(index); // 1

var question = Array.isArray(deportes)
console.log(question) //true

var joining = deportes.join('.'); //Devuelve el arreglo como cadena separado en punto
console.log(joining) // golf.boxeo.ciclismo.hockey

var array1 = ['Pablo','Pedro'];
var array2 = ['Laura','Jose','David'];
var result = array1.concat(array2); // Unir dos arrays

result.fill('Pera') //Llena todo el array con 'Pera'
result.fill('Pera',0,2) // Llena 'Pera' desde el index 0 hasta el 2

result.filter(function(string){ //Sirve para filtrar con diferentes métodos
    return string.startsWith('L'); 
})

var f = result.entries() // Retorna un objeto array con keys/values
for(value of f){
    console.log(value)
}

var animales = ['tigre','ballena','lobo','aguila'];
animales.pop() // Elimina el último elemento del arreglo
animales.shift() // Elimina el primer elemento del arreglo
animales.unshift('caballo') // Agrega elemento al comienzo del arreglo 
animales.push('perro') //Agrega elemento al final del array
animales.reverse() //Revierte el orden del arreglo
animales.slice(1,2) //Devuelve el array del rango pasado de index
animales.sort() //Ordena alfabeticamente el array
animales.splice(1,0,'oso','gallina') //Agrega elementos apartir del index 1
animales.indexOf('tigre')
animales.toString() //Convierte el arreglo en una cadena
