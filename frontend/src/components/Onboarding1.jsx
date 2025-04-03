import React from 'react'
import { NavLink } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import { useAppContext } from '../context/appContext';
import { motion } from 'framer-motion';

const Onboarding1 = () => {

    const { setPage } = useAppContext(); 

  return (
    <motion.div className='flex flex-col space-y-[97px] justify-center items-center text-center'>
      <div className='w-[575px] rounded-2xl shadow-md space-y-[32px] pt-[29px] pl-[18px] flex flex-col bg-white h-[250px]'>
        <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[48px] font-semibold'>Great to have you with us! </h1>
        <p style={{fontFamily : "Inter"}} className='text-[18px] text-[#5F6C7B]'>Let us explore a few key questions to establish baseline understanding.</p>
      </div>
      <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={() => setPage((prev) => prev + 1)} to={'/onboarding/step2'} >Let's Begin</NavLink>
    </motion.div>
  )
}

export default Onboarding1
