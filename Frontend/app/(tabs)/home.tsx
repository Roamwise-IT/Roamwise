import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "@/components/HeaderBar";
import WelcomeCard from "@/components/WelcomeCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <HeaderBar mallName="Eastgate Mall" />
      <ScrollView style={{ padding: 15 }}>
        <WelcomeCard username="Mitheel" favouriteMall="Eastgate Mall" />
      </ScrollView>
    </SafeAreaView>
  );
}
