import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicationService } from './medication.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medication',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
  template: `
   <mat-toolbar color="primary" class="toolbar">
      <span>Add New Medication</span>
    </mat-toolbar>
   <form [formGroup]="form" class="signup-container" (ngSubmit)="go()">
      <input placeholder="Name" formControlName='name' class="signup-form"/>
      <input placeholder="GenericName"  formControlName='genericName' class="signup-form"/>
      <input placeholder="MedicationClass"  formControlName='medicationClass' class="signup-form"/>
      <input placeholder="Availability"  formControlName='availability' class="signup-form"/>
      <input type="file"  formControlName='medication_image' class="signup-form" (change)="setfile($event)"/>  
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
     height: 100vh;
     background-color: #f5f5f5;
     gap: 20px;
    
   }
   .toolbar {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
    }
  
   .auth-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      radius:10px
      margin-bottom: 20px;
      width: 80%;
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

export class AddMedicationComponent {
  file!:File;
  http=inject(HttpClient)
  data=inject(MedicationService)
  alertmsg=inject(ToastrService)
  router=inject(Router)
  
  form=inject(FormBuilder).nonNullable.group({
    name:['',Validators.required],
    genericName:['',Validators.required],
    medicationClass:['',Validators.required],
    availability:['',Validators.required],
     medication_image:['',Validators.required]
    
  })
  setfile(event:Event){
    this.file=(event.target as HTMLInputElement).files![0]
    
  }
  go(){
    const formData=new FormData();
  
    formData.append('name', this.form.controls['name'].value);
    formData.append('generic_name', this.form.controls['genericName'].value);
    formData.append('medication_class', this.form.controls['medicationClass'].value);
    formData.append('availability', this.form.controls['availability'].value);
    formData.append('medication_image', this.file);

    this.data.post_medication(formData).subscribe({
    next:response=>{
    console.log(response)
    this.alertmsg.success('Medication added successfully!')
    this.form.reset()
    this.router.navigate([''])
   },
   error:error=>{
    this.alertmsg.error('Not Added')
   }

 })
 }
 back_tohome(){
  this.router.navigate([''])
 }

}
