
const util = require('util') // Ayuda a convertir codigo
const sleep = util.promisify(setTimeout)

// Si se ejecuta en paralelo, tomaría 4 seg, primero se ejecuta la primera (4 seg) y a la vez se va ejecutando la 2da (2 seg)
module.exports = {
    async taskOne(){
        try{
            throw new Error('Some problem') //Lanzar error
            await sleep(2000);
            // throw new Error('Some problem') //Lanzar error
            return 'ONE VALUE';
        }catch(e){
            console.log(e)
        }
    },
    async taskTwo(){
        try{            
            await sleep(1000);
            return 'TWO VALUE';
        }catch(e){
            console.log(e)
        }
    }
}