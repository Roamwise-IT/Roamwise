import { colors } from "./colors";


export const darkTheme = {
  // Base backgrounds
  background: colors.black,       // App screen background
  surface: colors.charcoal,       // Cards, containers, panels

  // Text styles
  text: {
    primary: colors.white,        // Primary content text
    secondary: colors.greyMedium, // Subtext, labels
    tertiary: colors.greyDark,    // Less prominent text
    placeholder: colors.greyDeep, // Placeholder or muted input text
  },

  // Border styles
  border: {
    active: colors.red,           // Focused/highlighted state (e.g., input)
    muted: colors.greyLight,      // Default or subtle borders
  },

  // Button styling
  button: {
    background: colors.greyLight, // Light grey buttons
    text: colors.black,           // Text on light buttons
  },

  // Navigation bar (tab bar, bottom nav)
  nav: {
    background: colors.black,     // Background of nav bar
    activeTint: colors.red,       // Selected icon/text color
    inactiveTint: colors.greyLight, // Unselected icon/text color
  },

  // App header or top bar
  header: {
    background: colors.red,       // Top bar background (primary theme)
    text: colors.white,           // Logo or title text
  },

  // Search bar-specific styles
  search: {
    background: colors.white,      // Input field background
    border: colors.pureBlack,      // Solid black border
    icon: colors.red,              // Main icon (e.g. magnifying glass)
    iconMuted: colors.greyDeep,    // Secondary icon (e.g. filter)
    placeholder: colors.greyDark,  // Placeholder text color
    text: colors.black,            // User input text color       
}
};