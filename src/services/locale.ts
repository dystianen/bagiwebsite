'use server';
import { cookies } from 'next/headers';
import { Locale, defaultLocale } from '../i18n/config';

// Define the cookie name
const COOKIE_NAME = 'NEXT_LOCALE';

// Retrieve the user's locale from cookies
export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return (cookieStore.get(COOKIE_NAME)?.value as Locale) || defaultLocale;
}

// Set the user's locale in cookies
export async function setUserLocale(locale: Locale): Promise<void> {
  const cookieStore = await cookies();

  // You need to use a specific way to set cookies in your environment
  // Example with Next.js API:
  cookieStore.set({
    name: COOKIE_NAME,
    value: locale,
    path: '/', // Optional: specify the path
    maxAge: 30 * 24 * 60 * 60, // Optional: Set cookie expiration, e.g., 30 days
    httpOnly: true, // Optional: Use for security
    secure: process.env.NODE_ENV === 'production' // Use `secure` flag in production
  });
}
