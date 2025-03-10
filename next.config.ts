import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const withBundle = withBundleAnalyzer({ enabled: true });

const nextConfig: NextConfig = {
  output: 'standalone',
  sassOptions: {
    implementation: require.resolve('sass')
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.bagiwebsite.com',
        pathname: '/assets/**'
      }
    ]
  }
};

export default withBundle(withNextIntl(nextConfig));
