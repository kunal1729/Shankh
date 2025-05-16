import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/Organization/Sidebar'
import OrgHome from '../components/Organization/OrgHome';
import OrgOverview from '../components/Organization/OrgOverview';
import OrgProfile from '../components/Organization/OrgProfile';
import AddUser from '../components/Organization/AddUser';
import EditUser from '../components/Organization/EditUser';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import AccountSettings from '../components/Organization/AccountSettings';
import { Datepicker } from "flowbite-react";
import Results from '../components/User/Results';


const OrgDashboard = () => {

    const [status, setStatus] = useState("home");
    const {isAuthenticated, orgDetails} = useAppContext();

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

    useEffect(() => {
      if(!isAuthenticated)
      {
        navigate('/orgLogin')
      }
    }, [])

    const [blurBg, setBlurBg] = useState(false);



  return (
    <div className='flex h-screen '>
      <Sidebar status = {status} setStatus = {setStatus} />
      <div className='w-full'>
        
        <div className='pl-[20px]  justify-between shadow-md h-[80px] items-center flex space-x-[40px] pt-[14px] pb-[14px] pr-[20px]'>
            <div className={`flex  w-[70%] justify-between ${status != "home" ? "invisible" : null}`}>
              <select onClick={() => setBlurBg(true)} className='rounded-lg focus:outline-none bg-gray-50 text-sm' onChange={handleLanguage} value={language} id="lang" name="Language">
                  <option value="All">All</option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Telugu">Telugu</option>
              </select>
              <div className='flex items-center space-x-[20px]'>
                    <Datepicker format = "dd/MM/yyyy" language="en"  maxDate={new Date(endDate)} onChange={handleStartDate} id = "startDate"  icon={null} />
                  <span>to</span>
                    <Datepicker format = "dd/MM/yyyy" language="en" minDate = {new Date(startDate)} onChange={handleEndDate} maxDate={new Date()} id = "endDate"  icon={null} />
              </div> 
            </div> 
            <div className='flex space-x-[16px] items-center'>
                <span className='font-bold' style={{fontFamily : "Poppins"}}>Welcome <span></span>{orgDetails.orgName}</span>
                <button onClick={() => setStatus("settings")} className='cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#34856C" stroke="#34856C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </button>
            </div>
          
            


        </div>
        {status === "home" ? (
        <OrgHome setStatus={setStatus} startDate = {startDate} endDate = {endDate} language = {language} />
        ) : status === "overview" ? (
        <OrgOverview setSelectedUser = {setSelectedUser} setStatus={setStatus} />
        ) : status === "addUser" ? (
        <AddUser setStatus={setStatus} />
        ) : status === "profile" ? (
        <OrgProfile />
        ) : status === "editUser" ? (
        <EditUser selectedUser = {selectedUser} setStatus={setStatus}/>) :
        status === "settings" ? (
          <AccountSettings setSelectedUser = {setSelectedUser} setStatus = {setStatus} />) : 
        status === "results" ? 
        (<Results/>)  : null
        }
      </div>
    </div>
  )
}

export default OrgDashboard
