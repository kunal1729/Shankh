import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext';

const Notifications = ({setSelectedUser, setStatus}) => {

  const [data, setData] = useState([]);
  const {orgDetails} = useAppContext();

  console.log("Hi")

  useEffect(() => {
    const fetchNotifications = async() => {
      try{
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/getNotifications`)
        setData(res.data.data.filter((item) => item.orgId == orgDetails.orgId && item.status == false));
      }
      catch(error)
      {
        console.log("Error fetching notifications", error)
      }
    }
    fetchNotifications();
  }, [])

  const handleView = (item) => {
    setStatus("editUser")
    setSelectedUser(item)
  }
  

  return (
    <div className='flex flex-col w-[50%] gap-8'>
      {data ? data.map((item) => {
        return (
          <div className='flex p-8 rounded-2xl bg-[#BCEBD7] flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <span className='text-[20px]'>Credit Request</span>
              <span className='text-gray-500'>{item.date}</span>
            </div>
            <p className=' italic'><span className='font-bold'>{item.userName}</span> has requested additional credits.</p>
            <button onClick={() => handleView(item)} type='submit' className='pt-[10px] cursor-pointer pr-[53px] pb-[10px] pl-[53px] w-[200px] rounded-lg text-white bg-[#34856C]'>View User</button>
          </div>
        )
      }) : null}
    </div>
  )
}

export default Notifications
