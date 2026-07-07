/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fdfaf6",
        foreground: "#10233f",
        navy: "#0b2341",
        primary: {
          DEFAULT: "#1261a6",
          hover: "#0d4f8b",
        },
        secondary: "#eaf4fc",
        surface: "#f6f9fc",
        border: "#d9e5ef",
        muted: "#5c6f82",
        focus: "#1888d4",
        warm: {
          DEFAULT: "#e8973a",
          hover: "#c97e28",
          light: "#fef6ec",
          dark: "#9a5c18",
          border: "#f5d5a3",
        },
        teal: {
          DEFAULT: "#0e9e8e",
          light: "#e6f7f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "0.75rem",
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(18, 97, 166, 0.06)",
        "card-hover": "0 8px 32px 0 rgba(18, 97, 166, 0.12)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
