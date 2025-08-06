import { useTheme } from "@/constants/theme";

export function useThemeColor(path: string): string {
  const theme = useTheme();
  const keys = path.split(".");
  let color: any = theme;

  for (const key of keys) {
    if (color && key in color) {
      color = color[key];
    } else {
      console.warn(`Invalid color path: ${path}`);
      return "#000000";
    }
  }

  return color;
}
