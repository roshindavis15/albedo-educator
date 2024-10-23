import express from 'express';
import db from './models/index.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
const port=process.env.PORT;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello world');

});


db.sequelize.sync().then(()=>{
    app.listen(port,()=>console.log(`app running on ${port}`))
});
