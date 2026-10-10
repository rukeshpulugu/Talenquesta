import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./config/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#030406",
        charcoal: "#0c1016",
        panel: "#10151c",
        line: "#1d2631",
        electric: "#1e90ff",
        cyan: "#22d3ee",
        gold: "#f5b82e",
        mist: "#9aa7b8",
      },
      fontFamily: { sans: ["var(--font-body)", "system-ui", "sans-serif"], display: ["var(--font-display)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
