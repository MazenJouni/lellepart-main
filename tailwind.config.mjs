/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      
      // Primary colors - Blues
      
      primary: {
        50: '#e6f7ff',
        100: '#bae7ff',
        200: '#91d5ff',
        300: '#69c0ff',
        400: '#40a9ff',
        500: '#2193b0', // Main primary color
        600: '#096dd9',
        700: '#0050b3',
        800: '#003a8c',
        900: '#002766',
      },

      // Secondary colors - Teals
      secondary: {
        50: '#e6fffb',
        100: '#b5f5ec',
        200: '#87e8de',
        300: '#5cdbd3',
        400: '#36cfc9',
        500: '#6dd5ed', // Main secondary color
        600: '#13a8a8',
        700: '#0a8b8b',
        800: '#006d75',
        900: '#00474f',
      },

      // Accent colors
      accent: {
        50: '#fff1f0',
        100: '#ffccc7',
        200: '#ffa39e',
        300: '#ff7875',
        400: '#ff4d4f',
        500: '#f5222d',
        600: '#cf1322',
        700: '#a8071a',
        800: '#820014',
        900: '#5c0011',
      },

      // Background colors
      background: {
        light: '#f8fafc',
        DEFAULT: '#ffffff',
        dark: '#1a202c',
      },

      // Text colors
      text: {
        primary: '#1a202c',
        secondary: '#64748b',
        light: '#94a3b8',
      },

      // Border colors
      border: {
        light: 'rgba(0, 0, 0, 0.05)',
        DEFAULT: 'rgba(0, 0, 0, 0.1)',
        dark: 'rgba(0, 0, 0, 0.15)',
      },

      // Shadow colors
      shadow: {
        light: 'rgba(33, 147, 176, 0.1)',
        DEFAULT: 'rgba(0, 0, 0, 0.1)',
        dark: 'rgba(0, 0, 0, 0.2)',
      },

      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      // Add gradient configurations
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #2193b0, #6dd5ed)',
        'primary-gradient-alt': 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
        'shimmer-gradient': 'linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
