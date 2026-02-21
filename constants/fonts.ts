/**
 * Droplo — Font Definitions
 * DM Mono is used for a "laboratory report" aesthetic.
 */

export const FontFamily = {
    // DM Mono — Ana font (Monospace)
    regular: "DMMono_400Regular",
    medium: "DMMono_500Medium",

    // Fallbacks
    system: "System",
    mono: "monospace",
} as const;

export const FontSize = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
} as const;

export const LineHeight = {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
} as const;

export type FontFamilyKey = keyof typeof FontFamily;
export type FontSizeKey = keyof typeof FontSize;
