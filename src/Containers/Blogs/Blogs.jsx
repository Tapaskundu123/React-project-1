import React from 'react'
import blog1Img from '../../assets/blog01.png'
import blog2Img from '../../assets/blog02.png'
import blog3Img from '../../assets/blog03.png'
import blog4Img from '../../assets/blog04.png'
import blog5Img from '../../assets/blog05.png'


import './Blogs.css'
const Blogs = () => {
  return (
    <div className='blogs-container'>
      
      <div className='blogs-1st'>
        <h1>A lot is happening<br/> we are blogging about it</h1>
      </div>

      <div className='blog-div'>  

        <div className="blog1-img-div" >
          <img src={blog1Img} alt="blog1Img" />
          <p>sep 26,2021</p>
          <h4>GPT-3 and Open AI is the future. let us explore how it us?</h4>
        </div>

      <div className='blog-4-div'>
          <div className="blog-img-div">
            <img src={blog2Img} alt="blog1Img" />
          <p>sep 26,2021</p>
          <h4>GPT-3 and Open AI is the future. let us explore how it us?</h4>
          </div>

          <div className="blog-img-div">
            <img src={blog3Img} alt="blog1Img" />
          <p>sep 26,2021</p>
          <h4>GPT-3 and Open AI is the future. let us explore how it us?</h4>
          </div>

          <div className="blog-img-div">
            <img src={blog4Img} alt="blog1Img" />
          <p>sep 26,2021</p>
          <h4>GPT-3 and Open AI is the future. let us explore how it us?</h4>
          </div>

          <div className="blog-img-div">
            <img src={blog5Img} alt="blog1Img" />
          <p>sep 26,2021</p>
          <h4>GPT-3 and Open AI is the future. let us explore how it us?</h4>
          </div>
       </div>

      </div>
    </div>
  )
}

export default Blogs;

