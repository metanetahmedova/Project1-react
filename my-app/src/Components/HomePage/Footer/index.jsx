import React from 'react'
import {SiYourtraveldottv} from "react-icons/si"
import {ImFacebook} from "react-icons/im"
import {BsInstagram,BsYoutube,BsTwitter} from "react-icons/bs"



const Footer = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-14 w-full h-full py-14 bg-zinc-900' >
        <div className=' flex flex-col items-center justify-center gap-3' >
            <h5 className='text-white text-2xl sm:w-[78vw] sm:text-center mobile:w-[82vw] mobile:text-center small:w-[84vw] small:text-center'>Join the Adventure newsletter to receive our best vacation deals</h5>
            <p className='text-white text-xl' >You can unsubscribe at any time</p>
            <div className=' flex items-center justify-center gap-2'>
                <input className=' text-gray-500 w-48 h-9 px-3  text-bold' type="text" placeholder='Your Email' />
                <button className='bg-transparent text-white border-2 w-24 h-9 font-medium hover:bg-white hover:text-black' >Subscribe</button>
            </div>
        </div>

        <div className='flex gap-14 small:grid small:grid-cols-2 tabletlg:gap-x-40 laptop:flex laptop:gap-28 desktop:gap-36'>
          
            <div className='flex flex-col gap-2'>
                <h5 className='text-white text-xl font-bold'>About Us</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-sm font-bold' >
                       <a href=""> How it works</a>
                    </li>
                    <li className='text-white text-sm font-bold '>
                        <a href="">Testimonials</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                       <a href=""> Careers</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Investors</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Terms of service</a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='text-white text-xl font-bold'>Contact Us</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-sm font-bold' >
                       <a href=""> How it works</a>
                    </li>
                    <li className='text-white text-sm font-bold '>
                        <a href="">Testimonials</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                       <a href=""> Careers</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Investors</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Terms of service</a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='text-white text-xl font-bold'>Videos</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-sm font-bold' >
                       <a href=""> How it works</a>
                    </li>
                    <li className='text-white text-sm font-bold '>
                        <a href="">Testimonials</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                       <a href=""> Careers</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Investors</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Terms of service</a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='text-white text-xl font-bold'>Social Media</h5>
                <ul className='flex flex-col gap-1.5' >
                    <li className='text-white text-sm font-bold' >
                       <a href=""> How it works</a>
                    </li>
                    <li className='text-white text-sm font-bold '>
                        <a href="">Testimonials</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                       <a href=""> Careers</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Investors</a>
                    </li>
                    <li className='text-white text-sm font-bold'>
                        <a href="">Terms of service</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className='flex justify-between gap-44 sm:gap-24   items-center mobile:gap-6 small:gap-2'>
             <div className='flex gap-2 text-white'>
                  <div className='font-bold text-2xl'>
                        TRVL
                   </div>
             <div className='text-xl mt-2'>
                <SiYourtraveldottv/>
             </div>
            </div>

            <div className='text-white text-sm font-medium'>
                TRVL 2023
            </div>

            <div className='flex gap-5 text-white text-xl'>
            <ImFacebook/>
            <BsInstagram/>
            <BsYoutube/>
            <BsTwitter/>
           </div>

        </div>

      
   </div>
  )
}

export default Footer