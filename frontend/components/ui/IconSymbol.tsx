import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

export type IconSymbolName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

/**
 * A simple Material Icons wrapper to maintain consistency across the app.
 * Directly uses Material Icons without mapping to SF Symbols.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
}) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}
