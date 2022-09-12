import React ,{useEffect, useState} from 'react';
import styles from '../styles/reminder.module.css';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Popup from 'reactjs-popup';
import '../styles/reminderPopup.css';
import { style } from '@mui/system';

export const Reminders=({reminders})=>{
  const [showReminders,setShowReminders]=useState(reminders);
  useEffect(()=>{
    getData();
  },[reminders]);

  const getData=()=>{
    let token =JSON.parse(localStorage.getItem('token'));
   token && axios.get(`https://remind13.herokuapp.com/reminder/${token}`)
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
   <div className={"allReminders"}>
    {showReminders.map((reminder,ind)=>{

      return (
        <Popup
          key={ind}
        trigger={   
        <div className={styles.reminders} key={reminder._id} >
        <p>{reminder.task}</p>
        <p>{reminder.time.slice(16,21)} {Number(reminder.time.slice(16,18))>12 ? (<span>PM</span>):(<span>AM</span>)}</p>
        <div onClick={(e)=>handleDelete(reminder._id)} style={{marginTop:'20px'}} >
        <IconButton aria-label="delete" size="large" >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      </div>
        </div>
        }
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> {reminder.task}</div>
            <div className="content">
              <div >Task - {reminder.task}</div>
              <div >Link - <a href={reminder.link} target="_">{reminder.link ? (<span>{reminder.link.toString().slice(0,45)}...</span>):(<span> No link</span>)}</a></div>
              <div> Time - {reminder.time.slice(0,24)}</div>
              
            </div>
            <div className="actions">
              <Popup
                // trigger={<button className="button"> Trigger </button>}
                position="top center"
                nested
              >
                <span>
                      reminder app
                </span>
              </Popup>
              <button
                className="button"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                close reminder
              </button>
            </div>
          </div>
        )}
      </Popup>
      )
    })}
   </div>
  </>)
}