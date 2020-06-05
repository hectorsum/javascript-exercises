

function Jugador(nombre){

    this.nombre = nombre
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo){
        if (this.sp>=40){
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        }else{
            console.info(`${this.nombre} no tiene sp`)
        }
        this.estado(jugadorObjetivo)
    }

    this.tirarFlecha = function(jugadorObjetivo){        
        if(jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv-=40;
        }else{
            jugadorObjetivo.pv = 0
            console.error(`${this.nombre} mató a ${jugadorObjetivo.nombre}`)
        }
        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugadorObjetivo){
        console.log(this)
        console.log(jugadorObjetivo)
    }
};

var gandalf = new Jugador('Gandalf')
var legolas = new Jugador('Legolas') 

console.log(gandalf)
console.log(legolas)

gandalf.curar(legolas)
console.log(gandalf)
console.log(legolas)