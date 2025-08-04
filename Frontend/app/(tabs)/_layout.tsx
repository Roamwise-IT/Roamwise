import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors, darkTheme, spacing, margins, padding, borderRadius, borderWidth, sizes, fontFamilies, fontSizes, fontWeights, lineHeights } from "../../constraints";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
        backgroundColor:darkTheme.nav.background, // Grey background for the strip
      borderColor:  darkTheme.header.background, // Red line
      borderTopWidth: 	borderWidth.thick,
      borderLeftWidth: 	borderWidth.thin,
      borderRightWidth: 	borderWidth.thin,
      borderTopLeftRadius: borderRadius.default,
      borderTopRightRadius: borderRadius.default,
      margin: spacing.edgePull,
      height: 75,   
      paddingTop: padding.xs, 
      position: "absolute", //  for proper radius

    },
        tabBarActiveTintColor: darkTheme.nav.activeTint,
        tabBarInactiveTintColor: darkTheme.nav.inactiveTint,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
