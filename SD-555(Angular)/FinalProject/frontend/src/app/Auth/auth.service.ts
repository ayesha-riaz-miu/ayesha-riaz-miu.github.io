import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';



export const initialState={
  _id:'',
  fullname: 'Guest',
  email: '',
  password: '',
  JWT:''
}

export type  State ={
  _id:string
  fullname:string,
  email:string,
  password:string,
  JWT:string

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $state=signal<State>(initialState)
  http=inject(HttpClient)


  constructor() { 
   effect(()=>{

    localStorage.setItem('finalproject',JSON.stringify(this.$state()))
   })
  
  }
  sigup(form:State){
    return this.http.post<{succes:true,data:State}>(environment.BACKEND_SERVER_URL+'/users/signup',form)

  }
  sigin(form:State){
    return  this.http.post<{ "success": boolean, "data": string } >(environment.BACKEND_SERVER_URL+'/users/signin',form)

  }
  
  is_loggedin(){
    return this.$state()._id?true:false
  }
 
}
