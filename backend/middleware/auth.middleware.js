import jwt from 'jsonwebtoken'

export const authUser = async(req,res,next) =>{
    try{
        

        if(!token){
            res.status(4)
        }

    }catch{
        res.status(401).json({error:"P"})
    }
}