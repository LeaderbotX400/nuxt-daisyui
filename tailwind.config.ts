/* eslint-disable no-undef */
import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require("@tailwindcss/typography"),
    require("daisyui"),
  ],
} as Config;
