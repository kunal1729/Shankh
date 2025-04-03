import React from 'react'
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/partner2.png"
import partner3 from "../assets/partner3.png"
import { motion } from 'framer-motion'

const partners = [partner1, partner2, partner3]

const Clients = ({opacity}) => {


  return (
    <motion.div id='Clients' style={{opacity: opacity}} className='bg-[#F8FAFA] flex flex-col sticky top-0 z-0 justify-center items-center space-y-8 p-[25px] h-screen'>
        <div className='flex flex-col items-center'>
            <h1 style={{fontFamily : "Poppins"}} className='text-[64px] font-semibold'>Our Trusted Partners</h1>
            <div className='h-[7px] rounded-full bg-[#FF6B5B] w-[50px]'></div>
        </div>
        <p style={{fontFamily : "Inter"}} className='text-[24px] w-[1052px] text-[#5F6C7B]'>At Shankh, we are a passionate team of AI researchers, communication experts, and leadership coaches dedicated to transforming the way people communicate and lead</p>
        <div style={{fontFamily : "Poppins"}} className='flex content-center space-x-[32px]'>
            <button className='pt-[10px] hover:shadow-lg text-[16px] pb-[10px] pl-[53px] pr-[53px] rounded-lg bg-[#FF6B5B] w-[199px] font-semibold text-white'>Get Started</button>
            <button className='border w-[199px] hover:bg-[#34856C] hover:text-white rounded-lg font-semibold pt-[10px] text-[16px] pb-[10px] pl-[53px] pr-[53px] text-[#34856C] border-[#34856C]'>Learn More</button>
        </div>
        <div className='grid grid-cols-3 gap-12 items-center'>
            {partners.map((item) => {
                return (
                    <img src={item} className='w-[228px] h-[228px]'></img>
                )
            })}
        </div>
        <p style={{fontFamily : "Inter"}} className='w-[1052px] text-[24px] text-[#5F6C7B]'>
        Join our partner network and empower your students or employees with AI-driven
        communication and leadership training.Partner with Shankh to integrate our technology into your learning or corporate development programs.
        </p>
    </motion.div>
  )
}

export default Clients
