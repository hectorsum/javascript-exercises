// crear un arreglo

const numeros = [10,20,30,40,50];

// console.table(numeros)

// const meses = new Array('Enero','Febrero','Marzo')

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

meses.splice(0,3) //Eliminar entre rango de index
meses.reverse() //Hace un reverse al arreglo
meses.sort() //Ordena en orden alfabético

// for(var i = 0;i<meses.length;i++){
//     console.log(meses[i])
// }
var contador = 0

/////////////WHILE

// while(contador <= meses.length){
//     console.log(meses[contador])
//     contador++
// }

///////////////// DO WHILE
// do{
//     console.log(meses[contador])
//     contador++
// }while(contador<=meses.length)



// meses[3] = 'Abril' //Agregando 'Abril' en index 3
// meses.push('Abril') //Lo agrega al final del arreglo
// meses.push('Mayo') 
// meses.unshift('Mes 0') //Agrega al inicio del arreglo
// meses.pop() //Elimina elemento del final del arreglo
// meses.shift() //Elimina el primer elemento de un arreglo

// console.log(meses)
// console.log(meses[0])

// const arreglo = ['Hola',10,true,'si']
// console.table(arreglo.length)

// let nombre = 'Juan'
// console.log(Array.isArray(arreglo)) //Preguntar si es arreglo