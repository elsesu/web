import React from 'react'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import arrow from '../../assets/arrow-right.png'
import './style.css'



const CofoundCard = () => {
  return (
    <div className='area-container'>
        <h1 className='network'>Co-found With Us</h1>
        <h2 className='box-parat'>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</h2>
        <div className='box-gap'>
            <div className='small-box2'>
                <div className=''><img src={one} alt="" className='image' /></div>
                <br />
                <div className='box-heading1'>We Ideate</div>
                <div className='box-para'>Most early-stage companies and pre-product startups cannot
                 afford professional services especially those who don’t have family and friends’ network that can support</div>
            </div>
            <div className='small-box2'>
            <div className=''><img src={two} alt="" className='image'/></div>
            <br />
            <div className='box-heading1'>You Validate</div>
                <div className='box-para'>If startups can seed 5-10% in equity to incubators for $20k 
                to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</div>
            </div>
            <div className='small-box2'>
            <div className=''><img src={three} alt=""className='image' /></div>
            <br />
            <div className='box-heading1'>You Co-own</div>
                <div className='box-para'>Young professionals who don’t have a lot of money to invest nor an accredited investors 
                will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return </div>
            </div>
         </div>
         <div>Build your Dream <img src={arrow} alt="image" /></div>
    </div>
  )
}

export default CofoundCard
