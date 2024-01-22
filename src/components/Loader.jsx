import React from 'react'
import loaderLottie from '../assets/loader.json'
import Lottie from "lottie-react";

function Loader() {
  return (
    <>
        <div className='flex justify-center items-center h-screen'>
        <Lottie animationData={loaderLottie} loop={true} className='w-[65vw] lmobile:w-[60vw] md:w-[50vw]'  />
        </div>
    </>
  )
}

export default Loader