import React from 'react'
import './index.css'
import Todos from '../../types'
type Props={
  todos:Todos[]
}
export default function Footer(props:Props) {
  const {todos}=props
  return (
    <div className="todo-footer">
    <label>
      <input type="checkbox" checked={todos.filter(todo=>todo.done).length===todos.length && todos.length!== 0}/>
    </label>
    <span>
      <span>Finished {todos.filter(todo=>todo.done).length}</span> / total {todos.length}
    </span>
    <button className="btn btn-danger">Delete Finished Tasks</button>
  </div>
  )
}
