import { getColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useTheme } from "@/providers/theme-provider";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  question: string;
  onYes: () => void;
  onNo: () => void;
};

export default function QuestionCard({ question, onYes, onNo }: Props) {
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
        <MaterialCommunityIcons
          name="arrow-right-bold"
          size={20}
          color={colors.tint}
          style={styles.icon}
        />
        <Text style={[styles.questionText, { color: colors.text }]}>
          {question}
        </Text>
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
    padding: Spacing.huge,
    marginTop: Spacing.xl,
    marginHorizontal: Spacing.xl,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: Spacing.md,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttonRow: {
    marginLeft: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "30%",
  },
  iconBtn: {
    padding: Spacing.sm,
  },
});
