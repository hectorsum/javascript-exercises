const diaHoy = new Date()

//var, si no se inicializa, se define undefine
//let, tiene que ser declarado  (el alcance es más restringido)
// let valor = diaHoy;
// valor.getDay()
// valor.setFullYear(2049)
//valor = diaHoy.getMonth() //Comienza en 0
//valor = diaHoy.getDay()
//valor = diaHoy.getDate()

//console.log(valor)

// Validar la fecha tanto en front-end y back-end(php)

const unDia = new Date('6-11-1999')
let valor = unDia.getDay() //Conseguir el día, retorna int, 0=Dom,1=Lun
console.log(valor)