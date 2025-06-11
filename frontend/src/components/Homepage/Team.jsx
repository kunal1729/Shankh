
import React, { useRef } from 'react'
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
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 300 // adjust based on desired scroll speed
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div style={{ fontFamily: 'Inter' }} className='h-[230px] w-full items-center flex space-x-[25px]'>
      
      {/* Left Button */}
      <button onClick={() => scroll('left')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-chevron-left">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Scrollable Team Cards */}
      <div
        ref={scrollRef}
        className='flex gap-[25px] overflow-x-hidden w-[1303px] space-x-[25px]'
      >
        {teamDetails.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
            className='p-2 min-w-[179px] h-[230px] content-end bg-cover bg-center rounded-lg'
          >
            <div className='p-2 grid text-start bg-white bg-opacity-90 rounded'>
              <span className='text-[14px] font-semibold'>{item.name}</span>
              <span className='text-[12px]'>{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button onClick={() => scroll('right')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-chevron-right">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

export default Team

