const API_URL = 'https://rickandmortyapi.com/api/character/'
const PEOPLE_URL = ':id'

const opts = {crossDomain: true} //Indicar que el request se hará a otra pag

function obtenerPersonaje(id){
    return new Promise(function(resolve,reject){
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(url,opts,function(data){
            resolve(data)
        })
        .fail(function(){ //Si ocurre un error se ejecuta "fail"
            reject(id)
        })     
    })    
}

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promises = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promises) //Con await, se detiene hasta que se ejecute "Promise.all()" y luego continua el flujo
        console.log(personajes)
    }catch(id){
        onError(id)
    }
}

// Promise
// .all(promises)
// .then(personajes => console.log(personajes))
// .catch(onError)

obtenerPersonajes()




// obtenerPersonaje(1)
// .then(name1 => {
//     console.log(`Hola, soy el personaje ${name1.name}`)
//     return obtenerPersonaje(2)
// })
// .then(name2 => {
//     console.log(`Hola, soy el personaje ${name2.name}`)
//     return obtenerPersonaje(3)
// })
// .then(name3 => {
//     console.log(`Hola, soy el personaje ${name3.name}`)
//     return obtenerPersonaje(4)
// })
// .then(name4 => {
//     console.log(`Hola, soy el personaje ${name4.name}`)
//     return obtenerPersonaje(5)
// })
// .catch(onError)



