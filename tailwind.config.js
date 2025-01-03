/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PRIMARY: "#FFBB12",
        SECONDARY: "#20A401",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  plugins: [],
};
