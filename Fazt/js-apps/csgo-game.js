

function Jugador(nombre,team,arma){
    this.nombre = nombre;
    this.team = team;
    this.arma = arma;
    this.vida = 100;
    this.objetivo = ['cabeza','pecho','pierna','pie'];
    this.granadaDistancia = [5,10,15,20]

    this.disparar = function(jugadorObjetivo){
        while(jugadorObjetivo.vida>0){
            let random = Math.floor((Math.random()*8)+0);
            if (random === 0){
                console.log(`${this.nombre} disparó en ${this.objetivo[random]}`)
                if (jugadorObjetivo.vida > 50){
                    jugadorObjetivo.vida-=50;
                }else{
                    jugadorObjetivo.vida=0;
                    console.log(`${this.nombre} mató de un disparo en la ${this.objetivo[random]}`)
                }            
            }else if (random === 1){
                console.log(`${this.nombre} disparó en ${this.objetivo[random]}`)
                if (jugadorObjetivo.vida > 30){
                    jugadorObjetivo.vida-=30;
                }else{
                    jugadorObjetivo.vida=0;
                    console.log(`${this.nombre} mató de un disparo en el ${this.objetivo[random]}`)
                }            
            }else if (random === 2){
                console.log(`${this.nombre} disparó en ${this.objetivo[random]}`)
                if (jugadorObjetivo.vida > 20){
                    jugadorObjetivo.vida-=20;
                }else{
                    jugadorObjetivo.vida=0;
                    console.log(`${this.nombre} mató de un disparo en la ${this.objetivo[random]}`)
                }
            }else if (random === 3){
                console.log(`${this.nombre} disparó en el ${this.objetivo[random]}`)
                if (jugadorObjetivo.vida > 10){
                    jugadorObjetivo.vida-=10;
                }else{
                    jugadorObjetivo.vida=0;
                    console.log(`${this.nombre} mató de un disparo en el ${this.objetivo[random]}`)
                }
            }
            else{
                console.log(`${this.nombre} falló el tiro`)
            }
            this.printing(jugadorObjetivo);
        }
    }

    this.lanzarGranada = function(jugadorObjetivo){
        let random = Math.floor((Math.random()*4)+1)        
        if(random >=  0 && random <=5){
            if (jugadorObjetivo.vida > 60)
                jugadorObjetivo.vida-=60
            else
                jugadorObjetivo.vida=0
        }else if (random >=6 && random <= 10){
            if (jugadorObjetivo.vida > 45)
                jugadorObjetivo.vida-=45
            else
                jugadorObjetivo.vida=0
        }else if (random >=11 && random <= 15){
            if (jugadorObjetivo.vida > 30)
                jugadorObjetivo.vida-=30
            else
                jugadorObjetivo.vida=0
        }else if (random >=16 && random <= 20){
            if (jugadorObjetivo.vida > 15)
                jugadorObjetivo.vida-=15
            else
                jugadorObjetivo.vida=0
        }else{
            console.log(`${this.nombre} falló granada`)
        }
        
        this.printing(jugadorObjetivo);
    }

    this.printing = function(jugadorObjetivo){
        console.log(this)
        console.log(jugadorObjetivo)
        if (jugadorObjetivo.vida === 0)
            console.error(`${this.nombre} mató a ${jugadorObjetivo.nombre}`)
    }
}

policia1 = new Jugador('Police Bot','Policia','M4')
terrorista1 = new Jugador('Terrorist Bot','Terrorista','AK-47')