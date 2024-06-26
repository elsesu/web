import React from 'react'
import apply from '../../assets/application.png'
import align from '../../assets/allignment.png'
import negotiate from '../../assets/negotitate.png'
import arrow from '../../assets/arrow-right.png'
import left from '../../assets/left1.png'
import right from '../../assets/right.png'
import './style.css'


const JoinCard = () => {
  return (
    <div className='area-container'>
        <div className='all-header'>
        <h1 className='network'>Join Our Entrepreneur In Residence (EIR) Program</h1>
        <h2 className='box-parat'>Our EIR program is our structured 3 months un-paid program 
        designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</h2>
        </div>
        <div className='box-gap'>
            <div className='small-box3'>
                <div className=''><img src={apply} alt="" className='image' /></div>
                <br />
                <div className='box-heading1'>Application and Selection</div>
                <div className='box-para'>Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.
Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application</div>
            </div>
            <div className='small-box3'>
            <div className=''><img src={align} alt="" className='image'/></div>
            <br />
            <div className='box-heading1'>Alignment Meeting and Proposal Submission</div>
                <div className='box-para'>f your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.</div>
            </div>
            <div className='small-box3'>
            <div className=''><img src={negotiate} alt=""className='image' /></div>
            <br />
            <div className='box-heading1'>Negotiation and Agreement</div>
                <div className='box-para'>YUpon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.
Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners</div>
            </div>
         </div>
         <div>Support The Future <img src={arrow} alt="" className=''/></div>
         <div className='nav-flex'>
            <div><img src={left} alt="" /></div>
            <div><img src={right} alt="" /></div>
         </div>
       
    </div>
  )
}

export default JoinCard
