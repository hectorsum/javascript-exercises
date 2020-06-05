const {taskOne,taskTwo} = require('./async-tasks')

async function main(){
    console.time('Measuring time');
    const results = await Promise.all([taskOne(),taskTwo()]) //Ejecutar en paralelo
    console.timeEnd('Measuring time');
    
    console.log(`Task One Completed ${results[0]}`)
    console.log(`Task Two Completed ${results[1]}`)
}

main()