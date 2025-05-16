import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext';

const Notifications = () => {

  const [data, setData] = useState([]);
  const {userDetails} = useAppContext();

  console.log("Hi")

  useEffect(() => {
    const fetchNotifications = async() => {
      try{
        const res = await axios.get("http://localhost:3001/api/getNotifications")
        setData(res.data.data.filter((item) => item.userId == userDetails._id && item.status == true));
      }
      catch(error)
      {
        console.log("Error fetching notifications", error)
      }
    }
    fetchNotifications();
  }, [])


  return (
    <div className='flex flex-col w-[50%] gap-8'>
      {data ? data.map((item) => {
        return (
          <div className='flex p-8 rounded-2xl bg-[#BCEBD7] flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <span className='text-[20px]'>Credit Granted</span>
            </div>
            <p className=' italic'>You have received <span className='font-bold'>100</span> credits.</p>
          </div>
        )
      }) : null}
    </div>
  )
}

export default Notifications
