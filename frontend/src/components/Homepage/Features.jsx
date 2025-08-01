import React from 'react'
import Hero from './Hero'
import point1 from '../../assets/point1.png'
import point2 from '../../assets/point2.png'
import point3 from '../../assets/point3.png'
import point4 from '../../assets/point4.svg'

const Features = () => {

  return (
    <div  className = 'w-full'>
        <Hero className = 'top-0 z-0 sticky'/>
        <div className=' h-[20px] sticky -top-8 z-10 rounded-t-2xl justify-center flex flex-col  items-center p-2 bg-[#34856C] '>
            <div className=' w-[50px] border-white text-white h-[0.5px]  border-2 '>
            </div>
        </div>
        <div id='Features' className='bg-[#34856C] h-full space-x-2 text-[#F8FAFA] '>
            <div  className='bg-[#34856C] sticky w-full z-0 -top-8 p-8' style={{fontFamily : "Poppins"}}>
                <h1 className='font-bold text-[64px] '>Why Choose Shankh?</h1>
                <div className='border h-[1px] z-0 border-white'></div>
            </div>
            <div  className='h-[380svh] relative '>
                <div className='flex h-[100vh] -top-6 items-start z-10 p-8 sticky bg-[#34856C] justify-between'>
                    <span className='text-[48px] font-bold'>1.</span>
                    <div className=' space-y-8 w-[80%]'>
                        <div style={{fontFamily : "Poppins"}} className='flex items-center justify-between'>
                            <h1 className='text-[48px] w-[736px] font-semibold'>AI-Driven Speech Analysis</h1>
                            <img src={point1}></img>
                        </div>
                        <div style={{fontFamily : "Inter"}} className='z-10 space-y-8 relative'>
                            <p className='text-[24px] w-[736px]'>
                                Gain instant, accurate feedback on every aspect of your verbal communication. Our advanced AI technology analyzes pronunciation, articulation, tone, pace, fluency, and speech clarity—providing actionable insights that transform how you speak and present yourself
                            </p>
                            
                            <div className='space-y-2'>
                                <div className='space-x-4 text-[24px]'>
                                    <span>01</span>
                                    <span className='font-bold'>Real-time Feedback</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>02</span>
                                    <span className='font-bold '>Comprehensive Analysis</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>03</span>
                                    <span className='font-bold'>Personalized Insights</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div  className='border z-20 sticky top-[75px] border-white'></div> 
                <div className='flex h-[90vh] items-start pl-8 pr-8 z-20 sticky top-[81px]  justify-between  bg-[#34856C] '>
                    <span className='text-[48px] font-bold'>2.</span>
                    <div className=' space-y-8 w-[80%]'>
                        <div style={{fontFamily : "Poppins"}} className='flex items-center justify-between'>
                            <h1 className='text-[48px] leading-tight w-[809px] font-semibold'>Emotionally Intelligent Feedback</h1>
                            <img src={point2}></img>
                        </div>
                        <div style={{fontFamily : "Inter"}} className='z-10 space-y-8 relative'>
                            <p className='text-[24px] w-[809px]'>
                            Experience feedback that builds confidence rather than criticism. Our AI delivers encouraging, constructive insights that help refine both your speech delivery and self-confidence, creating a supportive environment for continuous growth.
                            </p>
                            
                            <div className='space-y-2'>
                                <div className='space-x-4 text-[24px]'>
                                    <span>01</span>
                                    <span className='font-bold'>Supportive Guidance</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>02</span>
                                    <span className='font-bold '>Confidence Building</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>03</span>
                                    <span className='font-bold'>Adaptive Coaching</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className='border sticky top-[160px] z-30 border-white'></div> 
                <div className='flex h-[80vh] items-start pl-8 pr-8 justify-between bg-[#34856C] sticky top-[172px] z-30'>
                    <span className='text-[48px] font-bold'>3.</span>
                    <div className=' space-y-8 w-[80%]'>
                        <div style={{fontFamily : "Poppins"}} className='flex items-center justify-between'>
                            <h1 className='text-[48px] w-[1300px] leading-12 font-semibold'>Leadership & Communication Workshops</h1>
                            <img src={point3}></img>
                        </div>
                        <div style={{fontFamily : "Inter"}} className='space-y-8 relative'>
                            <p className='text-[24px] w-[809px]'>
                            Elevate your professional presence through specialized training modules. Develop executive presence, master persuasion techniques, and craft impactful communication strategies that position you as a leader in any environment.
                            </p>
                            
                            <div className='space-y-2'>
                                <div className='space-x-4 text-[24px]'>
                                    <span>01</span>
                                    <span className='font-bold'>Executive Presence</span>
                                </div>
                                <div className=' border-1  border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>02</span>
                                    <span className='font-bold '>Persuasion Techniques</span>
                                </div>
                                <div className=' border-1  border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>03</span>
                                    <span className='font-bold'>Strategic Communication</span>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div  className='border sticky  top-[250px] z-40 border-white'></div> 
                <div className='flex h-[100vh] items-start pl-8 pr-8 justify-between bg-[#34856C] sticky top-[260px] z-40'>
                    <span className='text-[48px] font-bold'>4.</span>
                    <div className=' space-y-4 w-[80%]'>
                        <div style={{fontFamily : "Poppins"}} className='flex items-center justify-between'>
                            <h1 className='text-[48px] w-[636px] font-semibold'>Multi-Language Support</h1>
                            <img src={point4} />
                        </div>
                        <div style={{fontFamily : "Inter"}} className='space-y-8 relative'>
                            <p className='text-[24px] w-[636px]'>
                                Break through language barriers with comprehensive multilingual coaching. Our platform helps you improve speech clarity and communication across multiple languages, with training tailored specifically to your region and individual needs.
                            </p>
                            <div className='space-y-2'>
                                <div className='space-x-4 text-[24px]'>
                                    <span>01</span>
                                    <span className='font-bold'>Language Inclusivity</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>02</span>
                                    <span className='font-bold '>Global Communication</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                                <div className='space-x-4 text-[24px]'>
                                    <span>03</span>
                                    <span className='font-bold'>Regional Customization</span>
                                </div>
                                <div className=' border-1 content-extralight border-[#F8FAFA]'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
