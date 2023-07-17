import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

import img1 from '../../images/gfg.png'
import img2 from '../../images/leetcode.png'
import img3 from '../../images/codechef.jpeg'
import img4 from '../../images/codeforces.png'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Coding Profiles</h1>
      <div className="boxes">
      <a href='https://leetcode.com/pshweb0310/'>
        <ServiceBox animation = "fade-up" icon = {img2} heading = "Leetcode" /></a>
        <a href='https://auth.geeksforgeeks.org/user/pshweb0310/practice'>
        <ServiceBox animation = "fade-up" icon = {img1} heading = "GeeksforGeeks"/></a>
        <a href='https://www.codechef.com/users/coder_praharsh'>
        <ServiceBox animation = "fade-up" icon = {img3} heading = "CodeChef"/></a>
        <a href='https://codeforces.com/profile/pshweb0310'>
        <ServiceBox animation = "fade-up" icon = {img4} heading = "Codeforces"/></a>

      </div>
    </div>
    </>
  )
}

export default Service
