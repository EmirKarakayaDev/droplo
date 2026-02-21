/**
 * Droplo — WaterBrand Data Model
 * Su markası için temel veri tipi.
 */

export type WaterBrand = {
    /** Firestore döküman ID'si */
    id: string;

    /** Marka adı (ör: "Evian", "Saf", "Damla") */
    name: string;

    /** Ülke — ISO 3166-1 alpha-2 (ör: "TR", "FR", "US") */
    country: string;

    /** Ülke bayrağı emoji (ör: "🇹🇷") */
    flagEmoji?: string;

    /** pH değeri (genellikle 6.5 – 8.5 arası) */
    ph: number;

    /** TDS — Toplam Çözünmüş Katı (mg/L) */
    tds: number;

    /** Kaynak türü */
    sourceType: "spring" | "mineral" | "purified" | "artesian" | "glacial";

    /** Marka logo URL'si (Firebase Storage veya CDN) */
    logoUrl?: string;

    /** Marka cover/kapak fotoğrafı URL'si */
    coverUrl?: string;

    /** Beğeni sayısı */
    likes: number;

    /** Bu kullanıcı beğendi mi? (client-side, Firestore'dan hesaplanır) */
    isLikedByUser?: boolean;

    /** Ortalama kullanıcı puanı (0–5) */
    rating?: number;

    /** Kaç kullanıcı puan verdi */
    ratingCount?: number;

    /** Şişe fiyatı (opsiyonel, yerel para birimi) */
    price?: number;

    /** Para birimi kodu (ör: "TRY", "EUR") */
    currency?: string;

    /** Mineraller (mg/L değerleriyle) */
    minerals?: {
        calcium?: number;     // Ca
        magnesium?: number;   // Mg
        sodium?: number;      // Na
        potassium?: number;   // K
        bicarbonate?: number; // HCO₃
        fluoride?: number;    // F
        sulfate?: number;     // SO₄
        chloride?: number;    // Cl
    };

    /** Yaratılma zamanı (Firestore Timestamp → JS Date) */
    createdAt: Date;

    /** Son güncelleme zamanı */
    updatedAt?: Date;
};

/** Yeni marka oluştururken kullanılan tip (id ve createdAt otomatik) */
export type NewWaterBrand = Omit<WaterBrand, "id" | "createdAt" | "likes"> & {
    likes?: number;
};

/** Liste/kart görünümü için hafif tip */
export type WaterBrandSummary = Pick<
    WaterBrand,
    | "id"
    | "name"
    | "country"
    | "flagEmoji"
    | "ph"
    | "tds"
    | "sourceType"
    | "logoUrl"
    | "likes"
    | "isLikedByUser"
    | "rating"
    | "ratingCount"
>;

/** pH kalitesi etiketi */
export function getPhLabel(ph: number): "acidic" | "neutral" | "alkaline" {
    if (ph < 7) return "acidic";
    if (ph === 7) return "neutral";
    return "alkaline";
}

/** TDS kalitesi etiketi */
export function getTdsLabel(tds: number): "low" | "medium" | "high" {
    if (tds < 100) return "low";
    if (tds < 500) return "medium";
    return "high";
}
