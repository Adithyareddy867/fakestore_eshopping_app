// import { useEffect,useState } from "react";
// import "./event-binding.css";
//  export function EventBinding(){ 
//     function handleRightClick(){
//         alert("you cant Right Click")
//         document.oncontextmenu = function(){
//             return false;
//         }

//     }
//     function handleDoubleClick(){
//         window.open("images/m1.jpeg", "Phone", "width=400 height=500")
        

//     }
//     return(
//         <div onContextMenu={handleRightClick} className="container-fluid">
//             <img  onDoubleClick={handleDoubleClick} src="images/m1.jpeg"width="100" height="100" alt="" />

//         </div>
    
//     )
//  }

import {useEffect, useState } from "react";
export function EventBinding(){
    const[msg, setmsgs]=useState({})
    function handleCut(){
        
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Account Number</dt>
                <dd><input type="text"  onCut={handleCut}  name="" id="" /></dd>
                <dd>{}</dd>
                <dt>Condorm Account</dt>
                <dd><input type="text" name="" id="" /></dd>
            </dl>

        </div>
    )
}