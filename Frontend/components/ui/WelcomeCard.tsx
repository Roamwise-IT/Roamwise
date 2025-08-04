import React from "react";
import { View, Text, Image } from "react-native";
import { colors, darkTheme, spacing, margins, padding, borderRadius, borderWidth, sizes, fontFamilies, fontSizes, fontWeights, lineHeights } from "../../constraints";

export default function WelcomeCard({ username, favouriteMall }: { username: string; favouriteMall: string }) {
  return (
    <View style={{
       backgroundColor: darkTheme.surface,
        padding: padding.xl,
        borderRadius: borderRadius.lg, 
        flexDirection: "row",
        alignItems: "center", 
        borderLeftWidth: 	borderWidth.thin, 
        borderRightWidth: 	borderWidth.thin,
        borderBottomWidth: 	borderWidth.thick,
        borderColor: darkTheme.border.muted,}}>
      <Image
        source={require("../../assets/images/image.png")}
        style={{ width: 80, height: 80, borderRadius: borderRadius.image, marginRight: margins.topMd, marginLeft: margins.leftOffset }}
      />
      <View>
        <Text style={{ fontSize: fontSizes.xxl, fontWeight: "bold", color: darkTheme.text.primary }}>WELCOME BACK!</Text>
        <Text style={{ fontSize: fontSizes.lg, color:darkTheme.text.primary, marginTop: margins.topSm, textTransform: "uppercase",   fontWeight: "bold",textShadowColor: darkTheme.header.background,textShadowOffset: { width: 2, height: 2 },textShadowRadius: 2,}}>{username}</Text>
        <Text style={{ fontSize: fontSizes.md, color: darkTheme.text.secondary, marginTop: margins.topMd }}>
          Favourite Mall: {favouriteMall}
        </Text>
      </View>
    </View>
  );
}
