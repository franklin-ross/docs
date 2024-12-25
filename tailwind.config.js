/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  plugins: [require("@tailwindcss/typography")],
  darkMode: ["variant", ["@container root style(--color-scheme: dark) { & }"]],
  theme: {
    extend: {
      colors: {
        "prose-body": "var(--tw-prose-body)",
        "prose-headings": "var(--tw-prose-headings)",
        "prose-border": "var(--tw-prose-th-borders)",
        "prose-border-subtle": "var(--tw-prose-td-borders)",
      },
    },
  },
};
