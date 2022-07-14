const express=require('express');
const dotenv=require('dotenv');
const userRouter=require('./routes/userRouter');
const bodyParser = require('body-parser');
const cors = require('cors')
const connectDB=require('./database/configdb')
dotenv.config();
const app =express();


connectDB();
const PORT= process.env.PORT || 5000
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use("/api",userRouter);
app.use("/test",(req,res)=>{
    res.status(200).json("ok");
})
app.listen(PORT,()=>console.log(`SERVER RUNNING AT ${PORT}`));