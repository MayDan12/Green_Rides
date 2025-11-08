import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function Splash() {
  const router = useRouter();
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/"), 1800);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View
      className={`flex-1 items-center justify-center ${theme.colors.background}`}
    >
      <Image
        source={require("../assets/images/react-logo.png")}
        className="w-32 h-32"
      />
    </View>
  );
}
