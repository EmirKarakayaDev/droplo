import { StatusBar } from "expo-status-bar";
import { View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WaterCard } from "../components/WaterCard";
import { MOCK_WATERS } from "../constants/mockData";

const { height } = Dimensions.get("window");

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-sky-50" edges={["top", "bottom"]}>
            <StatusBar style="dark" />

            <View className="flex-1 items-center justify-center">
                {/* For now, just show the first card to test the animation */}
                {MOCK_WATERS[0] ? (
                    <WaterCard water={MOCK_WATERS[0]} />
                ) : null}
            </View>
        </SafeAreaView>
    );
}
