import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/providers/theme-provider";
import { Colors, getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import ThemeToggle from "@/components/theme-toggle";

type TopBarProps = {
  mode: "home" | "search";
  searchValue?: string;
  onChangeSearch?: (text: string) => void;
  onSearchSubmit?: () => void;
  onClearSearch?: () => void;
};

export default function TopBar({
  mode,
  searchValue = "",
  onChangeSearch,
  onSearchSubmit,
  onClearSearch,
}: TopBarProps) {
  const { theme } = useTheme();
  const colors = getColors(theme);

  if (mode === "search") {
    return (
      <View style={[styles.container, { backgroundColor: colors.tint }]}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color={Colors.neutral.black}
            style={styles.icon}
          />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search"
            placeholderTextColor={colors.placeholder}
            value={searchValue}
            onChangeText={onChangeSearch}
            onSubmitEditing={onSearchSubmit}
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
            clearButtonMode="never"
          />
          {searchValue.length > 0 && (
            <TouchableOpacity onPress={onClearSearch}>
              <Ionicons name="close" size={20} color={colors.icon} />
            </TouchableOpacity>
          )}
        </View>
        <ThemeToggle />
      </View>
    );
  }

  // Default to home mode: just the theme toggle aligned right
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.tint, justifyContent: "flex-end" },
      ]}
    >
      <ThemeToggle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Platform.OS === "ios" ? Spacing.sm + 6 : Spacing.sm, // tweak for status bar height
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Colors.neutral.white,
    marginRight: Spacing.xl,
  },
  icon: {
    marginInline: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingRight: Spacing.lg,
    paddingVertical: Spacing.xs,
  },
});
