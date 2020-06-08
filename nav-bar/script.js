let arrow = document.querySelector('.arrow');
let nav_bar = document.querySelector('.nav-bar');

arrow.addEventListener('click',() =>{
    nav_bar.classList.toggle('extended');
});