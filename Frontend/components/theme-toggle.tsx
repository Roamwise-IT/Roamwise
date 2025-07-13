import { getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useTheme } from "@/providers/theme-provider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

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
    margin: Spacing.huge,
  },
});
