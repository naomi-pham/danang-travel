import React from 'react'
import {motion} from "framer-motion"


type Props = {}

const FadeUp = ({children}: any) => {
  return (
    <motion.div 
      initial={{
        y: 75,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{duration: 1}}
    >
        {children}
    </motion.div>
  )
}

export default FadeUp