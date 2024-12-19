/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "!./node_modules/"],
  plugins: [],
  darkMode: ["variant", ["@container root style(--color-scheme: dark) { & }"]],
  theme: {
    extend: {},
  },
};
