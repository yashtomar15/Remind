import axios from "axios";
import React, { useEffect } from "react";
import {useState} from 'react';
import DateTimePicker from 'react-datetime-picker';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './reminder.module.css';

export const SetReminder=({addReminder})=>{
    const [reminder,setReminder]=useState({});
    const [value, onChange] = useState(new Date());

    const handleChange=(e)=>{
    //    console.log(e.target.value,":",e.target.name);
       setReminder({...reminder,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        let token=JSON.parse(localStorage.getItem('token'));
       token && setReminder({...reminder,time:value.toString(),userid:token});
    },[value]);

    const handleAdd=(e)=>{
        e.preventDefault();
        console.log(reminder,": reminder");
    //   addReminder(reminder);
    axios.post('https://remind13.herokuapp.com/reminder',reminder)
         .then((res)=>{
            console.log(res.data,":post response");
            addReminder(res.data.response);
         })
         .catch((err)=>{
            console.log(err,'err from post');
         })
    }
    return (<>
    <form className={styles.form}>
        <input className={styles.inputBox} type={'text'} name="task" onChange={handleChange} placeholder="I have to do.." />
        <input className={styles.inputBox} type={"text"} name="link" onChange={handleChange} placeholder="Metting link.."  />
        <DateTimePicker onChange={onChange} value={value} className={styles.time}/>
        {/* <Box className={styles.button}> */}
        <Button variant="contained" size="medium" onClick={handleAdd} style={{backgroundColor:"#56b389"}}>
          Remind me 
        </Button>
        {/* </Box> */}
    </form>
    </>)
}