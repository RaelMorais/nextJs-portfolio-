"use client";
import Link from 'next/link';
import React, { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Brand"
          >
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-white">
              {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#8bc34a" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path>
              </svg> */}
              Israel
            </span>
          </a>

          {/* Botão toggle para mobile */}
          <div className="sm:hidden">
            <button
              type="button"
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded={isOpen}
              aria-controls="navbar-menu"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              {!isOpen ? (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* Menu */}
        <div
          id="navbar-menu"
          className={`overflow-hidden transition-all duration-300 basis-full grow sm:block ${
            isOpen ? "max-h-screen" : "max-h-0 sm:max-h-full"
          }`}
          aria-labelledby="navbar-toggle"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <a
              className="font-large  text-gray-200 hover:text-gray-400  focus:outline-none"
              href="/"
              aria-current="page"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          
            {/* <a
              className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              href="/aboutMe"
              onClick={() => setIsOpen(false)}
            >
              Stacks
            </a> */}
            {/* <a
              className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              href=""
              onClick={() => setIsOpen(false)}
            >
              Projetos
            </a> */}
            {/* <a
              className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              href="#
              
              
              "
              onClick={() => setIsOpen(false)}
            >
              Contato
              
            </a> */}


            <a
              className="font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              href="/aboutMe"
              onClick={() => setIsOpen(false)}
            >
              Sobre mim
              
            </a>


          </div>
        </div>
      </nav>
    </header>
  );
}
