import React from 'react';

const CertificateCard = ({ title, image, link }) => {
  return (
    <div>
      <div className='flex border-black '>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="mx-auto" style={{ maxWidth: '100%', height: 'auto' }} />
        </a>
      </div>
        <h2 className="text-center mt-2">{title}</h2>
    </div>
  );
};

export const Certificates = () => {
  return (
    <div id='certificates' className="relative p-10">
      <h1 className="text-2xl text-center font-semibold mb-8">Certificates</h1>
      <div className=" shadow-xl grid gap-20 mx-auto max-w-2xl md:grid-cols-2">
        <div className='card-skills ' >
          <CertificateCard
          title="Full Stack Developer"
          image="/certifHenry.PNG"
          link="https://example.com/certificate1" 
          />
        </div>
        <div className='card-skills' >
          <CertificateCard
          title="EF Standard English Certificate 68/100"
          image="/certifIngles.png" // Replace with the actual image URL
          link="https://www.efset.org/cert/xdKP2t" // Replace with the actual certificate URL
          />
        </div>
      </div>
    </div>
  );
};
