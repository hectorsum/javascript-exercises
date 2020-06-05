const musica = {
    reproducir: function(cancion){
        console.log(`Reproduciendo la canción ${cancion}`);
    },
    pausar: function(){
        console.log(`Paused...`)
    }
}
const persona = {
    nombre: function(nombre){
        console.log(`Su nombre es ${nombre}`)
    },
    saludar: function(nombre){
        console.log(`${nombre} está saludando`)
    },
    comer: function(){
        console.log(`Comiendo...`)
    },
    musica: function(musica=['No le gusta nada']){
        console.log(musica)
    }
}

persona.musica('Lo-fi')


const nombre = () => 'Hola';


// Declarar métodos por fuera
musica.borrar = function(id){
    console.log(`Borrando la canción con el ID: ${id}`)
}
musica.limpiar = "Clean"
// musica.reproducir('Hotel California')
// musica.pausar()
// musica.borrar(101)


// Llamando a la función y poniendo parametro
// console.log(musica['reproducir']('Help!'))



const multiplicar = (a,b) =>{
    return a*b
}
const suma = (a,b) => {
    return a+b
}
const resta = (a,b) => a-b
const div = (a,b) => a/b


// console.log(resta(105,523))
