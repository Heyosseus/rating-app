import React from 'react'
import page from './Page.module.css'
import { useState } from 'react'
const Page = ({ count}) => {
  
  return (
      <div className={page.container}>
          <div className={page.img}></div>
          <button className={page.btn}> <div className={page.text}>You selected {count} out of 5 </div></button>
          <div className={page.heading}>Thank you!</div>
          <div className={page.paragraph}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>
    </div>
  )
}

export default Page