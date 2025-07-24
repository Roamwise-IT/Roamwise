import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeCard from "../../components/ui/WelcomeCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <WelcomeCard username="Mitheel" favouriteMall="Eastgate Mall" />
      </ScrollView>
    </SafeAreaView>
  );
}
