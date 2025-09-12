import { useState } from "react";
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGitAlt, FaPhp, FaDatabase 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiMicrosoftazure, SiSpringboot, SiGrafana, SiSonarqube, 
  SiKubernetes, SiDjango, SiFastapi, SiN8N, SiDocusaurus, SiGraphql, 
  SiVuedotjs, SiJenkins, SiTerraform, SiDatadog, SiSplunk, SiTensorflow, 
  SiLangchain, SiPowerautomate, SiPostman, SiInsomnia, SiTailwindcss, SiAwslambda,  SiMysql, SiPostgresql
} from 'react-icons/si';



const stackIcons = {
  'FaReact': FaReact,
  'SiNextdotjs': SiNextdotjs,
  'FaNodeJs': FaNodeJs,
  'FaJs': FaJs,
  'FaHtml5': FaHtml5,
  'FaCss3Alt': FaCss3Alt,
  'FaAws': FaAws,
  'FaDocker': FaDocker,
  'FaGitAlt': FaGitAlt, 
  'FaReact': FaReact,
  'SiNextdotjs': SiNextdotjs,
  'FaNodeJs': FaNodeJs,
  'FaJs': FaJs,
  'FaHtml5': FaHtml5,
  'FaCss3Alt': FaCss3Alt,
  'FaAws': FaAws,
  'FaDocker': FaDocker,
  'FaGitAlt': FaGitAlt,
  'SiMicrosoftazure': SiMicrosoftazure,
  'SiSpringboot': SiSpringboot,
  'FaPhp': FaPhp,
  'SiGrafana': SiGrafana,
  'SiSonarqube': SiSonarqube,
  'SiKubernetes': SiKubernetes,
  'SiDjango': SiDjango,
  'SiFastapi': SiFastapi,
  'SiN8N': SiN8N,
  'SiDocusaurus': SiDocusaurus,
  'SiGraphql': SiGraphql,
  'SiVuedotjs': SiVuedotjs,
  'SiJenkins': SiJenkins,
  'SiTerraform': SiTerraform,
  'SiDatadog': SiDatadog,
  'SiSplunk': SiSplunk,
  'SiTensorflow': SiTensorflow,
  'SiLangchain': SiLangchain,
  'SiPowerautomate': SiPowerautomate,
  'SiPostman': SiPostman,
  'SiInsomnia': SiInsomnia,
  'SiTailwindcss': SiTailwindcss,
  'SiAwslambda': SiAwslambda, 
  'SiMysql': SiMysql, 
  'SiPostgresql':SiPostgresql, 
  'FaDatabase': FaDatabase 
};

export default function Experience() {
  const experiencias = [
    {
      empresa: "Bosch",
      cargo: "Aprendiz",
      periodo: "Jun 2024 - Atual",
      descricao: "Jovem Aprendiz em Desenvolvimento de Sistemas, pelp Programa DTA (Digital Talent Academy).",
      stacks: ["SiSpringboot", "FaReact", "SiInsomnia", "SiPostman",  "SiGraphql", "SiFastapi", "SiMicrosoftazure", "FaAws",  "FaDocker", "SiPowerautomate", "SiKubernetes", "SiDocusaurus","SiLangchain",  "SiJenkins"]
    },
    {
      empresa: "Fatec",
      cargo: "Gestão TI",
      periodo: "Jun 2024 - Atual",
      descricao: "Atualmente cursando GTI na Fatec Campinas (3° Semestre).",
      stacks: ['FaJs', 'FaHtml5', 'FaCss3Alt', "FaReact", 'SiMysql', 'SiPostgresql', 'FaDatabase']
    },
    {
      empresa: "Etec",
      cargo: "Desenvolvimento de Sistemas",
      periodo: "Jun 2022 - Dez 2023",
      descricao: "Primeira formação na área de Ti, onde adiquiri conhecimento técnico e uma boa base em lógica.",
      stacks: ['FaAws', 'FaDocker', 'FaGitAlt', 'FaPhp']
    },
    {
      empresa: "Senai",
      cargo: "Desenvolvimento de Sistemas",
      link: "#",
      periodo: "Jun 2024 - Atual",
      descricao: "Formação em conjunto com a Bosch, onde desenvolvi minhas capacidades técnicas e profissionais.",
      stacks: ['FaAws', 'FaDocker', 'FaGitAlt']
    }
  ];

  const [selecionado, setSelecionado] = useState(0);

  return (
    <div className="text-white min-h-screen flex flex-col items-center pt-50">
      <h1 className="text-4xl font-bold mb-8">
        Experiências
      </h1>

      <div className="flex w-full max-w-5xl gap-8">
        {/* Lista de empresas */}
        <div className="flex flex-col w-1/4 border-l-2 border-purple-500/20">
          {experiencias.map((exp, index) => (
            <button
              key={index}
              onClick={() => setSelecionado(index)}
              className={`text-left px-4 py-3 hover:bg-purple-500/10 transition-colors ${
                selecionado === index
                  ? "border-l-2 border-purple-500 text-purple-400 bg-purple-500/10"
                  : "border-l-2 border-transparent"
              }`}
            >
              {exp.empresa}
            </button>
          ))}
        </div>

        {/* Detalhes */}
        <div className="w-3/4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">
                {experiencias[selecionado].cargo}
              </h2>
              <a
                href={experiencias[selecionado].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                {experiencias[selecionado].empresa}
              </a>
            </div>
            <span className="text-sm text-gray-400">
              {experiencias[selecionado].periodo}
            </span>
          </div>
          <p className="mt-4 text-gray-300 leading-relaxed">
            {experiencias[selecionado].descricao}
          </p>

          {/* Seção para os ícones de stacks */}
          <div className="flex flex-wrap gap-4 mt-6">
            {experiencias[selecionado].stacks.map((stackName, i) => {
              const IconComponent = stackIcons[stackName];
              return IconComponent ? (
                <div key={i} className="flex flex-col items-center">
                  <IconComponent size={30} className="text-gray-400 hover:text-white transition-colors" />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}