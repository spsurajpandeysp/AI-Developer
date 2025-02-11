
import mogoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_URL = process.env.DB_URL;
console.log(DB_URL);
function dbConnect(){
    mogoose.connect(DB_URL).then(()=>{
        console.log("Connected to MongoDb")
    }).catch((error)=>{
        console.log("Not Connected to MongoDb: ",error);
    })
} 

export default dbConnect