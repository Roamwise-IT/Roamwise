import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
} from "@/constants";

export default function Question() {
  return (
    <View style={styles.container}>
      {/* Left: Question text */}
      <Text style={styles.text}>HAVE YOU PASSED KFC?</Text>

      {/* Right: Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.noButton]}>
          <Ionicons name="close" size={24} color={darkTheme.button.text} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.yesButton]}>
          <Ionicons name="checkmark" size={29} color={darkTheme.button.text} />{" "}
          {/*making the check mark bigger than the "close" so they look more even
          in size*/}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.surface,
    padding: padding.lg,
    borderRadius: borderRadius.default,
    marginVertical: margins.verticalMd,
    flexDirection: "row", // <-- Put text & buttons on the same row
    justifyContent: "space-between", // <-- Push them apart
    alignItems: "center", // <-- Align vertically in the center
    borderLeftWidth: borderWidth.thin, // Border on the left side
    borderBottomWidth: borderWidth.thick, // Border on the bottom side
    borderRightWidth: borderWidth.thin, // Border on the right side
    borderColor: darkTheme.border.muted,
  },
  text: {
    color: darkTheme.text.primary,
    fontSize: fontSizes.xl,
    flexShrink: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    width: sizes.buttonWidth,
    height: sizes.buttonHeight,
    borderRadius: borderRadius.button,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: margins.leftSm,
  },
  noButton: {
    backgroundColor: darkTheme.button.background,
  },
  yesButton: {
    backgroundColor: darkTheme.button.background,
  },
});
