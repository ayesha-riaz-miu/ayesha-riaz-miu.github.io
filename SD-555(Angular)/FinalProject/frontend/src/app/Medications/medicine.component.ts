 import { Component, effect, inject, input } from '@angular/core';
import { Medication, MedicationService, Review } from './medication.service';
import { DatePipe } from '@angular/common';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, DatePipe],
  template: `
    <mat-card class="container">
     <img mat-card-image class="medication-image" src="http://localhost:3000/medications/images/{{fetch_medicine.image._id}}" /> 
      <mat-card-title class="medication-title">{{ fetch_medicine.name }}</mat-card-title>
      <mat-card-content>
        <p class="medication-info"><strong>Generic Name:</strong> {{ fetch_medicine.generic_name }}</p>
        <p class="medication-info"><strong>Class:</strong> {{ fetch_medicine.medication_class }}</p>
        <p class="medication-info"><strong>Availability:</strong> {{ fetch_medicine.availability }}</p>
        
        <div class="reviews-container">
          <h3 class="reviews-title">Reviews:</h3>
          @for (review of fetch_medicine.reviews;track review) {
            <mat-card class="review-item">
              <mat-card-content>
                <p class="review-text"><strong>Review:</strong> {{ review.review }}</p>
                <p class="review-rating"><strong>Rating:</strong> {{ review.rating }}</p>
                <p class="review-author"><strong>By:</strong> {{ review.by.fullname }} on {{ review.date | date }}</p>
              </mat-card-content>
            </mat-card>
          }
        </div>
        
        <div class="buttons-container">
        <button mat-raised-button color="primary" class="button-design" (click)="back()" >Back</button>
          @if (authService.is_loggedin()) {
            <button mat-raised-button color="primary" class="button-design" (click)="navigate_reviewcomponent(fetch_medicine)">Add Review</button>
            @for (review of fetch_medicine.reviews;track review) {
            @if (review.by.user_id == authService.$state()._id) {
              <button mat-raised-button color="primary" class="button-design" (click)="navigate_updateReview(review, fetch_medicine._id)">Update Review</button>
              <button mat-raised-button color="warn" class="button-design" (click)="delete_review(fetch_medicine._id, review._id!)">Delete Review</button>
            }
          }
          @if (fetch_medicine.added_by.user_id == authService.$state()._id) {
            <button mat-raised-button color="primary" class="button-design" (click)="navigate_updateComponenet(fetch_medicine)">Update Medicine</button>
            <button mat-raised-button color="warn" class="button-design" (click)="delete_medication(fetch_medicine._id)">Delete Medicine</button>
          }
          }
         
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [` 
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-width: 800px;
      margin: auto;
    }
    .medication-image {
      border-radius: 10px;
      object-fit: cover;
      margin-bottom: 20px;
    }
    .medication-title {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
    .medication-info {
      font-size: 18px;
      color: #666;
      margin-bottom: 5px;
    }
    .reviews-container {
      width: 100%;
      margin-top: 20px;
    }
    .reviews-title {
      font-size: 20px;
      color: #444;
      margin-bottom: 10px;
    }
    .review-item {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .review-text, .review-rating, .review-author {
      font-size: 16px;
      color: #555;
      margin: 5px 0;
    }
    .buttons-container {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }
    .button-design {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 8px;
    }
  `]
})
export class MedicineComponent {
  router = inject(Router);
  alertmesg = inject(ToastrService);
  medicationService = inject(MedicationService);
  authService = inject(AuthService);
  dataFromRouter = this.router.getCurrentNavigation()?.extras.state as Medication;
  fetch_medicine: Medication = {
    _id: '',
    name: '',
    first_letter: '',
    generic_name: '',
    medication_class: '',
    availability: '',
    image: { filename: '', originalname: '', _id: '' },
    added_by: { user_id: '', fullname: '', email: '' },
    reviews: []
  };
  id = input<string>('');

  constructor() {
    effect(() => {
      if (this.id()) {
        this.medicationService.get_medicationByID(this.id()).subscribe(response => {
          console.log(response);
          this.fetch_medicine = response.data;
          console.log(this.fetch_medicine);
        });
      }
    });
  }

  navigate_updateComponenet(medicine: Medication) {
    this.router.navigate(['', 'medication', 'update'], { state: medicine });
  }
  delete_medication(id: string) {
    this.medicationService.delete_medication(id).subscribe({
      next: response => {
        console.log(response);
        this.alertmesg.success('Successfully Deleted');
        this.router.navigate(['']);
      },
      error: error => {
        this.alertmesg.error('Not deleted');
      }
    });
  }
  navigate_reviewcomponent(med: Medication) {
    console.log('review id', med._id);
    this.router.navigate(['', 'medication', med._id, 'review'], { state: med });
  }
  delete_review(medicine_id: string, review_id: string) {
    this.medicationService.delete_review(medicine_id, review_id).subscribe({
      next: response => {
        console.log(response);
        this.fetch_medicine.reviews = this.fetch_medicine.reviews.filter(review => review._id !== review_id);
        this.alertmesg.success('Successfully Deleted Review');
      },
      error: error => {
        this.alertmesg.error('Review Not Deleted');
      }
    });
  }
  navigate_updateReview(review: Review, medicine_id: string) {
    this.router.navigate(['', 'medication', medicine_id, 'updateReview'], { state: { review, medicine_id } });
  }
  back(){
    this.router.navigate([''])
  }
}