import React from 'react'
import ContactForm from './ContactForm'
import blog1 from "../../assets/blog1.jpg"
import { motion } from 'framer-motion'

const ContactUs = ({x}) => {


  return (
    <div id='ContactUs' className='h-screen sticky top-0 z-0 rounded-t-2xl flex space-x-24 p-[64px] bg-[#34856C]'>
      <motion.div  className='w-[539px] brightness-75 shadow-lg grid content-end space-y-4 p-6 rounded-2xl  bg-cover' style={{ backgroundImage: `url(${blog1})`, x : x }}>
        <h1 style={{fontFamily : "Poppins"}} className='text-[32px] text-white font-bold'>Join the Speech & Leadership Transformation Revolution</h1>
        <button style={{fontFamily : "Poppins"}} className='border w-[199px] hover:bg-[#34856C] cursor-pointer hover:text-white rounded-lg font-semibold pt-[10px] hidden text-[16px] pb-[10px] pl-[53px] pr-[53px] text-white border-white'>Learn More</button>
      </motion.div>
      <ContactForm/>
    </div>
  )
}

export default ContactUs
