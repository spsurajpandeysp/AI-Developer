import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        minLength:[3,"Email at least 6 characters long"],
        maxLength:[50,"Email at most 50 characters long"]
    },
    password:{
        type:String,
 
    }
})


userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateJWT = async function (){
    return jwt.sign({email:this.email},process.env.JWT_SECRET)
}   


const User = mongoose.model('User',userSchema);

export default User