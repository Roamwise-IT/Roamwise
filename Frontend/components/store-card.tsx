import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/providers/theme-provider';
import { getColors } from '@/constants/Colors';

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
    <View style={[styles.card, { backgroundColor: colors.background, shadowColor: colors.text }]}>
      {/* 🏬 Title row */}
      <View style={styles.row}>
        <Text style={[styles.storeName, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.separator, { color: colors.text }]}>|</Text>
        <Text style={[styles.category, { color: colors.text }]}>{category}</Text>
        <Text style={[styles.floorText, { color: colors.text }]}>Floor Level: {floor}</Text>
      </View>

      {/* ⏰ Hours row */}
      <View style={styles.row}>
        <Ionicons name="time" size={14} color={colors.text} style={styles.icon} />
        <Text style={[styles.hours, { color: colors.text }]}>Open | {hours}</Text>
      </View>

      {/* 🔖 Promo / Recommendation section */}
      <Text style={[styles.placeholder, { color: colors.icon }]}>
        PLACEHOLDER: RECOMMENDATIONS/ PROMOS/ DISCOUNTS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  storeName: {
    fontSize: 15,
    fontWeight: '700',
    marginRight: 6,
  },
  separator: {
    fontSize: 14,
    marginHorizontal: 4,
  },
  category: {
    fontSize: 14,
    fontWeight: '500',
  },
  floorText: {
    marginLeft: 'auto',
    fontSize: 12,
    fontWeight: '500',
  },
  icon: {
    marginRight: 4,
  },
  hours: {
    fontSize: 13,
  },
  placeholder: {
    marginTop: 8,
    fontSize: 13,
    fontStyle: 'italic',
  },
});
