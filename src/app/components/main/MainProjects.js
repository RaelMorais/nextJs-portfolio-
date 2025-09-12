'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ferfolio = '/photos/ferfolio.png';
const mange = '/photos/mange.png'; 
const yeapi = '/photos/yeapi.png'; 
const hpdex  = '/photos/hpdex.png'; 
const fast = '/photos/fastapi.png'
export function MainProjects(){
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
const projects = [
  {
    title: "eDUcar",
    image: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
    alt: "Collage.fm",
    technologies: [
      {
        name: "Django",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    description: "Projeto integrador desenvolvido no 2º semestre do Senai. ",
    link: "https://collage.fm",
  },
  {
    title: "",
    image: ferfolio,
    alt: "The Movie Guide",
    technologies: [
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    description: "Projeto desenvolvido como somativa da máteria de PWFE.",
    link: "https://entregapwfe.vercel.app/index.html",
  },
  {
    title: "Mange Ferramentas",
    image: mange, 
    alt: "Mange-Home",
    technologies: [
      {
        name: "HTML",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    description: "Projeto integrador do 1º Semestre de 2024.",
    link: "https://github.com/RaelMorais/Integrador_Senai",
  },
];

const all_projects = [
  {
    title: "Ye Api",
    image: yeapi,
    alt: "Kanye West API",
    technologies: [
      {
        name: "HTML",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    description: "Uso da api do YE para desenvolvimento de um projeto pessoal sobre api Rest.",
    link: "https://yeapi.vercel.app/",
  },
  {
    title: "HpDex",
    image: hpdex,
    alt: "Hp-Dex",
    technologies: [
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    description: "Projeto para aprender sobre API e React.",
    link: "https://raelmorais.github.io/hp-dex/",
  },
  {
    title: "F1 API",
    image: fast, 
    alt: "Codigo FASTAPI",
    technologies: [
      {
        name: "FastAPI",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      },
    
    ],
    description: "API desenvolvida para aprender sobre Rest e FastAPI.",
    link: "https://github.com/RaelMorais/fastAPI",
  },
    {
    title: "EM BREVE...",
    image: "",
    alt: "Collage.fm",
    technologies: [
      // {
      //   name: "Next.js",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      // },
      // {
      //   name: "React",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      // },
      // {
      //   name: "TypeScript",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      // },
    ],
    description: "EM BREVE...",
    link: "",
  },
   {
    title: "EM BREVE...",
    image: "",
    alt: "Collage.fm",
    technologies: [
      // {
      //   name: "Next.js",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      // },
      // {
      //   name: "React",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      // },
      // {
      //   name: "TypeScript",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      // },
    ],
    description: "EM BREVE...",
    link: "",
  },
   
   {
    title: "EM BREVE...",
    image: "",
    alt: "Collage.fm",
    technologies: [
      // {
      //   name: "Next.js",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      // },
      // {
      //   name: "React",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      // },
      // {
      //   name: "TypeScript",
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      // },
    ],
    description: "EM BREVE...",
    link: "",
  },
   
   
];
const ProjectCard = ({ title, image, alt, technologies, description, link }) => {
    return (
      <div data-aos="fade-up" className="relative group  overflow-hidden shadow-lg" id='#projetos'>
        {/* Usando uma div com imagem de fundo */}
            <div
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          aria-label={alt}
        ></div>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
          <h4 className="text-blue-400 text-lg font-bold mb-2">{title}</h4>
          <div className="flex space-x-2 text-purple-500 mb-4">
            {technologies.map((tech, index) => (
              <img key={index} src={tech.src} alt={tech.name} className="w-6 h-6" />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-black text-sm mb-4">{description}</p>
            <a
              href={link}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Acessar
            </a>
          </div>
        </div>
        <div className="border-purple-600 mt-2"></div>
      </div>
    );
  };

return(
      <section className="w-full text-white py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6 border-b-2 border-purple-600 inline-block pb-1">Destaques</h3>
          <div className="grid md:grid-cols-3 gap-0  mt-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-10">
          <h3 className="text-xl font-semibold mb-6 border-b-2 border-purple-600 inline-block pb-1">Todos os Projetos</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {all_projects.map((all_project, index) => (
              <ProjectCard key={index} {...all_project} />
            ))}
          </div>
        </div>
      </section>
);

}