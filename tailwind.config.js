module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
              "primary": "#36D399",
              "secondary": "#D926A9",
              "accent": "#1FB2A6",
              "neutral": "#191D24",
              "base-100": "#2A303C",
              "info": "#3ABFF8",
              "success": "#36D399",
              "warning": "#FBBD23",
              "error": "#F13245",
          },
      },
    ],
  },
  plugins: [require('daisyui'),require('@tailwindcss/typography')],
};
