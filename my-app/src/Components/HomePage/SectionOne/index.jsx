import React, { useEffect, useRef } from 'react';
import Travel from "../../../assets/videos/travel.mp4";


const SectionOne = () => {

     const videoRef = useRef()

     useEffect(()=>{
          videoRef.current.play()
     },[])
  return (
  <div className='flex justify-center items-center  h-[100vh]  w-full relative'>
     <video ref={videoRef} loop className='absolute top-0 object-cover left-0 w-full h-full z-10' src={Travel} ></video>
     <div className='text-white flex justify-center items-center flex-col gap-3 z-50'>
             <h1 className='text-6xl  font-bold  small:text-3xl mobile:text-4xl tablet:text-5xl '>ADVENTURE AWAITS</h1>
             <span className='text-4xl small:text-2xl mobile:text-2xl tablet:text-3xl'>What a you waiting for?</span>
          <div className='flex gap-3 font-semibold'>
               <button className=' w-36 h-10  bg-black text-white hover:bg-white hover:text-black'>GET STARTDED</button>
               <button className='w-36 h-10 bg-white text-black  hover:bg-transparent hover:text-white hover:border-2'>WATCH TRAILER</button>
          </div>
     </div>
     
  </div>
  );
};

export default SectionOne; 

