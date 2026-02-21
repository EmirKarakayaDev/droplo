/**
 * Droplo — Notification Utilities
 * Expo Notifications kurulum ve helper fonksiyonları
 */

import * as Notifications from "expo-notifications";
import { SchedulableTriggerInputTypes } from "expo-notifications";
import { Platform } from "react-native";

/**
 * Bildirim görünüm ayarları — uygulama ön plandayken de alert göster
 * shouldShowAlert deprecated → shouldShowBanner + shouldShowList kullan
 */
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,   // Dropdown / banner bildirimi
        shouldShowList: true,   // Bildirim merkezinde listele
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

/**
 * Push bildirim izni ister ve Expo Push Token döner.
 * Fiziksel cihazda çalışır, simulatörde token alınamaz.
 */
export async function registerForPushNotifications(): Promise<string | null> {
    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#0ea5e9", // sky-500
        });
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }

    if (finalStatus !== "granted") {
        console.warn("[Notifications] Push notification permission denied.");
        return null;
    }

    try {
        const tokenData = await Notifications.getExpoPushTokenAsync();
        console.log("[Notifications] Expo Push Token:", tokenData.data);
        return tokenData.data;
    } catch (error) {
        console.error("[Notifications] Token alınamadı:", error);
        return null;
    }
}

/**
 * Lokal bildirim gönder (test ve offline kullanım için)
 * @param delaySeconds 0 ise anında gönderilir (trigger: null),
 *                     > 0 ise TIME_INTERVAL ile zamanlanır.
 */
export async function sendLocalNotification(
    title: string,
    body: string,
    delaySeconds = 0
): Promise<void> {
    await Notifications.scheduleNotificationAsync({
        content: { title, body, sound: true },
        trigger:
            delaySeconds > 0
                ? {
                    type: SchedulableTriggerInputTypes.TIME_INTERVAL,
                    seconds: delaySeconds,
                    repeats: false,
                }
                : null, // null = hemen gönder
    });
}
