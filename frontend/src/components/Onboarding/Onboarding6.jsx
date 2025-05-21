import React, { useState } from 'react'
import { useAppContext } from '../../context/appContext';
import { NavLink } from 'react-router-dom';

const Onboarding6 = () => {
    const { setPage, features, setFeatures, isActive5, setIsActive5 } = useAppContext(); 

    const handleNext =  () => {
        setFeatures((prev) => ({...prev, behavior : isActive5}));
        setPage((prev) => prev + 1);
    }
    console.log(features)
  
    return (
    <div className='flex flex-col space-y-[25px] justify-center items-center text-center'>
        <div className='w-[777px] items-center pt-[29px] pl-[24px] pr-[29px] pb-[24px] rounded-2xl shadow-md space-y-[14px] flex flex-col bg-white h-[486px]'>
        <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[32px] font-semibold'>Do you exhibit any of the following behavior,
as per your knowledge / diagnosis?</h1>
        <div style={{fontFamily : "Inter"}} className='grid grid-cols-2 items-center text-center justify-center gap-[16px]'> 
            <div onClick={() => setIsActive5("ADHD / Anxiety disorders")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive5 == "ADHD / Anxiety disorders" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                
                <span className='text-[18px] text-[#5F6C7B]'>ADHD / Anxiety disorders</span>
            </div>
            <div onClick={() => setIsActive5("Speech issues")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive5 == "Speech issues" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>Speech issues
(slurred speech / stuttering)</span>
            </div>
            <div onClick={() => setIsActive5("Tremors / Vocal Tics")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive5 == "Tremors / Vocal Tics" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>Tremors / Vocal Tics
(involuntary movements)</span>
            </div>
            <div onClick={() => setIsActive5("Seizures / Hallucinations")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive5 == "Seizures / Hallucinations" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>Seizures / Hallucinations</span>
            </div>
            <div onClick={() => setIsActive5("Chronic headaches/excessive fatigue")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive5 == "Chronic headaches/excessive fatigue" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>Chronic headaches / 
excessive fatigue</span>
            </div>
            <div onClick={() => setIsActive5("None of the above")}  className={`flex flex-col border-[1px] border-[#D9E0E6] p-[12px] w-[320px] h-[85px] ${isActive5 == "Non of the above" ? "bg-[#EFFDFA]" : null} space-y-[10px] items-center`}>
                <span className='text-[18px] text-[#5F6C7B]'>None of the above</span>
            </div>
          </div>
        </div>
        <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={handleNext} to={'/onboarding/step7'} >Continue</NavLink>
    </div>
    )
}

export default Onboarding6
