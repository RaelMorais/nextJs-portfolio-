import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import path from "node:path";
import { readFile } from "node:fs/promises";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const locales = ["en", "pt"];

async function loadMessages(locale) {
  const filePath = path.join(process.cwd(), "messages", `${locale}.json`);
  const file = await readFile(filePath, "utf-8");
  return JSON.parse(file);
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await loadMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
