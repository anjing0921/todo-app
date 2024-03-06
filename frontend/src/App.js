import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo , updateToDo, deleteToDo} from "./utils/HandleApi";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  const [errors, setErrors] = useState({})
  const [isDisabled, setDisabled] = useState(false);
  // const [isSame, setSame] = useState(false);

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  const handleChange = (e) =>{
    e.preventDefault();
    const validationErrors = {}
    setDisabled(false)
    if(!e.target.value.trim()){
        validationErrors.todo = "Input can not be empty"
        setDisabled(true)
        }
    // let newText = e.target.value
    // let n = capitalized(newText)
    setText(e.target.value)
    console.log(toDo)
    if (toDo.findIndex((p) => p.text === e.target.value.trim()) !== -1) {
      // alert(`${e.target.value} is already in the phone book `);
      validationErrors.isSame = `${e.target.value} is already in the list `
      // setSame(true)
      setDisabled(true)
    }
    setErrors(validationErrors)
  }

  const handleClickAway = () =>{
    getAllToDo(setToDo)
    setErrors({})
  }
  const handleSubmit = () =>{
    addToDo(text, setText, setToDo)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>TO DO APP</h1>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="top">
            <input 
              type="text" 
              placeholder="ADD TO DO LIST"
              value={text}
              id="todo"
              onChange={handleChange}
            />
              {errors.todo && <span className="error">{errors.todo}</span>}   
              {errors.isSame && <span className="error">{errors.isSame}</span>} 
              {isDisabled ?
              <button className="hide_button" disabled={isDisabled}>Add</button> 
              :<button 
              type="button"
              className="add" 
              onClick={isUpdating ? 
                () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
                : ()=>handleSubmit()}>
              {isUpdating ? "Update" : "Add"}
            </button>}
          </div>
        </ClickAwayListener>
        <div className="list">
          {toDo.map((item) => <ToDo 
            key={item._id} 
            text={item.text}
            updateMode = {()=> updateMode(item._id, item.text)}
            deleteToDo = {() => deleteToDo(item._id, setToDo)}
            />
            )}
        </div>
      </div>


    </div>
  );
}

export default App;
