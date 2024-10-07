import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService, State } from '../auth.service';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule,NgStyle],
  template: `
   <mat-toolbar color="primary" class="toolbar">
      <span>Welcome {{authservice.$state().fullname}}</span>
    </mat-toolbar>
    <form [formGroup]="form" class="signup-container" (ngSubmit)=" submit_form()">
      <input placeholder="Email" type="email" formControlName='email' class="signup-form"/>
      <!-- @if(email.invalid && email.dirty && email.touched){
        @if(email.errors?.['email']){
          <p [ngStyle]="{color:'red'}">Email is required</p>

        }

      } -->
      <input placeholder="Password" type="password" formControlName='password' class="signup-form"/>
      <div class="auth-container">
      <button mat-raised-button color="primary" (click)="back_tohome()">Back</button>
       <button mat-raised-button color="primary" [disabled]="form.invalid">Submit</button>
          
        </div>
      </form>
   
  `,
  styles: [`
  .signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    gap:20px;
    background-color: #f5f5f5;
   
  }
  .auth-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      radius:10px
      margin-bottom: 20px;
      width: 80%;
    }
    .toolbar {  
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      margin-top: 40px;
    }
  .signup-form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  button {
    width: 20%;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
   
  }
`]
})
export class SigninComponent {
  router=inject(Router)
  http=inject(HttpClient)
  authservice=inject(AuthService)
  alertmeg=inject(ToastrService)
  form=inject(FormBuilder).nonNullable.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
    
  })
  get email(){
    return this.form.controls.email
   }
  submit_form(){
    this.authservice.sigin(this.form.value as State).subscribe({
      next:response=>{
        console.log(response)
        const token=response.data
        const jwtToken=jwtDecode(token) as State
       
      
        this.authservice.$state.set({
          _id:jwtToken._id,
          fullname: jwtToken.fullname,
          email: jwtToken.email,
          password: jwtToken.password,
          JWT:response.data

        })
        this.alertmeg.success('Succesfully signin')
        this.router.navigate([''])

        
      },
      error:error=>{
        this.alertmeg.error('Invalid username or password')
      }
    })

  }
  back_tohome(){
    this.router.navigate([''])
   }


}
