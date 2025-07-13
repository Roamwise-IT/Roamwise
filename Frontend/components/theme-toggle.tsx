import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/providers/theme-provider";
import { getColors } from "@/constants/Colors";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const colors = getColors(theme);

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.button}>
      <Ionicons
        name={theme === "light" ? "moon" : "sunny"}
        color={theme === "light" ? colors.card : colors.surface}
        size={24}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    margin: 16,
  },
});
