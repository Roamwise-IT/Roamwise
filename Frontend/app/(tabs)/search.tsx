import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

interface Mall {
  mall_id: string;
  name: string;
  description: string;
}

export default function SearchScreen() {
  const [malls, setMalls] = useState<Mall[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/malls/")
      .then((res) => setMalls(res.data))
      .catch((err) => console.error("Error fetching malls:", err));
  }, []);

  const filtered = malls.filter((mall) =>
    mall.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.wrapper}
    >
      {/* 🔴 Search bar at top */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search malls..."
          placeholderTextColor="#fff"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {filtered.map((mall) => (
          <Pressable
            key={mall.mall_id}
            onPress={() => router.push(`/mall/${mall.mall_id}`)}
            style={styles.mallCard}
          >
            <Text style={styles.mallName}>{mall.name}</Text>
            <Text style={styles.mallDesc}>{mall.description}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchContainer: {
    backgroundColor: "#B00000",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "ios" ? 60 : 20,
    paddingBottom: 12,
  },
  searchInput: {
    backgroundColor: "#B00000",
    color: "#fff",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#8B0000",
    paddingVertical: 8,
  },
  scrollContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  mallCard: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  mallName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  mallDesc: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 4,
  },
});
