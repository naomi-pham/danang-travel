import React from 'react'
import {motion} from "framer-motion"


type Props = {}

const RightToLeft = ({children}: any) => {
  return (
    <motion.div 
        initial={{
            x: 100,
            opacity: 0,
        }}
        animate={{
            x:0,
            opacity: 1,
        }}
        transition={{duration: 1}}
    >
        {children}
    </motion.div>
  )
}

export default RightToLeft