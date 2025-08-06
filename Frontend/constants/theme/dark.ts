import { colors } from "../colors";

export const darkTheme = {
  background: colors.black,
  surface: colors.charcoal,
  text: {
    primary: colors.white,
    secondary: colors.greyMedium,
    tertiary: colors.greyDark,
    placeholder: colors.greyDeep,
  },
  border: {
    active: colors.red,
    muted: colors.greyLight,
  },
  button: {
    background: colors.greyLight,
    text: colors.black,
  },
  nav: {
    background: colors.black,
    activeTint: colors.red,
    inactiveTint: colors.greyLight,
  },
  header: {
    background: colors.red,
    text: colors.white,
  },
  search: {
    background: colors.white,
    border: colors.pureBlack,
    icon: colors.red,
    iconMuted: colors.greyDeep,
    placeholder: colors.greyDark,
    text: colors.black,
  },
};
