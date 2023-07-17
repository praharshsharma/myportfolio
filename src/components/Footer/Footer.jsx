import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='author'>
        <p>Created by <a href="https://github.com/praharshsharma" target="_blank" rel="noopener noreferrer">praharshsharma</a> with <i className='far fa-heart'></i></p>
        </div>
        <div className='tp'>
        <p className='copyright'> <i className='far fa-copyright'></i> 2023 All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer
