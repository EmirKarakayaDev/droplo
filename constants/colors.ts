/**
 * Droplo — Color Palette & Semantic Tokens
 * Sky mavi primary teması
 */

export const Sky = {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",  // Brand primary
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
} as const;

export const Slate = {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
} as const;

export const Colors = {
    // Brand
    primary: Sky[500],
    primaryLight: Sky[400],
    primaryDark: Sky[700],
    primarySurface: Sky[50],

    // Backgrounds
    bgPrimary: "#ffffff",
    bgSecondary: Sky[50],
    bgCard: "#ffffff",

    // Text
    textPrimary: Sky[900],
    textSecondary: Sky[700],
    textMuted: Slate[500],
    textInverse: "#ffffff",

    // Borders
    border: Sky[200],
    borderStrong: Sky[300],

    // Semantic
    success: "#22c55e",  // green-500
    warning: "#f59e0b",  // amber-500
    error: "#ef4444",  // red-500
    info: Sky[500],

    // Utils
    white: "#ffffff",
    black: "#000000",
    transparent: "transparent",
} as const;

export type ColorKey = keyof typeof Colors;
