import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';

const OrgOverview = ({setStatus, setSelectedUser}) => {

  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");
  const {orgDetails} = useAppContext();

  const handleView = (item) => {
    setStatus("editUser")
    setSelectedUser(item)
  }
  

  useEffect(() => {

    const fetchUsers  = async() => {
    try {
        const data = await axios.get("http://localhost:3001/api/getUsers");
        console.log(data.data.data);
        setUserList(data.data.data);

    } catch (error) {
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
    fetchUsers();  
  }, [])
  

  return (
    <div className='bg-[#F8FAFA] overflow-y-scroll p-8 h-[89svh] space-y-8'>
      <h1 className='font-semibold text-[32px]'>User Overview</h1>
      <div className='p-[40px] space-y-[50px] bg-white rounded-lg'>
        <div className='flex items-center justify-between'>
            <h1 style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>User List</h1>
            <button style={{fontFamily : "Poppins"}} onClick={() => setStatus("addUser")} className='pt-[10px] pr-[53px] pb-[10px] pl-[53px] rounded-lg text-white bg-[#34856C]'>Add New User</button>
        </div>
        <table style={{fontFamily : "Inter"}} class="w-full text-[18px]">
            <thead>
                <tr className='pt-8 pr-8 pl-8 pb-4 text-gray-700 w-full bg-[#E7F0F0] '>
                    <th className='p-[10px] font-medium'>User Name</th>
                    <th className='p-[10px] font-medium'>Credits Left</th>
                    <th className='p-[10px] font-medium'>Organization</th>
                    <th className='p-[10px] font-medium'>Email</th>
                    <th className='p-[10px] font-medium'>Phone Number</th>
                    <th className='p-[10px] font-medium'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {userList ? userList.filter((item) => item.orgId == orgDetails.orgId).map((item) => {
                    return (
                        <tr className='pt-2 border-b-[1px] border-gray-300 text-center pr-8 pl-8 pb-2 w-full '>
                            <td className='p-[10px] '>{item.userName}</td>
                            <td className='p-[10px] '>{item.credits}</td>
                            <td className='p-[10px] '>{item.orgName}</td>
                            <td className='p-[10px] '>{item.email}</td>
                            <td className='p-[10px] '>{item.phoneNumber}</td>
                            <td className='p-[10px] '>
                                <button onClick={() => handleView(item)} className='p-[10px] text-white rounded-lg bg-[#34856C]'>View</button>
                            </td>
                        </tr>
                    )
                }) : null}
            </tbody>
        </table>
        <ul>
            
        </ul>
      </div>
    </div>
  )
}

export default OrgOverview
