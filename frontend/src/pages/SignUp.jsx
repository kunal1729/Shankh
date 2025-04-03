import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { motion } from 'framer-motion';

const SignUp = () => {

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        console.log(data);
        setData((prev) => ({...prev, [e.target.id] : e.target.value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(data);
        try{
            const url = "http://localhost:3001/api/users"
            const {data: res} = await axios.post(url, data);
            console.log(res.message);
            toast.success(res.message, {
                position: "top-right",
            });
            alert("OTP sent Successfully!")
            navigate("/otpLogin", {state : data});
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
            <div className='flex justify-between space-x-[23px]' >
              <div className='grid space-y-1 relative '>
                  <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5.5 p-2 border-transparent bg-white left-5'>First Name</span>
                  <input id='firstName' onChange={handleChange} value={data.firstName} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] w-[300px]' ></input>
              </div>
              <div className='grid space-y-1 relative '>
                  <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5 p-2 bg-white left-5'>Last Name</span>
                  <input id='lastName' onChange={handleChange} value={data.lastName} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] w-[300px]' ></input>
              </div>
            </div>
            <div className='grid space-y-1 relative '>
                  <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5 p-2 bg-white left-5'>Email</span>
                  <input id='email' onChange={handleChange} value={data.email} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] ' ></input>
              </div>
            <div className='grid space-y-1 relative '>
                <span style={{fontFamily : "Inter"}} className='text-[14px] absolute -top-5 p-2 bg-white left-5'>Password</span>
                <input id='password' onChange={handleChange} value={data.password} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] ' ></input>
            </div>
            <div className='flex flex-col space-y-1'>
              <span style={{fontFamily : "Inter"}} className='text-xs text-red-600'>{error}</span>
              <button style={{fontFamily : "Poppins"}} className=' cursor-pointer  text-center rounded-lg bg-[#FF6B5B] text-white font-semibold pr-[53px] text-[16px] pb-[10px] pl-[53px] pt-[10px]'>Send an OTP</button>
            </div>
            <span style={{fontFamily : "Inter"}} className='text-[14px] text-center'>Already a member? <NavLink to={'/Login'} className='text-[#34856C]'>Login Now</NavLink></span>
          </motion.div>
          <ToastContainer/>
    </form>
  )
}

export default SignUp
