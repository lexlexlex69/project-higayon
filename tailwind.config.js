/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MuseoModerno: ["MuseoModerno"],
      },
      colors: {
        higayon: "#609FFF",
        navbarHover: "#E9E9E9",
        navbarInactiveLink: "#747474",
        navbarActive: "#DDDDDD",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}
