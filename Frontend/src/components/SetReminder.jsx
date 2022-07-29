import React, { useEffect } from "react";
import {useState} from 'react';
import DateTimePicker from 'react-datetime-picker';

export const SetReminder=({addReminder})=>{
    const [reminder,setReminder]=useState({});
    // let reminder={reminder:"test",time:new Date().toString()};

    const [value, onChange] = useState(new Date());

    // console.log(value.toString().slice(16,24), typeof value,": date and time")
    // console.log(new Date(),": current date");

    const handleChange=(e)=>{
    //    console.log(e.target.value,":",e.target.name);
       setReminder({...reminder,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        setReminder({...reminder,time:value.toString()});
        // console.log('reminder render');
    },[value]);

    const handleAdd=(e)=>{
        e.preventDefault();
        console.log(reminder,": reminder");
      addReminder(reminder);
    }
    return (<>
    <form onSubmit={handleAdd}>
        <input type={'text'} name="reminder" onChange={handleChange} placeholder="I have to do.." />
        <DateTimePicker onChange={onChange} value={value} />
        <input type={'submit'}  value="Add Remind" onChange={handleChange}/>
    </form>
    </>)
}