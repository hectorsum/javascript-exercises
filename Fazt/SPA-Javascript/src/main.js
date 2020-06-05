import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import {router} from "./router/index.routes";

router(window.location.hash) // Hace la validación apenas se entre a la pagina

window.addEventListener('hashchange',()=>{
    router(window.location.hash)
})