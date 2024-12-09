/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      fontFamily: {
        pretorian: "var(--font-pretorian)",
        grotesk: "var(--font-grotesk)",
      },
      colors: {
        red: "var(--red)",
        rose: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        ochre: "var(--ochre)",
        green: "var(--green)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        "night-purple": "var(--night-purple)",
        teal: "var(--teal)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
    screens: {
      "2xl": { max: "1600px" },
      lg: { max: "1100px" },
      md: { max: "767px" },
      sm: { max: "490px" },
      screen: { raw: "(max-height: 800px)" },
    },
  },
  plugins: [],
};
