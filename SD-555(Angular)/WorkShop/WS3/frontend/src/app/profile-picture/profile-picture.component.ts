import { formatDate } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
   <form [formGroup]="form" (ngSubmit)="go()">
    <input type="file" formControlName='file' (change)="setfile($event)" />
    <button type="submit">submit</button>
</form>
@for(pic of $pictuer();track pic){
  <img width="400" height="200" src="http://localhost:3000/users/{{auth.state$()._id}}/pictures/{{pic._id}}"/>
  


}
  `,
  styles: ``
})
export class ProfilePictureComponent {
  file!:File
  $pictuer=signal<{_id:string,url:string}[]>([])
  data=inject(ProfileService)
  auth=inject(AuthService)
form=inject(FormBuilder).nonNullable.group({
  file:''
})
constructor(){
  this.data.get_picture().subscribe(response=>{
   
    this.$pictuer.set(response.data)
   
  })
}
setfile(event:Event){
 this.file=(event.target as HTMLInputElement).files![0]

}
go(){
  const formData=new FormData();
  formData.append('picture',this.file)
  this.data.post_picture(formData).subscribe(response=>{
    // console.log(response)
  })
  this.form.reset()
  
}

}
