function descargarUsuarios(cantidad){
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;
    
    //llamado a Fetch
    fetch(api)
        .then(respuesta=>respuesta.json())
        .then(datos=>imprimirHTML(datos.results))
}

function imprimirHTML(datos){
    datos.forEach(usuario => {
        const li = document.createElement('li')
        const {name:{first},name:{last},picture:{medium}, nat} = usuario
        document.querySelector('#app').appendChild(li)
        li.innerHTML= `
                        Nombre:${first} ${last}
                        País: ${nat}
                        imagen: <img src="${medium}">
        `;
    });
}
persona = {
    nombre: 'Hector',
    apell: 'Herrera',
    dni: '74710901',
    direccion:{
        calle:'M',
        barrio:'Los Pinos',
        lote:'50',
        edificio:{
            piso:9,
            pabellon:'M',
            habitacion:'129'
        }
    }
}

const {direccion:{edificio:{piso}}} = persona
console.log(piso)

// let numeros = [1,2,3,5]
// let total = 0
// for (value of numeros){
//     total+=value
// }

// descargarUsuarios()