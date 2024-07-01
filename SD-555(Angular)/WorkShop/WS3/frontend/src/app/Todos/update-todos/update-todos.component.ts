import { Component, effect, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo, TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-todos',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="go()">
    <input placeholder="title" formControlName='title'/>
    <input placeholder="description" formControlName='description'/><br/>
    completed?<input type="checkbox" formControlName='completed'/><br/>
    <button type="submit">submit</button>
  `,
  styles: ``
})
export class UpdateTodosComponent {
  data=inject(TodoService)
  router=inject(Router)
   todo=this.router.getCurrentNavigation()?.extras.state as Todo

  form=inject(FormBuilder).nonNullable.group({
    title: ['',Validators.required],
    description:['',Validators.required],
    completed:false

  })
constructor(){
 
  effect(()=>{
    if(this.todo){
      this.form.controls.title.patchValue(this.todo.title)
      this.form.controls.description.patchValue(this.todo.description)
      this.form.controls.completed.patchValue(this.todo.completed)
    }

  })
}
  go(){
    this.data.update_todo(this.form.value  as Todo,this.todo._id ).subscribe(response=>{
      console.log(response)
      this.router.navigate(['','todos','list'])
    })

  }


}
