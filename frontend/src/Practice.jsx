import React from 'react'
import {motion} from 'framer-motion'




const Practice = () => {

  const data = [
    { day: "Sunday", score: 87 },
    { day: "Monday", score: 92 },
    { day: "Tuesday", score: 78 },
    { day: "Wednesday", score: 85 },
    { day: "Thursday", score: 90 },
    { day: "Friday", score: 73 },
    { day: "Saturday", score: 95 }
  ];

  return (
    <div>
       <motion.div initial = {{x : 1000}} transition={{duration : 0.2, type : "spring", stiffness : 120 }} animate = {{x : 500}}   >
            <h1>Hello</h1>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="day" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
       </motion.div>
    </div>
  )
}

export default Practice
