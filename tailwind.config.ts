import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right, #477E24,#7bb357,  #477E24)",
      },
      backgroundColor: {
        primary: "#477E24",
        secondary: "#407321",
        button: "#69994E",
      },
      colors: {
        primary: "#477E24",
        secondary: "#69994E",
      },
    },
  },
};
export default config;
