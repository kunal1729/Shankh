import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

const Onboarding7 = () => {
   const { setPage } = useAppContext(); 
  
    return (
      <div className='flex flex-col space-y-[97px] justify-center items-center text-center'>
        <div className='w-[774px] rounded-2xl shadow-md space-y-[42px] pb-[45px] pr-[18px] pt-[45px] pl-[18px] flex flex-col bg-white h-[292px]'>
          <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] w-[738px] leading-10 text-[48px] font-semibold'>Time to embark on a journey with Shankh! </h1>
          <p style={{fontFamily : "Inter"}} className='text-[18px] text-[#5F6C7B]'>Let us explore a few key questions to establish baseline understanding.</p>
        </div>
        <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={() => setPage((prev) => prev + 1)} to={'/onboarding/step8'} >Let's Begin</NavLink>
      </div>
    )
}

export default Onboarding7
