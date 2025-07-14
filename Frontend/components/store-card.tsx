import { getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useTheme } from "@/providers/theme-provider";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  hours: string;
  category: string;
  floor: string;
};

export default function StoreCard({ name, hours, category, floor }: Props) {
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, shadowColor: colors.text },
      ]}
    >
      <View style={styles.row}>
        <Text style={[styles.storeName, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.separator, { color: colors.subtext }]}>|</Text>
        <Text style={[styles.category, { color: colors.subtext }]}>
          {category}
        </Text>
        <Text style={[styles.floorText, { color: colors.subtext }]}>
          Floor Level: {floor}
        </Text>
      </View>

      <View style={styles.row}>
        <Ionicons
          name="time"
          size={14}
          color={colors.subtext}
          style={styles.icon}
        />
        <Text style={[styles.hours, { color: colors.subtext }]}>
          Open | {hours}
        </Text>
      </View>

      <Text style={[styles.placeholder, { color: colors.placeholder }]}>
        PLACEHOLDER: RECOMMENDATIONS/ PROMOS/ DISCOUNTS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Spacing.xxl,
    marginVertical: Spacing.md,
    marginHorizontal: Spacing.xl,
    borderRadius: 12,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: Spacing.sm,
  },
  storeName: {
    fontSize: 15,
    fontWeight: "700",
    marginRight: Spacing.md,
  },
  separator: {
    fontSize: 14,
    marginHorizontal: Spacing.sm,
  },
  category: {
    fontSize: 14,
    fontWeight: "500",
  },
  floorText: {
    marginLeft: "auto",
    fontSize: 12,
    fontWeight: "500",
  },
  icon: {
    marginRight: Spacing.sm,
  },
  hours: {
    fontSize: 13,
  },
  placeholder: {
    marginTop: Spacing.sm,
    fontSize: 13,
    fontStyle: "italic",
  },
});
