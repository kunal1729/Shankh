import React, { useEffect, useState } from 'react'
import  testData from '../../testData.json'
import Chart from './Chart';
import { useAppContext } from '../../context/appContext';
import SpiderChart from '../../SpiderChart';
import axios from 'axios';
import { Tooltip } from '@mui/material';

const OrgHome = ({language, startDate, endDate, setStatus}) => {

  const {userDetails, setSelectedTest} = useAppContext();

  const [viewAll, setViewAll] = useState(false);
  
  const [data, setData] = useState([]);

  const [temp, setTemp] = useState([]);

  const [behaviorAverages, setBehaviorAverages] = useState({});
  
  const [voiceAverages, setVoiceAverages] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/getAllTests`, userDetails);
        console.log(res.data.data);

        setTemp(res.data.data);
        setData(res.data.data)
        
        } catch (error) {
        console.error("Error fetching test data :", error);
        }
    };
    
    fetchData();
    

    
  }, [])

  useEffect(() => {
      if(language == "All") {
          setData(temp.filter((item) => 
              new Date(item.date).setHours(0, 0, 0, 0) >= new Date(startDate).setHours(0, 0, 0, 0) &&
              new Date(item.date).setHours(0, 0, 0, 0) <= new Date(endDate).setHours(0, 0, 0, 0)
              )
          );
          return;
      }
  
  
  
      setData(temp.filter((item) => 
              item.language === language &&
              new Date(item.date) >= new Date(startDate) &&
              new Date(item.date) <= new Date(endDate)
          )
      );
  
      console.log("data", data);
    }, [language, startDate, endDate])

  useEffect(() => {
   
    const newBehaviorAverages = {
        "Emotional Regulation": 0,
        "Confidence and Presence": 0,
        "Pacing and Pauses": 0,
        "Engagement": 0,
      };
      
      const newVoiceAverages = {
        "Fluency": 0,
        "Clarity": 0,
        "Tone Modulation": 0,
        "Filler Words": 0,
      };
    data.forEach(test => {
        newVoiceAverages["Fluency"] += test.voiceInsights.fluency;
        newVoiceAverages["Clarity"] += test.voiceInsights.clarity;
        newVoiceAverages["Tone Modulation"] += test.voiceInsights.toneModulation;
        newVoiceAverages["Filler Words"] += test.voiceInsights.fillerWords;
        newBehaviorAverages["Emotional Regulation"] += test.behaviorInsights.emotionalRegulation;
        newBehaviorAverages["Confidence and Presence"] += test.behaviorInsights.confidenceAndPresence;
        newBehaviorAverages["Pacing and Pauses"] += test.behaviorInsights.pacingAndPauses;
        newBehaviorAverages["Engagement"] += test.behaviorInsights.engagement;
        
    });
    Object.keys(newVoiceAverages).forEach(key => {
        newVoiceAverages[key] = Math.floor(newVoiceAverages[key]/data.length);
    });
    Object.keys(newBehaviorAverages).forEach(key => {
        newBehaviorAverages[key] = Math.floor(newBehaviorAverages[key]/data.length);
    });

    setBehaviorAverages(newBehaviorAverages);
    setVoiceAverages(newVoiceAverages);
  }, [data])
  
  

  const behaviourAverage = data.reduce((sum, test) => {
    const insights = test.behaviorInsights;
    const avg = (insights.emotionalRegulation + insights.confidenceAndPresence + insights.pacingAndPauses + insights.engagement) / 4;
    return sum + avg;
  }, 0) / data.length || 0;

  const vocalAverage = data.reduce((sum, test) => {
    const insights = test.voiceInsights;
    const avg = (insights.fluency + insights.toneModulation + insights.fillerWords + insights.clarity) / 4;
    return sum + avg;
  }, 0) / data.length || 0;

  const handleView = (item) => {
    setSelectedTest(item);
    console.log("h1")
    setStatus("results");
  }

  return (
    <div className='bg-[#E7F0F0] h-[89svh] p-2 w-[calc(100vw-200px)] overflow-y-scroll'>
      <div className='bg-white shadow-md p-4 rounded-lg space-y-[20px]'>
        <h3 style={{fontFamily : "Poppins"}} className='text-[18px] font-semibold'>Here is summary of user scores</h3>
        <div style={{fontFamily : "Poppins"}} className='grid gap-4 p-2 grid-cols-4'>
          <div  className='w-[254px] drop-shadow-lg  border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] pt-[22px] h-[119px]'>
            <Tooltip title="Total number of attempts by the user within the selected time period." >
                <div className='flex'>
                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Total Attempts</span>
                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                </div>
            </Tooltip>
            <span className='text-[24px] font-semibold'>{data.length}</span>
          </div>
          <div className='w-[254px] border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] drop-shadow-lg pt-[22px] h-[119px]'>
            <Tooltip title = "Average of all the scores of the user within the selected time period.">
                <div className='flex'>
                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Average Total Score</span>
                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                </div>
            </Tooltip>
            <span className='text-[24px] font-semibold'>{Math.ceil(vocalAverage + behaviourAverage)/2}%</span>
          </div>
          <div className='w-[254px] border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] drop-shadow-lg pt-[22px] h-[119px]'>
            <Tooltip title = "Shows the mean performance score across all vocal analysis parameters including tone, pace, clarity, and speech patterns">
                <div className='flex'>
                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Vocal Insights Average</span>
                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                </div>
            </Tooltip>
            <span className='text-[24px] font-semibold'>{Math.ceil(vocalAverage)}%</span>
          </div>
          <div className='w-[284px] border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] drop-shadow-lg pt-[22px] h-[119px]'>
            <Tooltip title = "Displays the average rating for behavioral assessment criteria such as confidence, engagement, body language, and presentation skills">
                <div className='flex'>
                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Behaviour Insights Average</span>
                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                </div>
            </Tooltip>
            <span className='text-[24px] font-semibold'>{Math.ceil(behaviourAverage)}%</span>
          </div>
        </div>
        <Chart testData = {data} />
        <div  className='bg-white space-y-2 brightness-100 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
            <h1 style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>Performance across Key Parameters</h1>
            <div style={{fontFamily : "Inter"}} className='grid grid-cols-2 gap-8 text-[18px]'>
                <div className='shadow-lg rounded-lg p-[20px] w-full'>
                    <h3 className='font-semibold'>Voice Insights :<span className='font-medium'> The Mechanics of Impactful Speech</span></h3>
                    <SpiderChart testData = {voiceAverages} />
                </div>
                <div className='shadow-lg rounded-lg p-[20px] w-full'>
                    <h3 className='font-semibold'>Behavior Insights :<span className='font-medium'> The Psychology of your voice</span></h3>
                    <SpiderChart testData = {behaviorAverages} />
                </div>
            </div>
        </div>
        <div style={{fontFamily : "Poppins"}} className='bg-white brightness-100 space-y-8 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
            <h1 className='text-[20px] font-semibold'>Detailed Voice Insights</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "The smoothness and ease of speech, without hesitations or repetitions.">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Fluency</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${voiceAverages["Fluency"] <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages["Fluency"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages["Fluency"] <= 39
                            ? "Emerging"
                            : voiceAverages["Fluency"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages["Fluency"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages["Fluency"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages["Fluency"] <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages["Fluency"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "Evaluates articulation, pronunciation, and overall intelligibility of spoken words and phrases">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Clarity</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${voiceAverages["Clarity"] <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages["Clarity"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages["Clarity"] <= 39
                            ? "Emerging"
                            : voiceAverages["Clarity"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages["Clarity"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages["Clarity"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages["Clarity"] <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages["Clarity"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "The ability to vary pitch, volume, and rate to effectively communicate emotions and ideas">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Tone Modulation</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${voiceAverages["Tone Modulation"] <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages["Tone Modulation"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages["Tone Modulation"] <= 39
                            ? "Emerging"
                            : voiceAverages["Tone Modulation"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages["Tone Modulation"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages["Tone Modulation"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages["Tone Modulation"] <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages["Tone Modulation"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "The use of filler words, such as 'um' or 'uh', which can indicate a lack of confidence or preparation.">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Filler Words</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${voiceAverages["Filler Words"] <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages["Filler Words"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages["Filler Words"] <= 39
                            ? "Emerging"
                            : voiceAverages["Filler Words"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages["Filler Words"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages["Filler Words"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages["Filler Words"] <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages["Filler Words"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{fontFamily : "Poppins"}} className='bg-white brightness-100 space-y-8 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
            <h1 className='text-[20px] font-semibold'>Detailed Behavior Insights</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "The ability to effectively manage and express emotions in a professional setting.">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Emotional Regulation</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${behaviorAverages["Emotional Regulation"] <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages["Emotional Regulation"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages["Emotional Regulation"] <= 39
                            ? "Emerging"
                            : behaviorAverages["Emotional Regulation"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages["Emotional Regulation"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages["Emotional Regulation"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages["Emotional Regulation"] <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages["Emotional Regulation"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "Evaluates vocal authority, self-assurance, and commanding presence conveyed through speech patterns">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Confidence & Presence</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${behaviorAverages["Confidence and Presence"] <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages["Confidence and Presence"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages["Confidence and Presence"] <= 39
                            ? "Emerging"
                            : behaviorAverages["Confidence and Presence"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages["Confidence and Presence"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages["Confidence and Presence"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages["Confidence and Presence"] <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages["Confidence and Presence"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "Analyzes speech rhythm, strategic use of silence, and appropriate timing for emphasis and comprehension">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Pacing And Pauses</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${behaviorAverages["Pacing and Pauses"] <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages["Pacing and Pauses"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages["Pacing and Pauses"] <= 39
                            ? "Emerging"
                            : behaviorAverages["Pacing and Pauses"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages["Pacing and Pauses"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages["Pacing and Pauses"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages["Pacing and Pauses"] <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages["Pacing and Pauses"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <Tooltip title = "Assesses ability to capture and maintain audience attention through dynamic and interactive vocal delivery">
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Engagement</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                        </Tooltip>
                        <span className={`text-[16px] font-semibold ${behaviorAverages["Engagement"] <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages["Engagement"] <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages["Engagement"] <= 39
                            ? "Emerging"
                            : behaviorAverages["Engagement"] <= 69
                            ? "Proficient"
                            : "Masterful"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages["Engagement"]}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages["Engagement"]}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages["Engagement"] <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages["Engagement"] <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white brightness-100 space-y-8 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
              <div className='flex = justify-between'>
                <h1 style={{fontFamily : "Poppins"}} className='text-[20px] font-semibold'>Recent Tests</h1>
                <button onClick={() => setViewAll((prev) => !prev)} className='border w-[199px] hover:bg-[#34856C] cursor-pointer hover:text-white rounded-lg font-semibold pt-[10px] text-[16px] pb-[10px] pl-[53px] pr-[53px] text-[#34856C] border-[#34856C]'>{viewAll ? "View Less" : "View All"}</button>
              </div>
            <table style={{fontFamily : "Inter"}} class="w-full text-[18px]">
                <thead>
                    <tr className='pt-8 pr-8 pl-8 pb-4 text-gray-700 w-full bg-[#E7F0F0] '>
                        <th className='p-[10px] font-medium'>Test ID</th>
                        <th className='p-[10px] font-medium'>Language</th>
                        <th className='p-[10px] font-medium'>Date</th>
                        <th className='p-[10px] font-medium'>Overall Score</th>
                        <th className='p-[10px] font-medium'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((item, index) => {
                        if(index < data.length - 5 && !viewAll)
                        {
                            return;
                        }
                        return (
                            <tr className='pt-2 border-b-[1px] border-gray-300 text-center pr-8 pl-8 pb-2 w-full '>
                                <td className='p-[10px] '>{item._id}</td>
                                <td className='p-[10px] '>{item.language}</td>
                                <td className='p-[10px] '>{item.date}</td>
                                <td className='p-[10px] '>{Math.floor(item.overallScore)}</td>
                                <td className='p-[10px] '>
                                    <button onClick={() => handleView(item)} className='p-[10px] cursor-pointer text-white rounded-lg bg-[#34856C]'>View</button>
                                </td>
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default OrgHome