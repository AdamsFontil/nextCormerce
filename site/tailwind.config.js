/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {


      },
      fontFamily: {
        // Set your desired font families for headings and body text
        heading: ['Poppins', 'sans-serif'], // Change to Poppins
        body: ['Arial', 'sans-serif'], // Change to Arial
      },
    },
  },
      daisyui: {
        themes: [
          {
            mytheme: {
              primary: '#DB2777', // Magenta (or your desired primary color)
              secondary: '#4B5563', // Gray-700 (or your desired secondary color)
              accent: '#FBBF24', // Yellow (or your desired accent color)
              neutral: '#6B7280', // Gray-500 (or your desired neutral color)
              'base-100': '#F9FAFB', // Gray-50 (a very light shade)
              info: '#60A5FA', // Sky Blue (or your desired info color)
              success: '#34D399', // Green (or your desired success color)
              warning: '#F97316', // Orange (or your desired warning color)
              error: '#EF4444', // Red (or your desired error color)
            },
          },
          {
            mytheme_dark: {
              primary: '#DB2777', // Keeping the same primary color
              secondary: '#4B5563',
              accent: '#FBBF24',
              neutral: '#6B7280',
              'base-100': '#1f2937',
              info: '#60A5FA',
              success: '#34D399',
              warning: '#F97316',
              error: '#EF4444',
            },
          }
        ],

      },
      plugins: [
        require('@tailwindcss/forms'), // Include this if you want to use Tailwind CSS forms
        require('@tailwindcss/typography'), // Include this if you want to use Tailwind CSS typography
        require('daisyui'), // Simply use this line for the new DaisyUI setup
      ],
    };
