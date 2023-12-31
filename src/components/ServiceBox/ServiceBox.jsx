import React from 'react'
import './ServiceBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ServiceBox(props) {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div data-aos = {props.animation}>
       <div className="card">
          <div class="box">
            <div className="icon"><img src={props.icon} alt='img' /></div>
            <br />
            <div className="heading">{props.heading}</div>
          </div>
        </div>    
    </div>
    </>
  )
}

export default ServiceBox
