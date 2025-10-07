/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
    "./index.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
        'coolvetica': ['Coolvetica', 'sans-serif'],
      },
      colors: {
        "core-templates-colors-neutrals-neutral-200":
          "var(--core-templates-colors-neutrals-neutral-200)",
        "core-templates-colors-neutrals-neutral-300":
          "var(--core-templates-colors-neutrals-neutral-300)",
        "core-templates-colors-neutrals-neutral-600":
          "var(--core-templates-colors-neutrals-neutral-600)",
        "core-templates-colors-neutrals-neutral-800":
          "var(--core-templates-colors-neutrals-neutral-800)",
        "core-templates-colors-neutrals-white":
          "var(--core-templates-colors-neutrals-white)",
        "core-templates-colors-neutrals-white-duplicate":
          "var(--core-templates-colors-neutrals-white-duplicate)",
        "neutral-100": "var(--neutral-100)",
        "neutral-600": "var(--neutral-600)",
        "neutral-800": "var(--neutral-800)",
      },
      fontFamily: {
        "display-3-bold": "var(--display-3-bold-font-family)",
        "paragraph-default": "var(--paragraph-default-font-family)",
        "text-single-200-regular": "var(--text-single-200-regular-font-family)",
        "text-single-300-bold": "var(--text-single-300-bold-font-family)",
      },
    },
  },
  plugins: [],
}