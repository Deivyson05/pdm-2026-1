import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StaggeredText } from "@/components/ui/organisms/staggered-text";
import { useRouter } from "expo-router";

const TEXTS: string[] = [
  "Iniciando...",
  "Feito_com_Reactix",
  "By_Deivyson",
];

export default function Index(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);

  const navigation = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000);

    setTimeout(() => {
      navigation.push("/home");
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <View className="h-screen justify-center">
      <StaggeredText
        texts={TEXTS}
        activeIndex={index}
        fontSize={35}
        color="#ffffff"
        letterSpacing={0.5}
        staggerFrom="leading"
      />
    </View>
  );
}
