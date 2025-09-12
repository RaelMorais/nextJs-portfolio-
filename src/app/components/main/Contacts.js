'use client';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function MainContacts(){
useEffect(() => {
     AOS.init({ duration: 1000, once: true });
   }, []);
//arrrrrrei
const contatosData = [
  // {
  //   icon: FaEnvelope,
  //   label: 'E-mail',
  //   value: 'israelsantanamorais@outlook.com',
  //   link: 'mailto:israelsantanamorais@outlook.com',
  // },
  // {
  //   icon: FaPhone,
  //   label: 'Telefone',
  //   value: '(11) 91111-9098',
  //   link: 'tel:',
  // },
  {
    icon: FaLinkedin,
    label: 'Linkedin',
    value: '@israelstnmorais',
    link: 'https://www.linkedin.com/in/israelstnmorais',
  },
  {
    icon: FaGithub,
    label: 'Github',
    value: '@RaelMorais',
    link: 'https://github.com/RaelMorais',
  },
];

const ContactCard = ({ icon: Icon, label, value, link }) => (
  <div data-aos="fade-up" className="flex flex-col items-center p-4">
    <a 
      href={link} 
      className="flex items-center justify-center w-16 h-16 rounded-full  text-white mb-4 transition-transform transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-8 h-8" />
    </a>
    <p className="text-white text-lg font-semibold">{label}</p>
    <p className="text-gray-400 text-sm">{value}</p>
  </div>
);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-12">Contatos</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
          {contatosData.map((contato, index) => (
            <ContactCard
              key={index}
              icon={contato.icon}
              label={contato.label}
              value={contato.value}
              link={contato.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
