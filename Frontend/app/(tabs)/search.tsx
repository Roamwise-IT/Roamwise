import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import StoreCard from "@/components/store-card";
import ThemeToggle from "@/components/theme-toggle";
import { getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useTheme } from "@/providers/theme-provider";
import QuestionCard from "../../components/question-card";
import SearchBar from "../../components/search-bar";

export default function Search() {
  const [query, setQuery] = useState("");
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* 🔎 Search bar and toggle */}
        <View style={[styles.searchWrapper, { backgroundColor: colors.tint }]}>
          <SearchBar
            value={query}
            onChangeText={setQuery}
            onSubmit={() => console.log("Search:", query)}
            onClear={() => setQuery("")}
          />
          <ThemeToggle />
        </View>

        {/* 🔲 Top divider after orange area */}
        <View style={{ height: 1, backgroundColor: colors.surface }} />

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

      {/* 🟧 Bottom border above nav bar */}
      <View style={{ height: 2, backgroundColor: colors.tint }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    paddingTop: Spacing.huge * 2.5, // 40
    paddingBottom: Spacing.md, // 10
    paddingHorizontal: Spacing.xl, // 12
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
