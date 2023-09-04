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
          link="https://certificates.soyhenry.com/new-cert?id=ab382343ca22045ef1a1b56de40fc07e0c132c87b9b06448114b492049058858" 
          />
        </div>
        <div className='card-skills' >
          <CertificateCard
          title="EF Standard English Certificate (C1 advanced)"
          image="/certifIngles.png" // Replace with the actual image URL
          link="https://www.efset.org/cert/xdKP2t" // Replace with the actual certificate URL
          />
        </div>
      </div>
    </div>
  );
};
