import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/providers/theme-provider';
import { getColors } from '@/constants/Colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  onClear?: () => void;
};

export default function SearchBar({ value, onChangeText, onSubmit, onClear }: Props) {
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.tint }]}>
      <View style={[styles.searchContainer, { backgroundColor: colors.background }]}>
        <Ionicons
          name="search"
          size={20}
          color={colors.icon}
          style={{ marginRight: 8 }}
        />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Search"
          placeholderTextColor={colors.icon}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
        />
        {value.length > 0 && (
          <TouchableOpacity onPress={onClear}>
            <Ionicons name="close" size={20} color={colors.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: '100%',
    maxWidth: 500,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingRight: 10,
    paddingVertical: 0,
  },
});
