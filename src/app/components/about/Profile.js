// src/components/ProfileCard.jsx
import React from 'react';

export default function Profile(){

  const birthYear = 2006;
  const birthMonth = 1; 
  const birthDay = 19; 
    
  const getAge = () => {
    const today = new Date();
    let age = today.getFullYear() - birthYear;
    if (
      today.getMonth() < birthMonth ||
      (today.getMonth() === birthMonth && today.getDate() < birthDay)
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="pt-40">
      <div className="border-2 border-white flex flex-col md:flex-row gap-4 w-full max-w-[900px] mx-auto p-4">
        
        {/* Imagem */}
        <div className="p-2 flex justify-center">
          <img 
            src="https://static.vecteezy.com/ti/fotos-gratis/p1/26409361-jaqueta-homem-bege-a-moda-estilo-retrato-pessoa-africano-modelo-americano-preto-moda-foto.jpg" 
            alt="Israel Santana" 
            className="w-full max-w-[300px] h-auto md:h-[380px] object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col flex-1 p-2 md:pt-20 text-center md:text-left">
          <h1 className="text-purple-600 font-bold text-2xl">Um pouco sobre mim</h1>
          <p className="text-[32px] md:text-[50px] font-bold text-gray-600">Israel Santana</p>
          <h1><span className="font-semibold text-gray-600">Fullstack Dev. & GenAI</span></h1>
          <h2 className="text-sm md:text-base leading-relaxed text-gray-600">
            Me chamo Israel Santana, tenho {getAge()} anos. 
            Management at Fatec. Atualmente, trabalho como aprendiz na Bosch Brasil, onde busco me desenvolver 
            profissionalmente e pessoalmente, sempre em busca de crescimento e aquisição de conhecimento. 
            No futuro, aspiro atuar como profissional DevOps.
          </h2>
        </div>
      </div>
    </div>
  );
}
