import React from 'react';

export function MainProjects(){
    
const projects = [
  {
    title: "eDUcar",
    image: "https://images.unsplash.com/photo-1510525008581-229206d28945?q=80&w=2070&auto=format&fit=crop",
    alt: "Collage.fm",
    technologies: [
      {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    description: "A web app for creating and sharing photo collages with real-time collaboration features.",
    link: "https://collage.fm",
  },
  {
    title: "FerFolio",
    image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop",
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
    description: "A movie recommendation platform with detailed reviews and personalized suggestions.",
    link: "https://movie-guide.com",
  },
  {
    title: "Mange Ferramentas",
    image: "https://images.unsplash.com/photo-1558455172-13ed3e215f7f?q=80&w=2070&auto=format&fit=crop",
    alt: "Daily Weather",
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
    description: "A simple weather app providing daily forecasts with a clean and intuitive interface.",
    link: "https://daily-weather.com",
  },
];

const all_projects = [
  {
    title: "Ye Api",
    image: "https://images.unsplash.com/photo-1510525008581-229206d28945?q=80&w=2070&auto=format&fit=crop",
    alt: "Collage.fm",
    technologies: [
      {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    description: "A web app for creating and sharing photo collages with real-time collaboration features.",
    link: "https://collage.fm",
  },
  {
    title: "IsraFlix",
    image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop",
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
    description: "A movie recommendation platform with detailed reviews and personalized suggestions.",
    link: "https://movie-guide.com",
  },
  {
    title: "ToDo List",
    image: "https://images.unsplash.com/photo-1558455172-13ed3e215f7f?q=80&w=2070&auto=format&fit=crop",
    alt: "Daily Weather",
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
    description: "A simple weather app providing daily forecasts with a clean and intuitive interface.",
    link: "https://daily-weather.com",
  },
    {
    title: "IsraMovies",
    image: "https://images.unsplash.com/photo-1510525008581-229206d28945?q=80&w=2070&auto=format&fit=crop",
    alt: "Collage.fm",
    technologies: [
      {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    description: "A web app for creating and sharing photo collages with real-time collaboration features.",
    link: "https://collage.fm",
  },
    {
    title: "docs eLOGiar",
    image: "https://images.unsplash.com/photo-1510525008581-229206d28945?q=80&w=2070&auto=format&fit=crop",
    alt: "Collage.fm",
    technologies: [
      {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    description: "A web app for creating and sharing photo collages with real-time collaboration features.",
    link: "https://collage.fm",
  },  {
    title: "eDUCar Docs",
    image: "https://images.unsplash.com/photo-1510525008581-229206d28945?q=80&w=2070&auto=format&fit=crop",
    alt: "Collage.fm",
    technologies: [
      {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
    description: "A web app for creating and sharing photo collages with real-time collaboration features.",
    link: "https://collage.fm",
  },
];
const ProjectCard = ({ title, image, alt, technologies, description, link }) => {
    return (
      <div className="relative group  overflow-hidden shadow-lg">
        {/* Usando uma div com imagem de fundo */}
            <div
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          aria-label={alt}
        ></div>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300 group-hover:bg-opacity-75">
          <h4 className="text-white text-lg font-bold mb-2">{title}</h4>
          <div className="flex space-x-2 text-purple-500 mb-4">
            {technologies.map((tech, index) => (
              <img key={index} src={tech.src} alt={tech.name} className="w-6 h-6" />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm mb-4">{description}</p>
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