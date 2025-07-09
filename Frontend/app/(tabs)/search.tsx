import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

// ✅ Custom components
import SearchBar from "../../components/search-bar";         // Search bar at the top
import QuestionCard from "../../components/question-card";   // "Have you passed KFC?" yes/no
import StoreCard from "@/components/store-card";             // Store info cards

export default function Search() {
  const [query, setQuery] = useState(""); // 🔍 Search input state

  return (
    <View style={styles.container}>
      {/* 🔎 Search Bar at the top */}
      <SearchBar
        value={query}
        onChangeText={setQuery}
        onSubmit={() => console.log("Search:", query)}
        onClear={() => setQuery("")}
      />

      {/* ❓ Question Prompt with Yes / No logic */}
      <QuestionCard
        question="Have you passed KFC?"
        onYes={() => console.log("User said YES")}
        onNo={() => console.log("User said NO")}
      />

      {/* 🏬 Store Cards */}
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

      {/* 🧪 You can later replace the above StoreCards with a loop and filter via query */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3", // 🖼️ Soft light grey background (like your mockup)
  },
});
