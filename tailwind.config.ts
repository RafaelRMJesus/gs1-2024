import type { Config } from "tailwindcss";



const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '114': '28rem',
        '128': '32rem',
        '144': '36rem',
      }
    }
  },
  
  plugins: [
    require('daisyui'),
  ],
};
export default config;
