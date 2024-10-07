import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Medication, MedicationService } from '../Medications/medication.service';
import { AuthService, initialState } from '../Auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, RouterLink],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span>{{ title }}.com</span>
    </mat-toolbar>
    <div class="container">
      <h2 class="subheading">Browse A-Z</h2>
      <div class="alphabet-container">
        @for (letter of alphabets;track letter) {
          <button mat-raised-button (click)="fetchData(letter)">
            {{ letter }}
          </button>
        }
      </div>
      @if (!authService.is_loggedin()) {
        <div class="auth-container">
          <button mat-raised-button color="primary" (click)="navigateSignup()">Signup</button>
          <button mat-raised-button color="accent" (click)="navigateSignin()">Signin</button>
        </div>
      } @else {
        <mat-toolbar color="primary" class="toolbar1">
      <span>Welcome {{authService.$state().fullname}}</span>
       </mat-toolbar>

        <div class="auth-container">
          <button mat-raised-button color="warn" (click)="logout()">Logout</button>
          <button mat-raised-button color="primary" (click)="navigateAddMedicine()">Add New Medicine</button>
        </div>
      }
      <div class="medications-container">
        @for (med of $fetchMedication();track med) {
          <mat-card class="medication-card" (click)="navigateToMedicationDetails(med)">
            <mat-card-title>
              {{ med.name }}
            </mat-card-title>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .toolbar {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
    }
    .toolbar1 {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      color:green;
     
    }
    .container {
      padding: 20px;
      max-width: 1200px;
      margin: auto;
    }
    .subheading {
      text-align: center;
      margin-bottom: 20px;
      font-size: 1.5rem;
      color: #555;
    }
    .alphabet-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
    }
    .alphabet-container button {
      font-size: 1.2rem;
      padding: 10px;
    }
    .auth-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
      margin-top:20px
    }
    .medications-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .medication-card {
      margin: 10px auto;
      width: 80%;
      cursor: pointer;
    }
  `]
})
export class HomeComponent {
  title = 'Medications';
  router = inject(Router);
  data = inject(MedicationService);
  authService = inject(AuthService);
  alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  $fetchMedication = signal<Medication[]>([]);

  navigateSignup() {
    this.router.navigate(['', 'signup']);
  }
  navigateSignin() {
    this.router.navigate(['', 'signin']);
  }
  fetchData(letter: string) {
    this.data.get_alphabet(letter).subscribe(response => {
      console.log(response.data);
      this.$fetchMedication.set(response.data);
    });
  }
  navigateAddMedicine() {
    this.router.navigate(['', 'medication', 'add']);
  }
  logout() {
    this.authService.$state.set(initialState);
    this.router.navigate(['']);
  }
  navigateToMedicationDetails(med: Medication) {
    this.router.navigate(['', med._id], { state: med });
  }
}