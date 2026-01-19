"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-sm py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label={t("brand")}
            className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
          >
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-white">
              Israel
            </span>
          </Link>

          {/* Botão toggle mobile */}
          <div className="sm:hidden">
            <button
              type="button"
              className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50"
              aria-expanded={isOpen}
              aria-controls="navbar-menu"
              aria-label={t("toggle")}
              onClick={toggleMenu}
            >
              {!isOpen ? (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
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
              <span className="sr-only">{t("toggle")}</span>
            </button>
          </div>
        </div>

        {/* Menu */}
        <div
          id="navbar-menu"
          className={`overflow-hidden transition-all duration-300 basis-full grow sm:block ${
            isOpen ? "max-h-screen" : "max-h-0 sm:max-h-full"
          }`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <Link
              href="/"
              className="text-gray-200 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>

            <Link
              href="/aboutMe"
              className="text-gray-200 hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
