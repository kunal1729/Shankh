import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import OrgHome from '../components/OrgHome';
import OrgOverview from '../components/OrgOverview';
import OrgProfile from '../components/OrgProfile';
import AddUser from '../components/addUser';
import EditUser from '../components/EditUser';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import AccountSettings from '../components/AccountSettings';

const OrgDashboard = () => {

    const [status, setStatus] = useState("home");
    const {isAuthenticated, orgDetails} = useAppContext();

    const [selectedUser, setSelectedUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
      if(!isAuthenticated)
      {
        navigate('/orgLogin')
      }
    }, [])
    

  return (
    <div className='flex h-screen '>
      <Sidebar status = {status} setStatus = {setStatus} />
      <div className='w-full'>
        
        <div className='pl-[20px]  justify-between shadow-md h-[80px] items-center flex space-x-[40px] pt-[14px] pb-[14px] pr-[20px]'>
            <div className={`flex  w-[70%] justify-between ${status != "home" ? "invisible" : null}`}>
              <select id="lang" name="Language">
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="German">German</option>
                  <option value="French">French</option>
              </select>
              <div className='flex items-center space-x-[20px]'>
                  <input type='date'/>
                  <span>to</span>
                  <input type='date'/>
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
        <OrgHome />
        ) : status === "overview" ? (
        <OrgOverview setSelectedUser = {setSelectedUser} setStatus={setStatus} />
        ) : status === "addUser" ? (
        <AddUser setStatus={setStatus} />
        ) : status === "profile" ? (
        <OrgProfile />
        ) : status === "editUser" ? (
        <EditUser selectedUser = {selectedUser} setStatus={setStatus}/>) :
        status === "settings" ? (
          <AccountSettings/>) : null
        }
      </div>
    </div>
  )
}

export default OrgDashboard
