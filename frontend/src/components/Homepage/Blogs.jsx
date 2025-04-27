import React from 'react'
import BlogCard from './BlogCard'


const Blogs = () => {
  return (
    <div id='Blog' className='bg-[#34856C] sticky top-0 z-10 h-screen space-y-12 p-[81px]'>
      <h1 style={{fontFamily : "Poppins"}} className='text-[64px] text-[#F8FAFA]'>Latest From our blog</h1>
      <BlogCard/>
    </div>
  )
}

export default Blogs
