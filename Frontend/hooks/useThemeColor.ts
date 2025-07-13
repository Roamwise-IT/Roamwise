/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

/**
 * Hook to get a themed color value.
 * It checks for explicit light/dark overrides via props,
 * then falls back to Colors defined in theme.
 *
 * @param props - Optional overrides: { light?: string; dark?: string }
 * @param colorName - The key name from Colors.light/dark to use as fallback
 * @returns Color string based on current color scheme or overrides
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
): string {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[theme][colorName];
}
