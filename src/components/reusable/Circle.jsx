import React from 'react'

const Circle = ({icon}) => {
  return (
    <div className='rounded-full md:w-[59px] w-[52px]  xl:w-[69px] md:h-[59px] h-[52px] xl:h-[69px] 2xl:w-[89px] 2xl:h-[89px] bg-white shadow-lg flex justify-center items-center'>
        <img src={icon} className=' object-cover w-[43%] h-[43%]' alt="" />
    </div>
  )
}

export default Circle