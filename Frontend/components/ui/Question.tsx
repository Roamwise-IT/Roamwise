import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Question() {
  return (
    <View
      style={{
        backgroundColor: "#222",
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>
        HAVE YOU PASSED KFC?
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#B00000",
            padding: 10,
            borderRadius: 8,
            marginRight: 10,
          }}
        >
          <Ionicons name="close" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#00A300",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Ionicons name="checkmark" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
