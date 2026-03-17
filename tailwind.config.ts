import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gc-gold": "#C5A835",
        "gc-gold-light": "#D4BC5E",
        "gc-gold-dark": "#9E8529",
        "gc-navy": "#1B2A4A",
        "gc-navy-light": "#2D4470",
        "gc-red": "#C62828",
        "gc-red-light": "#E53935",
        "gc-white": "#FAFAF8",
        "gc-cream": "#F5F0E8",
        "gc-gray-100": "#F0EDE6",
        "gc-gray-200": "#E0DCD4",
        "gc-gray-500": "#8A8578",
        "gc-gray-700": "#4A4640",
        "gc-gray-900": "#2A2825",
        // Alias semánticos
        "gc-success": "#2E7D32",
        "gc-warning": "#F57F17",
        "gc-error": "#C62828",
        "gc-info": "#1565C0",
      },
      fontFamily: {
        display: ["var(--font-lora)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
