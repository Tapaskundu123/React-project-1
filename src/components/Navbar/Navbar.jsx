import React, { useState } from 'react'
import { AlignJustify,X } from 'lucide-react';
import logo from '../../assets/logo.svg'
import './Navbar.css'
const Navbar = () => {

  const [menuToggleButton, setMenuToggleButton]= useState(false)

  const HandleMenuButton = () => {
    setMenuToggleButton((prev) => !prev);
  }
  return (
 
     <div className='gpt3_navbar'>
      {/* <div className="gpt3-navbar-links"> */}
        <div className="gpt3_navbar_links_logo">
          <img src={logo} alt="logo" />
        </div>
  
        <div className='gpt3-navbar-links-container'>
         <p><a href='#home'>Home</a></p>
         <p><a href='#wgpt3'>What is GPT?</a></p>
         <p><a href='#possibility'>Open AI</a></p>
         <p><a href='#features'>Case Studies</a></p>
         <p><a href='#blog'>Library</a></p>
        </div>

        <div className='gpt3_navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
          {menuToggleButton ? (<X className='close-btn' onClick={HandleMenuButton}/>):(<AlignJustify className='menu-btn' onClick={HandleMenuButton} />)}
        </div>
       {
        menuToggleButton &&
         (<div className='menu-open-container'>    
              <p><a href='#home'>Home</a></p>
              <p><a href='#wgpt3'>What is GPT?</a></p>
              <p><a href='#possibility'>Open AI</a></p>
              <p><a href='#features'>Case Studies</a></p>
              <p><a href='#blog'>Library</a></p>     
           </div>)


       }
      </div>
    //  </div>

  )
}

export default Navbar