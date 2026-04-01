/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ec1313",
        "background-light": "#ffffff",
        "background-dark": "#050505",
        "gold-accent": "#D4AF37",
        "navy-accent": "#0A192F",
      },
      fontFamily: {
        "sans": ["Plus Jakarta Sans", "sans-serif"],
        "serif": ["Playfair Display", "serif"]
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F1D57F 50%, #B8860B 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
