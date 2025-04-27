import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Datepicker } from 'flowbite-react';

const UserProfile = () => {

  const {isAuthenticated, userDetails, setUserDetails} = useAppContext()

  const [data, setData] = useState({
    _id : userDetails._id,
    userName : userDetails.userName,
    userId : userDetails.userId || "",
    email : userDetails.email,
    orgName : userDetails.orgName,
    DOB : userDetails.DOB || "",
    location : userDetails.location || "",
    occupation : userDetails.occupation || ""
  });

 const [error, setError] = useState("");

    const handleChange = (e) => {
        console.log(data);
        setData((prev) => ({...prev, [e.target.id] : e.target.value}));
    }

     const [date, setDate] = useState("");
    
    const handleDate = (date) => {
        setDate(date)
        setData((prev) => ({...prev, DOB : date}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(data);
        try{
            const url = "http://localhost:3001/api/editUser"
            const {data: res} = await axios.post(url, data);
            setUserDetails(data);
            alert(res.message);
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
    <form  onSubmit={handleSubmit} className='bg-[#F8FAFA] overflow-y-scroll p-8 h-[89svh] space-y-8'>
      <h1 style={{fontFamily : "Poppins"}} className='font-semibold text-[32px]'>Profile</h1>
      <div style={{fontFamily : "Poppins"}} className='p-[40px]  space-y-[30px] bg-white rounded-lg'>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Full Name</h3>
            <input onChange={handleChange} id='userName' value={data.userName} className='border-[1px] rounded-md text-[#5F6C7B] focus:outline-none w-full p-2' placeholder='Enter organization name' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>ID</h3>
            <input onChange={handleChange} placeholder = 'Enter your userId' id='userId' value={data.userId} className='border-[1px] text-[#5F6C7B] rounded-md focus:outline-none w-full p-2' />
        </div>
        <div className='flex space-x-6'>
            <div className='space-y-1 w-1/2 text-[14px]'>
                <h3 className='font-semibold'>Email</h3>
                <input value={data.email} readOnly className='border-[1px] text-[#5F6C7B] rounded-md focus:outline-none w-full p-2'  />
            </div>
            <div className='space-y-1 w-1/2 text-[14px]'>
                <h3 className='font-semibold'>DOB</h3>
                <Datepicker format = "dd/MM/yyyy" language="en" value={data.DOB == "" ? null : new Date(data.DOB)} onChange={handleDate} maxDate={new Date()} id = "DOB"  icon={null} />
            </div>
        </div>
        
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Organization Name</h3>
            <input readOnly value={data.orgName} className='border-[1px] text-[#5F6C7B] rounded-md focus:outline-none w-full p-2'  />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Location</h3>
            <input onChange={handleChange} id='location' value={data.location} className='border-[1px] text-[#5F6C7B] rounded-md focus:outline-none w-full p-2' placeholder='Enter location ' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Occupation</h3>
            <input onChange={handleChange} id='occupation' value={data.occupation} className='border-[1px] text-[#5F6C7B] rounded-md focus:outline-none w-full p-2' placeholder='Enter occupation ' />
        </div>
        <div style={{fontFamily : "Poppins"}} className='font-semibold space-x-[25px]'>
            <button className='pt-[10px] pr-[53px] pb-[10px] pl-[53px] rounded-lg text-white bg-[#34856C]'>Save Changes</button>
        </div>
      </div>
    </form>
  )
}

export default UserProfile
