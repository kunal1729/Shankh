import React, { useState } from 'react'
import { useAppContext } from '../context/appContext';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const Onboarding4 = () => {
    const { setPage, features, setFeatures, isActive3, setIsActive3 } = useAppContext(); 
    
    const handleNext =  () => {
        setFeatures((prev) => ({...prev, duration : isActive3}));
        setPage((prev) => prev + 1);
    }

    return (
      <motion.div className='flex flex-col space-y-[25px] justify-center items-center text-center'>
        <div className='w-[777px] items-center pt-[29px] pl-[24px] pr-[29px] pb-[24px] rounded-2xl shadow-md space-y-[14px] flex flex-col bg-white h-[436px]'>
          <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[32px] font-semibold'>Time commitment</h1>
          <p style={{fontFamily : "Inter"}} className='text-[18px] w-[631px]'>Can you share how much time are you willing to spend per week?</p>
          <div style={{fontFamily : "Inter"}} className='grid grid-cols-2 gap-[16px]'> 
            <div onClick={() => setIsActive3("1 hour / week")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive3 == "1 hour / week" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`} >
                <span className='text-[18px] text-[#5F6C7B]'>1 hour / week</span>
            </div>
            <div  onClick={() => setIsActive3("2 hour / week")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive3 == "2 hour / week" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>2 hour / week</span>
            </div>
            <div onClick={() => setIsActive3("3 hour / week")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive3 == "3 hour / week" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>3 hour / week</span>
            </div>
            <div onClick={() => setIsActive3("4 hour / week")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive3 == "4 hour / week" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>4 hour / week</span>
            </div>
            <div onClick={() => setIsActive3("5 hour / week")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive3 == "5 hour / week" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>5 hour / week</span>
            </div>
            <div onClick={() => setIsActive3("6 hour / week")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive3 == "6 hour / week" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>6 hour / week</span>
            </div>
          </div>
        </div>
        <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={handleNext} to={'/onboarding/step5'} >Continue</NavLink>
      </motion.div>
    )
}

export default Onboarding4
