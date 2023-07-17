import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/chatapp.png'
import img5 from  '../../images/safebunks.png'
import img3 from  '../../images/portfolio.png'
import img4 from  '../../images/billsplitter.png'
import img1 from  '../../images/uniedwise.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Chatting Web App" img= {img7} link = "https://github.com/praharshsharma/Chatting-app-web-sockets-"  />
            <ProjectBox title = "Android Attendance App" img= {img5} link = "https://github.com/praharshsharma/SafeBunKs-Android-app-"  />
            <ProjectBox title = "Portfolio Website using React" img= {img3} link = ""  />
            <ProjectBox title = "Bill Splitter and Generator" img= {img4} link = "https://github.com/praharshsharma/Bill-Generator"  />
            <ProjectBox title = "UniEdwise" img= {img1} link = "https://github.com/praharshsharma/Devheat_InsaneCoders"  />
            <ProjectBox title = "UniEdwise" img= {img1} link = "https://github.com/praharshsharma/Devheat_InsaneCoders"  />
            
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default Project
