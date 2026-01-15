import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 70s linear infinite',
        'marquee-reverse': 'marquee-reverse 70s linear infinite',
        'marquee-slow': 'marquee-slow 40s linear infinite',
        'spin-angle': 'spin-angle 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-angle': {
          from: { '--angle': '0deg' },
          to: { '--angle': '360deg' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #000 0%, #071C52 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
