import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopSearchBar from "@/components/TopSearchBar";
import Question from "@/components/Question";
import StoreCard from "@/components/StoreCard";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <TopSearchBar />
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <Question />
        <StoreCard />
        <StoreCard />
        <StoreCard />
      </ScrollView>
    </SafeAreaView>
  );
}
