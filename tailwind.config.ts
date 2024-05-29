/**@type {import('tailwindcss').Config}*/
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minxmax(18rem, 20rem) 1fr',
      },

    maxWidth: {
      app:'700px',
    },
   
      colors: {
        test: '#333',
      },
    },
  },
  plugins: [],
}

