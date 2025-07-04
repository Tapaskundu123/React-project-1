import { useState } from 'react'
import { Blogs, Footer, Features, Header, Possibility, WhatGPT3 } from './Containers'
import { Navbar, CTA, Brand } from './components' 
import './App.css'

function App() {

  return (
   <>
     <div className='gradiant__bg'>
      <Navbar/>
      {/* <Header/> */}
     </div>
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
