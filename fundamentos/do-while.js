var contador = 1

const llueve = () => Math.random() < 0.25

do{
    contador++ //Se va ejecutar
}while(!llueve) //Hasta que no llueva (Se ejecuta mientras está lluviendo)

var string = ""
if (contador===1){
    string = "vez"
}else{
    string="veces"
}
console.log(`Fuí a ver si llovía ${contador} ${string}`)