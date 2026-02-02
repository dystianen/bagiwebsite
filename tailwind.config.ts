import type { Config } from 'tailwindcss';

export default {
  prefix: 'tw-',
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      backgroundImage: {
        'pattern-wave': "url('https://pub-e2818d6b83cf4b299e69ec9187084345.r2.dev/assets/backgrounds/pattern_wave.svg')"
      },
      screens: {
        xxs: { max: '24em' } // 400px
      }
    }
  },
  plugins: []
} satisfies Config;
