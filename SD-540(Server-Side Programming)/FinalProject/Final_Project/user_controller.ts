import { RequestHandler, json } from "express";
import { User, UserModel } from "./model";
import { Jwt, sign } from "jsonwebtoken";
import multer from "multer";

import bcrypt from 'bcrypt';

export const signup: RequestHandler<unknown, { succes: boolean, data: User }, User, unknown> = async (req, res, next) => {

    try {

        const { email, password } = req.body;
        const salt_rounds = 10;
        const hashed_data = await bcrypt.hash(password, salt_rounds)



        const result = await UserModel.create({ email, password: hashed_data })
        res.json({ succes: true, data: result })

    }
    catch (error) {
        next(error)
    }

}
export const signin: RequestHandler<unknown, any, User, unknown> = async (req, res, next) => {

    try {

        const { email, password } = req.body;


        const user = await UserModel.findOne({ email: email })
        let JWT: any;

        if (user) {
            bcrypt.compare(password, user.password)

            JWT = sign({
                userId: user._id,
                fullname: user.fullname,
                email: user.email,
                profilePicturePath: user.picture.path
            }, 'Ayesha_riaz')

        }
        console.log(JWT)
        res.json({ JWT })
    }
    catch (error) {
        next(error)
    }

}
export const post_picture: RequestHandler<{ user_id: string }, any, unknown,unknown> = async (req, res, next) => {
    try {
        res.json(`welcome to ${req.userinfo.email}`)

   
       
        const  {user_id } = req.params;
        const upload_data = req.file;
       
       
   
        // const result=await UserModel.updateOne({_id:req.userinfo.userId},{
        //     $push:{picture:upload_data?.path}
        // })

        const result = await UserModel.updateOne({ _id: user_id}, { $push: { picture:upload_data } });
      

        res.json({succse:true,data:result})

        

     }
    catch (error) {
        next(error)
    }

}



