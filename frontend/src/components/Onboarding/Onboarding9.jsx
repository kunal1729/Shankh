import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appContext';

const Onboarding9 = () => {

  const {userDetails} = useAppContext();
  console.log(userDetails);

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/userDashboard")
  }

  return (
    <div>
      <button style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={handleNext} >Continue</button>
    </div>
  )
}

export default Onboarding9
