import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const data=inject(AuthService)
  if(data.is_loggedin()){
    const reqWithToken=req.clone(
      {headers:req.headers.set('authorization',`bearer ${data.$state().JWT}`)})
      return next(reqWithToken)
  
   }
 
  return next(req);
};
