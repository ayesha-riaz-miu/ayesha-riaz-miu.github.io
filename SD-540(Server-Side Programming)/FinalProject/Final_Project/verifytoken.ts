import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
import { JWTcontent } from "./jwtTypes";


 export const CheckAndVerifyToken:RequestHandler<unknown,unknown,unknown,unknown>=(req,res,next)=>{

   
    const token=req.headers.authorization?.split(' ')[1]
   
    if(token){
        const result=verify(token,'Ayesha_riaz') 
        //console.log(result)
        if(result){
            req.userinfo=result
              next()
        }
        
    }
    else{
        res.json({message:'you are not authorized'})
    }
   

 }