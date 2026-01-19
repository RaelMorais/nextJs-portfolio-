import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  console.log("[next-intl] locale recebido:", locale);

  const resolvedLocale = locale === "en" || locale === "pt" ? locale : "en";

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});
