import express from 'express'
import morgan from 'morgan';

import dbConnect from './db.js';
import userRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser';

dbConnect();

const app = express();

app.use(morgan('dev'))
app.use(cookieParser());

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Suraj Pandey")
})

app.use('/api/user',userRoutes)


export default app;