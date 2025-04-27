import React, { useEffect, useState } from 'react'
import  testData from '../../testData.json'
import Chart from './Chart';
import { useAppContext } from '../../context/appContext';
import SpiderChart from '../../SpiderChart';

const UserHome = ({language, startDate, endDate, setStatus, setSelectedTest}) => {

  const {userDetails} = useAppContext();
  const test = testData.tests.filter((item) => item.userId == userDetails._id)
  
  const [data, setData] = useState(test);

  const [behaviorAverages, setBehaviorAverages] = useState({});
  
  const [voiceAverages, setVoiceAverages] = useState({});

  useEffect(() => {
    console.log(data)
    if(language === "All")
    {
      setData(test.filter((item) => new Date(item.date).setHours(0, 0, 0, 0) >= new Date(startDate).setHours(0, 0, 0, 0) && new Date(item.date).setHours(0, 0, 0, 0) <= new Date(endDate).setHours(0, 0, 0, 0)));
      return;
    }
    setData(test.filter((item) => item.language === language && new Date(item.date) >= new Date(startDate) && new Date(item.date) <= new Date(endDate)))
    console.log(data);
    
  }, [language, startDate, endDate])

  useEffect(() => {
    const newBehaviorAverages = {
        emotionalRegulation: 0,
        confidenceAndPresence: 0,
        pacingAndPauses: 0,
        engagement: 0,
      };
      
      const newVoiceAverages = {
        fluency: 0,
        clarity: 0,
        toneModulation: 0,
        fillerWords: 0,
      };
    data.forEach(test => {
        // Sum behavior insights
        Object.keys(newBehaviorAverages).forEach(key => {
            newBehaviorAverages[key] += test.behaviorInsights[key];
        });
        
        // Sum voice insights
        Object.keys(newVoiceAverages).forEach(key => {
            newVoiceAverages[key] += test.voiceInsights[key];
        });
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
    setStatus("results");
  }

  return (
    <div className='bg-[#E7F0F0] h-[89svh] p-2 overflow-y-scroll'>
      <div className='bg-white shadow-md p-4 rounded-lg space-y-[20px]'>
        <h3 style={{fontFamily : "Poppins"}} className='text-[18px] font-semibold'>Here is summary of user scores</h3>
        <div style={{fontFamily : "Poppins"}} className='grid gap-4 p-2 grid-cols-4'>
          <div  className='w-[254px] drop-shadow-lg  border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] pt-[22px] h-[119px]'>
            <div  className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Total Attempts</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{data.length}</span>
          </div>
          <div className='w-[254px] border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] drop-shadow-lg pt-[22px] h-[119px]'>
            <div className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Average Total Score</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{Math.ceil(vocalAverage + behaviourAverage)/2}%</span>
          </div>
          <div className='w-[254px] border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] drop-shadow-lg pt-[22px] h-[119px]'>
            <div className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Vocal Insights Average</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{Math.ceil(vocalAverage)}%</span>
          </div>
          <div className='w-[284px] border-l-4 border-[#34856C] rounded-xl bg-white pl-[19px] pr-[32px] drop-shadow-lg pt-[22px] h-[119px]'>
            <div className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Behaviour Insights Average</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{Math.ceil(behaviourAverage)}%</span>
          </div>
        </div>
        <Chart testData = {data} />
        <div  className='bg-white space-y-2 brightness-100 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
            <h1 style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>Performance across Key Parameters</h1>
            <div style={{fontFamily : "Inter"}} className='flex gap-4 text-[18px]'>
                <div className='drop-shadow-lg rounded-lg p-[20px] w-1/2'>
                    <h3 className='font-semibold'>Voice Insights :<span className='font-medium'> The Mechanics of Impactful Speech</span></h3>
                    <SpiderChart testData = {voiceAverages} />
                </div>
                <div className='drop-shadow-lg rounded-lg p-[20px] w-1/2'>
                    <h3 className='font-semibold'>Behavior Insights :<span className='font-medium'> The Psychology of your voice</span></h3>
                    <SpiderChart testData = {behaviorAverages} />
                </div>
            </div>
        </div>
        <div style={{fontFamily : "Poppins"}} className='bg-white brightness-100 space-y-8 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
            <h1 className='text-[24px] font-semibold'>Detailed Voice Insights</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Fluency</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${voiceAverages.fluency <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages.fluency <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages.fluency <= 39
                            ? "Novice"
                            : voiceAverages.fluency <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages.fluency}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages.fluency}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages.fluency <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages.fluency <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Clarity</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${voiceAverages.clarity <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages.clarity <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages.clarity <= 39
                            ? "Novice"
                            : voiceAverages.clarity <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages.clarity}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages.clarity}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages.clarity <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages.clarity <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Tone Modulation</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${voiceAverages.toneModulation <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages.toneModulation <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages.toneModulation <= 39
                            ? "Novice"
                            : voiceAverages.toneModulation <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages.toneModulation}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages.toneModulation}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages.toneModulation <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages.toneModulation <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Filler Words</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${voiceAverages.fillerWords <= 39
                            ? "text-[#FF6B5B]"
                            : voiceAverages.fillerWords <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{voiceAverages.fillerWords <= 39
                            ? "Novice"
                            : voiceAverages.fillerWords <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{voiceAverages.fillerWords}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${voiceAverages.fillerWords}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${voiceAverages.fillerWords <= 39
                                ? "bg-[#FF6B5B]"
                                : voiceAverages.fillerWords <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{fontFamily : "Poppins"}} className='bg-white brightness-100 space-y-8 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
            <h1 className='text-[24px] font-semibold'>Detailed Behavior Insights</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Emotional Regulation</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${behaviorAverages.emotionalRegulation <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages.emotionalRegulation <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages.emotionalRegulation <= 39
                            ? "Novice"
                            : behaviorAverages.emotionalRegulation <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages.emotionalRegulation}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages.emotionalRegulation}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages.emotionalRegulation <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages.emotionalRegulation <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Confidence & Presence</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${behaviorAverages.confidenceAndPresence <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages.confidenceAndPresence <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages.confidenceAndPresence <= 39
                            ? "Novice"
                            : behaviorAverages.confidenceAndPresence <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages.confidenceAndPresence}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages.confidenceAndPresence}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages.confidenceAndPresence <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages.confidenceAndPresence <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Pacing And Pauses</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${behaviorAverages.pacingAndPauses <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages.pacingAndPauses <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages.pacingAndPauses <= 39
                            ? "Novice"
                            : behaviorAverages.pacingAndPauses <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages.pacingAndPauses}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages.pacingAndPauses}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages.pacingAndPauses <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages.pacingAndPauses <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white drop-shadow-lg rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                    <div className='flex justify-between'>
                        <div className='flex justify-between'>
                            <span className='font-semibold text-[#5F6C7B] text-[16px]'>Engagement</span>
                            <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                        </div>
                        <span className={`text-[16px] font-semibold ${behaviorAverages.engagement <= 39
                            ? "text-[#FF6B5B]"
                            : behaviorAverages.engagement <= 69
                            ? "text-[#F9A826]"
                            : "text-[#34856C]"}`}
                        >{behaviorAverages.engagement <= 39
                            ? "Novice"
                            : behaviorAverages.engagement <= 69
                            ? "Emerging"
                            : "Proficient"}</span>
                    </div>
                    <div>
                        <span className="text-[24px] font-semibold">{behaviorAverages.engagement}%</span>
                        <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                            <div
                            style={{ width: `${behaviorAverages.engagement}%` }}
                            className={`h-[10px] rounded-l-full rounded-r-full ${behaviorAverages.engagement <= 39
                                ? "bg-[#FF6B5B]"
                                : behaviorAverages.engagement <= 69
                                ? "bg-[#F9A826]"
                                : "bg-[#34856C]"}`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white brightness-100 space-y-8 rounded-lg drop-shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
            <div className='flex'>
                <h1 style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>Recent Tests</h1>
                <button className='text-red-500'>View All</button>
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
                        if(index < data.length - 5)
                        {
                            return;
                        }
                        return (
                            <tr className='pt-2 border-b-[1px] border-gray-300 text-center pr-8 pl-8 pb-2 w-full '>
                                <td className='p-[10px] '>{item.testId}</td>
                                <td className='p-[10px] '>{item.language}</td>
                                <td className='p-[10px] '>{item.date}</td>
                                <td className='p-[10px] '>{item.overallScore}</td>
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

export default UserHome