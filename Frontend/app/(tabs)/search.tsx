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
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

interface Mall {
  mall_id: string;
  name: string;
  description: string;
}

const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

export default function SearchScreen() {
  const [malls, setMalls] = useState<Mall[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!API_BASE_URL) {
      console.error("❌ API_BASE_URL is not defined in app config.");
      return;
    }

    axios
      .get(`${API_BASE_URL}/api/malls`)
      .then((res) => setMalls(res.data))
      .catch((err) => console.error("❌ Error fetching malls:", err));
  }, []);

  const filtered = malls.filter((mall) =>
    mall.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.wrapper}
      >
        {/* 🔍 Search Bar */}
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
          {filtered.length > 0 ? (
            filtered.map((mall) => (
              <Pressable
                key={mall.mall_id}
                onPress={() => router.push(`/mall/${mall.mall_id}`)}
                style={styles.mallCard}
              >
                <Text style={styles.mallName}>{mall.name}</Text>
                <Text style={styles.mallDesc}>{mall.description}</Text>
              </Pressable>
            ))
          ) : (
            <Text style={styles.noResults}>No malls found.</Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchContainer: {
    backgroundColor: "#B00000",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "ios" ? 10 : 20,
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
  noResults: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
});
