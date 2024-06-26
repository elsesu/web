import React from 'react'
import front from '../../assets/front.png'
import './style.css'

const MainCard = () => {
  return (
    <div className='main-section'>
      <div className='wid'>
        <h1 className='top-text'>SINC Partners is a service incubation company </h1>
        <h2 className='down-text'>Connecting experts in product development and growth marketing willing 
            to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</h2>
        <button className='btn1'>SINC with us</button>
      </div>
      <div><img src={front} alt="" className='front-image'/></div>
    </div>
  )
}

export default MainCard
