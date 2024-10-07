import { Component, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Medication, MedicationService, Review } from '../medication.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule],
  template: `
        <mat-toolbar color="primary" class="toolbar">
      <span>Add Review</span>
    </mat-toolbar>
      <form [formGroup]="form"  class="review-container" (ngSubmit)="add_review()">
      <input placeholder="Review" formControlName='review' class="review-form"/>
      <input placeholder="Rating"  formControlName='rating' class="review-form"/>
      <div class="auth-container">
      <button mat-raised-button color="primary" (click)="back_tohome()">Back</button>
      <button mat-raised-button color="primary" [disabled]="form.invalid">Submit</button> 
        </div>
</form>
  `,
styles: [`
.review-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  gap: 20px;
  background-color: #f5f5f5;
 
}
.toolbar {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
    }
.review-form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.auth-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      radius:10px
      margin-bottom: 20px;
      width: 80%;
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
export class ReviewComponent {
  med_id=input<string>('')
  data=inject(MedicationService)
  authService=inject(AuthService)
  router=inject(Router)
  mesglaert=inject(ToastrService)
  form=inject(FormBuilder).nonNullable.group({
    review:['',Validators.required],
    rating:['',Validators.required]

  })
    data_fromRouter=this.router.getCurrentNavigation()?.extras.state as Medication

 
  add_review(){
    const new_review:Review={
      review: this.form.value.review?this.form.value.review:'', 
      rating: Number(this.form.value.rating), 
      by: 
      { 
       user_id:this.authService.$state()._id,
       fullname: this.authService.$state().fullname
     }, 
      date: Date.now() 
   }
    this.data.add_review(this.data_fromRouter._id,new_review).subscribe({
      next:response=>{
        console.log(response)
        this.form.reset()
        this.router.navigate(['',this.data_fromRouter._id])
        this.mesglaert.success('Succesfully Added Review')
       
      },
      error:error=>{
        this.mesglaert.error('Review not added')
      }
    })
  }
  back_tohome(){
    this.router.navigate(['',this.data_fromRouter._id])
   }

}
