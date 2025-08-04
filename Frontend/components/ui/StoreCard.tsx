import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StoreCard({ store }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{store.name}</Text>
      <Text style={styles.category}>{store.category}</Text>
      <Text style={styles.meta}>
        Open | {store.hours?.open || "09:00"} - {store.hours?.close || "17:00"} | Floor Level: {store.floor}
      </Text>
      <Text style={styles.recommendations}>
        Placeholder: Recommendations / Promos / Discounts
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#222", padding: 15, borderRadius: 8, marginVertical: 8 },
  name: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  category: { color: "#aaa" },
  meta: { color: "#aaa", marginTop: 4 },
  recommendations: { color: "#ccc", marginTop: 8 },
});
