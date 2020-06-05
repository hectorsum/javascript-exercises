var x = 4
var y = "4"
x == y //Compara el contenido de las variables
x === y //Compara el tipo de variable (Usar esto)

var hector = {
    nombre: "Hector"
}
// var otraPersona = {
//     nombre: "Hector"
// }

//var otraPersona = hector

var otraPersona = {
    ...hector
}