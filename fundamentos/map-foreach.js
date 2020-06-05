const numeros = [1,3,5,6,5]

// Foreach no permite almacenar valores en una variable
// Es como el clasico for, solo hacemos iteracion y operaciones
const res01 = numeros.forEach(element => element*5);
console.log(res01)

// Usando map si te permite almacenar los valores en una variable
// Es hacer la iteracción pero te regresa un arreglo nuevo con las operaciones aplicadas
const res02 = numeros.map(element => element*5)
console.log(res02)



