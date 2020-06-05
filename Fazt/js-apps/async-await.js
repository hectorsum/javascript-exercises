// Promesas
function resquestHandler(req,res){
    User.findById(req.userId)
    .then(function(user){
        return Task.findById(user.tasksID) //Otra promesa
    })
    .then(function(task){ //Se resuelve la promesa
        tasks.completed = true
        return tasks.save();
    })
    .then(function(){
        res.send('Tasks completed');
    })
    .catch(function(errores){
        res.send(errores);
    })
}

// Código asincrono que se ejecuta de manera secuencial
async function resquestHandler(req,res){
    try{ //Se agrega async await a todas las funciones o consultas que toman tiempo
        const user = await User.findById(req.userId) //await da entender que va tomar tiempo, asíncrono y el retorno a la consulta se guarda en user
        const tasks = await Tasks.findById(user.tasksId); 
        tasks.completed = true
        await tasks.save();
        res.send('task completed')
    }catch(e){
        res.send(e);
    }
}

