import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);

  useEffect(() => {
    setHistory((p) => p[p.length - 1] !== count ? [...p, count] : p);
  }, [count]);

  const m = (d: number) => () => setCount((p) => {
    const n = p + d;
    return n < 0 ? 0 : n > 20 ? 20 : n;
  });
  
  const r = () => setCount(0);
  const cr = () => Alert.alert("Reiniciar contador", "¿Seguro que quieres reiniciar el contador a 0?", [{ text: "Cancelar", style: "cancel" }, { text: "Reiniciar", onPress: r }]);

  return { count, history, onIncrement: m(1), onDecrement: m(-1), onReset: r, onLongPressReset: cr };
};