/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./../pages/index.html",
    "./../pages/test.html",
    "./../pages/about.html",
    "./../pages/register.html",
    "./../pages/admin.html",
    "./../pages/press.html",
    "./../pages/chair.html",
    "./../pages/photos.html",
  ],
  theme: {
    extend: {},
    colors: {
      'lblue': '#1DACE8',
      'oblack': '#141301',
      'dblue': '#1A154C',
      'ored': '#F44747',
      'white': '#ffffff'
    }
  },
  plugins: [],
}
