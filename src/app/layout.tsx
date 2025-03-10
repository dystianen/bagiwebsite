import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import theme from '@/config/theme';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
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

export async function generateMetadata({
  params
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.lang, namespace: 'Metadata' });

  return {
    metadataBase: new URL('https://bagiwebsite.com'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        id: '/id'
      }
    },
    title: {
      default: t('title'),
      template: '%s | BAGIWEBSITE'
    },
    description: t('desc'),
    openGraph: {
      images: 'https://cdn.bagiwebsite.com/assets/thumbnail/thumbnail_bagiwebsite.png'
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
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics gaId="G-7F3R2VC5Q5" />
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <NextIntlClientProvider messages={messages}>
            <NextTopLoader showSpinner={false} color={'#1859c5'} />
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
