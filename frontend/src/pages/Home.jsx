import React from 'react'
import Navbar from '../components/Homepage/Navbar'
import Hero from '../components/Homepage/Hero'
import Features from '../components/Homepage/Features'
import Services from '../components/Homepage/Services'
import Testimonials from '../components/Homepage/Testimonials'
import Blogs from '../components/Homepage/Blogs'
import AboutUs from '../components/Homepage/AboutUs'
import Clients from '../components/Homepage/Clients'
import ContactUs from '../components/Homepage/ContactUs'
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
    <div className="h-screen scroll-smooth ">
      <Navbar  />
      
      <section className="min-h-screen">
        <Features />
        <Services />
      </section>

      <section className="min-h-screen">
        <AboutUs />
        <Testimonials/>
        <div className="h-[20px] sticky top-0 z-10 flex items-center justify-center bg-[#34856C] rounded-t-2xl">
          <div className="w-[50px] border-white h-[0.5px] border-2"></div>
        </div>
        <Blogs />
      </section>

      <section className="min-h-screen">
        <Clients />
        <ContactUs />
      </section>
    </div>
  )
}

export default Home
