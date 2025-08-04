import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function MallCard({ mall }) {
  const router = useRouter();

  return (
    <Pressable style={styles.card} onPress={() => router.push(`/mall/${mall.mall_id}`)}>
      <Text style={styles.name}>{mall.name}</Text>
      <Text style={styles.desc}>{mall.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#222", padding: 15, borderRadius: 8, marginBottom: 12 },
  name: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  desc: { color: "#aaa", marginTop: 4 },
});
