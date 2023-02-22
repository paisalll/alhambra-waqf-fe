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
          80: "#A5A6AC",
          90: "#828387",
        },
        text01: "#27303E",
        subText: "#3F4753",
        btnColor: "#F98D3E",
        whiteBg: "#FBFBFB",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
