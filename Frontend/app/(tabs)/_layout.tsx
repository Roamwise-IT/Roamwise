import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

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
        name="settings"
        options={{
          title: "Settings",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#ff7800" },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" size={24} color={color} />
          ),
          tabBarActiveTintColor: "#ff7800",
        }}
      />
    </Tabs>
  );
}
