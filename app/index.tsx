import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, Dimensions } from "react-native";
import { WaterCard } from "../components/WaterCard";
import { MOCK_WATERS } from "../constants/mockData";

const { height } = Dimensions.get("window");

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-sky-50">
            <StatusBar style="dark" />

            <View className="flex-1 items-center justify-center">
                {/* For now, just show the first card to test the animation */}
                <WaterCard water={MOCK_WATERS[0]} />
            </View>
        </SafeAreaView>
    );
}
