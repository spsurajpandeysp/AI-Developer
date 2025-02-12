import jwt from 'jsonwebtoken'

export const authUser = async(req,res,next) =>{
    try{

        const token = req.headers.authorization;

        if(!token){
            res.status(401).json({error:"Unauthorized, no token provided"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!token){
            res.status(401).json({error:"Unauthorized, no token provided"})
        }

        req.user = decoded;
        next();

    }catch(error){
        res.status(401).json({error:error.message})
    }
}