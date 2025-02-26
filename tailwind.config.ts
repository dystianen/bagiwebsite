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
        'pattern-wave': "url('https://cdn.bagiwebsite.com/assets/backgrounds/pattern_wave.svg')"
      }
    }
  },
  plugins: []
} satisfies Config;
