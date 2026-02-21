/** @type {import('tailwindcss').Config} */
module.exports = {
  // NativeWind v4 — content paths for all JS/TS/TSX files
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Droplo — Sky Blue primary palette
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",  // Primary brand color
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        brand: {
          DEFAULT: "#0ea5e9",   // sky-500
          light: "#38bdf8",   // sky-400
          dark: "#0369a1",   // sky-700
          surface: "#f0f9ff",   // sky-50 — card backgrounds
        },
        // Semantic tokens
        bg: {
          primary: "#ffffff",
          secondary: "#f0f9ff",
          card: "#ffffff",
        },
        text: {
          primary: "#0c4a6e",  // sky-900
          secondary: "#0369a1",  // sky-700
          muted: "#64748b",  // slate-500
          inverse: "#ffffff",
        },
        border: {
          DEFAULT: "#bae6fd",    // sky-200
          strong: "#7dd3fc",    // sky-300
        },
      },
      fontFamily: {
        sans: ["DMMono_400Regular", "System"],
        mono: ["DMMono_400Regular", "monospace"],
        bold: ["DMMono_500Medium", "System"],
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
        xl4: "2rem",
      },
    },
  },
  plugins: [],
};
