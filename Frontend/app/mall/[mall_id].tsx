import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import Constants from "expo-constants";
import axios from "axios";
import StoreCard from "../../components/ui/StoreCard";

// 🌐 Base URL from app.config.js
const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

export default function MallDetailsScreen() {
  const { mall_id } = useLocalSearchParams();
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!mall_id) {
      console.warn("❗ mall_id is missing from route params");
      setError("Mall ID is missing. Cannot fetch stores.");
      return;
    }

    if (!API_BASE_URL) {
      console.error("❌ API_BASE_URL is not set in Constants");
      setError("Internal error: API URL not configured.");
      return;
    }

    console.log("📦 mall_id received:", mall_id);

    axios
      .get(`${API_BASE_URL}/api/malls/${mall_id}/stores`)
      .then((res) => {
        console.log("✅ Stores fetched:", res.data);
        setStores(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("❌ Error fetching stores:", err);
        setError("Failed to fetch stores.");
      });
  }, [mall_id]);

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search stores..."
        placeholderTextColor="#eee"
        value={search}
        onChangeText={setSearch}
      />

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <ScrollView contentContainerStyle={{ padding: 15 }}>
          {filteredStores.length > 0 ? (
            filteredStores.map((store) => (
              <StoreCard key={store.store_id} store={store} />
            ))
          ) : (
            <Text style={styles.noStores}>No stores found.</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchBar: {
    backgroundColor: "#B00000",
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 15,
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
  noStores: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
});
