import views from "../views/characters.html"

const getCharacters = async () =>{
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    return await response.json();
}

export default async () =>{
    // Creando nuevo div
    const divElement = document.createElement('div')    
    //Insertando "characters.html" en el div
    divElement.innerHTML = views 
    //divElement.classList = 'text-white' //Creando clase para el div
    const characterElement = divElement.querySelector('#characters');
    let totalCharacters = divElement.querySelector('#quantity');
    const characters = await getCharacters();

    totalCharacters.innerHTML = characters.results.length;
    
    // Iterando dentro de objeto characters el key "results"
    for (let character of characters.results){
        characterElement.innerHTML += `
        <li class="list-group-item border-primary bg-dark text-white"> 
                <h5>${character.name}</h5>
        </li>
        `
    }
    return divElement;
}