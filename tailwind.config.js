/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        mainBGC: "#120430",
        secondaryBGC: "#120440",
        ternaryBGC: "#120633",
      },
      boxShadow: {
        shadowOne: "2px 2px 10px black, 5px 5px 19px secondaryBCG",
      },
    },
  },
  plugins: [],
};

