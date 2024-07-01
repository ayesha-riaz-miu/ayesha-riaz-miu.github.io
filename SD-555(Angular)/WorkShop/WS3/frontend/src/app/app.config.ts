import { APP_INITIALIZER, ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { addTokenInterceptor } from './Auth/add-token.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './Auth/auth.service';



const bootstrap=()=>{
  const data=inject(AuthService)
  return()=>{
    const persited_state=localStorage.getItem('workshop3')
    if(persited_state){
       data.state$.set(JSON.parse(persited_state))
    }
  }
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,withComponentInputBinding()),
   provideHttpClient(withInterceptors([addTokenInterceptor])),
   provideToastr(),
   provideAnimationsAsync(),
   {provide:APP_INITIALIZER, multi:true,useFactory:bootstrap}

  ]
};
