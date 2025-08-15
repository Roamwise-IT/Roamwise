// StoreCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StoreCard({ store }) {
  const openTime = store?.hours?.open || "09:00";
  const closeTime = store?.hours?.close || "17:00";

  // Parse store hours into Date objects for today
  const now = new Date();
  const [openH, openM] = openTime.split(":").map(Number);
  const [closeH, closeM] = closeTime.split(":").map(Number);

  const openDate = new Date();
  openDate.setHours(openH, openM, 0, 0);

  const closeDate = new Date();
  closeDate.setHours(closeH, closeM, 0, 0);

  // Determine if store is open
  const isOpen = now >= openDate && now <= closeDate;

  return (
    <View style={styles.card}>
      {/* Top row: left (name + hours/floor) and right (category) */}
      <View style={styles.topRow}>
        <View style={styles.leftCol}>
          <Text style={styles.name} numberOfLines={1}>
            {store?.name || "STORE_ID"}
          </Text>
          <Text style={styles.meta} numberOfLines={1}>
            <Text style={{ color: isOpen ? "#4CAF50" : "#FF5252" }}>
              {isOpen ? "Open" : "Closed"}
            </Text>{" "}
            | {openTime} - {closeTime} | Floor Level: {store?.floor ?? "—"}
          </Text>
        </View>

        <Text style={styles.category} numberOfLines={1}>
          {store?.category || "CATEGORY"}
        </Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#575757",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
    marginVertical: 8,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  leftCol: {
    flexShrink: 1,
    paddingRight: 8,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  meta: {
    fontSize: 12,
    marginTop: 2,
    opacity: 0.95,
    color: "#EDEDED", // fixed color for rest of text
  },
  category: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.3,
    maxWidth: "45%",
    textAlign: "right",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    gap: 10,
  },
  iconBlock: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#57C7FF",
  },
  recommendations: {
    color: "#DDDDDD",
    fontSize: 12,
    flex: 1,
  },
});
