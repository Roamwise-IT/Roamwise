import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors, darkTheme, spacing, margins, padding, borderRadius, borderWidth, sizes, fontFamilies, fontSizes, fontWeights, lineHeights } from "../../constraints";



export default function HeaderBar({ mallName }: { mallName: string }) {
  
  return (
    <View>
      {/* Top red bar with logo and title */}
      <View style={styles.topBar}>
        <Image
          source={require( "../../assets/images/roamwise_square.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>ROAMWISE</Text>
      </View>
      {/* Mall name strip */}
      <View style={styles.mallStrip}>
        <Text style={styles.mallText}>{mallName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",      // Center logo + text horizontally
    backgroundColor:  darkTheme.header.background, //constaints colors
    paddingVertical: padding.header,           // Slightly taller for visual balance
    paddingHorizontal: padding.horizontal,
    borderTopLeftRadius: borderRadius.default,   // Rounded left top corner
    borderTopRightRadius: borderRadius.default,  // Rounded top-left    
  },
  logo: {
    width: sizes.logo,
    height: sizes.logo,
    marginRight: margins.rightSm, 
    resizeMode: "contain",
  },
  logoText: {
    color:  darkTheme.text.primary,
    fontSize: fontSizes.xl,
    fontWeight: "bold",
  },
  mallStrip: {
    backgroundColor: darkTheme.background,
    paddingVertical: padding.header,
    alignItems: "center",          // Center the mall name
    borderBottomColor:  darkTheme.header.background,  // Thin red underline for style
    borderBottomWidth: 	borderWidth.thick,
    borderLeftWidth: 	borderWidth.thin,
    borderRightWidth: 	borderWidth.thin,
    borderBottomLeftRadius: borderRadius.default,    // Rounded left bottom corner
    borderBottomRightRadius: borderRadius.default,
     margin: spacing.edgePull,

  },
  mallText: {
    color: darkTheme.text.primary,
    fontSize: fontSizes.mdPlus ,
     textTransform: "uppercase",
  },
});
