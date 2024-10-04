import React from 'react';
import './banner.css'
import logo from '../assets/Logo/Valuetainment.svg'
const Banner = () => {
    return (
        <div className=' text-white px-7 pt-5 '>
           <div className='flex  space-x-2'>
           <img className='w-10 logo ' src={logo} alt="" />
           <h1 className='text-6xl font-bold'>VTMERCH</h1>
           </div>
        </div>
    );
};

export default Banner;