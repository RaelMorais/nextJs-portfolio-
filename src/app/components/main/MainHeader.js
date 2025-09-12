'use client'; 
const meImage = '/photos/me.jpg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export function MainHeader(){
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    return(
    <>
        <div  data-aos="fade-up" className="w-56 h-56 rounded-full border-4 border-purple-600  shadow-lg shadow-purple-800 overflow-hidden">
            <img 
              src={meImage}
              alt="Israel Santana" 
              className="w-full h-full object-cover" 
            />
          </div>

   
      <h2 data-aos="fade-up" className="text-3xl font-semibold mb-2 text-center pt-3">
        Olá, me chamo{" "}
        <span className="text-purple-700 hover:text-purple-500 transition-colors">
          Israel
        </span>
      </h2>

      
      <p data-aos="fade-up" className="text-gray-400 mb-8 text-center tracking-wide">
        Backend | DevOps
      </p>

      <div data-aos="fade-up" className="flex flex-col items-center gap-4">
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