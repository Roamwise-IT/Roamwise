import SearchBar from "@/components/search-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs backBehavior="history">
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#ff7800" },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#ff7800",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerStyle: { backgroundColor: "#ff7800", height: 100 }, // increase header height
          headerTitle: () => (
            <View style={{ flex: 1, paddingRight: 10 }}>
              <SearchBar />
            </View>
          ), // override default title with SearchBar
          tabBarActiveTintColor: "#ff7800",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="store-search"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
