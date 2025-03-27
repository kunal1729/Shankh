import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <form className='bg-[#F8FAFA] flex flex-col z-0 items-center justify-center h-screen '>
      <div className='w-[700px] rounded-xl relative pt-[30px] pr-[76px] pb-[30px] bg-white pl-[76px]  flex flex-col space-y-[20px] justify-center h-[450px]'>
        <div className='bg-[#34856C] top-0  z-10 w-[250px] rounded-l-full absolute -right-[50px] h-[450px]'></div>
        <span className='text-[#34856C]'>Shankh</span>
        <span className='text-[20px] font-semibold text-[#34856C]'>Welcome Back !</span>
        <div className='grid space-y-1'>
            <span className='text-[14px]'>Email</span>
            <input className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] w-[300px]' placeholder='Enter your email address'></input>
        </div>
        <div className='grid space-y-1'>
            <span className='text-[14px]'>Password</span>
            <input className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] w-[300px]' placeholder='Enter your password'></input>
        </div>
        <button className=' w-[300px] text-center rounded-lg bg-[#FF6B5B] text-white font-semibold pr-[53px] text-[16px] pb-[10px] pl-[53px] pt-[10px]'>Send an OTP</button>
        <span className='text-[14px]'>Not a member? <NavLink to={'/signUp'} className='text-[#34856C]'>Register Now</NavLink></span>
      </div>
    </form>
  )
}

export default Login
