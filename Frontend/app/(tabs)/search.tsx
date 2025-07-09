import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../../components/search-bar"; // ✅ Adjusted import

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        value={query}
        onChangeText={setQuery}
        onSubmit={() => console.log("Search:", query)}
        onClear={() => setQuery("")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3", // light grey background like your screenshot
  },
});
