module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
    extend: {
      screens: {
        "3xl": '1700px',
        "sm":'768px'
      },
      maxWidth: {
        "8xl": "1360px"
      },
      colors: {
        accent: '#000000'
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")]
};
