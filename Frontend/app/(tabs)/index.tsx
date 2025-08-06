import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "@/components/HeaderBar";

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar mallName="Eastgate Mall" />
      <View style={styles.content}>
        <Text style={styles.text}>Map screen coming soon!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { color: "#fff", fontSize: 20 },
});
