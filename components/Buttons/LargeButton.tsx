import React from 'react'

type Props = {}

const LargeButton = ({children}: any) => {
  return (
    <button className="w-44 h-44 outline-1 outline-zinc-600 outline-dashed hover:bg-zinc-50/10 rounded-full flex items-center justify-center duration-1000">
        <div className="w-28 h-28 bg-zinc-50/10 rounded-full flex items-center justify-center">
            {children}
        </div>
    </button>
  )
}

export default LargeButton