import React from 'react'
import './Brand.css'

import atlassian from '../../assets/atlassian.png'
import googleImg from '../../assets/google.png'
import slack from '../../assets/slack.png'
import shopify from '../../assets/shopify.png'
import dropbox from '../../assets/dropbox.png'

const Brand = () => {
  return (
    <div className='brand-container'>
       <div className='brand-img-div' >
        <img src={googleImg} alt="google" />
        <img src={atlassian} alt="atlassian" />
        <img src={slack} alt="slack" />
        <img src={shopify} alt="shopify" />
        <img src={dropbox} alt="dropbox" />
       </div>
    </div>
  )
}

export default Brand