/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        tomato: "#ff6257",
        darkslategrey: "#242742",
        charcoalgrey: "#36384e",
        grey: "#9294a0",
        white: "#ffffff",
      },
      fontFamily: {
        sans: "Roboto",
      },
      borderRadius: {
        "4xl": "32px",
      },
      boxShadow: {
        custom: " 0 20px 25px -5px rgba(255, 98, 87, 0.5)",
      },
    },
  },
  plugins: [],
};
