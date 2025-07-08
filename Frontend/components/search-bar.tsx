import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search stores..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity>
        <MaterialCommunityIcons name="magnify" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setText("")}>
        <MaterialCommunityIcons name="close" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    flex: 1, // crucial to stretch within headerTitle wrapper
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default SearchBar;
