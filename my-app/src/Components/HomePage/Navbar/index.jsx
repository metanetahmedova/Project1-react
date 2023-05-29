import React from 'react';
import { Link } from 'react-router-dom';
import {SiYourtraveldottv} from "react-icons/si"


const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-black text-white py-3 px-8'>
    <div className='flex gap-2'>
    <div className='font-bold mobile:text-xl small:text-xl laptop:text-3xl'>
      <Link to="/">TRVL</Link>
      
    </div>
    <div className='text-xl mt-1 laptop:text-3xl'>
      <SiYourtraveldottv/>
    </div>
    </div>
    <div className='flex gap-3 items-center small:hidden'>
      <Link to="/">Home</Link>
      <Link to="/service">Service</Link>
      <Link to="/products">Products</Link>
      <button className='border py-1 px-2'>Sign up</button>
    </div>
      
  </div>
  );
};

export default Navbar;