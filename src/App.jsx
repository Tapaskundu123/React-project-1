import { useState } from 'react'
import { Blogs, Footer, Features, Hero, Possibility, WhatGPT3 } from './Containers'
import { Navbar, CTA, Brand } from './components' 
import './App.css'

function App() {

  return (
   <>
     <div className='gradiant__bg'>
      <Navbar/>
      {/* <Header/> */}
     </div>
    <Hero/>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <CTA/>
    <Blogs/>
    <Footer/>
    
   </>
  )
}

export default App
