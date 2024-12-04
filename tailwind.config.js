/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretorian: "var(--font-pretorian)",
        grotesk: "var(--font-grotesk)",
      },
      colors: {
        red: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        teal: "var(--teal)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};
