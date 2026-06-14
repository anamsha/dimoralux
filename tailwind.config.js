/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-background-default-default":
          "var(--color-background-default-default)",
        "color-border-default-default": "var(--color-border-default-default)",
        "color-primitives-gray-300": "var(--color-primitives-gray-300)",
        "color-primitives-white-1000": "var(--color-primitives-white-1000)",
        "m3-schemes-on-primary": "var(--m3-schemes-on-primary)",
      },
      fontFamily: {
        "m3-title-medium": "var(--m3-title-medium-font-family)",
      },
    },
  },
  plugins: [],
};
