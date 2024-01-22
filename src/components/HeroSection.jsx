import React from 'react'
import HeroLottie from '../assets/heroLottie.json'
import Lottie from "lottie-react";


function HeroSection() {
  return (
    <>
        <div className='bg-[#0766AD]  flex justify-around py-10 flex-wrap md:flex-nowrap '>
            <div className='w-full md:w-[40%]  flex align-middle justify-center  md:mt-20 p-11 md:p-4  '>
                <div>
                <p className='text-white text-2xl '>____________New Movie's</p>
                <p className='text-white text-4xl font-mono sm:text-5xl mt-5 sm:mt-9 font-bold '>From Classics to Current Hits.</p>
                <p className='text-white text-2xl mt-3'> Your Cinematic Adventure Begins Here.</p>
                </div>
            </div>
            <div className='max-w-[40rem] min-w-[20rem] md:min-w-[30rem] py-3 w-[65vw] md:w-[45%]  mb-10 md:mb-0  '>
                 <Lottie animationData={HeroLottie} loop={true}  />
            </div>
        </div>
    </>
  )
}

export default HeroSection