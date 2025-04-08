import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const Sidebar = ({status, setStatus}) => {

    const {setIsAuthenticated} = useAppContext()

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        alert("Logged out successfully")
    }


  return (
    <div style={{fontFamily : "Poppins"}} className='font-semibold  w-[305px] flex justify-between flex-col pr-[22.52px] pb-[20.03px]  pl-[22.52px] pt-[20.03px] text-white bg-[#34856C] '>
        <div  className='flex space-y-[50px] flex-col'>
            <span>Shankh</span>
            <button onClick={() => setStatus("home")} className={`flex rounded-lg space-x-2 p-[7.51px] items-center ${status == "home" ? "bg-[white] text-black " : null}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                <span>Dashboard</span>
            </button>
            <button onClick={() => setStatus("overview")} className={`flex rounded-lg space-x-2 p-[7.51px] items-center ${status == "overview" || status == "addUser" || status == "editUser" ? "bg-[white] text-black " : null}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>User Overview</span>
            </button>
            <button onClick={() => setStatus("profile")} className={`flex rounded-lg space-x-2 p-[7.51px] items-center ${status == "profile" ? "bg-[white] text-black " : null}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                <span>Organization Profile</span>
            </button>
        </div>
        <div className='space-y-4 items-center '>
            <div className='border border-b-1'></div>
            <NavLink onClick={handleLogout} to={'/orgLogin'} className="flex space-x-2 items=center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                <span>LogOut</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
