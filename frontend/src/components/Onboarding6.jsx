import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const Onboarding6 = () => {
    const { setPage, features } = useAppContext(); 

    console.log(features);

    return (
    <div  className='flex flex-col space-y-4 justify-center items-center text-center'>
        <div className='w-[777px] items-center p-2 rounded-2xl shadow-md space-y-[14px] flex flex-col bg-white'>
            <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[32px] font-semibold'>That's done - Here is the summary!</h1>
            <div style={{fontFamily : "Inter"}} className=' text-start grid space-y-[14px] w-[715px]'>
                <div className='p-[10px] w-[740px] shadow-sm rounded-lg border-[1px] border-[#D9E0E6]'>
                    <span>Goals</span>
                    <div className=' grid grid-cols-3 gap-[8px]'>
                    {features.goals.map((item) => {
                        return (
                            <div className=' border-[1px] border-[#34856C] p-[5px] rounded-full items-center text-center text-[#5F6C7B] text-[16px] bg-[#EFFDFA] w-[220px]'>
                                {item}
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className='p-[10px] w-[740px] shadow-sm rounded-lg border-[1px] border-[#D9E0E6]'>
                    <span>Skill Set</span>
                    <div className='grid grid-cols-3 items-center gap-[10px]'>
                    {features.skillSet.map((item) => {
                        return (
                            <div className=' border-[1px] border-[#34856C] p-[5px] rounded-full items-center text-center text-[#5F6C7B] text-[16px] bg-[#EFFDFA] w-[220px]'>
                                {item}
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className='p-[10px] shadow-sm rounded-lg border-[1px] border-[#D9E0E6]'>
                    <span>Duration</span>
                    <div className=' border-[1px] border-[#34856C] p-[5px] rounded-full items-center text-center text-[#5F6C7B] text-[16px] bg-[#EFFDFA] w-[220px]'>
                        {features.duration}
                    </div>
                </div>
                <div className='p-[10px] shadow-sm rounded-lg border-[1px] border-[#D9E0E6]'>
                    <span>Presentation Confidence</span>
                    <div className=' border-[1px] border-[#34856C] p-[5px] rounded-full items-center text-center text-[#5F6C7B] text-[16px] bg-[#EFFDFA] w-[220px]'>
                        {features.confidence}
                    </div>
                </div>
            </div>
        </div>
        <div style={{fontFamily : "Poppins"}} className='flex space-x-[20px]'>
            <NavLink  className="border-[#34856C]  border text-[#34856C] text-[18px] w-[280px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={() => setPage((prev) => prev - 4)} to={'/onboarding/step2'} >Edit my Responses</NavLink>
            <NavLink className="bg-[#FF6B5B] text-white text-[18px] w-[210px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={() => setPage((prev) => prev + 1)} to={'/onboarding/step7'} >Continue</NavLink>
        </div>
        
    </div>
    )
}

export default Onboarding6
