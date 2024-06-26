import React from 'react'
import './style.css'
const ConceptCard = () => {
  return (
    <div className='area-container'>
      <h1 className='network'>Our Concept Innovations</h1>
      <h2 className='box-parat'>We have proprietary concept innovations that will support the startup ecosystem,
         support solution-providers/entrepreneurs and <br /> ultimately help democratize success;</h2>
         
         <div className='box-gap'>
            <div className='small-box'>
                <div className='box-heading'>Service Incubator</div>
                <br />
                <div className='box-parat'>A service-for-shares model of incubating pre-product startups and early-stage companies
                 by building their early stage product and MVP</div>
            </div>
            <div className='small-box'>
            <div className='box-heading'>Virtualting</div>
            <br />
                <div className='box-parat'>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers)
                 while also splitting the service cost of the resource</div>
            </div>
            <div className='small-box'>
            <div className='box-heading'>Diiming</div>
            <br />
                <div className='box-parat'>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period
                 towards an investment or spend of your choice </div>
            </div>
         </div>
       
         <h1 className='network'>Our Service Incubation Model</h1>
         <h2 className='box-parat'>The Service Incubation model is an alternate
             funding model for startup that allows professionals to offer their services to startups <br /> in return for a minute equity (usually between 0.5% to 1.5%)
              in the startup. As a service incubator, <br /> you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</h2>

        
    </div>
  )
}

export default ConceptCard
