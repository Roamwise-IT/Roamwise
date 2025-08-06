import { theme } from "@/constants/themes";
import { useColorScheme } from "@/hooks/useColorScheme";

// Safely retrieve nested keys like "text.primary"
function getNestedColor(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function useTheme(
  props: { light?: string; dark?: string },
  colorPath: string, // e.g., "text.primary"
) {
  const currentScheme = useColorScheme() ?? "dark";
  const overrideColor = props[currentScheme];

  if (overrideColor) {
    return overrideColor;
  }

  return getNestedColor(theme[currentScheme], colorPath);
}
