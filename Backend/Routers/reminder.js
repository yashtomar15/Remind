const Router=require("express");

const reminderRouter=Router();
const {Reminder}=require("../db");

// Post reminder
reminderRouter.post('/',async(req,res)=>{
    if(req.body.time && req.body.userid){
        let reminder= await new Reminder(req.body);
        reminder.save(); 
        return res.send({response:reminder,message:"add successfully"})
    }
    return res.send({message:"bad request"});
})

// Get Reminder
reminderRouter.get('/',async(req,res)=>{
    if(req.body.userid){
        let reminder= await Reminder.find({userid:req.body.userid});
         if(reminder){
            return res.send(reminder);
         }else{
            return res.send({message:"error occured"});
         }
    }
    return res.send({message:"bad request"});
})

// Delete Reminder
reminderRouter.delete('/:reminderid',async(req,res)=>{
       const {reminderid}=req.params;
    if(reminderid){
        let reminder= await Reminder.deleteOne({_id:reminderid});
         if(reminder){
            return res.send({response:reminder,message:"Delete succesfully"});
         }else{
            return res.send({response:reminder,message:"error occured"});
         }
    }
    return res.send({message:"bad request"});
})

module.exports=reminderRouter;