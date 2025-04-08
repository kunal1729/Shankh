import React, {useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"
import { motion } from 'framer-motion'
import { useAppContext } from '../context/appContext'

const OrgLogin = () => {

    const {setIsAuthenticated, setOrgDetails} = useAppContext()
    const [type, setType] = useState("admin");

    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData(prev => ({...prev, [e.target.id] : e.target.value}));
        console.log(data);
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        try{

            var url = "";
            if(type == "admin")
            {
                url = "http://localhost:3001/api/adminAuth";
            }
            else{
                url = "http://localhost:3001/api/auth";
            }
            const {data : res} = await axios.post(url, data)
            localStorage.setItem("token" , res.data.token);
            setIsAuthenticated(true);
            if(type == "admin")
            {
                setOrgDetails(res.data.details);
            }
            alert(res.message);
            navigate("/orgDashboard");

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
    <form onSubmit={handleLogin} className='bg-[#F8FAFA] flex flex-col z-0 items-center justify-center h-screen '>
      <motion.div initial = {{x : 1000}} animate = {{x : 0}} transition={{duration : 0.3, ease : "easeInOut" }}  className='w-[700px] rounded-xl relative pt-[30px] pr-[76px] pb-[30px] bg-white pl-[76px]  flex flex-col space-y-[20px] justify-center h-[450px]'>
        <div className='bg-[#34856C] top-0  z-10 w-[250px] rounded-l-full absolute -right-[50px] h-[450px]'></div>
        <span className='text-[#34856C]'>Shankh</span>
        <span style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold text-[#34856C]'>Welcome Back !</span>
        <div className='grid space-y-1'>
            <span style={{fontFamily : "Inter"}} className='text-[14px]'>Email</span>
            <input id = "email" onChange={handleChange} value = {data.email} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] w-[300px]' placeholder='Enter your email address'></input>
        </div>
        <div className='grid space-y-1'>
            <span style={{fontFamily : "Inter"}} className='text-[14px]'>Password</span>
            <input id = "password" onChange={handleChange} value={data.password} className='border-[1px] focus:outline-none h-[46px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] w-[300px]' placeholder='Enter your password'></input>
        </div>
        <div className='flex space-x-10'>
            <div className='flex space-x-2'>
                <input onClick={() => setType("admin")} checked = {type == "admin"} type='radio' />
                <span>Admin</span>
            </div>
            <div className='flex space-x-2'>
                <input onClick={() => setType("user")} checked = {type == "user"} type='radio' />
                <span>User</span>
            </div>
        </div>
        
        <div className='inline-grid space-y-1'>
            <span style={{fontFamily : "Poppins"}} className='text-xs text-red-600'>{error}</span>
            <button className=' w-[300px] cursor-pointer text-center rounded-lg bg-[#FF6B5B] text-white font-semibold pr-[53px] text-[16px] pb-[10px] pl-[53px] pt-[10px]'>Login</button>
        </div>
        <span style={{fontFamily : "Inter"}} className='text-[14px]'>Not a member? <NavLink to={'/orgSignUp'} className='text-[#34856C]'>Register Now</NavLink></span>
      </motion.div>
    </form>
  )
}

export default OrgLogin