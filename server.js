import http from 'http'
import app from './app'
import dotenv from 'dotenv'
dotenv.config();
const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT,()=>{
    console.log("Server is running on PORT: ",PORT);
})
