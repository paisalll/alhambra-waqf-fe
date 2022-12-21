/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          900: "#204C94",
        },
        Neutral: {
          800: "#A5A6AC",
          900: "#828387",
        },
        TitleText: "#27303E",
        BtnColor: "#F98D3E",
      },
    },
  },
  plugins: [],
};
