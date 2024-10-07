import express, { NextFunction,Request,Response } from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';
import fs from 'node:fs'
import user_routes from './user_routes';
import { CheckAndVerifyToken } from './verifytoken';




const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/Final_Project')


const environment = process.env.NODE_ENV || 'development';
if (environment === 'development') {
  // Log requests to the console in development
  app.use(morgan('dev'));
} else if (environment === 'production') {
  // Log requests to a file in production
  const accessLogStream = fs.createWriteStream('access.log', { flags: 'a' });
  app.use(morgan('combined', { stream: accessLogStream }));
}



app.use('/users',user_routes)
app.use('/users',CheckAndVerifyToken,user_routes)






app.all('*',(req,res,next)=>{next(new Error('router not found'))})
app.use((error:Error,req:Request,res:Response,next:NextFunction)=>{
    res.send(error.message)
})

app.listen(3000,()=>console.log('connected on port 3000'))