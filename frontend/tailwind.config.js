/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        grey: "#E6E6E6",
      },
    },
    screens: {
      ssm: { min: "360px", max: "411px" },

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      // lapSmall:"1025px",
      // lapBig:"1280",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      llg: "1280px",

      xl: "1801px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
