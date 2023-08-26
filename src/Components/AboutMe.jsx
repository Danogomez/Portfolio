import React from 'react'

export const AboutMe = () => {
  return (
    <div id='about' className='relative bg-gray-900'>
    <div className=' mx-auto  sm:max-w-xl lg:max-w-screen-xl lg:px-4 lg:py-14 text-gray-400'>
      <h2 className="text-3xl text-center  font-semibold mb-4">About Me</h2>
      <div className='w-full flex justify-center mt-10 my-4'> 
      <div className='w-auto p-6 flex items-center'>
        <img className='w-96 rounded-lg border border-gray-800 shadow-md' src='/aboutdj.jpg' alt="" />      
      </div>
      <div className='w-full lg:w-1/2 flex flex-col justify-between p-2 py-8'>
        <p className='text-base text-gray-400 md:text-lg'>I am a young professional dedicated to personal and professional development, with a strong focus on teamwork.</p>
        <p className='text-base text-gray-400 md:text-lg'>My previous experience in administration and logistics for over 5 years has provided me with solid skills in collaboration and adaptability, which I now apply in the world of web development.</p>
        <p className='text-base text-gray-400 md:text-lg'>My passion lies in building robust and efficient solutions on the backend of applications. While my love for technology is evident in my work, I also have a deep passion for music and dedicate my free time to being a DJ, adding a touch of creativity and spontaneity to my life.</p>
      </div>
    </div>
    </div>
    
    </div>
  );
}


