const { urlencoded } = require('express');
const express=require('express');

const {connection}=require('./db');
const cors=require('cors');
const reminderRouter=require('./Routers/reminder');

const app=express();

app.use(cors());
app.use(urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welconme to Remind');
})

// Reminder Router
app.use('/reminder',reminderRouter);

const port=process.env.PORT || 8080;
app.listen(port,async ()=>{
    await connection;
try{
    console.log('server started at port 8080 and Database connected');
}
catch(err){
    console.log('error ocuured :',err);
}
})