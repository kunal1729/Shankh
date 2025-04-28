import React from 'react'


const ContactForm = () => {
  return (
    <div className='flex text-white  flex-col justify-center space-y-24 items-center'>
        <div className='justify-center text-center'>
            <h1 style={{fontFamily : "Poppins"}} className='text-[48px] font-semibold text-[#FAFBFD]'>Contact Us</h1>
            <p style={{fontFamily : "Inter"}} className='text-[24px] w-[701px] text-white'> For a demo, partnership inquiry, or to learn how we can help you empower voices and unleash potential. </p>
        </div>
        <div className='w-[650px] space-y-8'>
            <div className='flex text-white justify-between'>
                <div className='space-y-1 w-[300px]'>
                    <input className='focus:outline-none' placeholder='First Name'></input>
                    <div className='border-b-1 focus-visible:none'></div>
                </div>
                <div className='space-y-1 w-[300px]'>
                    <input className='focus:outline-none' placeholder='Last Name'></input>
                    <div className='border-b-1'></div>
                </div>
            </div>
            <div style={{fontFamily : "Inter"}} className='flex text-white justify-between'>
                <div className='space-y-1 w-[300px]'>
                    <input className='focus:outline-none' placeholder='Organization Name'></input>
                    <div className='border-b-1 '></div>
                </div>
                <div className='space-y-1 w-[300px]'>
                    <input className='focus:outline-none' placeholder='Your Designation'></input>
                    <div className='border-b-1 '></div>
                </div>
            </div>
            <div className='space-y-1 text-white'>
                <input className='focus:outline-none text-white' placeholder='Email'></input>
                <div className='border-b-1'></div>
            </div>
            <div className='space-y-1 text-white'>
                <input className='focus:outline-none' placeholder='Subject'></input>
                <div className='border-b-1'></div>
            </div>
            <div className='space-y-1 h-[86px] text-white'>
                <input className='focus:outline-none' placeholder='Message'></input>
                <div className='border-b-1'></div>
            </div>
            <button style={{fontFamily : "Poppins"}} className='pt-[10px] hover:shadow-2xl cursor-pointer text-[16px] pb-[10px] pl-[53px] pr-[53px] rounded-lg bg-[#FF6B5B] w-full font-semibold text-white'>Get in Touch</button>
        </div>
    </div>
  )
}

export default ContactForm
