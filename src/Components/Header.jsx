import React from 'react';
import { AboutMe } from './AboutMe';

export const Header = () => {
  return (
    <div className='relative px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20'>
      <div id='header' className="flex justify-center my-36  items-center ">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5"> 
          <div className='max-w-xl mb-6'>
            <h1 className="font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none max-w-lg mb-6">Hi there! I'm Daniel</h1>
            <p className="text-gray-700 text-base md:text-lg">I'm a Full Stack Web Developer based in Argentina</p>
          </div> 
          <div className='flex items-center space-x-2'>
            <button className='bg-gray-800 m-2 p-2 rounded-sm border border-black' >
            <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
            </button>
            <button className='bg-gray-800 m-2 p-2 rounded-sm border border-black text-white hover:text-gray-300'>
            <a href="#contact" className="text-white hover:text-gray-300">
                Hire Me
              </a>
            </button>      
          </div>
        </div>        
          <img className='rounded-full  h-48 w-48 mb-4 md:mb-0 md:mr-10' src="/profileImage.jpg" alt="" /> 
      </div>
    </div>
  );
};
