import express from 'express'
import morgan from 'morgan';

import dbConnect from './db.js';
import userRoutes from './routes/user.routes.js'

dbConnect();

const app = express();

app.use(morgan('dev'))

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Suraj Pandey")
})

app.use('/api',userRoutes)


export default app;