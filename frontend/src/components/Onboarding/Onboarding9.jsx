import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { ReactMic } from 'react-mic';
import Loader from '../User/Loader';
import axios from 'axios';
import Onboarding1 from './Onboarding1';
import Results from '../User/Results';

const Onboarding9 = () => {

const {userDetails, setSelectedTest, setTranscript, setUserDetails} = useAppContext();

const [resultOut, setResultOut] = useState(false);

const [isRecording, setIsRecording] = useState(false);
const [seconds, setSeconds] = useState(60);
const [audioFile, setAudioFile] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [recordedChunks, setRecordedChunks] = useState([]);



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

const handleAudioSave = async(recordedBlob) => {
  console.log('Recorded segment:', recordedBlob);
  setRecordedChunks((prevChunks) => [...prevChunks, recordedBlob.blob]);
  const mimeType = recordedBlob.blob.type;
  const fileExtension = mimeType.includes('mp3') ? 'mp3' :
  mimeType.includes('wav') ? 'wav' :
  'webm';
  
  const timestamp = recordedBlob.startTime; 
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const audioFile = new File([recordedBlob.blob], 'recording.wav', {
    type: 'audio/wav', 
  });

  console.log('Audio File:', audioFile);
  setAudioFile(audioFile);
  
  console.log(formattedDate);
};

  const handleReset = () => {
    setRecordedChunks([]);
    setIsRecording(false);
    setSeconds(60);
    setTranscript("");
  };

  const handleSubmit = async() => {

    if (recordedChunks.length === 0 )
    {
      alert("No voice recorded!")
      return;
    }

    if(userDetails.credits < 10)
    {
      alert("Credits not enough !")
      return;
    }

    setIsLoading(true);

    const combinedBlob = new Blob(recordedChunks, { type: 'audio/wav' });
    const audioFile = new File([combinedBlob], 'combined_recording.wav', {
      type: 'audio/wav',
    });
    
    try {
      const formData = new FormData();
      formData.append("file", audioFile); 
      formData.append("language", "en"); 

      const response = await axios.post("https://api.shankh.ai/analyze_all/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data)

      const test = {
        "userId" : userDetails._id,
        "orgId" : userDetails.orgId,
        "date" : new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        "language" : response.data["detected_language"] || response.data["Detected Language"],
        "voiceInsights" : {
          "fluency" : response.data.fluency.fluency_score,
          "toneModulation" : response.data.tone.speech_dynamism_score,
          "clarity" : response.data.vcs["Voice Clarity Sore"],
          "fillerWords" : response.data.filler_words.filler_score
        },
        "behaviorInsights": {
          "emotionalRegulation": response.data.vers["VERS Score"],
          "confidenceAndPresence": response.data.voice_confidence["voice_confidence_score"],
          "pacingAndPauses": response.data.vps["VPS"],
          "engagement": response.data.ves["ves"]
        },
        "fillerWordsUsed" : response.data.filler_words.total_fillers,
        // Add detailed filler words data
        "fillerWordsDetails": {
          "counts": response.data.filler_words.filler_counts,
          "totalFillers": response.data.filler_words.total_fillers,
          "fillerScore": response.data.filler_words.filler_score,
          "fillerRatePerMin": response.data.filler_words.filler_rate_per_min
        },
        "transcript" : response.data.transcript,
        "overallScore" : response.data.sank_score
      }

      console.log(test)

      const [res, res2] = await Promise.all([
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/addTest`, test),
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/editCredits`, {
          _id: userDetails._id,
          credits: userDetails.credits - 10
        })
      ]);

      

      setSelectedTest(res.data.data);
      console.log(response)
      setResultOut(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Transcription error:", error.response?.data?.detail || error.message);
      setIsLoading(false);
    }

  }

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/getUser`, userDetails);
          console.log(res);
          setUserDetails(res.data.data);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
    
      fetchData();
    }, []);

  console.log(audioFile)

  return ( 
  <div className=' flex flex-col items-center  p-8 h-[75svh] w-full space-y-4'>
    {!resultOut && isLoading == false ? 
    <div className='flex w-[1007px] items-start text-start flex-col space-y-[45px] justify-center '> 
      <div className='rounded-2xl w-[1007px]  text-center shadow-md space-y-[42px] pb-[29px] pr-[24px] pt-[29px] pl-[24px] flex flex-col bg-white'>
        <h1 style={{fontFamily : "Poppins"}} className='text-[#34856C] leading-10 text-[32px] font-semibold'>Speak on any topic for <span className='text-[#FF6B5B]'>30</span> sec </h1>
        <p style={{fontFamily : "Inter"}} className='text-[18px] text-[#5F6C7B]'>Suggestion: What was the most memorable incident that happened in this month?</p>
        <div style={{fontFamily : "Inter"}} className='flex text-[18px] justify-between h-[155px] border-[1px] rounded-lg border-[#D9E0E6] pl-[40px] pr-[40px] pt-[20px] pb-[20px]  items-center'> 
          <span>{`0 :  ${seconds}`}</span> 
          <div >
            <ReactMic
                record = {isRecording}
                onStop={handleAudioSave} 
            />
            <button
            onClick={() => setIsRecording((prev) => !prev)}
            disabled={seconds === 0}
            className='bg-green-500 text-white px-4 py-2 rounded-lg'>
            {isRecording ? 'Stop' : 'Start'} </button>
          </div>
          <button 
            onClick={handleReset}
            className='bg-red-500 text-white px-4 py-2 rounded-lg'>
            Reset
          </button> 
          </div> 
      </div> 
      <div className='text-center w-full items-center'>
        <button style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[20px] font-semibold w-[287px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={handleSubmit} >Take Assessment</button> 
      </div>
    </div> : !resultOut && isLoading ? (<Loader isLoading={isLoading}  /> ) : 
    <div className='flex flex-col gap-4 items-center'>
      <Results/>
      <NavLink style={{fontFamily : "Poppins"}} className="bg-[#FF6B5B] text-white text-[18px] w-[149px] pt-[10px] pl-[53px] pb-[10px] rounded-lg pr-[53px]" onClick={() => setPage((prev) => prev + 1)} to={'/userDashboard'} >Finish</NavLink>
    </div>} 
  </div>
)
}

export default Onboarding9