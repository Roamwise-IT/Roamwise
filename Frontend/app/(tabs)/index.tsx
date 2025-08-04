import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/ui/HeaderBar";
import { useRouter } from "expo-router";
import axios from "axios";

export default function HomeScreen() {
  const router = useRouter();
  const [malls, setMalls] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.3.37:8000/api/malls") // Replace <YOUR-IP>
      .then((res) => setMalls(res.data))
      .catch((err) => console.error("Failed to fetch malls:", err));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <HeaderBar mallName="Explore Malls" />
      <ScrollView style={{ padding: 15 }}>
        {malls.map((mall) => (
          <TouchableOpacity
            key={mall.id}
            onPress={() => router.push(`/mall/${mall.mall_id}`)}
            style={styles.card}
          >
            <Text style={styles.name}>{mall.name}</Text>
            <Text style={styles.details}>📍 {mall.location}</Text>
            <Text style={styles.details}>🛍️ Stores: {mall.store_count}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
});
