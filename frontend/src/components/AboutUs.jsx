import React from 'react'
import Team from './Team'

const AboutUs = () => {
  return (
    <div id='Blog' className='bg-[#F8FAFA] top-0 z-0 sticky bg-fixed flex flex-col justify-center items-center space-y-8 p-[25px] h-[95%]'>
      <h1 style={{fontFamily : "Poppins"}} className='text-[#FF6B5B] font-semibold text-[64px]'>Meet Our Team</h1>
      <p style={{fontFamily : "Inter"}} className='text-[24px] w-[1052px] text-[#5F6C7B]'>At Shankh, we are a passionate team of AI researchers, communication experts, and leadership coaches dedicated to transforming the way people communicate and lead</p>
      <div style={{fontFamily : "Poppins"}} className='flex content-center space-x-[32px]'>
        <button className='pt-[10px] hover:shadow-lg text-[16px] pb-[10px] pl-[53px] pr-[53px] rounded-lg bg-[#FF6B5B] w-[199px] font-semibold text-white'>Get Started</button>
        <button className='border hover:bg-[#34856C] hover:text-white w-[199px] rounded-lg font-semibold pt-[10px] text-[16px] pb-[10px] pl-[53px] pr-[53px] text-[#34856C] border-[#34856C]'>Learn More</button>
      </div>
      <Team/>
      <p style={{fontFamily : "Inter"}} className='text-[24px] w-[1052px] text-[#5F6C7B]'>
      Our team brings together deep expertise in linguistics, psychology, and artificial intelligence to create a platform that truly empowers individuals and organizations.
      </p>
    </div>
  )
}

export default AboutUs
