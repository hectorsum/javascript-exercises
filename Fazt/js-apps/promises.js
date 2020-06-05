function requestHandler(req, res){
    User.findById(req.userId,function(err,user){
        if(err){
            res.send(err);
        }else{
            Task.findById(user.taskId,function(err,tasks){
                if (err){
                    return res.send(err)
                }else{
                    tasks.completed = true;
                    tasks.save(function(err){
                        if (err){
                            return res.send(err);                        
                        }else{
                            res.send('Task completed');
                        }
                    })
                }
            })
        }
    })
}

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