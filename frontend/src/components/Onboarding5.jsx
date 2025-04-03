import React, { useState } from 'react'
import { useAppContext } from '../context/appContext';
import { NavLink } from 'react-router-dom';

const Onboarding5 = () => {
    const { setPage, features, setFeatures, isActive4, setIsActive4 } = useAppContext(); 

    const handleNext =  () => {
        setFeatures((prev) => ({...prev, confidence : isActive4}));
        setPage((prev) => prev + 1);
    }
    console.log(features)
  
    return (
    <div className='flex flex-col space-y-[25px] justify-center items-center text-center'>
        <div className='w-[777px] items-center pt-[29px] pl-[24px] pr-[29px] pb-[24px] rounded-2xl shadow-md space-y-[14px] flex flex-col bg-white h-[436px]'>
        <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[32px] font-semibold'>How confident do you feel while 
        making a presentation?</h1>
        <div style={{fontFamily : "Inter"}} className='grid grid-cols-2 items-center text-center justify-center gap-[16px]'> 
            <div onClick={() => setIsActive4("Highly confident")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive4 == "Highly confident" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span>img</span>
                <span className='text-[18px] text-[#5F6C7B]'>Highly confident</span>
            </div>
            <div onClick={() => setIsActive4("Fairly Confident")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive4 == "Fairly Confident" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span>img</span>
                <span className='text-[18px] text-[#5F6C7B]'>Fairly Confident</span>
            </div>
            <div onClick={() => setIsActive4("Neutral")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive4 == "Neutral" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span>img</span>
                <span className='text-[18px] text-[#5F6C7B]'>Neutral</span>
            </div>
            <div onClick={() => setIsActive4("Slightly uncertain")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive4 == "Slightly uncertain" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span>img</span>
                <span className='text-[18px] text-[#5F6C7B]'>Slightly uncertain</span>
            </div>
            <div onClick={() => setIsActive4("Not very confident")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive4 == "1 hour / week" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span>img</span>
                <span className='text-[18px] text-[#5F6C7B]'>Not very confident</span>
            </div>
          </div>
        </div>
        <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={handleNext} to={'/onboarding/step6'} >Continue</NavLink>
    </div>
    )
}

export default Onboarding5
