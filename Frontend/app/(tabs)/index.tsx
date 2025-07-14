import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/providers/theme-provider";
import { getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import TopBar from "@/components/top-bar";

export default function Index() {
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TopBar mode="home" />

      <View style={styles.content}>
        <Ionicons
          name="compass-outline"
          size={64}
          color={colors.tint}
          style={styles.icon}
        />
        <Text style={[styles.welcomeText, { color: colors.tint }]}>
          Welcome to Roamwise
        </Text>
        <Text style={[styles.subtitle, { color: colors.subtext }]}>
          Your smart indoor navigation companion
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.xl,
  },
  icon: {
    marginBottom: Spacing.md,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});
