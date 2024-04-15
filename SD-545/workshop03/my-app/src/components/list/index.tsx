import Item from "../item";
import './index.css';

import Todos from "../../types";


type Props={
  todos:Todos[],
  check_box:(id:string)=>void
  delete_item:(id:string)=>void
}

export default function List(props:Props) {
  const {todos,check_box,delete_item} = props;
    return (
      <>
      <ul className="todo-main">
        {
          todos.map(todos=> <Item {...todos} key={todos.id} check_box={check_box} delete_item={delete_item}/>)
          
        }
        
          
        </ul>
        </>
     
    )
  }