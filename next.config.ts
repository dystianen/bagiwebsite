import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const withNextIntl = createNextIntlPlugin();
const withBundle = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: true, // Optimasi CSS
    nextScriptWorkers: true // Worker thread untuk memproses script
  },
  productionBrowserSourceMaps: false, // Menghilangkan source map agar build lebih kecil
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

    // Menghilangkan dependensi yang tidak diperlukan di client-side
    if (!isServer) {
      config.resolve.fallback = { fs: false, net: false, tls: false };
    }

    // Optimasi SVG sebagai React Component
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              pure_funcs: ['console.info', 'console.debug']
            },
            format: {
              comments: false
            }
          },
          extractComments: false
        })
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 80000
      }
    };

    return config;
  }
};

export default withBundle(withNextIntl(nextConfig));
