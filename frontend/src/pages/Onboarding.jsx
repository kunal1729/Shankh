import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import { motion } from 'framer-motion';

const Onboarding = () => {

    const { page, setPage, isAuthenticated } = useAppContext(); 
    const location = useLocation();
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        setPage((prev) => prev - 1);
        navigate(-1);
    }

    useEffect(() => {
      if(!isAuthenticated)
      {
        navigate('/login');
      }
    }, [])
    

    console.log(page);

  return (
    <motion.div className='flex space-y-6 flex-col bg-[#F8FAFA] h-screen pr-[73px] pb-[45px] pl-[73px] pt-[45px] '>
      <div className='flex justify-between'>
        <span>Shankh</span>
        {page > 0 ? 
        <div style={{fontFamily : "Inter"}} className='flex space-x-1 items-center'>
            <button onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            </button>
            <span className='text-[24px] text-[#5F6C7B]'>Back</span>
        </div> 
        : null}
        
      </div>
      <div style={{fontFamily : "Inter"}} className='space-y-[10px]'>
        <div className='flex justify-between'>
            <span className='text-[24px] text-[#5F6C7B]'>Step {page + 1} of 9</span>
            <span className='text-[24px] text-[#34856C]'>{Math.ceil(page * 100/9)}% complete</span>
        </div>
        <div className='h-[10px] rounded-full bg-[#D9E0E6]'>
            <div style={{ width: `${Math.ceil((page * 100) / 9)}%` }} className="bg-[#34856C] rounded-full h-[10px]"></div>
        </div>
      </div>
      <Outlet />
    </motion.div>
  )
}

export default Onboarding
