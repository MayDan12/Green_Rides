import { Zap } from "lucide-react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#10B981" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        {/* App Logo */}
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: "rgba(255,255,255,0.2)",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
            borderWidth: 4,
            borderColor: "rgba(255,255,255,0.3)",
          }}
        >
          <Zap size={60} color="#FFFFFF" />
        </View>

        {/* App Name */}
        <Text
          style={{
            fontSize: 42,
            fontWeight: "800",
            color: "#FFFFFF",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          GreenRide
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Eco-Friendly Rides
        </Text>

        {/* Loading Indicator */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FFFFFF",
              opacity: 0.8,
            }}
          />
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FFFFFF",
              opacity: 0.6,
            }}
          />
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#FFFFFF",
              opacity: 0.4,
            }}
          />
        </View>

        {/* Footer */}
        <Text
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
          }}
        >
          Making every ride greener 🌱
        </Text>
      </View>
    </SafeAreaView>
  );
}
