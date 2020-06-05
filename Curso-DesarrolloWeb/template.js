const nombre = 'Hector', trabajo = 'Desarrollador Web'

console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`)

// querySelector, permite seleccionar un elemento de html
const contenedorApp = document.querySelector('#mensaje')
let html = '<ul>'+
                '<li>'+nombre+'</li>'+
                '<li>'+trabajo+'</li>'+
            '</ul>';
let html2 = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`

//Inyectando codigo html dentro de nuestro tag de "mensaje"
contenedorApp.innerHTML = html2;