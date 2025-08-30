// src/components/Timeline.jsx
"use client";
import React from "react";

const milestones = [
  {
    // year: "2025",
    title: "Finalização do Aprendizado",
    description:
      "Concluir a formação como Jovem Aprendiz na Bosch e no Senai, consolidando conhecimentos práticos em desenvolvimento de sistemas.",
    color: "border-purple-500",
  },
  {
    // year: "2026",
    title: "Transição para Carreira Júnior",
    description:
      "Início da atuação como Desenvolvedor Júnior, focando em aprofundar as habilidades em tecnologias e metodologias ágeis.",
    color: "border-blue-500",
  },
  {
    // year: "2026",
    title: "Especialização em Cloud e DevOps",
    description:
      "Iniciar certificações e projetos pessoais em Cloud Computing (AWS, Azure ou GCP) e ferramentas de DevOps como Docker e Kubernetes.",
    color: "border-green-500",
  },
  {
    // year: "2027",
    title: "Pós em Eng. Software",
    description: "Iniciar pós graduação em Engenharia de Software.",
    color: "border-green-500",
  },
  {
    // year: "2027-2028",
    title: "Atuar como professor do Ensino Técnico",
    description:
      "Poder atuar como professor do ensino técnico no contra turno, podendo moldar o futuro através da educação e tecnologia.",
    color: "border-yellow-500",
  },
  {
    // year: "2029",
    title: "Especialista em DevOps",
    description:
      "Consolidar-se como profissional de DevOps, contribuindo ativamente para a automação de CI/CD e a otimização de infraestruturas.",
    color: "border-red-500",
  },
  {
    // year: "2029",
    title: "Aplicar mestrado",
    description:
      "Aplicar para mestrado, com foco em uma tese que una Tecnologia e Educação.",
    color: "border-red-500",
  },
];

export default function Timeline() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-12 text-center text-white -mt-14">
        Meu Futuro
      </h1>
      <div className="text-white py-12 px-4 sm:px-8 flex justify-center -mt-16">
        <div className="relative w-full max-w-3xl">
          {/* Linha vertical */}
          <div className="absolute top-0 left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gray-700"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col sm:flex-row items-start sm:items-center w-full relative z-10 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Ponto na linha */}
              <div
                className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-4 w-4 rounded-full border-4 bg-[#0e0d12] z-20"
                style={{
                  borderColor: milestone.color.includes("border")
                    ? milestone.color.split("border-")[1]
                    : milestone.color,
                }}
              ></div>

              {/* Conteúdo */}
              <div
                className={`w-full sm:w-1/2 mt-6 sm:mt-0 p-6 rounded-lg shadow-lg bg-white/5 border border-white/10 transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0
                    ? "sm:pr-10 sm:text-right"
                    : "sm:pl-10 sm:text-left"
                }`}
              >
                <span className={`text-sm font-semibold tracking-wide ${milestone.color}`}>
                  {milestone.year}
                </span>
                <h3 className="mt-2 text-xl font-bold text-purple-400">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-gray-300">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
