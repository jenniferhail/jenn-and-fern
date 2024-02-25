import {notFound} from 'next/navigation';
import { getRequestConfig } from "next-intl/server";
import { locales } from './navigation';

// Create this configuration once per request and 
// make it available to all Server Components.
export default getRequestConfig(async ({ locale }) => {
// Validate that the incoming `locale` parameter is valid
if (!locales.includes(locale as any)) notFound();
 
return {
  messages: (await import(`../dictionaries/${locale}.json`)).default
};
});