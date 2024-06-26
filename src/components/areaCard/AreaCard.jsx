import React from 'react'
import './style.css'

const AreaCard = () => {
  return (
    <div>
        <div className='area-container'>
            <h1 className='network'>Our Area of Focus</h1>
            <h2 className='box-parat'>In our quest to help make success available to everyone,
                 we have initial strategic <br /> direction to focus on these five (5) key areas at the lab</h2>
                 <div className='boxes'>
                    <div className='box1'>
                        <div className='numbers'>01</div>
                        <div className='inside-box-text'>Business Support & Incubation</div>
                    </div>

                    <div className='box2'>
                        <div className='numbers'>02</div>
                        <div className='inside-box-text'>On-Demand & As-A-Service</div>
                        </div>
                    <div className='box3'>
                        <div className='numbers'>03</div>
                        <div  className='inside-box-text'>Marketplace & Crowdsourcing</div>
                        </div>
                    <div className='box4'>
                        <div className='numbers'>04</div>
                        <div  className='inside-box-text'>Aggregation & Shared Economy</div>
                        </div>
                    <div className='box3'>
                        <div className='numbers'>05</div>
                        <div  className='inside-box-text'>Decentralized Economy & Digital Assets</div>
                        </div>
                 </div>
        </div>
      
    </div>
  )
}

export default AreaCard
