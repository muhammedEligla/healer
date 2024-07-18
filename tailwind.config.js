/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        darkblue:'#1B3C74',
        grey:'#51585B',
        subTitle:'#1F85D6',
        
      },
      backgroundColor:{
        bluelight:'#1F85D6',
        blueDark:'rgba(27, 60, 116, 0.97)',
        bsky:'rgb(228 238 241)'
      }
    },
  },
  plugins: [],
}

