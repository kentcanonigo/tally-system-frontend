import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import ApiTester from "./apitester";

export default function categorySetter() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>You are in the Category Setter page</Text>
    </View>
  );
}
