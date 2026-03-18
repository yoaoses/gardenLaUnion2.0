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
        // VERDE JADE — color protagonista (uniforme, tartán)
        "gc-green": {
          "50":      "#EBF5F3",
          "100":     "#B8DDD5",
          "light":   "#5EAA9A",
          DEFAULT:   "#3D8578",
          "dark":    "#2D6A5F",
          "800":     "#1F4F46",
          "900":     "#143832",
        },
        // NAVY — base oscura (fondo tartán, hero, footer)
        "gc-navy": {
          "50":    "#E8ECF2",
          "light": "#2D4470",
          DEFAULT: "#1B2A4A",
          "dark":  "#111B33",
        },
        // DORADO — acento divino + CTA principal
        "gc-gold": {
          "50":    "#FAF6EB",
          "light": "#D4B84E",
          DEFAULT: "#B8943B",
          "dark":  "#7A6A2E",
        },
        // ROJO — solo errores y alertas
        "gc-red": {
          DEFAULT: "#C62828",
          "light": "#E53935",
        },
        // Neutros
        "gc-white":     "#FAFAF8",
        "gc-warm":      "#FAFAF8",
        "gc-cream":     "#F7F4ED",
        "gc-gray-100":  "#F0EDE6",
        "gc-gray-200":  "#E0DCD4",
        "gc-gray-500":  "#8A8578",
        "gc-gray-700":  "#4A4640",
        "gc-gray-900":  "#2A2825",
        // Alias semánticos
        "gc-success":   "#2E7D32",
        "gc-warning":   "#F57F17",
        "gc-error":     "#C62828",
        "gc-info":      "#1565C0",
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
