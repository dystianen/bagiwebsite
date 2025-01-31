import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import theme from '../config/theme';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }];
}

export async function generateMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL('https://bagiwebsite.com'),
    alternates: {
      canonical: '/'
    },
    title: t('title'),
    description: t('desc'),
    openGraph: {
      images: '/assets/thumbnail/bagiwebsite.png'
    }
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <NextIntlClientProvider messages={messages}>
            <NextTopLoader showSpinner={false} />
            <Header />
            <div className="tw-mt-28 lg:tw-mt-8">{children}</div>
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
