import { ChangeEvent } from 'react';

import './index.css';

interface Todos{
  'id': string,
  'name': string,
  'done': boolean
  check_box:(id:string)=>void
  delete_item:(id:string)=>void

}


export default function Item(props:Todos) {
    const {id,name,done,check_box,delete_item} = props

    const change_checkbox=(e:ChangeEvent<HTMLInputElement>)=>{
     check_box(id)

    }

    const delete_button=()=>{
      if(window.confirm('Are you sure!!')){
        delete_item(id)

      }

      

    }
    return (
        <>
        <li>
        <label>
          <input type="checkbox"  checked={done} onChange={change_checkbox}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger"   onClick={delete_button}>Delete</button>
      </li>
        </>
        
    )
  }