import React from 'react'
import Wave from '../assets/Wave.png'

const Hero = () => {
  return (
    <div id = 'Features' className='bg-[#F8FAFA] p-16 space-x-6 flex items-center sticky top-0 z-0 h-[97svh]'>
      
      <div className='space-y-8'>
        <h1 style={{fontFamily : "Poppins"}} className='text-[48px] leading-tight font-bold'>
            <span className='text-[#34856C]'>Empower Voice</span>
            <br/><span>Transformative <br/> Technology.</span>
            <span className='text-[#FF6B5B]'>Unleash <br/> Potential.</span>
        </h1>
        <p style={{fontFamily : "Inter"}} className='text-[#5F6C7B] text-[18px]'>Shaping the future of communication, leadership, and emotional intelligence with advanced AI solutions</p>
        <div style={{fontFamily : "Poppins"}} className='flex content-center space-x-[32px]'>
            <button className='pt-[10px] text-[16px] hover:shadow-2xl cursor-pointer pb-[10px] pl-[53px] pr-[53px] rounded-lg bg-[#FF6B5B] w-[199px] font-semibold text-white'>Get Started</button>
            <button className='border w-[199px] hover:bg-[#34856C] cursor-pointer hover:text-white rounded-lg font-semibold pt-[10px] text-[16px] pb-[10px] pl-[53px] pr-[53px] text-[#34856C] border-[#34856C]'>Learn More</button>
        </div>
      </div>
      <div>
        <img className='w-[577px] h-[577px]' src= {Wave}></img>
      </div>
    </div>
  )
}

export default Hero
