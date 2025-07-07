/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const orange = "#FF7800"; // Flamenco
const white = "#EBEBEB"; // Gallery
const black = "#201E1D"; // Aztec
const gray = "#CFCCC9"; // Celeste

const orange10 = "#8C7F73";
const orange20 = "#997E66";
const orange30 = "#A67D59";
const orange40 = "#B27C4D";
const orange50 = "#BF7C40";
const orange60 = "#CC7B33";
const orange70 = "#D97A26";
const orange80 = "#E67A19";
const orange90 = "#F2790D";

// const tintColorLight = orange;
// const tintColorDark = white;

const tintColor = orange;

export const Colors = {
  light: {
    text: black,
    background: white,
    tint: tintColor,
    icon: black,
    tabIconDefault: gray,
    tabIconSelected: tintColor,
  },
  dark: {
    text: white,
    background: black,
    tint: tintColor,
    icon: white,
    tabIconDefault: gray,
    tabIconSelected: tintColor,
  },
};
