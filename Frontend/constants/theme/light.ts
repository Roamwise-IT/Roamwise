import { colors } from "../colors";

export const lightTheme = {
  // Base backgrounds
  background: colors.white, // App screen background
  surface: colors.greyLight, // Cards, containers, panels

  // Text styles
  text: {
    primary: colors.black, // Main content
    secondary: colors.greyDeep, // Subtext, labels
    tertiary: colors.greyMedium, // Less prominent text
    placeholder: colors.greyDark, // Placeholder input
  },

  // Border styles
  border: {
    active: colors.red, // Focused/highlighted
    muted: colors.greyDark, // Subtle borders
  },

  // Button styling
  button: {
    background: colors.black, // Primary button background
    text: colors.white, // Text on primary button
  },

  // Navigation bar
  nav: {
    background: colors.white, // Nav bar bg
    activeTint: colors.red, // Selected icon/text
    inactiveTint: colors.greyDeep, // Unselected icon/text
  },

  // Header / top bar
  header: {
    background: colors.red, // Top bar background
    text: colors.white, // Title/logo color
  },

  // Search bar styles
  search: {
    background: colors.greyLight, // Input bg
    border: colors.greyMedium, // Subtle border
    icon: colors.red, // Main icon
    iconMuted: colors.greyDeep, // Secondary icon
    placeholder: colors.greyMedium, // Placeholder text
    text: colors.black, // User input
  },
};
