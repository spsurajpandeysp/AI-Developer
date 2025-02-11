import express from 'express'
import morgan from 'morgan';

import dbConnect from './db.js';

dbConnect();

const app = express();

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("Suraj Pandey")
})


export default app;