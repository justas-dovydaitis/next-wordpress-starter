module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-black': '#020307',
        'rich-black-lighter': '#1E1F22',
        'rich-black-lightest': '#202124',
        white: '#FCFCFC',
        'white-darker': 'FAFAFA',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
