import React from 'react';
import { Certificates } from './Certificates';

export const Skills = () => {
  return (
    <div id='skills' className='bg-gray-50 p-20 justify-center relative'>
      <h1 className=' mb-5 text-center text-2xl font-semibold pb-4'>My Skills</h1>
      <div className='flex'>
        <div className='card-skills w-1/3 h-auto'>
          <h2 className='text-lg font-semibold mb-2'>FrontEnd</h2>
          <hr className='mb-2' />
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Tailwind.CSS</p>
        </div>
        <div className='card-skills w-1/3 h-auto'>
          <h2 className='text-lg font-semibold mb-2'>BackEnd</h2>
          <hr className='mb-2' />
          <p>NodeJS</p>
          <p>PostgreSQL</p>
          <p>Express</p>
          <p>MySQL</p>
        </div>

        <div className='card-skills w-1/3 h-auto'>
          <h2 className='text-lg font-semibold mb-2'>Tools</h2>
          <hr className='mb-2' />
          <p>Git</p>
          <p>GitHub</p>
          <p>Netlify</p>
          <p>VSCode</p>
          <p>SOCKET.IO</p>
        </div>
      </div>
      <div className='bg-transparent mt-4'>
        <Certificates />
      </div>
    </div>
  );
};
