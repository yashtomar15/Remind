import {useEffect,useState} from 'react';
import { SetReminder } from './components/SetReminder';
import './App.css';
import axios from 'axios';
import {Reminders} from './components/Reminders';
import {PopupExample} from './components/ReminderPopup';

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
useEffect(()=>{
  if(Notification.permission==="default"){
    Notification.requestPermission().then(permission=>{
      console.log(permission);
      if(permission==='granted' ){
        console.log(permission,': granted')
         alert("Now you can get your reminders");
      }
    })
  }
  axios.get('https://remind13.herokuapp.com/reminder/62e3e01b166c3cb73abdbfc4')
  .then((res)=>{
    console.log(res.data,": response");
    let sortedReminder=res.data;
    sortedReminder=sortedReminder.sort((a,b)=>{return Number(a.time.slice(19,21)) - Number(b.time.slice(19,21))});
    setReminders(sortedReminder);
    console.log(reminders,": reminders from backend");
  }).catch((err)=>{
    console.log(err,":error")
  })
},[])


  setInterval(()=>{
     setCurrentTime(new Date().toString());
  })

  if(reminders[0] ){
    // checkReminder()
    reminders.forEach((remind)=>{
      if(remind.time=== new Date().toString() && new Date().getMilliseconds()===0 && Notification.permission==="granted" ){
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

  console.log(reminders,": reminders from app");

  return (
    <div className="App">
     <div className="Reminder">
            <h1 style={{color:'#56b389'}}>Remind</h1>
            {/* <PopupExample /> */}
    {/* <p>{currentTime.toString().slice(0,24)}</p>
    <SetReminder addReminder={addReminder}/>
    <Reminders reminders={reminders}/> */}
    {/* <CustomDateTimePicker /> */}
      </div>
    </div>
  );
}

export default App;
