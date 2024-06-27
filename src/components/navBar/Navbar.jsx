import React from 'react'
import logo from '../../assets/logo.png'
import './style.css'

const Navbar = () => {
  return (
    <div className='navv'>
        <div><ul className='list-spread'> <img src={logo} alt="" />
            <li><a href="#">About</a></li>
            <li><a href="#">SIP</a></li>
            <li><a href="#">Stido</a></li>
            <li><a href="#">SEEQ</a></li>
            <li><a href="#" >SEEQ</a></li>
            <li><a href="#" >Initiatives</a></li>
            <li><a href="#" >More</a></li>
            </ul></div>
        <div className='navbar-flex'>
            <button className='btn2'>SINC With Us</button>
            <button className='btn1'>Apply to SIP 1.0</button>
            </div>
      
    </div>
  )
}

export default Navbar
