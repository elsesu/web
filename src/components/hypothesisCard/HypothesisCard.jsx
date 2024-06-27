import React from 'react'
import polygon1 from '../../assets/Polygon 1.png'
import polygon2 from '../../assets/Polygon 2.png'
import polygon3 from '../../assets/Polygon 3.png'
import arrow from '../../assets/arrow-right.png'
import './style.css'

const HypothesisCard = () => {
  return (
    <div className='area-container'>
        <div className='top'>
        <h1>Hypothesis</h1>
      <h2 className='box-para'>Just a few reasons we know its time for this model within the ecosystem</h2>
        </div>
      <div className='box-gap'>
            <div className='small-box'>
                <div className=''><img src={polygon1} alt="" className='image' /></div>
                <br />
                <div className='box-para'>Most early-stage companies and pre-product startups cannot
                 afford professional services especially those who don’t have family and friends’ network that can support</div>
            </div>
            <div className='small-box'>
            <div className=''><img src={polygon2} alt="" className='image'/></div>
            <br />
                <div className='box-para'>If startups can seed 5-10% in equity to incubators for $20k 
                to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment</div>
            </div>
            <div className='small-box'>
            <div className=''><img src={polygon3} alt=""className='image' /></div>
            <br />
                <div className='box-para'>Young professionals who don’t have a lot of money to invest nor an accredited investors 
                will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return </div>
            </div>
         </div>
         <div className='top'>
        <h1>Case Study</h1>
      <h2 className='box-para'>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</h2>
      <div className='box-gap'>
        <div className='carous'>Service Incubator Equity</div>
        <div className='carous'>SEEQ Maths Equation</div>
        <div className='carous'>Value of my Equity Over Time</div>
      </div>
        </div>
        <div className='below-arrow'> <div className=''>Become A Service Incubator </div> <div><img src={arrow} alt="" className='arrows' /></div> </div>
       
    </div>
  )
}

export default HypothesisCard
