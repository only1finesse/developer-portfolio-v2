import React from 'react'
import { avatar } from '../../assets'

const RightBanner = () => {
  return (
      <div className='w-1/2 flex justify-center items-start  pr-10'>
      <img className='lg:w-[600px] lg:h-[500px] w-[500px] z-40 lg:mt-10 mb-10 overflow-hidden rounded-full object-cover' src={avatar} alt="bit avatar" />
      </div>
  )
}

export default RightBanner