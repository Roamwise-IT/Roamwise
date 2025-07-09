// File: app/_layout.tsx

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import { ThemeProvider, useTheme } from '@/providers/theme-provider';
import { getColors } from '@/constants/Colors';

function InnerLayout() {
  const { theme } = useTheme();
  const colors = getColors(theme);

  useEffect(() => {
    // ✅ Set Android navigation bar background color to the app's tint
    SystemUI.setBackgroundColorAsync(colors.tint);
  }, [theme]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.tint }]}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
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
