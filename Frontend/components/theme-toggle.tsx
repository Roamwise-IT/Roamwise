import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/providers/theme-provider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.button}>
      <Ionicons
        name={theme === 'light' ? 'moon' : 'sunny'}
        size={24}
        color={theme === 'light' ? '#444' : '#FFD700'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    margin: 16,
  },
});
