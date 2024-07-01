import { Routes } from '@angular/router';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthService } from './Auth/auth.service';
import { inject } from '@angular/core';

export const routes: Routes = [
    {path:'', component:SignupComponent,pathMatch:'full' },
    {path:'signup',loadComponent:()=>import('./Auth/signup/signup.component').then(c=>c.SignupComponent)},
    {path:'signin',loadComponent:()=>import('./Auth/signin/signin.component').then(c=>c.SigninComponent)},
    {path:'profile',loadComponent:()=>import('./profile-picture/profile-picture.component').then(c=>c.ProfilePictureComponent)},
    {path:'todos',loadChildren:()=>import('./Todos/todos.routes').then(r=>r.Todosroutes),
     canActivate:[()=>inject(AuthService).is_loggedin()]},
    {path:'**',redirectTo:''}
];
