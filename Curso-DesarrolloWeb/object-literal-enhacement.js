// Object Literal Enhacement

var banda = 'Metallica',
        genero = 'Heavy Metal',
        canciones = ['Master of puppets','Seek & Destroy','Enter Sandman']

// Forma antigua
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}
var nombre = 'Hector',apell = 'Herrera',dni = '74710901';
var nombre = 'Maria',apell = 'Herrera',dni = '74710902';

persona = {nombre, apell, dni}

Object.values(persona).forEach(element => {console.log(element)})

// Forma nueva
// Las variables que pasan tienen que ser lo mismo a los atrib del objeto, sino dará error
const metallica2 = {banda, genero, canciones}


// console.log(metallica2)
// console.log(persona)