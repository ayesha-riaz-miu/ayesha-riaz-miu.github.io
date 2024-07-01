import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, State } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
  <form [formGroup]="form" (ngSubmit)="go()">
  <input placeholder="email" formControlName='email'/>
  <input placeholder="password" formControlName='password' />
  <button type="submit">submit</button>


  </form>
  `,
  styles: ``
})
export class SigninComponent {
  data=inject(AuthService)
  http=inject(HttpClient)
  router=inject(Router)
  alertmeg=inject(ToastrService)

  form=inject(FormBuilder).nonNullable.group({
    email:['',Validators.required],
    password:['',Validators.required]
   
  })
  go(){
    this.http.post<{success:boolean,data:string}>(environment.BACKEND_SERVER_URL+'/auth/signin',this.form.value).subscribe({
      next:response=>{

        const token=response.data
        const jwttoken=jwtDecode(token) as State
        console.log(jwttoken)
        this.data.state$.set({
          _id:jwttoken._id,
          fullname:jwttoken.fullname,
          email:jwttoken.email,
          JWT:response.data
  
        })
        this.router.navigate(['','todos','list'])
  
      },
      error:error=>{
        this.alertmeg.error('Invalid username or password')
      }
      
    })
  

  }

}
