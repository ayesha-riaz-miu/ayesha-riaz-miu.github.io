import { Component, effect, inject, signal } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { Router, RouterLink } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [RouterLink],
  template: `
  @for(todo of $todos();track todo){
    <li><a [routerLink]="['','todos',todo._id]">{{todo.title}}</a></li>
    <button (click)="naviagte_update(todo)">update</button>
    <button (click)="delte_todo(todo._id)">delete</button>

  }
    
  `,
  styles: ``
})
export class ListTodosComponent {
  data=inject(TodoService)
  $todos=signal<Todo[]>([])
  router=inject(Router)
  constructor(){
    effect(()=>{
      this.data.get_todo().subscribe(response=>{
        console.log(response)
        this.$todos.set(response.data)
      })
    })
  }
  delte_todo(id:string){
    this.data.delete_todo(id).subscribe(resposne=>{
      console.log(resposne)
      this.$todos.update(old=>old.filter(item=>item._id!==id))
    })
  }
  naviagte_update(todo:Todo){
    this.router.navigate(['','todos','update',todo._id],{state:todo})

  }

}
