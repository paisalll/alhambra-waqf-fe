/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#22509B",
          90: "#3862A5",
          80: "#4E73AF",
          70: "#6485B9",
          60: "#7A96C3",
        },
        neutral: {
          60: "#D6D7DE",
          70: "#C2C3C9",
          80: "#A5A6AC",
          90: "#828387",
        },
        text01: "#27303E",
        text02: "#606770",
        text03: "#969A9F",
        subText: "#3F4753",
        btnColor: "#F98D3E",
        whiteBg: "#FBFBFB",
        twitter: "#54ACEE",
        facebook: "#4C76BE",
        whatsapp: "#45D354",
      },
    },
    fontFamily: {
      inter: ["sans-serif"],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
