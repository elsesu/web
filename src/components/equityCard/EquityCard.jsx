import React from 'react'
import { Data } from '../../data'
import DataCard from '../DataCard'
import { Images } from '../../images'
import './style.css'
const EquityCard = () => {

  return (
    <div className='area-container'>
      <div className='all-header'>
  <h1 className='network'>Equity jobs</h1>
   <h2 className='box-parat'>See companies and startups 
   offering equity or a mix of cash and equity for very important position in their company</h2>
      </div>
      <div className='out-jobs'>
      {Data.map((data, key)=>(
        <DataCard
        id={data.id}
        key={key}
        about={data.about}
        industry={data.industry}
        image={data.image}
        location={data.location}
        stipend={data.stipend}
        equity={data.equity}
        role_type={data.role_type}
        role={data.role}
        deadline={data.deadline}
        />
      ))

      }
      </div>
      <div>See more equity jobs <img src={Images.arrow} alt="" /></div>
    </div>
  )
}

export default EquityCard
