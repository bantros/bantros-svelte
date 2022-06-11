/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,svelte}'],
  theme: {
    fontFamily: {
      'system': ['-apple-system', 'BlinkMacSystemFont', 'avenir', 'helvetica neue', 'helvetica', 'ubuntu', 'roboto', 'noto', 'segoe ui', 'arial', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
