import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-non-hovered":
          "linear-gradient(to bottom right, #customHexColor2, #customHexColor3)",
        "gradient-hovered":
          "linear-gradient(to bottom right, #customHoveredColor2, #customHoveredColor3)",
      },
      colors: {
        customHexColor1: "#e76f51",
        customHexColor2: "#560bad",
        customHexColor3: "#f72585",
        customHexColor4: "#3f37c9",
        customHexColor5: "#e9c46a",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
