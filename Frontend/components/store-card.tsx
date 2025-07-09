import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  name: string;
  hours: string;
  category: string;
  floor: string;
};

export default function StoreCard({ name, hours, category, floor }: Props) {
  return (
    <View style={styles.card}>
      {/* 🏬 Title row */}
      <View style={styles.row}>
        <Text style={styles.storeName}>{name}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.floorText}>Floor Level: {floor}</Text>
      </View>

      {/* ⏰ Hours row */}
      <View style={styles.row}>
        <Ionicons name="time" size={14} color="#444" style={styles.icon} />
        <Text style={styles.hours}>Open | {hours}</Text>
      </View>

      {/* 🔖 Promo / Recommendation section */}
      <Text style={styles.placeholder}>
        PLACEHOLDER: RECOMMENDATIONS/ PROMOS/ DISCOUNTS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
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
    color: '#999',
    marginHorizontal: 4,
  },
  category: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  floorText: {
    marginLeft: 'auto',
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
  },
  icon: {
    marginRight: 4,
  },
  hours: {
    fontSize: 13,
    color: '#444',
  },
  placeholder: {
    marginTop: 8,
    fontSize: 13,
    color: '#888',
    fontStyle: 'italic',
  },
});
