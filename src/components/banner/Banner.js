import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'


const Banner = () => {

    return (
        <section id='home' className='w-full flex lgl:flex-row flex-col xl:gap-0  pt-10 pb-10 py-30 items-center border-b-[1px] border-b-black font-titleFont'>
            <LeftBanner />
            <RightBanner />
        </section >
    )
}

export default Banner