import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '../context/appContext';

const OrgSignUp = () => {

    const {setOrgDetails} = useAppContext();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const [data, setData] = useState({
        orgId : uuidv4(),
        orgName : "",
        email : "",
        password : ""
    })


    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.id == "conPassword" && e.target.value != data.password)
        {
            setError("Does not match the above password !")
        }
        else{
            setError("");
        }
        if(e.target.id == "conPassword")
        {
            return;
        }
        console.log(data);
        setData((prev) => ({...prev, [e.target.id] : e.target.value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(data.orgId)
        try{
            const url = "http://localhost:3001/api/admins"
            const {data: res} = await axios.post(url, data);
            setOrgDetails(data);
            console.log(res.message)
            alert("Admin Registered successfully !")
            navigate("/orgLogin");
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
        setData(prev =>({...prev, password : ""}));
    }


  return (
    <form onSubmit={handleSubmit} className=' bg-[#F8FAFA] flex flex-col z-0 items-center justify-center h-screen '>
          <motion.div initial = {{x : 1000}} animate = {{x : 0}} transition={{duration : 0.3, ease : "easeInOut" }}  className='w-[700px] rounded-xl relative pt-[30px] pr-[39px] pb-[30px] bg-white pl-[39px]  flex flex-col space-y-[20px] justify-center h-[450px]'>
            <span className='text-[#34856C]'>Shankh</span>
            <span style={{fontFamily : "Poppins"}} className='text-[20px] font-bold text-[#34856C]'>Create Account</span>
            
            <div className='grid space-y-1 relative '>
                  <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5.5 p-2 border-transparent bg-white left-5'>Organization Name</span>
                  <input id='orgName' onChange={handleChange} value={data.orgName} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] w-full' ></input>
              </div>
            <div className='grid space-y-1 relative '>
                  <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5 p-2 bg-white left-5'>Email</span>
                  <input id='email' onChange={handleChange} value={data.email} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] ' ></input>
              </div>
            <div className='grid space-y-1 relative '>
                <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5 p-2 bg-white left-5'>Password</span>
                <input id='password' type='password' onChange={handleChange} value={data.password} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] ' ></input>
            </div>
            <div className='grid space-y-1 relative '>
                <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5 p-2 bg-white left-5'>Confirm Password</span>
                <input id='conPassword' type='password' onChange={handleChange} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] ' ></input>
            </div>
            <div className='flex flex-col space-y-1'>
              <span style={{fontFamily : "Inter"}} className='text-xs text-red-600'>{error}</span>
              <button style={{fontFamily : "Poppins"}} className=' cursor-pointer  text-center rounded-lg bg-[#FF6B5B] text-white font-semibold pr-[53px] text-[16px] pb-[10px] pl-[53px] pt-[10px]'>Register</button>
            </div>
            <span style={{fontFamily : "Inter"}} className='text-[14px] text-center'>Already a member? <NavLink to={'/orgLogin'} className='text-[#34856C]'>Login Now</NavLink></span>
          </motion.div>
    </form>
  )
}

export default OrgSignUp
