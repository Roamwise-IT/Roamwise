import { getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useTheme } from "@/providers/theme-provider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  onClear?: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onSubmit,
  onClear,
}: Props) {
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
      <Ionicons
        name="search"
        size={20}
        color={colors.icon}
        style={styles.icon}
      />
      <TextInput
        style={[styles.searchInput, { color: colors.text }]}
        placeholder="Search"
        placeholderTextColor={colors.placeholder}
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
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: Spacing.xl, // 12
    paddingVertical: Spacing.sm, // 6
    flex: 1,
    marginRight: Spacing.xl, // 12
  },
  icon: {
    marginRight: Spacing.md, // 8
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingRight: Spacing.lg, // 10
    paddingVertical: Spacing.xs, // 4
  },
});
