import { Routes } from "@angular/router";

export const Medicationroutes:Routes=[
  
    {path:'add',loadComponent:()=>import('./add-medication.component').then(c=>c.AddMedicationComponent)},
    {path:'update',loadComponent:()=>import('./update-medication.component').then(c=>c.UpdateMedicationComponent)},
    // {path:':id',loadComponent:()=>import('./medicine.component').then(c=>c.MedicineComponent)},
     {path:':id/review',loadComponent:()=>import('./review/review.component').then(c=>c.ReviewComponent)},
     {path:':id/updateReview',loadComponent:()=>import('./review/update-review.component').then(c=>c.UpdateReviewComponent)}

]