import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  //if JWT found attach to request headers
 const data=inject(AuthService)
 if(data.is_loggedin()){
  const reqWithToken=req.clone(
    {headers:req.headers.set('authorization',`bearer ${data.state$().JWT}`)})
    return next(reqWithToken)

 }
  
    return next(req);
    
 
  
};
