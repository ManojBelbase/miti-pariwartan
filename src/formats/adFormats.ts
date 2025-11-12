// src/formats/adFormats.ts

// Supported patterns (order matters – most specific first)
export const AD_PATTERNS = [
    /^\d{4}-\d{1,2}-\d{1,2}$/,     // yyyy-MM-dd
    /^\d{4}\.\d{1,2}\.\d{1,2}$/,   // yyyy.MM.dd
    /^\d{1,2}\/\d{1,2}\/\d{4}$/,   // dd/MM/yyyy
    /^\d{1,2}-\d{1,2}-\d{4}$/,     // MM-dd-yyyy
] as const;

export function parseADString(input: string): Date | null {
    const str = input.trim();

    // 1. Try exact patterns
    for (const regex of AD_PATTERNS) {
        if (regex.test(str)) {
            const isoLike = str.replace(/[./]/g, '-');
            const d = new Date(isoLike + "T00:00:00Z");
            if (!Number.isNaN(d.getTime())) return d;
        }
    }

    // 2. Fallback: let browser/Node parse anything else
    const fallback = new Date(str);
    return Number.isNaN(fallback.getTime()) ? null : fallback;
}