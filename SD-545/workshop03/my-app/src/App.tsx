
import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import List from './components/list';
import { useEffect, useState } from 'react';

import Todos from './types';



function App() {
  const[todos,settodo]=useState<Todos[]>([])


  const addnew_todo=(newtodo:Todos)=>{
    settodo([...todos,newtodo])

  }
  const check_box=(id:string)=>{

    const result=todos.map(todo=>{
      if(todo.id==id){
        return ({...todo,done:!todo.done})
      }
      else{
        return todo;
      }
    })
    settodo(result)

    
  }

  const delte_item=(id:string)=>{
    
    const result = todos.filter(todo=>todo.id!=id)
    settodo(result)


  }
 
  
  useEffect(()=>{
    async function getTodos(){
      const response = await fetch('http://localhost:3004/todos')
      const data = await response.json();
      settodo(data)
      console.log(data)

    }
    getTodos();

  },[])

  

  return (
    <div id="root">
    <div className="todo-container">
      <div className="todo-wrap">
       <Header addtodo={addnew_todo} />
        <List todos={todos} check_box={check_box}  delete_item={delte_item}/>
        <Footer todos={todos}/>
      </div>
    </div>
  </div>
  );
}

export default App;
