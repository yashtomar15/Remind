import {useEffect,useState} from 'react';
import { SetReminder } from './components/SetReminder';
import './App.css';
import axios from 'axios';
import {Reminders} from './components/Reminders';
import {Routes,Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { Logout } from './components/Logout';

function App() {
const [currentTime,setCurrentTime]=useState(new Date().toString());
const [reminders,setReminders]=useState([]);

  const showReminder=(task,time)=>{
    console.log(task,": task", time,": time")
    if(task && time){
      const reminder=new Notification("You have to do",{
        body:task,
        icon:process.env.PUBLIC_URL+"screenshot (621).png"
      })
    }else if(time){
      const reminder=new Notification("You have to do",{
        body:'Something',
        icon:process.env.PUBLIC_URL+"screenshot (621).png"
      })
    }
    // Notification.onClick=(event)=>{
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
  // showReminder();
  let token =JSON.parse(localStorage.getItem('token'));

  token && axios.get(`https://remind13.herokuapp.com/reminder/${token}`)
  .then((res)=>{
    console.log(res.data,": response");
    setReminders(res.data);
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
      if(remind.time=== new Date().toString() && new Date().getMilliseconds()>=0 && new Date().getMilliseconds()<=20 && Notification.permission==="granted" ){
        console.log('check',new Date().getMilliseconds());
        // alert("reminder working");
        showReminder(remind.task,remind.time);
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

  const LoginUpdate=()=>{
    
  }
  // console.log(reminders,": reminders from app");
  // let token=JSON.parse(localStorage.getItem('token'));
  return (
    <div className="App">
      <Navbar />

    <Routes >
   <Route path="/remind" element={
   <div className="Reminder">  
   <div>
    <h1 style={{color:'#56508c',marginTop:"50px"}}>Remind</h1>
    <p>{currentTime.toString().slice(0,24)}</p>
    </div>
    <SetReminder addReminder={addReminder} /> 
    <Reminders reminders={reminders}/>
    </div>
  } /> 

  {/* <Route path="/diary" element={<Diary />} /> */}
  <Route path='/' element={<Signup />} />
  <Route path='/login' element={<Login />} />
  <Route path='/logout' element={<Logout />} />
    </Routes>
    {/* <CustomDateTimePicker /> */}
    </div>
  );
}

export default App;
