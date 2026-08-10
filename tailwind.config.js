/** @type {import('tailwindcss').Config} */
// Mirrors src/theme/*.ts — keep both in sync when design tokens change.
module.exports = {
  content: ['./App.tsx', './index.ts', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#2f4323',
        primaryDark: '#1f3413',
        accent: '#d99732',
        cream: '#f5f2eb',
        creamMuted: '#eae6d8',
        textDark: '#111111',
        primaryMuted70: 'rgba(47,67,35,0.7)',
        primaryMuted80: 'rgba(47,67,35,0.8)',
        creamMuted80: 'rgba(245,242,235,0.8)',
      },
      spacing: {
        xs: '5px',
        sm: '10px',
        md: '16px',
        lg: '20px',
        xl: '30px',
      },
      borderRadius: {
        xs: '8px',
        sm: '15px',
        md: '20px',
        lg: '30px',
        pill: '40px',
        hero: '50px',
      },
      fontSize: {
        xs: '12px',
        sm: '13px',
        base: '14px',
        md: '15px',
        lg: '20px',
        xl: '13px',
        display: '33px',
        'display-lg': '35px',
      },
      fontFamily: {
        script: ['ChickenHotty'],
        'heading-regular': ['PlayfairDisplay-Regular'],
        'heading-medium': ['PlayfairDisplay-Medium'],
        'heading-semibold': ['PlayfairDisplay-SemiBold'],
        'heading-bold': ['PlayfairDisplay-Bold'],
        'body-regular': ['Inter_400Regular'],
        'body-medium': ['Inter_500Medium'],
        'body-bold': ['Inter_700Bold'],
      },
    },
  },
  plugins: [],
};
