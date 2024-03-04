import axios from 'axios'

const baseUrl = "https://todo-app-backend-5reu.onrender.com"

const getAllToDo = (setToDo) =>{
  axios
  .get(baseUrl)
  .then(({data})=>{
    console.log('data--->', data);
    setToDo(data)
  })
}

const addToDo = (text, setText, setToDo) =>{
  axios
    .post(`${baseUrl}/save`, {text})
    .then((data)=>{
      console.log(data);
      setText('')
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .put(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data)=>{
      setText("")
      setIsUpdating(false)
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
  
}

const deleteToDo = (_id, setToDo) => {
  console.log(_id)
  axios
    .delete(`${baseUrl}/delete`, { data:{_id} })
    .then((data)=>{
      console.log("call delete api")
      console.log(data)
      getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}

export {getAllToDo, addToDo, updateToDo, deleteToDo}