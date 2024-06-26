import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'

const Navbar = () => {
  return (
    <div className='navv'>
        <div><ul className='list-spread'> <img src={logo} alt="" />
            <li>About</li>
            <li>SIP</li>
            <li>Stido</li>
            <li>SEEQ</li>
            <li>Platforms</li>
            <li>Initiatives</li>
            <li>More</li>
            </ul></div>
        <div className='navbar-flex'>
            <button className='btn2'>SINC With Us</button>
            <button className='btn1'>Apply to SIP 1.0</button>
            </div>
      
    </div>
  )
}

export default Navbar
