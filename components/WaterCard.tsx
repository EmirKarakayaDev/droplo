import React from "react";
import { View, Text, Pressable, Dimensions, ScrollView } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolation,
} from "react-native-reanimated";
import { WaterBrand } from "../types/water";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = CARD_WIDTH * 1.5;

interface WaterCardProps {
    water: WaterBrand;
}

export const WaterCard: React.FC<WaterCardProps> = ({ water }) => {
    const spin = useSharedValue(0);

    const flipCard = () => {
        spin.value = withTiming(spin.value === 0 ? 1 : 0, { duration: 600 });
    };

    const frontAnimatedStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(spin.value, [0, 1], [0, 180]);
        return {
            transform: [
                { perspective: 1000 },
                { rotateY: `${rotateValue}deg` }
            ],
            backfaceVisibility: "hidden",
        };
    });

    const backAnimatedStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(spin.value, [0, 1], [180, 360]);
        return {
            transform: [
                { perspective: 1000 },
                { rotateY: `${rotateValue}deg` }
            ],
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backfaceVisibility: "hidden",
        };
    });

    return (
        <Pressable onPress={flipCard} className="items-center justify-center">
            <View
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                className="shadow-2xl shadow-sky-900/20 rounded-3xl"
            >
                {/* FRONT FACE */}
                <Animated.View
                    style={[frontAnimatedStyle]}
                    className="w-full h-full bg-white rounded-3xl overflow-hidden border border-sky-100"
                >
                    {/* Header Info */}
                    <View className="px-8 py-6 flex-1 justify-between">
                        <View className="flex-row justify-between items-start">
                            <View>
                                <Text className="text-sky-400 text-[10px] uppercase tracking-[4px] font-bold" style={{ fontFamily: "DMMono_500Medium" }}>
                                    Origin
                                </Text>
                                <Text className="text-sky-900 text-lg" style={{ fontFamily: "DMMono_500Medium" }}>
                                    {water.country} {water.flagEmoji}
                                </Text>
                            </View>
                            <View className="bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                                <Text className="text-sky-500 text-[10px] uppercase font-bold" style={{ fontFamily: "DMMono_500Medium" }}>
                                    {water.sourceType}
                                </Text>
                            </View>
                        </View>

                        {/* Main Brand Name */}
                        <View>
                            <Text
                                className="text-sky-900 text-6xl tracking-tighter"
                                style={{
                                    fontFamily: "DMMono_500Medium",
                                    lineHeight: 72, // Slightly increased
                                    paddingBottom: 4, // Safety for descenders
                                }}
                            >
                                {water.name.toLowerCase()}
                            </Text>
                            <View className="h-1 w-12 bg-sky-500" />
                        </View>

                        {/* Big pH Indicator */}
                        <View className="flex-row items-end">
                            <View>
                                <Text className="text-sky-400 text-[10px] uppercase tracking-[4px] font-bold" style={{ fontFamily: "DMMono_500Medium" }}>
                                    Alkalinity
                                </Text>
                                <Text className="text-sky-900 text-7xl leading-[70px]" style={{ fontFamily: "DMMono_500Medium" }}>
                                    {water.ph.toFixed(1)}
                                </Text>
                            </View>
                            <Text className="text-sky-300 text-xl ml-2 mb-2" style={{ fontFamily: "DMMono_400Regular" }}>
                                pH
                            </Text>
                        </View>
                    </View>

                    {/* Bottom Footer */}
                    <View className="bg-sky-500 p-6 flex-row justify-between items-center">
                        <Text className="text-white text-[10px] uppercase tracking-widest font-bold" style={{ fontFamily: "DMMono_500Medium" }}>
                            Detailed Analysis
                        </Text>
                        <Text className="text-white text-xs" style={{ fontFamily: "DMMono_400Regular" }}>
                            Tap to Flip ⟳
                        </Text>
                    </View>
                </Animated.View>

                {/* BACK FACE */}
                <Animated.View
                    style={[backAnimatedStyle]}
                    className="w-full h-full bg-sky-900 rounded-3xl overflow-hidden border border-sky-800"
                >
                    <View className="px-8 py-6 flex-1">
                        <Text className="text-sky-400 text-[10px] uppercase tracking-[6px] font-bold mb-4" style={{ fontFamily: "DMMono_500Medium" }}>
                            Chemical Composition
                        </Text>

                        {/* TDS Highlight */}
                        <View className="mb-6">
                            <Text className="text-sky-300 text-[10px] uppercase font-bold" style={{ fontFamily: "DMMono_400Regular" }}>
                                TDS (Total Dissolved Solids)
                            </Text>
                            <View className="flex-row items-baseline">
                                <Text
                                    className="text-white text-5xl pt-1"
                                    style={{ fontFamily: "DMMono_500Medium", lineHeight: 54 }}
                                >
                                    {water.tds}
                                </Text>
                                <Text className="text-sky-300 text-lg ml-2" style={{ fontFamily: "DMMono_400Regular" }}>
                                    mg/L
                                </Text>
                            </View>
                        </View>

                        {/* Mineral List - "Lab Report" Style */}
                        <View className="mb-2">
                            <Text className="text-sky-500 text-[10px] uppercase font-bold mb-2" style={{ fontFamily: "DMMono_500Medium" }}>
                                Mineral Content
                            </Text>
                            {Object.entries(water.minerals || {}).map(([key, value]) => {
                                if (value === undefined || value === null) return null;
                                return (
                                    <View key={key} className="flex-row justify-between py-1.5 border-b border-sky-800/50">
                                        <Text className="text-sky-300 text-xs capitalize" style={{ fontFamily: "DMMono_400Regular" }}>
                                            {key}
                                        </Text>
                                        <Text className="text-white text-xs font-bold" style={{ fontFamily: "DMMono_500Medium" }}>
                                            {(value as number).toFixed(1)} <Text className="text-[8px] text-sky-400">mg/L</Text>
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>

                        {/* Spacer to push BIO down */}
                        <View className="flex-1" />

                        {/* Certification / Footer */}
                        <View className="mt-4 flex-row items-center opacity-50">
                            <View className="w-8 h-8 rounded-full border border-sky-400 items-center justify-center mr-3">
                                <Text className="text-sky-400 text-[8px] font-bold">BIO</Text>
                            </View>
                            <Text className="text-sky-400 text-[8px] uppercase tracking-widest leading-3" style={{ fontFamily: "DMMono_400Regular" }}>
                                Analysis certified by{"\n"}Droplo Water Labs
                            </Text>
                        </View>
                    </View>

                    {/* Bottom Footer Back */}
                    <View className="bg-sky-400 p-6 flex-row justify-between items-center">
                        <Text className="text-white text-[10px] uppercase tracking-widest font-bold" style={{ fontFamily: "DMMono_500Medium" }}>
                            Security Report #8081
                        </Text>
                    </View>
                </Animated.View>
            </View>
        </Pressable>
    );
};
