import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "../src/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  try {
    const messages = (await import(`../../src/messages/${locale}.json`)).default;
    console.log(`[I18N] Loaded messages for locale: ${locale}`);
    return { locale, messages };
  } catch (err) {
    console.error(`Error importing messages for locale '${locale}':`, err);
    throw err;
  }
});
