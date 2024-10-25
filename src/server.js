import express from 'express';
import db from './models/index.js';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import errorHandler from './middlewares/errrorHandler.js';

dotenv.config();

const app=express();
const port=process.env.PORT;
app.use(cors());
app.use(express.json());
app.use('/api/admin', adminRoutes);
app.use(errorHandler);

app.get('/',(req,res)=>{
    res.send('Hello world');

});


db.sequelize.sync()
    .then(() => {
        app.listen(port, () => console.log(`App running on port ${port}`,))
       
    })
    .catch(err => {
        console.error('Database synchronization failed:', err);
        process.exit(1); 
    });

