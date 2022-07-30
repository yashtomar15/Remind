import React from 'react';
import {Link} from 'react-router-dom';
import styles from './reminder.module.css';
import Login from './Login';
import Signup from './Signup';

export const Navbar=()=>{
    let token=JSON.parse(localStorage.getItem('token'));
    console.log(token);
return (<>
   <div className={styles.navbar}>
    {token ?(<Link to="remind">Reminder</Link>):(<Link to="/">reminder</Link>)}
    {/* <div><Link to="remind">Reminder</Link></div> */}
    <div><Link to="diary">Diary</Link></div>
    {token ?(<div><Link to="/">Logout </Link></div>):(<div><Link to="/">Login </Link></div>)}
    <div><Link to="signup">Signup</Link></div>
   </div>
</>)
}