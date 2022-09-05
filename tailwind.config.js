/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#011627",
        primary: "#F7165E", //#f71735",
        secondary: "#ff9f1c",
        textcolor: "#fdfffc",
        highlight: "#41ead4",
      },
      backgroundImage: {
        heroImg: "url('/tee.png')",
      },
    },
  },
  plugins: [],
};
