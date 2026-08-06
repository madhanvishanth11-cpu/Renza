/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        renza: {
          yellow: {
            50: '#FEFCE8',
            100: '#FEF9C3',
            200: '#FEF08A',
            300: '#FDE047',
            400: '#FACC15', // Primary brand yellow
            500: '#EAB308',
            600: '#CA8A04',
            700: '#A16207',
            800: '#854D0E',
            900: '#713F12',
          },
          dark: {
            50: '#27272A',
            100: '#18181B',
            200: '#09090B', // Secondary Onyx Black
            DEFAULT: '#09090B',
          },
          surface: {
            light: '#F4F4F5', // Light Grey Surface
            muted: '#E4E4E7',
            dark: '#18181B',
          },
          functional: {
            green: '#10B981', // Success / Verified
            red: '#EF4444',   // Error / Unavailable
            orange: '#F59E0B',// Warning / Pending
            blue: '#3B82F6',  // Info / Links
          }
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'soft-lg': '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'yellow-glow': '0 4px 20px -2px rgba(250, 204, 21, 0.4)',
        'yellow-glow-lg': '0 8px 30px rgba(250, 204, 21, 0.5)',
      },
      borderRadius: {
        '2xl': '16px', // Standard 16px rounded corners
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
