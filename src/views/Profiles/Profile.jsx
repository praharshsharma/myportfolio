import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Coding Profiles</h1>
      <div className="boxes">
      <a href='https://leetcode.com/pshweb0310/'>
        <ServiceBox animation = "fade-up" icon = "../../images/gfg.png" heading = "Leetcode" /></a>
        <a href='https://auth.geeksforgeeks.org/user/pshweb0310/practice'>
        <ServiceBox animation = "fade-up" icon = "../../images/leetcode.png" heading = "GeeksforGeeks"/></a>
      </div>
    </div>
    </>
  )
}

export default Service
