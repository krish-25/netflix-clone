 import React, { useEffect, useState } from 'react';
 import './Nav.css';

 function Nav(){
     const [show, handleShow] = useState(false);
     useEffect(() => {
         window.addEventListener("scroll", () => {
             if(window.scrollY > 100){
                 handleShow(true);
             }else{
                 handleShow(false);
             }
         });
     },[]);
     
     return(
         <div className={`nav ${show && "nav_black"}`}>
             <img 
             className ="nav_logo"
             src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
             alt="Netflix Logo"
             />

         </div>
     );
 }

 export default Nav