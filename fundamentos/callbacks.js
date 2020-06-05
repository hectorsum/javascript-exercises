const API_URL = 'https://rickandmortyapi.com/api/character/'
const PEOPLE_URL = ':id'

const opts = {crossDomain: true} //Indicar que el request se hará a otra pag

function obtenerPersonaje(id,callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(url,opts,callback)
    .fail(function(){ //Si ocurre un error se ejecuta "fail"
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })     
}
// Continuación en promises.js

obtenerPersonaje(1,function({name}){
    console.log(`Hola yo soy ${name}`)
    obtenerPersonaje(2,function({name}){
        console.log(`Hola yo soy ${name}`)
        obtenerPersonaje(3,function({name}){
            console.log(`Hola yo soy ${name}`)
            obtenerPersonaje(4,function({name}){
                console.log(`Hola yo soy ${name}`)
                obtenerPersonaje(5,function({name}){
                    console.log(`Hola yo soy ${name}`)
                    obtenerPersonaje(6,function({name}){
                        console.log(`Hola yo soy ${name}`)
                        obtenerPersonaje(7,function({name}){
                            console.log(`Hola yo soy ${name}`)
                        })
                    })
                })
            })
        })
    })
})



// let cant = 10
// const get_people = `https://api.randomuser.me/?nat=US&results=${cant}`;    
// const options = {crossDomain: true};
// const onResponse = function(get_people){
//     for(let i in get_people.results){ //Iterando en el atributo results
//         var {name:{first},name:{last}} = get_people.results[i]
//         console.log(`Hello, I'm ${first} ${last}`)    
//     }
// }
// $.get(get_people,options,onResponse);