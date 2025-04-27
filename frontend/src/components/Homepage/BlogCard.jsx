import React from 'react'
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import blog4 from "../../assets/blog4.jpg"
import { motion } from 'framer-motion'

const ourBlogs = [
    {
        id: 1,
        title : "How AI is Revolutionizing Public Speaking & Leadership Training",
        img : blog1,
        date : "21 Mar",
        time : "4 min read"
    },
    {
        id : 2,
        title : "The Science Behind Speech, Communication, and Emotional Intelligence",
        img : blog2,
        date : "21 Mar",
        time : "4 min read"
    },
    {
        id : 3,
        title : "Top Tips to Master Confident Communication & Executive Presence",
        img : blog3,
        date : "21 Mar",
        time : "4 min read"
    },
    {
        id : 4,
        title : "The Science Behind Speech, Communication, and Emotional Intelligence",
        img : blog4,
        date : "21 Mar",
        time : "4 min read"
    }
]

const BlogCard = () => {
  return (
    <div className=' gap-12 grid grid-cols-4'>
    {ourBlogs.map((item) => {
        if(item.id - 1 < ourBlogs.length - 4)
        {
            return;
        }
        return (
            <motion.div 
            whileHover={{backgroundSize : "450px"}}
            transition={{ease : "easeInOut", duration : 0.5}}
            className='w-[325px] brightness-75 cursor-pointer rounded-3xl shadow-xl space-y-2  content-end h-[439px] p-2 text-[#F8FAFA] ' style={{ backgroundImage: `url(${item.img})` , backgroundSize : "325px" }}>
                <p style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>{item.title}</p>
                <div className='flex items-center text-white justify-between'>
                    <span style={{fontFamily : "Inter"}} className='text-[18px]'>{item.date}</span>
                    <span style={{fontFamily : "Inter"}} className='text-[14px]'>{item.time}</span>
                </div>
            </motion.div>
        )
    })}
    </div>
  )
}

export default BlogCard
