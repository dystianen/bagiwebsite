import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();
const withBundle = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: true, // Optimasi CSS (pastikan `critters` terinstal)
    nextScriptWorkers: true // Gunakan worker thread untuk memproses script
  },
  productionBrowserSourceMaps: false, // Hilangkan source map agar build lebih kecil
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
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src')
    };

    // Hilangkan dependensi yang tidak diperlukan di client-side
    if (!isServer) {
      config.resolve.fallback = { fs: false, net: false, tls: false };
    }

    // Optimasi SVG sebagai React Component
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

export default withBundle(withNextIntl(nextConfig));
