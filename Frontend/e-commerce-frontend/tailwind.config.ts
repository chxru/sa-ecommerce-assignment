import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-non-hovered': 'linear-gradient(to bottom right, #customHexColor2, #customHexColor3)',
        'gradient-hovered': 'linear-gradient(to bottom right, #customHoveredColor2, #customHoveredColor3)',
      },
      colors: {
        customHexColor1: '#e76f51',
        customHexColor2: '#560bad',
        customHexColor3: '#f72585',
        customHexColor4: '#3f37c9',
        customHexColor5: '#e9c46a',
      }
    },
  },
  darkMode:"class",
  plugins: [nextui()],
}
export default config
