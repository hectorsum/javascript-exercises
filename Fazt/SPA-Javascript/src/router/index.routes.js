import {pages} from "../controllers/index" // Exportando objeto

let content = document.querySelector('#root');

const router = async (route) =>{
    content.innerHTML = ''; // Cada vez que el usuario elija, el content será vacio y creará el contenido desde cero
    switch(route){
        case '#/':            
            content.appendChild(pages.home()); //Añandiendo el contenido Home dentro del #root
            console.log('Ha ingresado al Home');
            break;
        case '#/characters':
            //console.log('Ha ingresado a los Products');
            content.appendChild(await pages.characters());
            break;
        case '#/posts':
            content.appendChild(await pages.posts()); //Se agrega await porque tiene una funcion asincrona y arriba se agrega async
            break;
        default:
            content.appendChild(pages.notFound())
            break;
    }
}
export { router };