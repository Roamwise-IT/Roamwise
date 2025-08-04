import React, { useEffect, useState } from "react";
import { View, ScrollView, TextInput, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import StoreCard from "../../components/ui/StoreCard";

export default function MallDetailsScreen() {
  const { mall_id } = useLocalSearchParams();
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/stores/by-mall/${mall_id}`)
      .then(res => setStores(res.data))
      .catch(err => console.error("Error fetching stores:", err));
  }, [mall_id]);

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar at Top */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search stores..."
        placeholderTextColor="#eee"
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView contentContainerStyle={{ padding: 15 }}>
        {filteredStores.map((store) => (
          <StoreCard key={store.store_id} store={store} />
        ))}
      </ScrollView>
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
});
