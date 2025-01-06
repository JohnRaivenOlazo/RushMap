/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#888888', // Text color
        mainBg: '#031716', // Large main background
        accentBg: '#032F30', // Large accent background
        primary: '#0A7075', // Primary color
        primaryAccent: '#0C969C', // Primary accent
        secondary: '#6BA3BE', // Secondary color
        secondaryAccent: '#274D60', // Secondary accent
      },
    },
  },
  plugins: [],
};
