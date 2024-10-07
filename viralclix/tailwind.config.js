/** @type {import('tailwindcss').Config} */
module.exports = {
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
        darkGrey: {
          DEFAULT: "#2C2C2C",
          lighter: "#666666",
          lightest: "#AAAAAA"
        },
        customGreen: {
          DEFAULT: "#4CAF50", 
          dark: "#3A7C43",
          light: "#38B37F", 
        },
      },
    },
  },
  plugins: [],
};
