import React from 'react'

export const Contact = () => {
  return (
    <div id='contact' className="text-black p-8 mb-10 ">
        <h1 className="text-2xl text-black text-center font-semibold mb-4">Contact Me</h1>
        <div className="grid grid-cols-1 p-6 md:grid-cols-3 gap-4">

        <div className='relative flex justify-center items-center p-5 bg-white rounded-sm'>
                <a href="mailto:danovuksa3232@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail" />
                    <h2 className="mt-2 text-lg font-semibold">Gmail</h2>    
                </a>
                <div className='mx-6'>
                    <p>Let's get in touch</p>
                </div>
        </div>

        <div className='relative flex justify-center items-center p-5 bg-white rounded-sm'>
                <a href="https://www.linkedin.com/in/daniel-gomez-fullstack" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/nolan/64/linkedin.png" alt="LinkedIn" />
                    <h2 className="mt-2 text-center text-lg font-semibold">LinkedIn</h2>
                </a>
                <div className='mx-6'>
                    <p>Let's connect</p>
                </div>
        </div>
            
        <div className='relative flex justify-center items-center p-5 bg-white rounded-sm'>
                <a href="https://github.com/Danogomez" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/stickers/100/000000/github.png" alt="GitHub" />
                    <h2 className="mt-2 text-center text-lg font-semibold">GitHub</h2>
                </a>
                <div className='mx-6'>
                    <p>Check out my repos.</p>
                </div>
        </div>
        </div>
    </div>
);
}
