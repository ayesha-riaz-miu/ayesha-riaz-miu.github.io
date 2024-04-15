import { KeyboardEvent } from 'react';
import Todos from '../../types';
import { nanoid } from 'nanoid';
import './index.css';



type Props={

addtodo:(todo:Todos )=>void

}

export default function Header(props:Props) {
  const {addtodo} = props


  const add_todo=(e:KeyboardEvent<HTMLInputElement>)=>{

    const value = e.currentTarget.value;
    console.log(value)
     if(value.trim()){
      if(e.key==='Enter'){
        addtodo({
          id:nanoid(),
          name:value,
          done:false
  
        })
        e.currentTarget.value = '';
       e.currentTarget.focus();
      }
    
     
      
     }
     
     else{
     alert('Task can be empty')
     }
   

  }
 
    return (
        <div className="todo-header">
        <input type="text" placeholder="Enter task name" onKeyUp={add_todo}/>
      </div>
    )
  }