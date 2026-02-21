import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center bg-sky-50">
            <StatusBar style="dark" />

            {/* Droplo splash placeholder */}
            <View className="items-center gap-4">
                {/* Logo Circle */}
                <View className="w-24 h-24 rounded-full bg-sky-500 items-center justify-center shadow-lg">
                    <Text className="text-white text-4xl font-bold">💧</Text>
                </View>

                {/* App Name */}
                <Text
                    className="text-sky-900 text-5xl tracking-tighter"
                    style={{ fontFamily: "DMMono_500Medium" }}
                >
                    droplo
                </Text>

                <Text
                    className="text-sky-600 text-sm text-center px-8 uppercase tracking-widest"
                    style={{ fontFamily: "DMMono_400Regular" }}
                >
                    Water Quality Analysis Report
                </Text>

                <View className="mt-8 p-4 border border-sky-200 bg-white rounded-lg shadow-sm w-64">
                    <Text className="text-sky-400 text-[10px] uppercase font-bold tracking-widest mb-2" style={{ fontFamily: "DMMono_500Medium" }}>
                        Sample Data
                    </Text>
                    <View className="flex-row justify-between border-b border-sky-100 py-2">
                        <Text className="text-sky-700 text-xs" style={{ fontFamily: "DMMono_400Regular" }}>pH Level</Text>
                        <Text className="text-sky-900 text-xs font-bold" style={{ fontFamily: "DMMono_500Medium" }}>7.42</Text>
                    </View>
                    <View className="flex-row justify-between py-2">
                        <Text className="text-sky-700 text-xs" style={{ fontFamily: "DMMono_400Regular" }}>TDS (mg/L)</Text>
                        <Text className="text-sky-900 text-xs font-bold" style={{ fontFamily: "DMMono_500Medium" }}>128</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
