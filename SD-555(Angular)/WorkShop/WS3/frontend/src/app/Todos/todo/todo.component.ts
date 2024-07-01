import { Component, effect, inject, input } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    <p>id:{{todo._id}}</p>
    <p>title:{{todo.title}}</p>
    <p>description:{{todo.description}}</p>
    <p>completed:{{todo.completed}}</p>
  `,
  styles: ``
})
export class TodoComponent {
  id=input<string>('')
  data=inject(TodoService)
  todo:Todo={_id:'',
  title:'',
  description:'',
  completed:false}

  constructor(){
    effect(()=>{
      if(this.id()){
        this.data.get_todobyid(this.id()).subscribe(response=>{
          console.log(response)
          this.todo=response.data
        })
      }
     
      
    })
   
  }

}
