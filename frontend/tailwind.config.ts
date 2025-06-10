import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        pulseOnce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        blurZoomPulse: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0',
            filter: 'blur(0px)',
          },
          '50%': {
            transform: 'scale(1.08)',
            opacity: '0.5',
            filter: 'blur(8px)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0',
            filter: 'blur(0px)',
          },
        },
      },
      animation: {
        pulseOnce: 'pulseOnce 1s ease-in-out',
        blurZoomPulse: 'blurZoomPulse 1s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
