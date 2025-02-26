import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  sassOptions: {
    implementation: 'sass-embedded'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.bagiwebsite.com',
        port: '',
        pathname: '/assets/**',
        search: ''
      }
    ]
  }
};

export default withNextIntl(nextConfig);
