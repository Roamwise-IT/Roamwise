import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Tabs backBehavior="history">
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#ff7800" },
          tabBarIcon: ({ color }: { color: string }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#ff7800",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false, // ✅ Hide default header
          tabBarActiveTintColor: "#ff7800",
          tabBarIcon: ({ color }: { color: string }) => (
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
