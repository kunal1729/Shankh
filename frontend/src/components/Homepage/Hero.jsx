import React from 'react'
import Wave from '../../assets/Wave.png'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div  className='bg-[#F8FAFA] p-16 space-x-6 flex items-center sticky top-0 z-0 h-[88svh]'>
      
      <div className='space-y-8'>
        <h1 style={{fontFamily : "Poppins"}} className='text-[48px] flex flex-col gap-2 font-bold'>
            <span className='text-[#34856C]'>Empower Voice...</span>
            <span>Transformative Technology...</span>
            <span className='text-[#FF6B5B]'>Unleash Potential</span>
        </h1>
        <p style={{fontFamily : "Inter"}} className='text-[#5F6C7B] text-[18px]'>Shaping the future of communication, leadership, and emotional intelligence with advanced AI solutions</p>
        <div style={{fontFamily : "Poppins"}} className='flex content-center space-x-[32px]'>
            <NavLink to={'/orgLogin'} style={{fontFamily : "Poppins"}}className='pt-[10px] text-[16px] hover:shadow-2xl cursor-pointer pb-[10px] pl-[53px] pr-[53px] rounded-lg bg-[#FF6B5B] w-[199px] font-semibold text-white'>Get Started</NavLink>
            <button className='border w-[199px] hover:bg-[#34856C] cursor-pointer hover:text-white rounded-lg font-semibold pt-[10px] text-[16px] pb-[10px] pl-[53px] pr-[53px] text-[#34856C] border-[#34856C]'>Learn More</button>
        </div>
      </div>
      <div>
        <img className='w-[577px] h-[577px]' src= {Wave}></img>
      </div>
    </div>
  )
}
``
export default Hero
