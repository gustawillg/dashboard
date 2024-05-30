/**@type {import('tailwindcss').Config}*/
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minxmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
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

