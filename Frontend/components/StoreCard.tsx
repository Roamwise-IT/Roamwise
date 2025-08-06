import React from "react";
import { View, Text } from "react-native";
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
export default function StoreCard() {
  return (
    <View
      style={{
        backgroundColor: darkTheme.surface,
        padding: padding.lg,
        borderRadius: borderRadius.md,
        marginVertical: margins.verticalSm,
        borderLeftWidth: borderWidth.thin,
        borderRightWidth: borderWidth.thin, // grey border on the left
        borderBottomWidth: borderWidth.thick, // grey border on the bottom
        borderColor: darkTheme.border.muted,
      }}
    >
      <Text
        style={{
          color: darkTheme.text.primary,
          fontSize: fontSizes.lg,
          fontWeight: "bold",
          top: -7,
        }}
      >
        STORE NAME
      </Text>
      <Text
        style={{
          color: darkTheme.text.secondary,
          fontSize: fontSizes.xs,
          position: "absolute",
          top: 40,
          right: 10,
        }}
      >
        {" "}
        {/*to take the floor level to the top left*/}
        Floor Level: 0
      </Text>
      <Text
        style={{
          color: darkTheme.text.secondary,
          fontSize: fontSizes.sm,
          top: -30,
          right: -130,
        }}
      >
        | Store Category
      </Text>{" "}
      {/*adjusting the position of store category*/}
      <Text
        style={{
          color: darkTheme.text.secondary,
          fontSize: fontSizes.sm,
          marginTop: margins.topXs,
          top: -25,
        }}
      >
        {/*adjusting the position of the opening time*/}
        Open | 09:00 - 17:00
      </Text>
      <Text
        style={{
          color: darkTheme.text.tertiary,
          marginTop: margins.topMd,
          top: -20,
        }}
      >
        Placeholder: Recommendations / Promos / Discounts
      </Text>
    </View>
  );
}
