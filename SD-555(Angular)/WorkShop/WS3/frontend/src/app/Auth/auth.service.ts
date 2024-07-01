import { Injectable, effect, signal } from '@angular/core';
export type State={
  _id:string,
  fullname:string,
  email:string,
  JWT:string

}
export const initialState={
  _id:'',
  fullname:'Guest',
  email:'',
  JWT:''

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  state$=signal<State>(initialState)

  constructor(){
    effect(()=>{
      localStorage.setItem('workshop3',JSON.stringify(this.state$()))
    })
  }

 is_loggedin(){
  return this.state$()._id?true:false;
 }
}
