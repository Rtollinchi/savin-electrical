/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f", // Dark blue/black background
        accent: "#facc15", // Gold accent (can adjust)
        textLight: "#e5e7eb", // Light gray for text
        textDark: "#ffffff", // White text
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Sleek, modern font
      },
    },
  },
  plugins: [],
};
