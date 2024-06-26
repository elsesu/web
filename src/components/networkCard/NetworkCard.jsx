import React from 'react'
import './style.css'


const NetworkCard = () => {
  return (
    <div className='network-container'>
        <div>
            <h1 className='network'>Network of builders helping <br /> startup scale</h1>

        </div>

        <div className='flex-box'>
  <div className='box'>
   <h1 className='box-heading'>Work with Service Incubators to expedite your time-to-market</h1>
    <p className='box-para'>Collaborate with our meticulously chosen service partners,
         each with a vested interest, ensuring a shared commitment
          to success in the game of venture building</p>

    <p className='box-para-down'>For 7.5% equity, you get a product manager, product designer,
         frontend engineer, software engineer and growth marketer to build 
         the MVP of your app or web application and validate it</p>
         <div>Learn More</div>
  </div>




  <div className='box'>
  <h1 className='box-heading'>Access funding after your mvp is validated</h1>
    <p className='box-para'>Startups that have built and validated their product can take advantage of the financial
     resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape</p>
    <p className='box-para-down'>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months </p>
    <div className='learn'>Learn More</div>
  </div>
        </div>
      
    </div>
  )
}

export default NetworkCard
