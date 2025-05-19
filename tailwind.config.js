/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgb(229 231 235 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(229 231 235 / 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '24px 24px',
      },
    },
  },
  plugins: [],
}; 