import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthService } from './Auth/auth.service';
import { inject } from '@angular/core';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'signup',loadComponent:()=>import('./Auth/signup/signup.component').then(c=>c.SignupComponent)},
    {path:'signin',loadComponent:()=>import('./Auth/signin/signin.component').then(c=>c.SigninComponent)},
    {path:':id',loadComponent:()=>import('./Medications/medicine.component').then(c=>c.MedicineComponent)},
  
    {path:'medication',
    loadChildren:()=>import('./Medications/medication.routes').then(r=>r.Medicationroutes),
    canActivate:[()=>inject(AuthService).is_loggedin()]},
    {path:'**',redirectTo:''},

    
];
