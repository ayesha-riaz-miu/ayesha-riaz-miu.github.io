import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, State } from '../auth.service';
import { HttpClient } from '@angular/common/http';

import { User } from '../User';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  
   <form [formGroup]="form" (ngSubmit)="go()">
    <input placeholder="Fullname" formControlName='fullname'/>
    <input placeholder="Email" formControlName='email'/>
    <input placeholder="password" formControlName='password'/>
    <button>submit</button>
   </form>
  `,
  styles: ``
})
export class SignupComponent {
  data=inject(AuthService)
  http=inject(HttpClient)
  router=inject(Router)
  form=inject(FormBuilder).nonNullable.group({
    fullname:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  
    
  })
  go(){
    this.http.post<{success:boolean,data:User}>(environment.BACKEND_SERVER_URL+'/auth/signup',this.form.value).subscribe(response=>{
      console.log(response)
      this.router.navigate(['signin'])
    })

  }

}
