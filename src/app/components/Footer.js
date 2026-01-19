"use client";

import { useTranslations } from "next-intl";
import { FaLinkedin, FaGithub, FaSteam } from "react-icons/fa";

export function Footer() {
  const t = useTranslations("Footer");

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white p-6">
      <span>
        © {year} Israel Santana™. {t("rights")}
      </span>

      <div className="flex gap-4 mt-4">
        <a href="https://www.linkedin.com" aria-label={t("linkedin")}>
          <FaLinkedin />
        </a>
        <a href="https://github.com" aria-label={t("github")}>
          <FaGithub />
        </a>
        <a href="https://steamcommunity.com" aria-label={t("steam")}>
          <FaSteam />
        </a>
      </div>
    </footer>
  );
}

