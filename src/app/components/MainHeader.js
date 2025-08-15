export function MainHeader(){
    return(
    <>
      <div className="mb-8">
        <div className="w-56 h-56 rounded-full border-4 border-purple-600 bg-purple-900 shadow-lg shadow-purple-800"></div>
      </div>

   
      <h2 className="text-3xl font-semibold mb-2 text-center">
        Olá, me chamo{" "}
        <span className="text-purple-700 hover:text-purple-500 transition-colors">
          Israel
        </span>
      </h2>

      
      <p className="text-gray-400 mb-8 text-center tracking-wide">
        Backend | DevOps
      </p>

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
          className="text-gray-200 text-sm hover:text-blue-500 underline"
        >
          Entre em contato!
        </a>
      </div>
      </>
    );
}