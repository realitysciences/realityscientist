import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#111110", dark: "#f0efe8" },
        canvas: { DEFAULT: "#ffffff", dark: "#0f0f0e" },
        topic: {
          time: { light: "#EEEDFE", dark: "#26215C" },
          identity: { light: "#E1F5EE", dark: "#04342C" },
          structure: { light: "#FAECE7", dark: "#4A1B0C" },
          memory: { light: "#FAEEDA", dark: "#412402" },
          perception: { light: "#FBEAF0", dark: "#4B1528" },
          language: { light: "#E6F1FB", dark: "#042C53" },
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
