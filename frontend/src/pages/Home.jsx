import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import AboutUs from '../components/AboutUs'
import Clients from '../components/Clients'
import ContactUs from '../components/ContactUs'
import { useRef, useEffect, useState } from 'react'
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const Home = () => {


  const [pos, setPos] = useState(0);

    const scrollRef = useRef(null);
    const {scrollY, scrollYProgress} = useScroll( {
        container: scrollRef,
        offset: ["start start", "end end"],
    }
    );

    scrollY.onChange((latest) => {
        setPos(latest);
      });

    const opacity1 = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const imageAnimation = useTransform(scrollYProgress, [0.3, 0.8], [-600, 80]);


  return (
    <div className='scrollbar-none'>
      <Navbar />
      <div  className='overflow-y-scroll scrollbar-none'>
        <div style={{scrollbarWidth : "40px"}} className='h-screen scrollbar-thumb-gray-500 [scrollbar-gutter:stable] [padding-right:10px] scrollbar-track-[#34856C] overflow-y-scroll'>
          <Features className = "sticky top-10" />
        </div>
      </div>
      <Services/>
      <Testimonials/>
      <div id = "AboutUs" className='pr-4'>
        <div style={{scrollbarHeight : "40px"}} className='h-screen relative scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-scroll'>
          <AboutUs className = 'bg-fixed'/>
          <div className=' h-[20px] sticky -top-3 z-10 rounded-t-2xl justify-center flex flex-col  items-center p-2 bg-[#34856C] '>
              <div className=' w-[50px] border-white text-white h-[0.5px]  border-2 '>
              </div>
          </div>
          <Blogs/>
        </div>
      </div>
      <div className='pr-4 '>
        <div ref={scrollRef}  className='h-screen scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-scroll'>
          <Clients opacity = {opacity1.current} className = 'bg-fixed'/>
          <ContactUs x = {imageAnimation.current} />
        </div>
      </div>
    </div>
  )
}

export default Home
