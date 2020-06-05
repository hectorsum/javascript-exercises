const persona = {
    nombre: 'Hector',
    apellido: 'Herrera',
    edad: 20,
    trabajo: true,
    musica: ['rock','lo-fi','pop'],
    hogar: {
        ciudad: 'Lima',
        distrito: 'Comas'
    }
}

//console.log(persona.nombre)
console.log(persona['hogar']['ciudad']);