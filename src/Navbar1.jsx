import myimage from "./th.jpeg";
import React from "react";
import  './dark.css';
export default function Navbar1(props)
{
    
    return(
            
        <div className="navbar">
         <img src={myimage} width="40px"/>
        <h2 className="heading">React Facts</h2>
        <button onClick={props.handleChange}>click me </button>
        
        
        </div>
    )
}