import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Footer from './components/Footer';
import Header from './components/Header';
import theme from './config/theme';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'BAGIWEBSITE',
  description: 'Layanan pembuatan website, aplikasi, dan solusi digital lainnya.',
  openGraph: {
    images: '/assets/thumbnail/thumbnail_bagiwebsite.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider theme={theme}>
          <NextTopLoader />
          <Header />
          <div className="tw-mt-28 lg:tw-mt-8">{children}</div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
