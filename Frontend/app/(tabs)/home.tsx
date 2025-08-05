import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/ui/HeaderBar";
import WelcomeCard from "../../components/ui/WelcomeCard";
import { colors, darkTheme, spacing, margins, padding, borderRadius, borderWidth, sizes, fontFamilies, fontSizes, fontWeights, lineHeights } from "../../constraints";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkTheme.background}}>
      <HeaderBar mallName="Eastgate Mall" />
      <ScrollView style={{ padding: padding.lg }}>
        <WelcomeCard username="Mitheel" favouriteMall="Eastgate Mall" />
      </ScrollView>
    </SafeAreaView>
  );
}
