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
        <h2>Hello, I'm Praharsh Sharma, a MERN stack developer based in Vadodara, Gujarat</h2>
        <p>With expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I specialize in building robust and scalable web applications. From developing efficient back-end systems to crafting seamless user experiences, I bring a comprehensive approach to software development. With a passion for clean code and innovative solutions, I'm dedicated to delivering high-quality web applications using the power of the MERN stack.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
