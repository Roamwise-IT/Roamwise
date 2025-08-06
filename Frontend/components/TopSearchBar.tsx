import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  colors,
  darkTheme,
  spacing,
  margins,
  padding,
  borderRadius,
  borderWidth,
  sizes,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
} from "@/constraints";

export default function TopSearchBar() {
  return (
    <View>
      {/* Red Background for the search bar */}
      <View
        style={{
          backgroundColor: darkTheme.header.background,
          padding: padding.lg,
          borderTopLeftRadius: borderRadius.default,
          borderTopRightRadius: borderRadius.default,
        }}
      >
        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: darkTheme.search.background,
            borderRadius: borderRadius.md,
            paddingHorizontal: padding.horizontalSm,
            borderColor: darkTheme.search.border,
            borderWidth: borderWidth.thin, // full border
          }}
        >
          <Ionicons
            name="search"
            size={20}
            color={darkTheme.search.iconMuted}
          />
          <TextInput
            placeholder="Search stores..."
            placeholderTextColor={darkTheme.text.placeholder}
            style={{
              flex: 1,
              padding: padding.sm,
              fontSize: fontSizes.base,
            }}
          />
          <TouchableOpacity>
            <Ionicons
              name="options"
              size={24}
              color={darkTheme.border.active}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Grey Strip for Direction Hint */}
      <View
        style={{
          backgroundColor: darkTheme.background, // Grey background for the strip
          paddingVertical: padding.header, // Vertical padding inside the strip
          borderBottomColor: darkTheme.header.background, // Thin red underline for style
          borderBottomWidth: borderWidth.thick,
          borderLeftWidth: borderWidth.thin,
          borderRightWidth: borderWidth.thin,
          borderBottomLeftRadius: borderRadius.default, // Rounded left bottom corner
          borderBottomRightRadius: borderRadius.default,
          margin: spacing.edgePull, //makes sure that strip overs both sides
        }}
      >
        <Text
          style={{
            color: darkTheme.text.primary,
            fontSize: fontSizes.mdPlus,
            right: -50,
          }}
        >
          Turn right by the KFC
        </Text>
      </View>
    </View>
  );
}
