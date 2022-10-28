import React from 'react'
import { motion } from "framer-motion"

const ImageCard = ({coverPhoto, title} : any) => {
  return (
    <div 
      className='hidden lg:block relative border border-zinc-600 hover:scale-125 ease-in-out duration-1000'
    >
        <img
            src={coverPhoto.url}
            width={200}
        />
        <p className='overlay-text'>
            {title}
        </p>
    </div>

  )
}

export default ImageCard