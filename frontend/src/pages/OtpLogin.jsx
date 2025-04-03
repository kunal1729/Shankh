import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { motion } from 'framer-motion';

const OtpLogin = () => {

    const [otp1, setOtp1] = useState({
        dig1 : "",
        dig2 : "",
        dig3 : "",
        dig4 : ""
    });

    const navigate = useNavigate();

    const location  = useLocation()
    console.log(location);


    const [error, setError] = useState("");

    const handleChange = (e) => {
        setOtp1((prev) => ({...prev, [e.target.id] : e.target.value}));
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const url = "http://localhost:3001/api/otpVerify"
            const {data : res} = await axios.post(url , {email : location.state.email, otp : otp1.dig1 + otp1.dig2 + otp1.dig3 + otp1.dig4});
            console.log(res);

            
            alert("Signed Up Successfully, please login now !")

            

            navigate("/login");
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
        toast.error(error, {
            position: "top-right",
            autoClose: 3000, // Closes after 3 sec
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    }

    const handleResend = async(e) => {

        e.preventDefault();
        // setOtp1({
        //     dig1 : "",
        //     dig2 : "",
        //     dig3 : "",
        //     dig4 : ""
        // });

        setError("");

        toast.success("Otp Sent again !", {
            position: "top-right"
          });

        console.log(data1.otp);

        try{
            const url = "http://localhost:3001/api/resendOtp"
            const {data1: res} = await axios.post(url, data1);
            console.log(res.message);
            toast.success(res.message, {
                position: "top-right",
                autoClose: 3000, // Closes after 3 sec
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
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
        toast.error(error, {
            position: "top-right"
        });
    }


  return (
    <form onSubmit={handleSubmit} className='bg-[#F8FAFA] flex flex-col z-0 items-center justify-center h-screen '>
        <motion.div initial = {{x : 1000}} animate = {{x : 0}} transition={{duration : 0.3, ease : "easeInOut" }}  className='w-[700px] rounded-xl relative pt-[30px] pr-[76px] pb-[30px] bg-white pl-[76px]  flex flex-col space-y-[20px] justify-center h-[450px]'>
        <div className='bg-[#34856C] top-0  z-10 w-[250px] rounded-l-full absolute -right-[50px] h-[450px]'></div>
        <span className='text-[#34856C]'>Shankh</span>
        <span style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold text-[#34856C]'>Enter an OTP</span>
        <div className='space-x-[26.8px]'>
            <input value={otp1.dig1} id='dig1' onChange={handleChange} className='h-[50px] w-[50px] text-lg rounded-lg items-center border-1 p-2' type="text" pattern="[0-9]" maxlength="1" inputmode="numeric" ></input>
            <input value={otp1.dig2} id='dig2' onChange={handleChange} className='h-[50px] w-[50px] text-lg rounded-lg items-center border-1 p-2' type="text" pattern="[0-9]" maxlength="1" inputmode="numeric" ></input>
            <input value={otp1.dig3} id='dig3' onChange={handleChange} className='h-[50px] w-[50px] text-lg rounded-lg items-center border-1 p-2' type="text" pattern="[0-9]" maxlength="1" inputmode="numeric" ></input>
            <input value={otp1.dig4} id='dig4' onChange={handleChange} className='h-[50px] w-[50px] text-lg rounded-lg items-center border-1 p-2' type="text" pattern="[0-9]" maxlength="1" inputmode="numeric" ></input>
        </div>
        <div className='inline-grid space-y-1'>
            <span style={{fontFamily : "Inter"}} className='text-xs text-red-600'>{error}</span>
            <button style={{fontFamily : "Poppins"}}  className=' w-[300px] cursor-pointer  rounded-lg bg-[#FF6B5B] text-white font-semibold pr-[53px] text-[16px] pb-[10px] pl-[53px] pt-[10px]'>Register </button>
        </div>
        <span style={{fontFamily : "Poppins"}} className='text-[14px]'>Didn't receive OTP? <button onClick={handleResend} className='text-[#34856C]'>Send Again</button></span>
        </motion.div>
        <ToastContainer />
    </form>
  )
}

export default OtpLogin
