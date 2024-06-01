/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }, colors: {
        " b-blue": "F3F4F7",
      },
      textColor: {
        'primary': '#5A5A62',
        'light-blue': '#94A3B8',
        'purple': "#8948F2",
        'blue': "#3EA7FF",
        'orange': "#FF8370",
        'pink': "#FF3EC9",
        'dark-blue': "#6366F1"
      },
      backgroundColor: {
        'primary': '#5A5A62',
        'grey': '#F1F5F9',
        'ligt-purple': '#F2EDFF',
        'light-blue': "#EBF3FF",
        'light-orange': "#FFF2EB",
        'light-pink': "#FFEBF9",
        'light-grey': "#F0F0F0"
      },
      boxShadow: {
        'blue-lg': '0 0px 0px 0px rgba(0, 0, 222, 0.1), 0 0px 1px 10px rgba(0, 0, 215, 0.05)',
      },
      transitionProperty: {
        'box-shadow': 'box-shadow',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}

