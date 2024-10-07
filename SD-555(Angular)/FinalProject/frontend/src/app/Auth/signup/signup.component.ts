import { Component, inject } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { AuthService, State} from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
  template: `
 
  <mat-toolbar color="primary" class="toolbar">
      <span>Welcome {{authservice.$state().fullname}}</span>
    </mat-toolbar>
    <form [formGroup]="form" class="signup-container" (ngSubmit)=" submit_form()">
      <input placeholder="Fullname" formControlName='fullname' class="signup-form"/>
      <input placeholder="Email" type="email" formControlName='email' class="signup-form"/>
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
      height: 70vh;
      gap:20px;
      background-color: #f5f5f5;
     
    }
    .auth-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      radius:10px
      margin-bottom: 10px;
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
export class SignupComponent {
  authservice=inject(AuthService)
  http=inject(HttpClient)
  router=inject(Router)
  alertmesg=inject(ToastrService)
  form=inject(FormBuilder).nonNullable.group({
    fullname:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
    
  })
  submit_form(){
       
   this.authservice.sigup(this.form.value as State).subscribe({
      next:response=>{
        this.alertmesg.success('Succesfully signup')
        console.log(response)
        this.router.navigate(['','signin'])
        
      },
      error:error=>{
        this.alertmesg.error('Username already exist')

      }
    })
  }
  back_tohome(){
    this.router.navigate([''])
   }
}
