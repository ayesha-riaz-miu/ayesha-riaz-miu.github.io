import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService, initialState } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome {{data.state$().fullname}}!</h1>
    @if(data.is_loggedin()){
      <td class="text-center align-middle">
    <div class="btn-group">
        <button class="btn btn-outline-primary" (click)="navigate_addTodo()">add todo</button>
        <button class="btn btn-outline-primary" (click)="navigate_profile()">profile picture</button>
        <button  (click)="logout()" class="btn btn-outline-primary">logout</button>
    </div>                
</td>

    }
    @else{
      <td class="text-center align-middle">
    <div class="btn-group">
        <button (click)="navigate_signup()" class="btn btn-outline-primary">signup</button>
        <button (click)="navigate_signin()" class="btn btn-outline-primary">signin</button>
    </div>                
</td>

    }
    <router-outlet />
   
  `,
  styles: [],
})
export class AppComponent {
  data=inject(AuthService)
  router=inject(Router)

  navigate_signup(){
    this.router.navigate(['signup'])

  }
  navigate_signin(){
    this.router.navigate(['signin'])

  }
  logout(){
    this.data.state$.set(initialState)
    this.router.navigate(['signin'])
  }
  navigate_addTodo(){
    this.router.navigate(['','todos','add'])
  }
  navigate_profile(){
    this.router.navigate(['','profile'])
  }
}