export const Colors = {
  orange: {
    light: "#FFE5D0",
    hover: "#FF8533",
    base: "#F76B0E", // Pumpkin
    pressed: "#C2560B",
    dark: "#5A2905",
  },

  // Neutral palette
  neutral: {
    white: "#EFEFEF", // Cultured
    light: "#F6F6F6", // Sea Salt
    base: "#3D3B40", // Jet
    dark: "#1A191B", // Eerie Black
    black: "#121113", // Smoky Black
  },

  // Light theme
  light: {
    text: "#121113", // neutral.black
    subtext: "#555",
    background: "#EFEFEF", // neutral.white
    card: "#FFFFFF",
    surface: "#F6F6F6", // neutral.light
    placeholder: "#3D3B40", // neutral.base
    tint: "#F76B0E", // orange.base
    icon: "#121113", // neutral.black
    tabIconDefault: "#3D3B40", // neutral.base
    tabIconSelected: "#F76B0E", // orange.base
  },

  // Dark theme
  dark: {
    text: "#EFEFEF", // neutral.white
    subtext: "#AAA",
    background: "#121113", // neutral.black
    card: "#1A191B", // neutral.dark
    surface: "#1E1E1E",
    placeholder: "#888",
    tint: "#F76B0E", // orange.base
    icon: "#EFEFEF", // neutral.white
    tabIconDefault: "#3D3B40", // neutral.base
    tabIconSelected: "#F76B0E", // orange.base
  },
};

// Helper to access color scheme
export const getColors = (scheme: "light" | "dark" = "light") => {
  return Colors[scheme];
};
