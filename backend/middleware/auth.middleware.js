import jwt from 'jsonwebtoken'
import redisClient from '../services/redis.service.js';
export const authUser = async(req,res,next) =>{
    try{

        const token = req.cookies.token || req.headers.authorization.split(' ')[1];

        if(!token){
            res.status(401).json({error:"Token Not found"})
        }

        const isLogout =await redisClient.get(token);

        if(isLogout){
            res.status(401).json({error:"Unauthorized user"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        req.user = decoded;
        next();

    }catch(error){
        res.status(400).json({error:error.message})
    }
}