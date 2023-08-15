import React from 'react';

const ProjectCard = ({ title, subtitle, description, image, technologies, githubLink, demoLink }) => {
  return (
    <div className="bg-gray-100 border border-gray-800 flex flex-col overflow-hidden transition-shadow duration-300 rounded shadow-md">
      <div className='pb-6'>
        <div className='flex flex-col overflow-hidden transition-shadow duration-300 rounded'>
          <img className="w-full h-48 object-cover mb-3" src={image} alt={title} />
          <div className='p-5 flex flex-col flex-1'>
            <h1 className="mb-3 text-black text-2xl font-bold leading-5">{title}</h1>
            <h3 className="mb-3 text-black text-xl font-bold leading-5">{subtitle}</h3>
            <p className="mb-2 text-black">{description}</p>
            { technologies.length > 0 && (
              <div className='flex flex-wrap space-x-2 mt-5'>
                <h2 className='inline-block text-black mb-3 text-xl font-bold leading-5'>Technologies:</h2>
                {technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            )}
            { (githubLink || demoLink) && (
              <div className='mt-4 space-x-2'>
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className='inline-block border border-black px-4 py-2 text-blue-500 hover:underline'>Source Code</a>
                )}
                {demoLink && (
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" className='inline-block px-4 py-2 border border-black bg-blue-500 hover:bg-gray-800 text-white'>Live Demo</a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



export const Projects = () => {
  return (
    <div id='projects' className="bg-gray-800 ">
    <div className='relative p-10 bg-transparent mx-10'> 
      <h1 className="text-3xl text-gray-400  text-center font-semibold">Projects</h1>
    <div className="grid my-10 md:grid-cols-3 gap-10">
    <div >
  <ProjectCard
    title="Api-Videogames"
    subtitle="Single Page Application"
    description="Fue desarrollado para mi Proyecto Individual en el bootcamp de Desarrollo Fullstack de Henry. Los datos se extraen de la API de **rawg**."
    image="/pi.PNG"
    technologies={['HTML', 'CSS', "ReactJS", "Redux", "JavaScript", "NodeJS, PostgreSQL"]}
    githubLink="https://github.com/Danogomez/DeployPi"
    demoLink="https://videogamespi-hsdp.onrender.com/"
  />
  </div>  
  <div >
    <ProjectCard
      title="Nomad-Locals"
      subtitle="1st Mobile App"
      description="Fue creado para el Proyecto Final en el bootcamp de Desarrollo Fullstack de Henry, presentado para la Empresa 'Nomad Locals'..."
      image="/nomad.PNG" 
      technologies={['ReactJS','Redux','TailwindCss', 'Javascript','PostgreSQL', 'NodeJs', 'Express', 'Sequelize']}
      githubLink="https://github.com/NomadLocals/servidor"
      demoLink="https://nomandlocals.netlify.app/"
    />
  </div>

  <div >
    <ProjectCard
      title="Comming Soon..."
      subtitle="Comming soon new projects!"
      description="Stay tuned for more exciting projects."
      image="/comming.jpg" 
      technologies={[]}
    />
  </div>

    </div>
  </div>
  </div>
  );
};
