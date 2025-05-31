// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         '.src/app/**/*.{js,ts,jsx,tsx}',
//         '.src/components/**/*.{js,ts,jsx,tsx}'
//     ],
//     darkMode: 'class', // Habilita modo dark via classe
//     theme: {
//         extend: {
//             colors: {
//                 primary: {
//                     DEFAULT: '#111827',
//                     dark: '#F9FAFB',
//                     light: '#111827'
//                 },
//                 secondary: {
//                     DEFAULT: '#9333ea',
//                     dark: '#F9FAFB'
//                 },
//             },
//             spacing: {
//                 128: '32rem',
//                 144: '36rem'
//             },
//             fontFamily: {
//                 montserrat: ['var(--font-montserrat)'],
//                 roboto: ['var(--font-roboto)'],
//             },
 
//         }
//     },
//     plugins: []
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#3730A3',
        },
        secondary: '#6366F1',
        muted: '#6B7280',
      },
      spacing: {
                128: '32rem',
                144: '36rem'
            },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
                 fontSize: {
                xs: '12px',
                sm: '14px',
                base: '18px',
                lg: '24px',
            },
    },
  },
  plugins: [],
};
