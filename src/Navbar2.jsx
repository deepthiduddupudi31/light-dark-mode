import myimage from "./th.jpeg";
import React from "react";
import './light.css'
export default function Navbar2(props)
{
    
    return(
        <div className="navbar1">
         <img src={myimage} width="40px"/>
        <h2 className="heading1">React Facts</h2>
        <button onClick={props.handleChange}>click me </button>
        
        
        </div>
    )
}