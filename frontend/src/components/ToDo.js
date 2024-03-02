import React from 'react'
// import {BiEdit} from 'react-icons/bi'
// import {AiFillDelete} from 'react-icons/ai'


const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className='todo'>
      <div className="text">{text}</div>
      <div className="icons">
        <button className='icon' onclick={updateMode}>update</button>
        <button className='icon' onclick={deleteToDo}>delete</button>
      </div>
    </div>
  )
}

export default ToDo