// src/constants/colors.ts

/** ------------------------------
 * BRAND COLORS
 * ------------------------------ */
export const brand = {
  snow: "#FCF7F8", // Snow — off-white
  engineering_orange: "#C00000", // Primary brand red
  eerie_black: "#232221", // Dark background
};

/** ------------------------------
 * COLOR SCALES — HSL-generated
 * ------------------------------ */
export const redScale = {
  50: "#FFE5E5",
  100: "#FFB2B2",
  200: "#FF7F7F",
  300: "#FE4C4C",
  400: "#FF1919",
  500: "#E50000",
  600: "#B20000",
  700: "#7F0000",
  800: "#5B0000",
  900: "#3D0000",
};

export const neutralScale = {
  50: "#F2F2F1",
  100: "#E6E5E4",
  200: "#CDCCCA",
  300: "#B4B2B0",
  400: "#8F8C88",
  500: "#696563",
  600: "#4E4C4A",
  700: "#343231",
  800: "#1F1E1D",
  900: "#151413",
};

export const snowScale = {
  50: "#FFFFFF",
  100: "#FEFBFB",
  200: "#FCF7F8",
  300: "#F8F0F1",
  400: "#F3E8E9",
  500: "#E9D6D8",
  600: "#D7B3B6",
  700: "#B98B8E",
  800: "#8C6769",
  900: "#5F4446",
};

/** ------------------------------
 * FEEDBACK COLORS — Single values only
 * ------------------------------ */
export const feedback = {
  success: "#1FA463", // green
  warning: "#F5A623", // amber
  error: "#D64545", // crimson (different from brand red)
};

/** ------------------------------
 * SEMANTIC TOKENS
 * ------------------------------ */
export const colors = {
  // Brand
  primary: redScale[500],
  primaryLight: redScale[400],
  primaryDark: redScale[600],

  // Text
  text: snowScale[50],
  textSecondary: neutralScale[300],
  textMuted: neutralScale[500],
  textOnLight: brand.eerie_black,

  // Surfaces
  background: brand.eerie_black,
  surface: brand.snow,
  surfaceAlt: neutralScale[100],

  // Borders
  borderLight: neutralScale[200],
  border: neutralScale[300],

  // States
  success: feedback.success,
  warning: feedback.warning,
  error: feedback.error,
  disabledBg: neutralScale[200],
  disabledText: neutralScale[500],

  // Overlays
  overlay: "rgba(35, 34, 33, 0.4)",
  scrim: "rgba(0, 0, 0, 0.6)",
};

// --- Theme maps (NEW) ----------------------------------------------
// `colors` already defined matches DARK by design (eerie_black bg).
//
export const darkTheme = {
  ...colors, // your current semantic tokens (dark-first)
};

export const lightTheme = {
  ...colors,
  // flip the core surfaces & text for light mode
  background: brand.snow,
  surface: "#FFFFFF",
  surfaceAlt: snowScale[200],
  text: brand.eerie_black,
  textSecondary: neutralScale[700],
  textMuted: neutralScale[500],
  textOnLight: brand.eerie_black,
  // borders feel lighter in light mode
  borderLight: snowScale[400],
  border: neutralScale[300],
  // overlays tuned for light bg
  overlay: "rgba(23, 20, 19, 0.12)",
  scrim: "rgba(0, 0, 0, 0.55)",
};

// Unified export for theme-aware consumers (hooks/components)
export const Colors = {
  light: lightTheme,
  dark: darkTheme,
};

export default colors;
