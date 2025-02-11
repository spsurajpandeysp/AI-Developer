import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("Suraj Pandey")
})


export default app;