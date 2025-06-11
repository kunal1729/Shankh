import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from "react-scroll"
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='flex shadow-xl top-0 sticky  z-50 bg-white items-center p-4 justify-between'>
      <img className='w-[141px] h-[38px]' src={Logo}></img>  
      <div className='flex space-x-[32px] text-[#5F6C7B] cursor-pointer text-sm items-center'>
        <Link style={{fontFamily : "Inter"}} to='Features' smooth={true} duration={800}>Features</Link>
        <Link style={{fontFamily : "Inter"}} to='Services' smooth={true} duration={800}>Services</Link>
        <Link style={{fontFamily : "Inter"}} to='Testimonials' smooth={true} duration={800}>Testimonials</Link>
        <Link style={{fontFamily : "Inter"}} to='AboutUs' smooth={true} duration={800}>About Us</Link>
        <Link style={{fontFamily : "Inter"}} to='Blog' smooth={true} duration={800}>Blog</Link>
        <Link style={{fontFamily : "Inter"}} to='Clients' smooth={true} duration={800}>Clients</Link>
        <Link style={{fontFamily : "Inter"}} to='ContactUs' smooth={true} duration={800}>Contact Us</Link>
        <NavLink to={'/orgLogin'} style={{fontFamily : "Poppins"}} className='pt-[10px] hover:shadow-lg cursor-pointer pb-[10px] pr-[53px] pl-[53px] rounded-md text-sm w-[199px] font-semibold text-white bg-[#34856C] cursor-pointer'>Get Started</NavLink>
      </div>
    </div>
  )
}

export default Navbar
