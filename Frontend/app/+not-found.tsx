import { getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useTheme } from "@/providers/theme-provider";
import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NotFoundScreen() {
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <>
      <Stack.Screen options={{ title: "Oops! Page Not Found" }} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          404 — Page Not Found
        </Text>
        <Text style={[styles.message, { color: colors.subtext }]}>
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </Text>
        <Link href="/" style={[styles.link, { color: colors.tint }]}>
          ← Go back to Home
        </Link>
        <TouchableOpacity
          onPress={() => window.history.back()}
          style={[styles.backButton, { borderColor: colors.tint }]}
        >
          <Text style={[styles.backButtonText, { color: colors.tint }]}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: Spacing.md,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: Spacing.lg,
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
    marginBottom: Spacing.lg,
  },
  backButton: {
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.xl,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
