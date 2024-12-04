/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['"Noto Sans Thai"', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1d4ed8",   // Customize primary color
          "secondary": "#9333ea", // Customize secondary color
          "accent": "#22c55e",    // Customize accent color
          "neutral": "#3d4451",   // Customize neutral color
          "base-100": "#ffffff",  // Background color
          "info": "#3b82f6",      // Info color
          "success": "#16a34a",   // Success color
          "warning": "#f59e0b",   // Warning color
          "error": "#dc2626",     // Error color
        },
      },
    ],
  },
};
