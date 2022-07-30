import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

export const Logout=()=>{
    let token=localStorage.getItem('token');
    
    const handleLogout=()=>{
        localStorage.clear();
    }
return(<>

{token && <Link to='/'><button onClick={handleLogout}>Logout</button></Link>}

</>)
}