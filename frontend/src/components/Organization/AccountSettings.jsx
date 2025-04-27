import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import axios from 'axios';
import Notifications from './Notifications';

const AccountSettings = () => {

  const {orgDetails, setOrgDetails} = useAppContext();

  const [active, setActive] = useState("changePass")
 
  const [data, setData] = useState({
    orgId : orgDetails.orgId,
    oldPassword : "",
    newPassword : ""
  });
  
  const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(data);
        setData((prev) => ({...prev, [e.target.id] : e.target.value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log(orgDetails);
        try{
            const url = "http://localhost:3001/api/changePassword"
            const {data: res} = await axios.post(url, data);
            console.log(res.data);
            setOrgDetails(res.data);
            alert(res.message);
            setData({
              _id : orgDetails._id,
              oldPassword : "",
              newPassword : ""
            })
        }
        catch(error)
        {
            if (error.response) {
                // Server responded with a status code outside the 2xx range
                if (error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message);
                    console.log(error.response.data.message);
                }
            } else if (error.request) {
                // Request was made, but no response was received
                console.error("No response received from server", error.request);
                setError("Server is unreachable. Please try again later.");
            } else {
                // Something else caused the error
                console.error("Error:", error.message);
                setError("An unexpected error occurred.");
            }
        }
    }
  

  return (
    <form onSubmit={handleSubmit} className='bg-[#F8FAFA] overflow-y-scroll p-8 h-[89svh] space-y-8'>
      <h1  style={{fontFamily : "Poppins"}} className='font-semibold text-[32px]'>Account Settings</h1>
      
      <div className='p-[40px] space-y-[30px] bg-white rounded-lg'>
        <div style={{fontFamily : "Poppins"}} className='font-semibold flex space-x-4'>
            <button className={`p-2 ${active == "changePass" ? "border-b-3 border-[#34856C] text-[#34856C]" : null}`} onClick={() => setActive("changePass")}>Change Password</button>
            <button className={`p-2 ${active == "notifications" ? "border-b-3 border-[#34856C] text-[#34856C]" : null}`} onClick={() => setActive("notifications")}>Notifications</button>
        </div>
        <div>
        {active === "changePass" ? (
          <div style={{fontFamily : "Inter"}} className='space-y-[30px]'>
            <div className='space-y-1 text-[14px]'>
              <h3 className='font-semibold'>Current Password</h3>
              <input
                onChange={handleChange}
                id='oldPassword'
                value={data.oldPassword}
                className='border-[1px] rounded-md focus:outline-none w-full p-2'
                placeholder='Enter current password'
                type='password'
              />
            </div>

            <div className='space-y-1 text-[14px]'>
              <h3 className='font-semibold'>New Password</h3>
              <input
                onChange={handleChange}
                id='newPassword'
                value={data.newPassword}
                className='border-[1px] rounded-md focus:outline-none w-full p-2'
                placeholder='Enter new password'
                type='password'
              />
            </div>

            <div className='space-y-1 text-[14px]'>
              <h3 className='font-semibold'>Confirm new password</h3>
              <input
                onChange={handleChange}
                id='confirmPassword'
                value={data.confirmPassword}
                className='border-[1px] rounded-md focus:outline-none w-full p-2'
                placeholder='Confirm new password'
                type='password'
              />
            </div>

            <div className='font-semibold grid space-x-[25px]'>
              <span style={{fontFamily : "Poppins"}} className='text-xs text-red-600'>{error}</span>
              <button style={{fontFamily : "Poppins"}} type='submit' className='pt-[10px] pr-[53px] pb-[10px] pl-[53px] rounded-lg text-white bg-[#34856C]'>
                Update Password
              </button>
            </div>
          </div>
        ) : (
          <Notifications />
        )}

        </div> 
      </div> 
    </form> 
  )
}

export default AccountSettings
