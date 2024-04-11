/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        piece:
          "-1px 2px 4px  rgba(0, 0, 0, 1), inset -1px 2px 6px  #acd6,  inset 0px 0px 10px  #3645",
      },
    },
  },
  plugins: [],
};

