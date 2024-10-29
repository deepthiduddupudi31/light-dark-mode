import React from "react";
import { useState } from 'react'
import Navbar1 from "./Navbar1.jsx";
import Navbar2 from "./Navbar2.jsx";
import Maincontent1 from "./Maincontent1.jsx"
import Maincontent2 from "./Maincontent2.jsx";
import './dark.css'
import './light.css'
export default function App()
{
  const[state,setstate]=React.useState(true);
  function handleChange()
  {
      setstate((prevstate)=>{
          return !prevstate;
      })
  }
  console.log(state)
  
   return(
      <div className="app">
          {state ? <Navbar1 handleChange={handleChange}/>:<Navbar2 handleChange={handleChange}/>}
          {state ? <Maincontent1/>: <Maincontent2/> }
           </div>
   )
}

