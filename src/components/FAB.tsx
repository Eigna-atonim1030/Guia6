import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function FAB({ label, position = "right", onPress, onLongPress, backgroundColor, textColor }: {
  label: string;
  position?: "left" | "right" | "center";
  onPress?: any;
  onLongPress?: any;
  backgroundColor?: string;
  textColor?: string;
}) {
  const p = { left: s.l, right: s.r, center: s.c };
  return (
    <Pressable style={({ pressed }) => [s.b, p[position], backgroundColor && { backgroundColor }, pressed && { opacity: 0.7 }]} onPress={onPress} onLongPress={onLongPress}>
      <Text style={[s.t, textColor && { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  b: { position: "absolute", bottom: 30, backgroundColor: "#007AFF", borderRadius: 16, paddingVertical: 12, paddingHorizontal: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6, elevation: 5, minWidth: 60, alignItems: "center", justifyContent: "center" },
  r: { right: 24 },
  l: { left: 24 },
  c: { alignSelf: "center", left: "50%", transform: [{ translateX: -75 }], minWidth: 150 },
  t: { color: "white", fontSize: 18, fontWeight: "600", textAlign: "center" },
});