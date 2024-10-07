import express from 'express'
import { signup,signin,post_picture } from './user_controller'
import multer from 'multer'
import { CheckAndVerifyToken } from './verifytoken'




 const user_routes=express.Router()

 user_routes.post('/signup',express.json(),signup)
 user_routes.post('/signin',express.json(),signin)





const upload = multer({ dest: 'uploads/' })
 user_routes.post('/:user_id/picture',upload.single('myfile'),CheckAndVerifyToken,post_picture)
 //upload.single('myfile')



 
 export default user_routes

