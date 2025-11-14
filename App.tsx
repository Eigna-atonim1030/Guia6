import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FAB from "./src/components/FAB";
import { useCounter } from "./src/hooks/useCounter";

const B = [
  { label: "-1", pos: "left", bg: "#EF4444", act: "onDecrement" },
  { label: "+1", pos: "right", bg: "#22C55E", act: "onIncrement" },
  { label: "Reiniciar contador", pos: "center", bg: "#3B82F6", act: "onReset" },
] as const;

export default function App() {
  const { count: c, history: h, onIncrement: i, onDecrement: d, onReset: r, onLongPressReset: l } = useCounter();
  const a = { onIncrement: i, onDecrement: d, onReset: r };

  return (
    <View style={s.c}>
      <Text style={s.n}>{c}</Text>
      <View style={s.h}>
        <Text style={s.t}>Historial</Text>
        <ScrollView style={s.s}>{h.map((v, i) => <Text key={i} style={s.i}>{v}</Text>)}</ScrollView>
      </View>
      {B.map(({ label, pos, bg, act }) => <FAB key={pos} label={label} position={pos} onPress={a[act]} onLongPress={l} backgroundColor={bg} textColor="#FFF" />)}
      <StatusBar style="auto" />
    </View>
  );
}

const s = StyleSheet.create({
  c: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", paddingHorizontal: 16 },
  n: { fontSize: 96, fontWeight: "bold", color: "#000" },
  h: { marginTop: 24, width: "80%", maxHeight: 160, borderRadius: 12, backgroundColor: "#fff", padding: 8, elevation: 2 },
  t: { fontWeight: "600", marginBottom: 4, color: "#374151" },
  s: { borderTopWidth: 1, borderTopColor: "#E5E7EB", paddingTop: 4 },
  i: { fontSize: 14, color: "#4B5563" },
});