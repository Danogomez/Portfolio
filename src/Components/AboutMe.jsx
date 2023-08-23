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
        <p className='text-base text-gray-400 md:text-lg'>Soy un joven profesional dedicado al desarrollo personal y profesional, con un fuerte enfoque en el trabajo en equipo.</p>
        <p className='text-base text-gray-400 md:text-lg'>Mi experiencia previa en administración y logística durante más de 5 años me ha brindado habilidades sólidas en colaboración y adaptabilidad, las cuales aplico ahora en el mundo del desarrollo web.</p>
        <p className='text-base text-gray-400 md:text-lg'>Mi pasión radica en construir soluciones robustas y eficientes en la parte trasera de aplicaciones. Aunque mi amor por la tecnología es evidente en mi trabajo, también siento una profunda pasión por la música y dedico mi tiempo libre a ser DJ, añadiendo un toque de creatividad y espontaneidad a mi vida.</p>
      </div>
    </div>
    </div>
    
    </div>
  );
}


