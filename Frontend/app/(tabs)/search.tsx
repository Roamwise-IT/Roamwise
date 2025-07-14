import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import StoreCard from "@/components/store-card";
import QuestionCard from "@/components/question-card";
import TopBar from "@/components/top-bar";
import { getColors } from "@/constants/Colors";
import { useTheme } from "@/providers/theme-provider";

export default function Search() {
  const [query, setQuery] = useState("");
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TopBar
        mode="search"
        searchValue={query}
        onChangeSearch={setQuery}
        onSearchSubmit={() => console.log("Search:", query)}
        onClearSearch={() => setQuery("")}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* ❓ Question card */}
        <QuestionCard
          question="Have you passed KFC?"
          onYes={() => console.log("User said YES")}
          onNo={() => console.log("User said NO")}
        />

        {/* 🏬 Store cards */}
        <StoreCard
          name="KFC"
          hours="10:00 AM - 10:00 PM"
          category="Fast Food"
          floor="1"
        />
        <StoreCard
          name="Nanas"
          hours="00:00 AM - 00:00 PM"
          category="Fast Food"
          floor="1"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
