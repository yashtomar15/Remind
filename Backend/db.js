const mongoose=require('mongoose');

const connection=mongoose.connect('mongodb+srv://yashdata15:incorrectPassword@cluster0.xitrb.mongodb.net/Remind?retryWrites=true&w=majority');

// Reminderschema
const ReminderSchema=mongoose.Schema({
    task:String,
    time:{type:String,require:true},
    userid:{type:String,require:true},
    link:String,
    status:{type:String,default:'active'}
})

const Reminder=mongoose.model('reminder',ReminderSchema);



module.exports={connection,Reminder};