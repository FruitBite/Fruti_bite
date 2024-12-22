import React from 'react'

const HSBox = ({icons,title,paragraph}) => {
  return (
    <div className='text-center backdrop-blur-lg bg-white/20 rounded-3xl p-6 border border-white/20 flex items-center justify-center flex-col gap-3'>
      <div className=" bg-SECONDARY w-fit rounded-full p-2 text-white ">{icons}</div>
      <h1 className='text-3xl font-bold text-white'>{title}</h1>
      <p className='text-black/80'>{paragraph}</p>
    </div>
  )
}

export default HSBox
