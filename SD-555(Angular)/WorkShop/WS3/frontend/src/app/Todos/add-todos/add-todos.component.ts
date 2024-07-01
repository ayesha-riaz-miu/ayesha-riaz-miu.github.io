import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo, TodoService } from '../todo.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todos',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
   <form [formGroup]="form" (ngSubmit)="go()">
    <input placeholder="title" formControlName='title'/>
    <input placeholder="description" formControlName='description'/><br/>
    completed?<input type="checkbox" formControlName='completed'/><br/>
    <button type="submit">submit</button>
  
</form>
  `,
  styles: ``
})
export class AddTodosComponent {
  data=inject(TodoService)
  router=inject(Router)

  form=inject(FormBuilder).nonNullable.group({
    title: ['',Validators.required],
    description:['',Validators.required],
    completed:false

  })
  go(){
 this.data.post_todo(this.form.value as Todo) .subscribe(response=>{
    console.log(response.data)
    this.router.navigate(['','todos','list'])
  })


  }

}
