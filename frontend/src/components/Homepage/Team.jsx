import React from 'react'
import john from '../../assets/john.jpg'

const teamDetails = [
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO", 
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    },
    {
        name : "John Doe",
        role : "CEO",
        img : john
    }
]

const Team = () => {
  return (
    <div style={{fontFamily : "Inter"}} className='h-[230px]  w-full items-center flex space-x-[25px]  '>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      
      <div style={{scrollbarWidth : 'none'}} className=' flex gap-[25px] overflow-x-scroll scrollbar-w-0 scrollbar-hidden w-[1303px] space-x-[25px]'>
      {teamDetails.map((item) => {
        return (
            <div style={{ backgroundImage: `url(${item.img})` }} className=' p-2 min-w-[179px] h-[230px] content-end  bg-cover '>
                <div className='p-2 grid text-start bg-white'>
                    <span className='text-[14px] font-semibold'>{item.name}</span>
                    <span className='text-[12px]'>{item.role}</span>
                </div>
            </div>
        )
      })}
      </div>

      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      
    </div>
  )
}

export default Team
