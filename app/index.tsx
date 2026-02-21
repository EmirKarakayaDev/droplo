import { StatusBar } from "expo-status-bar";
import { FlatList, View, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WaterCard } from "../components/WaterCard";
import { MOCK_WATERS } from "../constants/mockData";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function Home() {
    const insets = useSafeAreaInsets();

    // Calculate the actual visible height for each card item
    const ITEM_HEIGHT = SCREEN_HEIGHT;

    return (
        <View className="flex-1 bg-sky-50">
            <StatusBar style="dark" />

            <FlatList
                data={MOCK_WATERS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{ height: ITEM_HEIGHT }}
                        className="items-center justify-center"
                    >
                        <WaterCard water={item} />
                    </View>
                )}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={ITEM_HEIGHT}
                snapToAlignment="start"
            />
        </View>
    );
}
