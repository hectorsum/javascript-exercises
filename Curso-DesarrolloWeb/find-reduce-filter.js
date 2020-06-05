const personas = [
    {nombre: 'Juan',edad:20},
    {nombre: 'Hector',edad:22},
    {nombre: 'Alejandra',edad:24,aprendiendo:'Javascript'},
    {nombre: 'Karen',edad:44},
    {nombre: 'Miguel',edad:32},
];

// Obtener personas mayores a 25 años usando filter
const mayores = personas.filter(persona => persona.edad > 25);
console.log(mayores)

// Extraer info de Alejandra usando find
const alejandra = personas.find(persona => persona.nombre === 'Alejandra')
let {aprendiendo} = alejandra
console.log(alejandra)

// Traer un acumulado de los registros usando reduce, 2do parametro se inicia en 0 para no afectar la suma
let total = personas.reduce((edadTotal,persona) => edadTotal+persona.edad,0)
console.log(total/personas.length)