import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { ReactMic } from 'react-mic';

const Onboarding8 = () => {
    const { setPage } = useAppContext(); 
    
    const [isRecording, setIsRecording] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [audioUrl, setAudioUrl] = useState(null);
    
    useEffect(() => {
        let timer;
        if (isRecording && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        setIsRecording(false);
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRecording]);

    const handleAudioSave = (recordedBlob) => {
        console.log('Audio recorded:', recordedBlob);
        const url = URL.createObjectURL(recordedBlob.blob);
        setAudioUrl(url);
        const timestamp = recordedBlob.startTime; // example timestamp
        const date = new Date(timestamp);const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          
          console.log(formattedDate);  
        setSeconds(60);
        setIsRecording(false);
    };

    const handleReset = () => {
        setAudioUrl(null);
        setIsRecording(false);
        setSeconds(60);
    };
  
    return (
      <div className='flex flex-col space-y-[97px] justify-center items-center text-center'>
        <div className='w-[774px] rounded-2xl shadow-md space-y-[42px] pb-[29px] pr-[24px] pt-[29px] pl-[24px] flex flex-col bg-white h-[360px]'>
          <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] w-[738px] leading-10 text-[48px] font-semibold'>Speak on any topic for <span className='text-[#FF6B5B]'>30</span> sec </h1>
          <p style={{fontFamily : "Inter"}} className='text-[18px] text-[#5F6C7B]'>Suggestion: What was the most memorable incident that happened in this month?</p>
          <div style={{fontFamily : "Inter"}} className='flex text-[18px] justify-between h-[85px] border-[1px] rounded-lg border-[#D9E0E6] pl-[40px] pr-[40px] pt-[20px] pb-[20px]  items-center'>
            <span>{`0 :  ${seconds}`}</span>
            <ReactMic
                record = {isRecording}
                onStop={handleAudioSave}   
                className='hidden'
            />
            <button 
                onClick={() => setIsRecording((prev) => !prev)} 
                disabled={seconds === 0}
                className='bg-green-500 text-white px-4 py-2 rounded-lg'>
                {isRecording ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
          <span className=' italic text-[#5F6C7B] text-[14px]'>press the record button and start speaking</span>
        </div>
        <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[199px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={() => setPage((prev) => prev + 1)} to={'/onboarding/step9'} >Continue</NavLink>
      </div>
    )
}

export default Onboarding8
