import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
  return (
    <div className="App">
      <div className="container">
        <h1>TO DO APP</h1>
        <div className="top">
          <input 
            type="text" 
            placeholder="ADD TO DO LIST"
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
          <div className="add" onClick={isUpdating ?() => updateTodo() : ()=>addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) =><ToDo key={item._id} text={item.text}/>)}
        </div>
      </div>


    </div>
  );
}

export default App;
