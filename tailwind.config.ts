import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        moon: 'moonGrow 500ms linear',
        sun: 'sunGrow 500ms linear',
      },
      keyframes: {
        explode: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        moonGrow: {
          '0%': { backgroundSize: '16px 16px' },
          '50%': { backgroundSize: '12px 12px' },
          '100%': { backgroundSize: '16px 16px' },
        },
        sunGrow: {
          '0%': { backgroundSize: '16px 16px' },
          '50%': { backgroundSize: '12px 12px' },
          '100%': { backgroundSize: '16px 16px' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
