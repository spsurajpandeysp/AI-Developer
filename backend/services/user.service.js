
import userModel from '../models/user.model.js'





export const createUser = async({email,password}) => {
    if(!email || !password){
        throw new Error("Email and Passwrod are required");
    }

    const hashPassword = await userModel.hashPassword(password)


    const user = await userModel.create({
        email,
        password:hashPassword
    })

    return user;
    
}

export const userLogin = async({email,password}) =>{
    if(!email || !password){
        throw new Error("Email and Passwrod are required");
    }

    const user = userModel.findOne({email});

    return user
}