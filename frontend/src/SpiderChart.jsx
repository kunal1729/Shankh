import React, { useEffect, useState } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
} from 'recharts';


const SpiderChart = ({testData}) => {

    const [data, setData] = useState([])


    useEffect(() => {
        if(testData)
        {
            setData(Object.entries(testData).map(([key, value]) => ({
                subject: key,
                value: value
                })));
        }

    }, [testData])
    

    console.log(testData)
  

  return (
    <div style={{ width: 564, height: 381 }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} gridType="polygon" />
          <PolarAngleAxis 
            dataKey="subject"
            tick={({ payload, x, y, textAnchor }) => (
              <text
                x={x}
                y={y}
                textAnchor={textAnchor}
                fill="black" // your custom color here (example: cyan)
                style={{ fontSize: 12}}
              >
                {payload.value}
              </text>
            )}
           />
          <PolarRadiusAxis
            angle={90}

            domain={[0, 100]}
            ticks={[0, 39, 69, 100]}  // <-- Important
            tick={({ payload, x, y, textAnchor }) => {
              let label = '';
              let fill = 'red'
              if (payload.value === 0) {
                label = 'Novice';
                fill = '#FF6B5B';
              } else if (payload.value === 39) {
                label = 'Emerging';
                fill = '#F9A826';
              } else if (payload.value === 69) {
                label = 'Proficient';
                fill = '#34856C';
              } 
          
              return (
                <text
                  x="264"
                  y={y}
                  textAnchor={textAnchor}
                  fill={fill}
                  style={{ fontSize: 12 }}
                  className='font-semibold '
                >
                  {label}
                </text>
              );
            }}
          />
          <Radar
            dataKey="value"
            stroke={testData.fluency ? "#F9A826" : "#FF6B5B"}
            fill={testData.fluency ? "#F9A826" : "#FF6B5B"}
            fillOpacity={0.3}
            dot = {true}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpiderChart;