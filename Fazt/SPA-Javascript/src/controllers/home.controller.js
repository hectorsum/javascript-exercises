import views from "../views/home.html"

export default () =>{
    const divElement = document.createElement('div');
    divElement.classList = 'text-white' // Asignando color al texto de bootstrap
    divElement.innerHTML = views; //Insertando contenido dentro del "div"
    
    // Selecciona dentro del div
    const btnClick = divElement.querySelector('#btnClick')
    btnClick.addEventListener('click',()=>{
        alert('click');
    })

    return divElement;
};