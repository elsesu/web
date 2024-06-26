import React from 'react'
import './datacard.css'
const DataCard = ({location, industry, stipend, role_type, id, about, image, role, equity, deadline }) => {
  return (
    <div className='dataBox' key={id}>
        <div><img src={image} alt="" className='job-image'/></div>
        <div className='box-para'>{about}</div>
        <br />
        <br />
        <div className='job-heading'> Role: {role}</div>
        <div className='inside-job'>
            <div className='tags'>Location: <br /> <span className='tag-data'>{location}</span></div>
            <div className='tags'>Industry: <br /><span className='tag-data'>{industry}</span></div>
        </div>
        <br />
        <br />
        <div className='inside-job'>
        <div className='tags'>Equity: <br /><span className='tag-data'>{equity}</span></div>
        <div className='tags'> Stipend: <br /><span className='tag-data'>{stipend}</span></div>
        </div>
        <br />
        <br />

        <div className='inside-job'>
            <div className='tags'>Deadline: <br /><span className='tag-data'>{deadline}</span></div>
            <div className='tags'>Role Type: <br /><span className='tag-data'>{role_type}</span></div>
        </div>
        <br />
        <br />
      
      <button className='btn'>View Details</button>
    </div>
  )
}

export default DataCard
