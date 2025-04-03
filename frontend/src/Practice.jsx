import React from 'react'
import {motion} from 'framer-motion'

const Practice = () => {
  return (
    <div>
       <motion.div initial = {{x : 1000}} transition={{duration : 0.2, type : "spring", stiffness : 120 }} animate = {{x : 500}}   >
            <h1>Hello</h1>
       </motion.div>
    </div>
  )
}

export default Practice
