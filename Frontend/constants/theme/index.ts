import { useColorScheme } from "@/hooks/useColorScheme";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const useTheme = () => {
  const scheme = useColorScheme();

  if (scheme === "dark") {
    return darkTheme;
  }

  return lightTheme; // fallback or just return darkTheme if you don’t have light
};
