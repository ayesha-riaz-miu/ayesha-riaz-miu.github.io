import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Medication, MedicationService } from './medication.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-update-medication',
  standalone: true,
  imports: [ReactiveFormsModule,MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span>Update Medication</span>
    </mat-toolbar>
      <form [formGroup]="form" class="signup-container" (ngSubmit)="submit_form()">
      <input placeholder="Name" formControlName='name' class="signup-form"/>
      <input placeholder="GenericName"  formControlName='genericName' class="signup-form"/>
      <input placeholder="MedicationClass"  formControlName='medicationClass' class="signup-form"/>
      <input placeholder="Availability"  formControlName='availability' class="signup-form"/>
      <div>
      <input type="file"  formControlName='medication_image' class="signup-form" (change)="setfile($event)"/>  
      <div class="file-name">
      @if(fileName){
        {{fileName}}
      }
    </div>
     </div>
      
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
    gap: 20px;
    background-color: #f5f5f5;
   
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
  .toolbar {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
    }
    .file-name {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
    }
`]
})
export class UpdateMedicationComponent {
  data=inject(MedicationService)
  alertmeg=inject(ToastrService)
  form=inject(FormBuilder).nonNullable.group({
    name:['',Validators.required],
    genericName:['',Validators.required],
    medicationClass:['',Validators.required],
    availability:['',Validators.required],
    medication_image:['',Validators.required]
    
  })
  router=inject(Router)
  file!:File;
  fileName: string | undefined;
  router_stateData = this.router.getCurrentNavigation()?.extras.state as Medication;

  setfile(event:Event){
    this.file=(event.target as HTMLInputElement).files![0]
    
  }
  constructor() {
   
      this.form.controls.name.patchValue(this.router_stateData.name);
      this.form.controls.genericName.patchValue(this.router_stateData.generic_name);
      this.form.controls.medicationClass.patchValue(this.router_stateData.medication_class);
      this.form.controls.availability.patchValue(this.router_stateData.availability);
      // this.form.controls.medication_image.patchValue(this.router_stateData.image.filename);
      this.fileName = this.router_stateData.image.originalname;
      
    
  }
  submit_form(){
    const formdata=new FormData()
    formdata.append('name',this.form.controls.name.value)
    formdata.append('generic_name',this.form.controls.genericName.value),
    formdata.append('medication_class',this.form.controls.medicationClass.value)
    formdata.append('availability',this.form.controls.availability.value)
    formdata.append('medication_image',this.file)
    

    if(this.router_stateData){
      this.data.update_medication(formdata,this.router_stateData._id).subscribe({
        next:response=>{
          console.log(response)
          this.alertmeg.success('Succesfully updated')
          this.form.reset()
          this.router.navigate(['',this.router_stateData._id])
         
        
        },
        error:error=>{
          this.alertmeg.error('Not updated')
        }
      })
    }
    }
    back_tohome(){
      this.router.navigate(['',this.router_stateData._id])
     }
    

}
