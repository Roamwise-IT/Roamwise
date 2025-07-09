// File: constants/Colors.ts

const orange = "#FF7800"; // Primary tint
const white = "#FFFFFF"; // Base light
const black = "#121212"; // True dark
const gray = "#A9A9A9"; // Neutral gray
const lightGray = "#F5F5F5"; // Light background
const darkGray = "#2C2C2E"; // Dark surface

export const Colors = {
  light: {
    text: black,
    subtext: "#555",
    background: lightGray,
    card: white,
    surface: "#E0E0E0",
    placeholder: gray,
    tint: orange,
    icon: black,
    tabIconDefault: gray,
    tabIconSelected: orange,
  },
  dark: {
    text: white,
    subtext: "#AAA",
    background: black,
    card: darkGray,
    surface: "#1E1E1E",
    placeholder: "#888",
    tint: orange,
    icon: white,
    tabIconDefault: gray,
    tabIconSelected: orange,
  },
};

// ✅ Helper to access color scheme based values
export const getColors = (scheme: 'light' | 'dark' = 'light') => {
  return Colors[scheme];
};
