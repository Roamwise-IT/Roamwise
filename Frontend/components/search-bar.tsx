import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const SearchBar = () => {
  const [text, setText] = useState("");

  const onChangeText = (text: string) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});

export default SearchBar;
