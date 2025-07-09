import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import SearchBar from '../../components/search-bar';
import QuestionCard from '../../components/question-card';
import StoreCard from '@/components/store-card';
import ThemeToggle from '@/components/theme-toggle';
import { getColors } from '@/constants/Colors';
import { useTheme } from '@/providers/theme-provider';

export default function Search() {
  const [query, setQuery] = useState('');
  const { theme } = useTheme();
  const colors = getColors(theme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* 🌗 Theme toggle button */}
      <ThemeToggle />

      {/* 🔎 Search bar */}
      <SearchBar
        value={query}
        onChangeText={setQuery}
        onSubmit={() => console.log('Search:', query)}
        onClear={() => setQuery('')}
      />

      {/* ❓ Question card */}
      <QuestionCard
        question="Have you passed KFC?"
        onYes={() => console.log('User said YES')}
        onNo={() => console.log('User said NO')}
      />

      {/* 🏬 Store cards */}
      <StoreCard
        name="KFC"
        hours="10:00 AM - 10:00 PM"
        category="Fast Food"
        floor="1"
      />
      <StoreCard
        name="Nanas"
        hours="00:00 AM - 00:00 PM"
        category="Fast Food"
        floor="1"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
