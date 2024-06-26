import React from 'react'
import NigeriaCard from '../components/nigeriaCard/NigeriaCard'
import NetworkCard from '../components/networkCard/NetworkCard'
import AreaCard from '../components/areaCard/AreaCard'
import ConceptCard from '../components/conceptCard/ConceptCard'
import HypothesisCard from '../components/hypothesisCard/HypothesisCard'
import StudioCard from '../components/studioCard/StudioCard'
import CofoundCard from '../components/cofoundCard/CofoundCard'
import JoinCard from '../components/joinCard/JoinCard'
import SincCard from '../components/sincCard/SincCard'
import EquityCard from '../components/equityCard/EquityCard'
import BlogCard from '../components/Blogs/BlogCard'
import MainCard from '../components/mainCard/MainCard'
import Navbar from '../components/navBar/Navbar'
import './style.css'


const Home = () => {
  return (
    <div className='home-class'>
      <Navbar/>
      <MainCard/>
      <NigeriaCard/>
      <NetworkCard/>
      <AreaCard/>
      <ConceptCard/>
      <HypothesisCard/> 
      <StudioCard/>
      <CofoundCard/>
      <JoinCard/>
      <SincCard/>
      <EquityCard/>
      <BlogCard/>
      
    </div>
  )
}

export default Home
