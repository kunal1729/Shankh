import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/User/Sidebar'
import OrgHome from '../components/Organization/OrgHome';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import AccountSettings from '../components/User/AccountSettings';
import { Datepicker } from "flowbite-react";
import UserProfile from '../components/User/UserProfile';
import Activity from '../components/User/Activity';
import Results from '../components/User/Results';
import UserHome from '../components/User/UserHome';
import axios from 'axios';

const UserDashboard = () => {

    const [status, setStatus] = useState("home");
    const {isAuthenticated, userDetails, setUserDetails} = useAppContext();

    const [selectedUser, setSelectedUser] = useState({});

    const navigate = useNavigate();


    
    const [language, setLanguage] = useState("All");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    

    const handleLanguage = (e) => {
      setLanguage(e.target.value);
    }

    const handleStartDate = (date) => {
      setStartDate(date)
    }
    const handleEndDate = (date) => {
      setEndDate(date)
    }

    
    


    const [blurBg, setBlurBg] = useState(false);



  return (
    <div className='flex h-screen w-screen'>
      <Sidebar status = {status} setStatus = {setStatus} />
      <div className=''>
        <div className='pl-[20px] w-full justify-between shadow-md h-[80px] items-center flex space-x-[40px] pt-[14px] pb-[14px] pr-[20px]'>
            {status == "activity" ? 
            <div className='w-[230px] rounded-lg h-[50px] bg-[#D9E0E6] text-[18px] pt-[10px] pl-[13px] pb-[10px] pr-[13px]'>
              <h1 className='text-gray-600'>Credit available : <span className='text-[#34856C]'>{userDetails.credits}</span></h1>
            </div> : null}
            <div className={`flex  w-[50%] items-center space-x-20 text-center justify-center ${status != "home" ? "invisible" : null}`}>
            
              <div className='flex items-center space-x-[20px]'>
                    <Datepicker format = "dd/MM/yyyy" language="en"  maxDate={new Date(endDate)} onChange={handleStartDate} id = "startDate"  icon={null} />
                  <span>to</span>
                    <Datepicker format = "dd/MM/yyyy" language="en" minDate = {new Date(startDate)} onChange={handleEndDate} maxDate={new Date()} id = "endDate"  icon={null} />
              </div> 
            </div> 
            <div className='flex space-x-[16px] items-center'>
                <span className='font-bold w-full' style={{fontFamily : "Poppins"}}>Welcome <span></span>{userDetails.userName.split(" ")[0]}</span>
                <button onClick={() => setStatus("settings")} className='cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#34856C" stroke="#34856C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </button>
            </div>
        </div>
        {status === "home" ? (
        <UserHome  setStatus = {setStatus} startDate = {startDate} endDate = {endDate} language = {language} />
        ) : status === "activity" ? (
        <Activity  setStatus = {setStatus} />
        ) : status === "profile" ? (
        <UserProfile />
        ) : status === "settings" ? (
          <AccountSettings/>
        ) : status === "results" ? (
          <Results  status = {status}/>
        ) : null}
      </div>
    </div>
  )
}

export default UserDashboard
