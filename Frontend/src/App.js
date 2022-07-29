import {useEffect,useState} from 'react';
import { SetReminder } from './components/SetReminder';
import './App.css';

function App() {
const [currentTime,setCurrentTime]=useState(new Date().toString());
const [reminders,setReminders]=useState([]);

  const showReminder=()=>{
    const reminder=new Notification("You have to do",{
      body:"you have a scrum at 9:00am",
      icon:'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Designer_Shoes_2160x.jpg?v=1630420978'
    })
    // Notification.onClick=(event)=>{
    //   window.location.href='https://google.com';
    // }
  }
// showReminder();
  //   if(Notification.permission==="granted" ){
  //     alert("we havae a permission");
  //       // showReminder();
  //   }else if(Notification.permission!=="denied"){
  //     Notification.requestPermission().then(permission=>{
  //       console.log(permission);
  //       if(permission==='granted'){
  //        showReminder();
  //       }
  //     })
  //   }

  setInterval(()=>{
    let currMin=currentTime.slice(19,21);
  
    // console.log(currentTime);
  //  if(reminders[0]){
  //   let reminderSmallestMin=reminders[0].time.slice(19,21);
  //   let reminderLargestMin=reminders[reminders.length-1].time.slice(19,21);
  //   // console.log(reminderSmallestMin,":small min");

  //   if(reminders.length===1 && currMin===reminderSmallestMin && currentTime===reminders[0].time){
  //     if(currentTime.slice(22,24)===reminders[0].time.slice(22,24)){
  //       console.log(reminders[0].time.slice(22,24),":",currentTime.slice(22,24));
  //       // return;
  //     }
  //     //  alert("reminder working");
  //   }
  //   else if(currMin>=reminderSmallestMin && currMin<=reminderLargestMin){
  //     reminders.forEach((remind)=>{
  //       if(remind.time===currentTime)
  //       console.log(remind.time,":",currentTime)
  //         //  alert("reminder working");
  //     })
  //   }
  //  } 
    setCurrentTime(new Date().toString());
  })

 const checkReminder=()=>{

 }
  if(reminders[0] ){
    // checkReminder()
    reminders.forEach((remind)=>{
      if(remind.time=== new Date().toString() && new Date().getMilliseconds()===0){
        console.log('check',new Date().getMilliseconds());
        showReminder();
        return;
    }
    })
  }
  const addReminder=(reminder)=>{
    // sorting by mins
    let sortedReminder=[...reminders,reminder];
    sortedReminder=sortedReminder.sort((a,b)=>{return Number(a.time.slice(19,21)) - Number(b.time.slice(19,21))});
    setReminders(sortedReminder);
      console.log(reminders,": reminders from app");
  }
  // console.log(reminders,": reminders from app");
  return (
    <div className="App">
    <h1>Remind</h1>
    <p>{currentTime}</p>
    <SetReminder addReminder={addReminder}/>
    </div>
  );
}

export default App;
