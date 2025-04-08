import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const OrgProfile = () => {

  const {isAuthenticated, orgDetails, setOrgDetails} = useAppContext()

  const [data, setData] = useState({});

 const [error, setError] = useState("");

 useEffect(() => {
   const loadDetails = async() => {
    try{
      const url = "http://localhost:3001/api/getAdmin"
      const {data: res} = await axios.post(url, orgDetails);
      setData(res.data);
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
   loadDetails();
 }, [])


    const handleChange = (e) => {
        console.log(data);
        setData((prev) => ({...prev, [e.target.id] : e.target.value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(data);
        try{
            const url = "http://localhost:3001/api/editOrgDetails"
            const {data: res} = await axios.post(url, data);
            setOrgDetails(data);
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
    <form onSubmit={handleSubmit} className='bg-[#F8FAFA] overflow-y-scroll p-8 h-[89svh] space-y-8'>
      <h1 style={{fontFamily : "Poppins"}} className='font-semibold text-[32px]'>Organization Profile</h1>
      <div style={{fontFamily : "Inter"}} className='p-[40px] space-y-[30px] bg-white rounded-lg'>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Organization Name</h3>
            <input onChange={handleChange} id='orgName' value={data.orgName} className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter organization name' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Organization Type</h3>
            <input onChange={handleChange} id='orgType' value={data.orgType} className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter organization type' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Login Email</h3>
            <input value={data.email} readOnly className='border-[1px] rounded-md focus:outline-none w-full p-2'  />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Phone Number</h3>
            <input onChange={handleChange} id='phoneNumber' value={data.phoneNumber} className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter phone number ' />
        </div>
        <div style={{fontFamily : "Poppins"}} className='font-semibold space-x-[25px]'>
            <button className='pt-[10px] pr-[53px] pb-[10px] pl-[53px] rounded-lg text-white bg-[#34856C]'>Save Changes</button>
        </div>
      </div>
    </form>
  )
}

export default OrgProfile
