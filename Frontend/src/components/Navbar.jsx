import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import styles from '../styles/reminder.module.css';
import Login from './Login';
import Signup from './Signup';

export const Navbar=()=>{
  const navigate=useNavigate();

   let token=JSON.parse(localStorage.getItem('token'));
   const handleLogout=()=>{
      localStorage.clear();
      navigate('/');
   }
return (<>
   <div className={styles.navbar}>

    {token ?(<div><Link to="/remind" className={styles.linkDecoration}><span>Reminder</span></Link></div> ):
    (<div onClick={(e)=>{ alert('First Signup ')}}><Link to="/" className={styles.linkDecoration}>Reminder</Link></div> )}

    {/* {token ?(<div><Link to="/diary" className={styles.linkDecoration}>Diary</Link></div> ):
    (<div onClick={(e)=>{ alert('First Signup ')}}><Link to="/" className={styles.linkDecoration}>Diary</Link></div> )} */}

    {/* {token ?(<div><Link to="/logout" className={styles.linkDecoration} onClick={handleLogout}>Logout </Link></div>):
    (<div><Link to="/login" className={styles.linkDecoration}>Login </Link></div>)} */}

    {token ?(<div><div className={styles.linkDecoration} onClick={handleLogout}>Logout </div></div>):
    (<div><Link to="/login" className={styles.linkDecoration}>Login </Link></div>)}
    {!token && <div><Link to="/" className={styles.linkDecoration}>Signup</Link></div>}
   </div>
</>)
}