/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./node_modules/daisyui/**/*.js","./node_modules/flowbite/**/*.js"],
  theme: {
   
  
    extend: {
      screens: {
        "2md":"960px"
      },
      colors: {
        primary:'#7E3AF2',
       mainText:'#111928',
       secondaryText:'#6B7280',
        },
        fontFamily: {
          Inter:  ["Inter", 'serif'],
        },
       
    },
  },
  plugins: [
    require('flowbite/plugin'),
    
    require('daisyui'),
  ],
  daisyui:{
    themes: [
      {
        myCustomTheme: {
          "primary": "#7E3AF2",
          "secondary": "#6B7280",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        }
      }
    ],
    darkTheme: "myCustomTheme"  // Optional, or omit if you don’t want dark mode
  }
}
