import { colors } from "./colors";

export const theme = {
  light: {
    // Base backgrounds
    background: colors.white.pure,
    surface: colors.white.soft,

    // Text styles
    text: {
      primary: colors.black.pure,
      secondary: colors.gray.dark,
      tertiary: colors.gray.medium,
      placeholder: colors.gray.soft,
    },

    // Border styles
    border: {
      active: colors.red,
      muted: colors.gray.light,
    },

    // Button styling
    button: {
      background: colors.gray.light,
      text: colors.black.pure,
    },

    // Navigation bar
    nav: {
      background: colors.white.bone,
      activeTint: colors.red,
      inactiveTint: colors.gray.medium,
    },

    // Header / top bar
    header: {
      background: colors.red,
      text: colors.white.pure,
    },

    // Search bar
    search: {
      background: colors.white.soft,
      border: colors.gray.medium,
      icon: colors.red,
      iconMuted: colors.gray.medium,
      placeholder: colors.gray.soft,
      text: colors.black.pure,
    },
  },

  dark: {
    // Base backgrounds
    background: colors.black.pure,
    surface: colors.black.charcoal,

    // Text styles
    text: {
      primary: colors.white.pure,
      secondary: colors.gray.medium,
      tertiary: colors.gray.soft,
      placeholder: colors.gray.dark,
    },

    // Border styles
    border: {
      active: colors.red,
      muted: colors.gray.light,
    },

    // Button styling
    button: {
      background: colors.gray.light,
      text: colors.black.pure,
    },

    // Navigation bar
    nav: {
      background: colors.black.soft,
      activeTint: colors.red,
      inactiveTint: colors.gray.light,
    },

    // Header / top bar
    header: {
      background: colors.red,
      text: colors.white.pure,
    },

    // Search bar
    search: {
      background: colors.white.pure,
      border: colors.black.pure,
      icon: colors.red,
      iconMuted: colors.gray.dark,
      placeholder: colors.gray.soft,
      text: colors.black.pure,
    },
  },
};
