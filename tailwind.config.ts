import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-short': 'bounce 1s ease-in-out'
      },
      colors: { 
        'correct-color': 'hsl(var(--correct-color) / <alpha-value>)',
        'present-color': 'hsl(var(--present-color) / <alpha-value>)',
        'absent-color': 'hsl(var(--absent-color) / <alpha-value>)',
        'key-color': 'hsl(var(--key-color) / <alpha-value>)',
        'key-bg': 'hsl(var(--key-bg) / <alpha-value>)',
        'key-bg-absent': 'hsl(var(--key-bg-absent) / <alpha-value>)',
        'empty-char-box-border': 'hsl(var(--empty-char-box-border) / <alpha-value>)', 
        'char-box-border': 'hsl(var(--char-box-border) / <alpha-value>)', 
        'notif-color': 'hsl(var(--notif-color) / <alpha-value>)',
        'notif-bg': 'hsl(var(--notif-bg) / <alpha-value>)',
      }
    }
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
