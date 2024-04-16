import React, { ChangeEvent } from 'react'
import './index.css'
import Todos from '../../types'

type Props = {
  todos: Todos[],
  onUpdateAll: (value: boolean) => void,
  onDelete: () => void;
}
export default function Footer(props:Props) {
  const {todos,onUpdateAll,onDelete}=props

  const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdateAll(e.target.checked);
  }

  const handleDelete = () => {
    if(window.confirm('Are you sure?')){
      onDelete();
    }
  }
  return (
    <div className="todo-footer">
    <label>
      <input type="checkbox" checked={todos.filter(todo=>todo.done).length===todos.length && todos.length!== 0} onChange={changeCheckbox}/>
    </label>
    <span>
      <span>Finished {todos.filter(todo=>todo.done).length}</span> / total {todos.length}
    </span>
    <button className="btn btn-danger" onClick={handleDelete}>Delete Finished Tasks</button>
  </div>
  )
}
