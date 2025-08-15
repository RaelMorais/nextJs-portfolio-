import React from 'react';
import { FaInstagram, FaSteam, FaLinkedin, FaGithub } from 'react-icons/fa';

// Componente reutilizável para os links sociais
// A classe `text-gray-400 hover:text-white` controla a cor
const SocialLink = ({ href, ariaLabel, children }) => (
  <a href={href} className="text-gray-400 hover:text-white" aria-label={ariaLabel}>
    {children}
  </a>
);

export function Footer() {
  return (
    <footer className="w-full">
      <div className="px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2023 Israel Santana™. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">

          {/* Ícone do LinkedIn com react-icons */}
          <SocialLink href="#" ariaLabel="LinkedIn page">
            <FaLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn page</span>
          </SocialLink>
            
          
          {/* Ícone do GitHub com react-icons */}
          <SocialLink href="#" ariaLabel="Github page">
            <FaGithub className="w-6 h-6" />
            <span className="sr-only">Github page</span>
          </SocialLink>

          {/* Ícone do Steam com react-icons */}
          <SocialLink href="#" ariaLabel="Steam page">
            <FaSteam className="w-6 h-6" />
            <span className="sr-only">Steam page</span>
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}