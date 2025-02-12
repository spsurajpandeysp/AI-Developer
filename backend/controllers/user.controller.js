import userModel from '../models/user.model.js'
import { validationResult } from 'express-validator'
import * as userService from '../services/user.service.js'
import redisClient from '../services/redis.service.js'

export const createUserController  = async(req,res) =>{

    // const error = validationResult(req.body);
    // if(!error.isEmpty()){
    //     return res.status(400).json({errors:error.array()});
    // }

    try{
        const user = await userService.createUser(req.body);

        const token = await user.generateJWT({email:user.email},process.env.JWT_SECRET)

        res.status(201).json({"user":user,"message":"User Registered"});
    }
    catch(error){
        res.status(400).json({"message":error.message})
    }
}

export const userLoginController = async(req,res)=>{
    try{
        const user = await userService.userLogin(req.body);
        console.log(req.body)
        if(!user){
            return res.status(404).json({"message":"User not found"});
        }
    
        const isPasswordValid = await user.isValidPassword(req.body.password);
        if(!isPasswordValid){
            return res.status(401).json({"message":"Enter correct password"});
        }
        const jwtToken =await user.generateJWT(user.email);
      
        console.log(user,jwtToken)

        res.status(201).json({user,token:jwtToken,"message":"Login Succesfully"});
    }
    catch(error){
        res.status(400).json({"message":error.message})
    }
}

export const profileController = async(req,res)=>{
    try{
        res.send(req.user)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}