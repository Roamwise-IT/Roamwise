// File: app/_layout.tsx

import { getColors } from "@/constants/Colors";
import { ThemeProvider, useTheme } from "@/providers/theme-provider";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

function InnerLayout() {
  const { theme } = useTheme();
  const colors = getColors(theme);

  useEffect(() => {
    async function setNavBarColor() {
      await SystemUI.setBackgroundColorAsync(colors.tint);
    }
    setNavBarColor();
  }, [theme, colors.tint]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.tint }]}>
      <StatusBar
        barStyle={theme === "light" ? "dark-content" : "light-content"}
        backgroundColor={colors.tint}
      />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <InnerLayout />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
