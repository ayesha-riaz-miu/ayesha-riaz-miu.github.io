import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgStyle],
  template: `
   
 

    <router-outlet />
  `,
  styles: [`
 `
    
  ],
})
export class AppComponent {
 
}
