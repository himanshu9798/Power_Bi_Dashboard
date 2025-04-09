import React from 'react';
import { MdDashboard } from "react-icons/md";
import './header.css'
import {Link} from 'react-router-dom';

import { BsCalendar3 } from "react-icons/bs";
import { RiNewspaperFill } from "react-icons/ri";
import { FaPeopleArrows } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import 'animate.css';
function Header(){
  return(
    <>
    

    <div className='animate__animated animate__heartBeat' style={{zIndex:"1",padding:"10px",backgroundColor:"#3c3c44", color:"white", width:"250px",height:"600px", margin:"20px",position:"fixed",borderRadius:"10px"}}>
     <span style={{display:"flex",padding:"20px",justifyContent:"center",alignItems:"center",fontWeight:"800"}}>
     <p>Material DashBoard 2</p>
     </span>
     <hr style={{backgroundColor:"white",position:"relative",top:"-30px"}}></hr>
    
     <div style={{display:"inline",gap:"5px"}}>
     <span style={{backgroundColor:"#3993ee",display:"flex", borderRadius:"10px",padding:"8px",height:"45px",cursor:"pointer"}}>
        <MdDashboard style={{position:"relative",fontSize:"25px",}}  />
        <Link to="/app" style={{color:"white",textDecoration:"none"}} >
        <p style={{marginLeft:"25px",}}>DashBoard</p>
        </Link>
     </span>
     <br/>
     <span className='dashboard' style={{display:"flex", borderRadius:"10px",padding:"8px",height:"45px"}}>
        <BsCalendar3 style={{position:"relative",fontSize:"20px",}}  />
        <Link to="/table" style={{color:"white",textDecoration:"none"}} >
        <p style={{marginLeft:"25px",}}>Tables</p>
        </Link>
     </span>
     <span className='dashboard' style={{display:"flex", borderRadius:"10px",padding:"8px",height:"45px"}}>
        <RiNewspaperFill style={{position:"relative",fontSize:"20px",}}  />
        <Link to="/billing" style={{color:"white",textDecoration:"none"}} >
        <p style={{marginLeft:"25px",}}>Billing</p>
        </Link>
     </span>
     <span className='dashboard' style={{display:"flex", borderRadius:"10px",padding:"8px",height:"45px"}}>
        <FaPeopleArrows style={{position:"relative",fontSize:"20px",}}  />
        <p style={{marginLeft:"25px",}}>RTL</p>
     </span>

     <span className='dashboard' style={{display:"flex", borderRadius:"10px",padding:"8px",height:"45px"}}>
        <IoIosNotifications style={{position:"relative",fontSize:"20px",}}  />
        <Link to="/notisfication" style={{color:"white",textDecoration:"none"}} >
        <p style={{marginLeft:"25px",}}>Notification</p>
        </Link>
     </span>

     <span className='dashboard' style={{display:"flex", borderRadius:"10px",padding:"8px",height:"45px"}}>
        <FaUser style={{position:"relative",fontSize:"20px",}}  />
        <Link to="/profile" style={{color:"white",textDecoration:"none"}} >
        <p style={{marginLeft:"25px",}}>Profile</p>
        </Link>
     </span>
    
     <span className='dashboard' style={{display:"flex", borderRadius:"10px",padding:"8px",height:"45px"}}>
        <CiLogin style={{position:"relative",fontSize:"20px",}}  />
        <Link to="/sign" style={{color:"white",textDecoration:"none"}} >
        <p style={{marginLeft:"25px",}}>Sign-in</p>
        </Link>
     </span>
     
    
     <span className='dashboard' style={{display:"flex", borderRadius:"10px",padding:"8px",height:"45px"}}>
        <CiMemoPad style={{position:"relative",fontSize:"20px",}}  />
        <Link to="/" style={{color:"white",textDecoration:"none"}} >
        <p style={{marginLeft:"25px",}}>Sign-Up</p>
        </Link>
     </span>
    
     <br/>
    
     <span style={{padding:"8px",backgroundColor:"#3993ee",display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center", borderRadius:"10px",height:"45px",cursor:"pointer"}}>
       
        <p style={{textAlign:"center",marginTop:"5px"}}>Upgrade To Pro</p>
     </span>



     </div>
    
    </div>
    </>
  )
}
export default Header;