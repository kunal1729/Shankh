import React, { useEffect, useState } from 'react'
import  testData from '../../testData.json'
import Chart from './Chart';

const OrgHome = ({language, startDate, endDate}) => {

  const [data, setData] = useState([]);

  console.log(new Date(startDate) <= new Date(endDate));

  useEffect(() => {
    if(language === "All")
    {
      setData(testData.tests.filter((item) => new Date(item.date).setHours(0, 0, 0, 0) >= new Date(startDate).setHours(0, 0, 0, 0) && new Date(item.date).setHours(0, 0, 0, 0) <= new Date(endDate).setHours(0, 0, 0, 0)));
      return;
    }
    setData(testData.tests.filter((item) => item.language === language && new Date(item.date) >= new Date(startDate) && new Date(item.date) <= new Date(endDate)))
   
  }, [language, startDate, endDate])
  

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
  

  return (
    <div className='bg-[#E7F0F0] h-[89svh] p-2 overflow-y-scroll'>
      <div className='bg-white shadow-md p-4 rounded-lg space-y-[20px]'>
        <h3 className='text-[18px]'>Here is summary of user scores</h3>
        <div className='grid gap-auto p-2 grid-cols-4'>
          <div className='w-[254px] border-l-4 border-[#34856C] rounded-xl bg-white shadow-2xl pl-[19px] pr-[32px] pt-[22px] h-[99px]'>
            <div className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Total Attempts</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{data.length}</span>
          </div>
          <div className='w-[254px] border-l-4 border-[#34856C] rounded-xl bg-white shadow-2xl pl-[19px] pr-[32px] pt-[22px] h-[99px]'>
            <div className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Average Total Score</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{Math.ceil(vocalAverage + behaviourAverage)/2}%</span>
          </div>
          <div className='w-[254px] border-l-4 border-[#34856C] rounded-xl bg-white shadow-2xl pl-[19px] pr-[32px] pt-[22px] h-[99px]'>
            <div className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Vocal Insights Average</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{Math.ceil(vocalAverage)}%</span>
          </div>
          <div className='w-[284px] border-l-4 border-[#34856C] rounded-xl bg-white shadow-2xl pl-[19px] pr-[32px] pt-[22px] h-[99px]'>
            <div className='flex'>
              <span className='font-semibold text-[#5F6C7B] text-[16px]'>Behaviour Insights Average</span>
              <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
            </div>
            <span className='text-[24px] font-semibold'>{Math.ceil(behaviourAverage)}%</span>
          </div>
        </div>
        <Chart testData = {data} />
      </div>
    </div>
  )
}

export default OrgHome
