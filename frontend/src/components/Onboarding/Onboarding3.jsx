import React, { useState } from 'react'
import { useAppContext } from '../../context/appContext';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const skillSet = ["Precise Expression", "Powerful projection", "Consistent tonality", "Seamless flow of speech", "Captivating delivery", "Spontaneous oration"]

const Onboarding3 = () => {
    const { setPage, features, setFeatures, isActive2, setIsActive2 } = useAppContext(); 

    
    const handleNext = () => {
        const filteredSkillSet = skillSet.filter((item) => isActive2[item])
        setFeatures((prev) => ({...prev, skillSet : filteredSkillSet}));
        setPage((prev) => prev + 1);
    }
    console.log(features)

    return (
      <motion.div className='flex flex-col space-y-[25px] justify-center items-center text-center'>
        <div className='w-[777px] items-center pt-[29px] pl-[24px] pr-[29px] pb-[24px] rounded-2xl shadow-md space-y-[14px] flex flex-col bg-white h-[456px]'>
          <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[32px] font-semibold'>What do you need from the app ?</h1>
          <p style={{fontFamily : "Inter"}} className='text-[18px] w-[631px]'>Now let us delve into which skill do you want to enhance?</p>
          <div style={{fontFamily : "Inter"}} className='grid grid-cols-2 gap-[16px]'> 
            {skillSet.map((item) => {
                return (<button onClick={() => setIsActive2((prev) => ({...prev, [item] : !prev[item]}))}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive2[item] ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                            <span>img</span>
                            <span className='text-[18px] text-[#5F6C7B]'>{item}</span>
                        </button>)
            })}
          </div>
          <span style={{fontFamily : "Inter"}} className=' text-[14px] text-[#5F6C7B] italic'>You may select as many as applicable</span>
        </div>
        <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={handleNext} to={'/onboarding/step4'} >Continue</NavLink>
      </motion.div>
    )
}

export default Onboarding3
