import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopSearchBar from "../../components/ui/TopSearchBar";
import Question from "../../components/ui/Question";
import StoreCard from "../../components/ui/StoreCard";
import { colors, darkTheme, spacing, margins, padding, borderRadius, borderWidth, sizes, fontFamilies, fontSizes, fontWeights, lineHeights } from "../../constraints";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkTheme.background}}>
      <TopSearchBar />
      <ScrollView contentContainerStyle={{ padding: padding.lg }}>
        <Question />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ScrollView>
    </SafeAreaView>
  );
}
