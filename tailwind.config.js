/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
    },
    fontFamily: {
      main: "var(--font-zeyada)",
      secondary: "var(--font-space)",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/background.svg')",
      },
    },
  },
  plugins: [],
};
