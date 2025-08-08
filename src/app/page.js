import Image from "next/image";

export default function Home() {
  return (
       <div className="min-h-screen bg-black flex flex-col items-center pt-40 text-white px-6">
      {/* Header
      <header className="w-full max-w-xl flex justify-center border-b border-purple-600 pb-3 mb-8">
        <h1 className="text-white text-lg font-semibold">
          Isra
          <span className="text-purple-600">Fólio</span>
        </h1>
      </header> */}

      {/* Avatar */}
      <div className="mb-8">
        <div className="w-56 h-56 rounded-full border-4 border-purple-600 bg-purple-900 shadow-lg shadow-purple-800"></div>
      </div>

      {/* Greeting and Name */}
      <h2 className="text-3xl font-semibold mb-2 text-center">
        Olá, me chamo{" "}
        <span className="text-purple-700 hover:text-purple-500 transition-colors">
          Israel
        </span>
      </h2>

      {/* Role */}
      <p className="text-gray-400 mb-8 text-center tracking-wide">
          Backend | DevOps
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4">
        <a
          href="/Israel_CV.pdf"
          download
          className="px-6 py-3 bg-purple-700 hover:bg-purple-600 transition rounded-full text-white font-medium shadow-md shadow-purple-500"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="text-gray-400 text-sm hover:text-purple-500 underline"
        >
          Entre em contato!
        </a>
      </div>
    </div>

  );
}
