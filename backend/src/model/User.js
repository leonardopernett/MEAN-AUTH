import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new Schema({
   email:String,
   password:String
},{versionKey:false, timestamps:true})



userSchema.methods.encriptPassword = async(password)=>{
   const salt = await bcrypt.genSalt(10)
   return  await bcrypt.hash(password, salt)
}

userSchema.methods.comparePassword = async function(password){
   return await bcrypt.compare(password, this.password)
}


export default model('user', userSchema)