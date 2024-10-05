/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#0873DEB2" ,
        backdropfilter : "blur(3px)"  ,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container:{
      center: true ,
      screens:{
        "2xl" : "1100px"
      }
    }
  },
  plugins: [],
};
