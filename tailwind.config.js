/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "!./node_modules/"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["variant", ["@container root style(--color-scheme: dark) { & }"]],
  theme: {
    extend: {},
  },
};
