import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Shopify Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
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
        navy: {
          dark: '#16212E',
          primary: '#1F2D43',
          slate: '#313E53',
        },
        card: {
          surface: '#3C4A60',
        },
        muted: {
          blue: '#5B6676',
        },
        text: {
          'off-white': '#D6D4D2',
        },
        accent: {
          warm: '#906441',
        },
        button: {
          blue: '#3C67A6',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #16212E 0%, #1F2D43 100%)',
        'soft-gradient': 'linear-gradient(135deg, rgba(31, 45, 67, 0.8) 0%, rgba(22, 33, 46, 0.9) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
