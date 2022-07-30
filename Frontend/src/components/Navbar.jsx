import React, { useEffect, useState } from 'react';
import {Link,} from 'react-router-dom';
import styles from './reminder.module.css';
import Login from './Login';
import Signup from './Signup';

export const Navbar=({token})=>{
return (<>
   <div className={styles.navbar}>

    {token ?(<div><Link to="/remind"><span>Reminder</span></Link></div> ):(<div onClick={(e)=>{ alert('First Signup ')}}><Link to="/">Reminder</Link></div> )}
    {token ?(<div><Link to="/diary">Diary</Link></div> ):(<div onClick={(e)=>{ alert('First Signup ')}}><Link to="/">Diary</Link></div> )}
    {token ?(<div><Link to="/logout">Logout </Link></div>):(<div><Link to="/login">Login </Link></div>)}
    {!token && <div><Link to="/">Signup</Link></div>}
   </div>
</>)
}