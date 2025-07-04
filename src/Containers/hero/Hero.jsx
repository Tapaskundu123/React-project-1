import React from 'react'
import HeroImg from '../../assets/ai.png'
import peopleImg from '../../assets/people.png'
import './Hero.css'
const Header = () => {
  return (

    <>
    <div className='Hero-div-container'>
      <div className='hero-text'>
        <h1 className='gradient__text'>Let's Build Something <br/> amazing with GPT3 <br/> OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='hero-input-button-div'>
          <input type="text" placeholder='Your Email Address' />
          <button>Get Started</button>
        </div>
        <div className='people-div'>
          <img src={peopleImg} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='Hero-img-div'>
       <img src={HeroImg} alt="" />
      </div>

     </div>
    </>
  )
}

export default Header