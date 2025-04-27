import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppContext } from '../../context/appContext';

const AddUser = ({setStatus}) => {

    const {orgDetails} = useAppContext();

    const [data, setData] = useState({
        orgId : orgDetails.orgId,
        orgName : orgDetails.orgName,
        userName : "",
        credits : "",
        email : "",
        password : "",
        phoneNumber : ""
    })

    

     const [error, setError] = useState("");
    
    
        const handleChange = (e) => {
            console.log(data);
            setData((prev) => ({...prev, password : "Kunal@123#"}));
            setData((prev) => ({...prev, [e.target.id] : e.target.value}));
        }
    
        const handleSubmit = async(e) => {
            e.preventDefault();

            console.log(orgDetails);
            try{
                const url = "http://localhost:3001/api/addUser"
                const {data: res} = await axios.post(url, data);
                console.log(res.message);
                toast.success(res.message, {
                    position: "top-right",
                });
                alert("New user created !");
                setStatus("overview")
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
    <form onClick={handleSubmit} className='bg-[#F8FAFA] overflow-y-scroll p-8 h-[89svh] space-y-8'>
      <h1 style={{fontFamily : "Poppins"}} className='font-semibold text-[32px]'>Add New User</h1>
      <div style={{fontFamily : "Inter"}} className='p-[40px] space-y-[30px] bg-white rounded-lg'>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>User Name</h3>
            <input onChange={handleChange} id='userName' value={data.userName} className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter user name' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Associated Credits</h3>
            <input onChange={handleChange} id='credits' value={data.credits} className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter number of credits' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Organization Name</h3>
            <input value={data.orgName} readOnly className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter user name' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Email</h3>
            <input onChange={handleChange} id='email' value={data.email} className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter email address' />
        </div>
        <div className='space-y-1 text-[14px]'>
            <h3 className='font-semibold'>Phone Number (Optional)</h3>
            <input onChange={handleChange} id='phoneNumber' value={data.phoneNumber} className='border-[1px] rounded-md focus:outline-none w-full p-2' placeholder='Enter phone number' />
        </div>
        <div style={{fontFamily : "Poppins"}} className='font-semibold space-x-[25px]'>
            <button className='pt-[10px] pr-[53px] pb-[10px] pl-[53px] rounded-lg text-white bg-[#34856C]'>Add User</button>
            <button onClick={() => setStatus("overview")} className='pt-[10px] pr-[53px] pb-[10px] pl-[53px] rounded-lg border-[#34856C] border-[2px] text-[#34856C]'>Cancel</button>
        </div>
      </div>
    </form>
  )
}

export default AddUser
