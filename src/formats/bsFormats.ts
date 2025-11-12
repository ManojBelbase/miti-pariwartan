
const BS_PATTERNS = [
    /^\d{4}-\d{1,2}-\d{1,2}$/,      // 2082-07-26
    /^\d{4}\/\d{1,2}\/\d{1,2}$/,     // 2082/07/26
    /^\d{4}\.\d{1,2}\.\d{1,2}$/,     // 2082.07.26
    /^\d{4}\s+\d{1,2}\s+\d{1,2}$/,   // 2082 07 26
] as const;

/**
 * Parse a BS string → { year, month, day } (all numbers)
 * Returns `null` if unparseable.
 */
export function parseBSString(input: string):
    | { year: number; month: number; day: number }
    | null {
    const str = input.trim();

    for (const regex of BS_PATTERNS) {
        if (regex.test(str)) {
            // Replace any separator with a single space, then split
            const cleaned = str.replace(/[-\/.]/g, " ");
            const parts = cleaned.split(/\s+/).map(Number);

            if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
                const [y, m, d] = parts;
                return { year: y, month: m, day: d };
            }
        }
    }

    return null;
}