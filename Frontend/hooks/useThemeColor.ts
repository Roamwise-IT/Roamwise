// src/hooks/useThemeColor.ts
import { Colors } from "@/constants/colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.dark, // keys must exist in both themes
) {
  const theme = useColorScheme() ?? "dark"; // defaults to dark if not specified
  const colorFromProps = props[theme];
  return colorFromProps ?? Colors[theme][colorName];
}
