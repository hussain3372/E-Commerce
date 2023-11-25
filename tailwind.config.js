/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#13182f",
        "dark-secondary": "#1d2742",
        "red-primary": "#f84c48",
        "yellow-primary": "#febc2c",
        "purple": "#7457ff",
        "green": "#82d2ac",
      },
    },
  },
  plugins: [],
};
