import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  question: string;
  onYes: () => void;
  onNo: () => void;
};

export default function QuestionCard({ question, onYes, onNo }: Props) {
  return (
    <View style={styles.card}>
      {/* Row with arrow + question + buttons */}
      <View style={styles.row}>
        {/* Right-turn arrow icon */}
        <MaterialCommunityIcons
          name="arrow-right-bold" // ✅ Valid icon
          size={20}
          color="#f97316"
          style={{ marginRight: 8 }}
        />

        {/* Question text */}
        <Text style={styles.questionText}>{question}</Text>

        {/* Yes / No buttons aligned right */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={onYes} style={styles.iconBtn}>
            <Ionicons name="checkmark-circle" size={32} color="green" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onNo} style={styles.iconBtn}>
            <Ionicons name="close-circle" size={32} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 12, // 🧪 You can re-enable this if spacing looks tight
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonRow: {
    marginLeft: 'auto', // ✅ Pushes buttons to the right
    // marginRight: 5, // 🧪 Optional fine-tuning
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%', // Adjust width as needed
  },
  iconBtn: {
    padding: 5,
  },
});
