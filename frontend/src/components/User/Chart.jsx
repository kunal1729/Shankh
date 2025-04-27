import React from 'react'
import { LineChart } from '@mui/x-charts';

const Chart = ({testData}) => {

    const dates = testData.map((item) => item.date)

    const voiceInsights = testData.map((item) => Math.ceil((item.voiceInsights.fluency + item.voiceInsights.fillerWords + item.voiceInsights.clarity + item.voiceInsights.toneModulation)/4))

    const behaviorInsights = testData.map((item) => Math.ceil((item.behaviorInsights.emotionalRegulation + item.behaviorInsights.engagement + item.behaviorInsights.confidenceAndPresence + item.behaviorInsights.pacingAndPauses )/4))

    const totalScore = testData.map((item) => item.overallScore);

  return (
    <div className='p-2 text-center flex rounded-xl bg-white drop-shadow-lg'>
        <LineChart
            xAxis={[{ data: dates, scaleType: 'point'}]}
            yAxis={[
            {
                min: 0,
                max: 100,
                tickMinStep: 25,
                tickValues: [0, 25, 50, 75, 100], // explicitly set Y-axis ticks
            },
            ]}
            grid={{ vertical: true, horizontal: true }}
            series={[
            {
                data: totalScore,
                label : "Total Score",
                position: 'bottom'
            },
            {
                data: voiceInsights,
                label : "Voice Insights"
            },
            
            {
                data: behaviorInsights,
                label : "Behaviour Insights"
            },
            ]}
            width={1044}
            height={504}
        />
    </div>
  )
}

export default Chart
