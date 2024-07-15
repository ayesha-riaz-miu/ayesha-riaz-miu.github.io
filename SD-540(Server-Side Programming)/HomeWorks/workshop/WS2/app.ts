import mongoose, { Schema,InferSchemaType, model } from "mongoose";
import bcrypt from 'bcrypt';
import { userInfo } from "os";



mongoose.connect('mongodb://127.0.0.1:27017/WS2')


const schema=new Schema({
    fullname:  { first: String, last: String },
    email:{type:String,require:true,unique:true},
    hashed_password: {type:String,require:true},
    hashed_temp_password: String,
    temp_password_expiration_timestamp: Number,

})
type User=InferSchemaType<typeof schema>
const user_model=model<User>('DOCUMENT',schema)

async function sign_up(email: string, plain_password: string, firstname?: string, lastname?: string){
const salt_rounds=10;
    const hashed_password=await bcrypt.hash(plain_password, salt_rounds)

    const add_data=await user_model.create({fullname:{first:firstname,last:lastname},email:email,hashed_password:hashed_password,})

    return add_data._id
  


}
//sign_up('ariaz2miu.edu','1234','Ayehsa','Riaz').then(console.log)


async function sign_in(email: string, plain_password: string):Promise<boolean>{

   const user=await user_model.findOne({email:email})
if(!user) return false
if(user.hashed_password){
    const data=await bcrypt.compare(plain_password, user.hashed_password)
   return t

}


}
//sign_in('ariaz@miu.edu','1234').then(console.log)


