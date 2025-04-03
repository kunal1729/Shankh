import React, { useState } from 'react'
import { useAppContext } from '../context/appContext';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const goals = ["AI-Driven Speech Analysis", "Storytelling mastery", "Commanding authority", "Captivating presence", "Vocal charisma", "Influential personality"]

const Onboarding2 = () => {
    const { setPage, setFeatures, isActive1, setIsActive1 } = useAppContext(); 
    
    const handleNext = () => {
        const filteredGoals = goals.filter((item) => isActive1[item])
        setFeatures((prev) => ({...prev, goals : filteredGoals}));
        setPage((prev) => prev + 1);
    }

    return (
      <motion.div className='flex flex-col space-y-[14px] justify-center items-center text-center'>
        <div className='w-[777px] items-center pt-[29px] pl-[24px] pr-[29px] pb-[24px] rounded-2xl shadow-md space-y-[14px] flex flex-col bg-white h-[476px]'>
          <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[32px] font-semibold'>Why Are you here?</h1>
          <p style={{fontFamily : "Inter"}} className='text-[18px] w-[631px]'>With the aim to Empower and Excel, select the traits that resonate the most with you.</p>
          <div className='grid grid-cols-2 gap-[16px]'> 
            {goals.map((item, index) => {
                return (<button style={{fontFamily : "Inter"}} onClick={() => setIsActive1((prev) => ({...prev, [item] : !prev[item]}))}  className={`flex flex-col border-[1px] rounded-lg border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive1[item] ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                            <span>img</span>
                            <span className='text-[18px] text-[#5F6C7B]'>{item}</span>
                        </button>)
            })}
          </div>
          <span style={{fontFamily : "Inter"}} className=' text-[14px] text-[#5F6C7B] italic'>You may select as many as applicable</span>
        </div>
        
        <NavLink className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={handleNext} to={'/onboarding/step3'} >Continue</NavLink>
      </motion.div>
    )
}

export default Onboarding2
