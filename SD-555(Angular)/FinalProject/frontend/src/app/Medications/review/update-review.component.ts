import { Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicationService, Review } from '../medication.service';
import { AuthService } from '../../Auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-review',
  standalone: true,
  imports: [ReactiveFormsModule,ReactiveFormsModule,MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
  template: `

<mat-toolbar color="primary" class="toolbar">
      <span>Update Review</span>
    </mat-toolbar>
      <form [formGroup]="form"  class="review-container" (ngSubmit)="submit_review()" >
      Review<input placeholder="Review" formControlName='review' class="review-form"/>
      Rating<input placeholder="Rating"  formControlName='rating' class="review-form"/>
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
  gap:20px;
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

button {
  width: 20%;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
 
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
      font-size:1.5rem ;
    }
`]
})
export class UpdateReviewComponent {
  router=inject(Router)
  authservice=inject(AuthService)
  mesgalert=inject(ToastrService)
  medicine_id=input<string|undefined>('')
  medicationService=inject(MedicationService)
  form=inject(FormBuilder).nonNullable.group({
    review:['',Validators.required],
    rating:['',Validators.required]

  })
  data_fromRouter=this.router.getCurrentNavigation()?.extras.state as { review: Review, medicine_id: string }

  constructor(){
    this.form.controls.rating.patchValue(String(this.data_fromRouter.review.rating))
    this.form.controls.review.patchValue(this.data_fromRouter.review.review)
    effect(()=>{
      if(this.medicine_id()){
        console.log(this.medicine_id())

      }

    })
  
  }
 
  submit_review(){
    const updated_review:Review={
      review: this.form.value.review?this.form.value.review:'', 
      rating: Number(this.form.value.rating), 
      by: 
      { 
       user_id:this.authservice.$state()._id,
       fullname: this.authservice.$state().fullname
     }, 
      date: Date.now() 
    }
  
   this.medicationService.update_review(this.data_fromRouter.medicine_id,this.data_fromRouter.review._id!,updated_review).subscribe({
     next:response=>{
      console.log(response)
      this.router.navigate(['',this.data_fromRouter.medicine_id])
      this.mesgalert.success('Succesfully Updated Review')
      
     },
     error:error=>{
      console.log('Not Updated Review')

     }
   })

  }
  back_tohome(){
    this.router.navigate(['',this.data_fromRouter.medicine_id])
   }

}
