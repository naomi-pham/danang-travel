import React from 'react'

type Props = {}

const SlideDot = (props: Props) => {
  return (
    <div className ='w-4 h-4 rounded-full items-center flex justify-center 
                    bg-zinc-50/20
                    hover:bg-teal-500 duration-1000 hover:cursor-pointer ease-in-out'>

    </div>
  )
}

export default SlideDot