import React ,{useEffect, useState} from 'react';
import styles from './reminder.module.css';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const Reminders=({reminders})=>{
  const [showReminders,setShowReminders]=useState(reminders);
    // AddReminders(setShowReminders);
  useEffect(()=>{
    getData();
    // setShowReminders(reminders);
  },[reminders]);

  const getData=()=>{
    axios.get('https://remind13.herokuapp.com/reminder/62e3e01b166c3cb73abdbfc4')
    .then((res)=>{
      console.log(res.data,": response");
      setShowReminders(res.data);
      console.log(showReminders,": reminders from backend");
    }).catch((err)=>{
      console.log(err,":error")
    })
  }

  const handleDelete=(reminderid)=>{
    let DeleteReminder=showReminders.filter((reminder)=>{
      return reminder._id !==reminderid;
    })
    setShowReminders(DeleteReminder);

     console.log(reminderid,": reminderid")
     axios.delete(`https://remind13.herokuapp.com/reminder/${reminderid}`)
        .then((res)=>{
          console.log(res.data,": delete response")
              // getData();
        })
        .catch((err)=>{
          console.log(err,"error from delete");
        })
  }
  return (<>
   <div>
    {showReminders.map((reminder)=>{

      return (
        <div className={styles.reminders} key={reminder._id}>
        <p>{reminder.task}</p>
        <p>{reminder.time.slice(16,21)} {Number(reminder.time.slice(16,18))>12 ? (<span>PM</span>):(<span>AM</span>)}</p>
        <IconButton aria-label="delete" size="large" onClick={(e)=>handleDelete(reminder._id)}>
        <DeleteIcon fontSize="inherit" onClick={(e)=>handleDelete(reminder._id)}/>
      </IconButton>
        </div>
      )
    })}
   </div>
  </>)
}