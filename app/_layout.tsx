import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    useFonts,
    DMMono_400Regular,
    DMMono_500Medium,
} from "@expo-google-fonts/dm-mono";

import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native"; // Added View import

export default function RootLayout() {
    const [loaded, error] = useFonts({
        DMMono_400Regular,
        DMMono_500Medium,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync().catch(() => {
                /* ignore */
            });
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: { backgroundColor: "#f0f9ff" }, // sky-50
                    }}
                >
                    <Stack.Screen name="index" />
                </Stack>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}
