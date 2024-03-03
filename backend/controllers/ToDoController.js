const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find()
  res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
  const {text} = req.body
  
  ToDoModel
    .create({text})
    .then((data)=>{
      console.log("added done");
      console.log(data);
      res.send(data)
    })
}

module.exports.updateToDo = async (req, res) => {
  
  const {_id, text} = req.body
  console.log(req.body)
  
  ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.send("updated"))
    .catch((err)=> console.log(err))
}


module.exports.deleteToDo = async (req, res) => {
  
  const {_id} = req.body;
  console.log(req.body)
  console.log('id ---> ', _id);
  
  ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.set(201).send("Deleted Successfully..."))
    .catch((err)=> console.log(err))
}
