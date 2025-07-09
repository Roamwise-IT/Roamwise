import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit?: () => void;
  onClear?: () => void;
};

export default function SearchBar({ value, onChangeText, onSubmit, onClear }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        {/* 🔍 Search Icon */}
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={{ marginRight: 8 }}
        />

        {/* 🔤 Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#000"
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
        />

        {/* ❌ Clear Icon */}
        {value.length > 0 && (
          <TouchableOpacity onPress={onClear}>
            <Ionicons name="close" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f97316',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: '100%',
    maxWidth: 500, // looks better on web
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingRight: 10,
    paddingVertical: 0,
  },
});
