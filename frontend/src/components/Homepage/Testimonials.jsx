import React from 'react'
import dp from "../../assets/dp.jpg"

const Testimonials = () => {
  return (
    <div id='Testimonials' className='p-[60px] bg-[#F8FAFA] flex flex-col justify-center items-center h-screen content-center text-center space-y-4'>
        <h1 style={{fontFamily : "Poppins"}} className=' text-[54px] text-[#FF6B5B]'>What our Users say</h1>
        <div className='flex gap-12 content-center'>
            <div className='space-y-4 w-[346px]'>
                <div className='h-[316px] hover:border-t-[#FF6B5B] hover:border-t-4 p-4 rounded-lg flex flex-col justify-between bg-[#FAFBFD] shadow-md'>
                    <p style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B] justify-between text-start'>Shankh helped me overcome my fear of public speaking. The AI feedback is incredibly intuitive
                    and supportive.</p>
                    <div className='flex space-x-4'>
                        <img className='w-[49px] h-[49px]' src={dp}></img>
                        <div className='grid text-start space-y-0'>
                            <span style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>Amit</span>
                            <span style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B]'>University Student</span>
                        </div>
                    </div>
                </div>
                <div className='h-[196px] hover:border-t-[#FF6B5B] hover:border-t-4 p-4 rounded-lg flex flex-col justify-between bg-[#FAFBFD] shadow-md'>
                    <p style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B] justify-between text-start'>As a teacher, I’ve seen my students gain confidence in their speech and communication skills.
                    Highly recommended!</p>
                    <div className='flex space-x-4'>
                        <img className='w-[49px] h-[49px]' src={dp}></img>
                        <div className='grid text-start space-y-0'>
                            <span style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>Priya</span>
                            <span  style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B]'>High School Educator</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-4 w-[346px]'>
                <div className='h-[189px] hover:border-t-[#FF6B5B] hover:border-t-4 p-4 rounded-lg flex flex-col justify-between bg-[#FAFBFD] shadow-md'>
                    <p style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B] justify-between text-start'>
                    The AI-driven coaching felt like a personal mentor guiding me through my weaknesses. A
                    game-changer!
                    </p>
                    <div className='flex space-x-4'>
                        <img className='w-[49px] h-[49px]' src={dp}></img>
                        <div className='grid text-start space-y-0'>
                            <span style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>Alex M.</span>
                            <span style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B]'>Freelance Developer</span>
                        </div>
                    </div>
                </div>
                <div className='h-[316px] hover:border-t-[#FF6B5B] hover:border-t-4 p-4 rounded-lg flex flex-col justify-between bg-[#FAFBFD] shadow-md'>
                    <p style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B] justify-between text-start'>
                    The AI-driven coaching felt like a personal mentor guiding me through my weaknesses. A
                    game-changer!
                    </p>
                    <div className='flex space-x-4'>
                        <img className='w-[49px] h-[49px]' src={dp}></img>
                        <div className='grid text-start space-y-0'>
                            <span style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>Rahul</span>
                            <span style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B]'>Startup Founder</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[346px]'>
                <div className='h-[521px] hover:border-t-[#FF6B5B] hover:border-t-4 p-4 rounded-lg flex flex-col justify-between bg-[#FAFBFD] shadow-md'>
                    <p style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B] justify-between text-start'>
                    Our employees have significantly improved their presentation and leadership communication
                    skills since integrating Shankh into our training program.
                    </p>
                    <div >
                        <img className='w-[49px] h-[49px]' src={dp}></img>
                        <div className='grid text-start space-y-0'>
                            <span style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>HR Manager</span>
                            <span style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B]'>Tech Firm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
