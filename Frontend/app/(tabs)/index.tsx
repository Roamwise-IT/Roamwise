import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../../components/ui/HeaderBar";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import axios from "axios";

// 🌐 Use API base URL from config
const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

export default function HomeScreen() {
  const router = useRouter();
  const [malls, setMalls] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!API_BASE_URL) {
      console.error("❌ API_BASE_URL not set in app config.");
      setError("Missing API configuration.");
      return;
    }

    axios
      .get(`${API_BASE_URL}/api/malls`)
      .then((res) => {
        setMalls(res.data || []);
        setError("");
      })
      .catch((err) => {
        console.error("❌ Failed to fetch malls:", err);
        setError("Failed to fetch malls.");
      });
  }, []);

  const openNavLink = async (url?: string) => {
    if (!url) {
      Alert.alert("Navigation", "No navigation link available.");
      return;
    }
    try {
      const supported = await Linking.canOpenURL(url);
      await Linking.openURL(supported ? url : String(url));
    } catch {
      Alert.alert("Navigation", "Could not open Google Maps.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <HeaderBar mallName="Know where you're going" />

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <ScrollView style={{ padding: 15 }}>
          {malls.map((mall) => (
            <View key={mall.mall_id} style={styles.card}>
              {/* Tapping THIS area → stores page, send mall name too */}
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: `/mall/${mall.mall_id}`,
                    params: {
                      mall_id: mall.mall_id,
                      mall_name: mall.name,
                    },
                  })
                }
              >
                <Text style={styles.name}>{mall.name}</Text>
                <Text style={styles.details}>Description: {mall.description}</Text>
              </TouchableOpacity>

              {/* Separate button → navigation only */}
              <TouchableOpacity
                style={styles.goNowButton}
                onPress={() => openNavLink(mall.nav_link)}
              >
                <Text style={styles.goNowText}>Go Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  details: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
  },
  goNowButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  goNowText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
