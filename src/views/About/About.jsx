import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.jpeg'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Praharsh</h2>
        <p>isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin isabdisibcsicsin</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
